import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import rateLimit from "express-rate-limit";
import User, { userInfo, profileInfo } from "../models/User.js";
import checkLogin from "../middleware/checkLogin.js";
import { text, sendError } from "../helper.js";

const router = express.Router();

// login kitne din tak chalega
const LOGIN_DAYS = 7;

// ek IP se 15 minute me bhut zayada try ho to rok do (password guess karne se bachav)
const tooManyTries = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: process.env.NODE_ENV === "test" ? 1000 : 20,
    message: { success: false, message: "Too many attempts. Please try again in a few minutes." },
});

// login token banata hai, cookie me rakhta hai aur jawab bhejta hai.
// signup, login aur change-password teeno me yahi use hota hai.
function sendLoginResponse(res, user, status, message) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: `${LOGIN_DAYS}d` });

    res.cookie("cv_token", token, {
        httpOnly: true, // js se cookies padhi nhi ja skati
        secure: process.env.NODE_ENV === "production", // live site par sirf HTTPS
        sameSite: "lax",
        maxAge: LOGIN_DAYS * 24 * 60 * 60 * 1000,
    });

    res.status(status).json({
        success: true,
        message,
        user: userInfo(user),
        profile: profileInfo(user),
        token,
    });
}

// Email ka simple format check
function isEmail(email) {
    return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// POST /api/auth/register { name, email, password }
router.post("/register", tooManyTries, async (req, res) => {
    const name = text(req.body.name);
    const email = text(req.body.email).toLowerCase();
    const password = typeof req.body.password === "string" ? req.body.password : "";

    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    else if (!isEmail(email)) errors.email = "Please enter valid email address.";
    if (!password) errors.password = "Password is required";
    else if (password.length < 6) errors.password = "Password must be at least 6 characters.";
    else if (password.length > 72) errors.password = "Password is too long (maximum 72 characters).";

    if (Object.keys(errors).length > 0) {
        return sendError(res, 400, Object.values(errors)[0], errors);
    }

    const existing = await User.findOne({ email });
    if (existing) {
        return sendError(res, 409, "Email already registered. Please login.", {
            email: "Email already registered. Please login.",
        });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash });

    sendLoginResponse(res, user, 201, `Welcome ${user.name} 🎉`);
});

// POST /api/auth/login { email, password }
router.post("/login", tooManyTries, async (req, res) => {
    const email = text(req.body.email).toLowerCase();
    const password = typeof req.body.password === "string" ? req.body.password : "";

    const errors = {};
    if (!email) errors.email = "Email is required";
    else if (!isEmail(email)) errors.email = "Please enter valid email address.";
    if (!password) errors.password = "Password is required";

    if (Object.keys(errors).length > 0) {
        return sendError(res, 400, Object.values(errors)[0], errors);
    }

    // passwordHash normally query me nhi aata, isliye "+passwordHash" se mangwate hai.
    const user = await User.findOne({ email }).select("+passwordHash");

    // Email galat ho ya password galat, dono me same message
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
        return sendError(res, 401, "Invalid email or password.", { password: "Invalid email or password." });
    }

    sendLoginResponse(res, user, 200, `Welcome back ${user.name} 👋`);
});

// GET /api/auth/me  -> abhi login user ki info
router.get("/me", checkLogin, async (req, res) => {
    const user = await User.findById(req.user.id);

    if (!user) {
        return sendError(res, 401, "User not found. Please login again.");
    }

    res.json({
        success: true,
        user: userInfo(user),
        profile: profileInfo(user),
    });
});

// POST /api/auth/logout
router.post("/logout", (req, res) => {
    res.clearCookie("cv_token");
    res.json({ success: true, message: "You have been logged out.👋" });
});

// PUT /api/auth/change-password
router.put("/change-password", tooManyTries, checkLogin, async (req, res) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmPassword) {
        return sendError(res, 400, "All fields are required.");
    }
    if (typeof currentPassword !== "string" || typeof newPassword !== "string") {
        return sendError(res, 400, "Invalid password value.");
    }
    if (newPassword.length < 6) {
        return sendError(res, 400, "New password must be at least 6 characters.");
    }
    if (newPassword.length > 72) {
        return sendError(res, 400, "New password is too long (maximum 72 characters).");
    }
    if (newPassword !== confirmPassword) {
        return sendError(res, 400, "New passwords do not match.");
    }

    const user = await User.findById(req.user.id).select("+passwordHash");

    // Purana password sahi hai?
    if (!(await bcrypt.compare(currentPassword, user.passwordHash))) {
        return sendError(res, 400, "Current password is incorrect.");
    }

    user.passwordHash = await bcrypt.hash(newPassword, 10);
    await user.save();

    sendLoginResponse(res, user, 200, "Password changed successfully! 🔐");
});

export default router;

import express from "express";
import checkLogin from "../middleware/checkLogin.js";
import { text, sendError } from "../helper.js";
import User, { profileInfo } from "../models/User.js";

const router = express.Router();

// Profile photo ka maximum size (MB mein)
const MAX_PHOTO_MB = 5;

// Saare profile routes ke liye login zaroori hai
router.use(checkLogin);

// GET /api/profile  -> logged-in user ki profile details + photo
// photo schema mein select:false hai, isliye checkLogin wale req.user mein nahi aata -
// yahan explicitly "+photo" se dobara mangwaya jata hai.
router.get("/", async (req, res) => {
    const user = await User.findById(req.user.id).select("+photo");

    if (!user) {
        return sendError(res, 401, "User not found. Please login again.");
    }

    res.json({
        success: true,
        profile: profileInfo(user),
        photo: user.photo || null,
    });
});

// PUT /api/profile  -> Home.jsx aur MyProfile.jsx (edit modal) se aayi details save karta hai
// { name, className, stream, percentage, interest, budget }
router.put("/", async (req, res) => {
    const name = text(req.body.name);
    const className = text(req.body.className);
    const stream = text(req.body.stream);
    const percentage = text(req.body.percentage);
    const interest = text(req.body.interest);
    const budget = text(req.body.budget);

    if (name) req.user.name = name.slice(0, 80);
    if (className) req.user.className = className;
    if (stream) req.user.stream = stream;
    if (percentage) req.user.percentage = percentage;
    // Model mein field ka naam "intrest" hai (typo), isliye yahan map karte hain
    if (interest) req.user.intrest = interest;
    if (budget) req.user.budget = budget;

    await req.user.save();

    res.json({
        success: true,
        message: "Profile updated.",
        profile: profileInfo(req.user),
    });
});

router.put("/photo", async (req, res) => {
    const photo = req.body.photo;

    // sirf image chalegi (PNG, JPG, WEBP, GIF).
    if (typeof photo !== "string" || !/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(photo)) {
        return sendError(res, 400, "Please select an image (PNG, JPG, WEBP, GIF).");
    }

    // base64 text asli file se ~33% bada hota hai, isliye 3/4 se asli size nikalte hain.
    const sizeInBytes = (photo.length * 3) / 4;
    if (sizeInBytes > MAX_PHOTO_MB * 1024 * 1024) {
        return sendError(res, 413, `Image is too large (maximum ${MAX_PHOTO_MB}MB).`);
    }

    req.user.photo = photo;
    await req.user.save();

    res.json({ success: true, message: "Profile picture updated! 📸", photo });
});

export default router;
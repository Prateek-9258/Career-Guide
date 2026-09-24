// middleware/checkLogin.js  --  "Kya ye user logged in hai?" check karta hai.
// Jis route me ye laga ho, wahan sirf logged-in user hi ghus sakta hai.
// Sahi hone par user ka data req.user me mil jata hai.

import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { sendError } from "../helper.js";

export default async function checkLogin(req, res, next) {
    // login token cookie me hota hai
    const token = req.cookies.cv_token || (req.headers.authorization || "").replace("Bearer ", "");

    if (!token) {
        return sendError(res, 401, "Please log in to continue.");
    }

    try {
        // galat/expired token par error aata hai
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(id);

        if (!user) {
            return sendError(res, 401, "Your session has expired. Please log in again");
        }

        req.user = user; // aage ke routes ab req.user use kar skte hai
        next();
    } catch {
        sendError(res, 401, "Invalid token. Please log in again.");
    }
}

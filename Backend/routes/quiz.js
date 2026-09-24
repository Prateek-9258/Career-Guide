import express from "express";
import checkLogin from "../middleware/checkLogin.js";
import { text, sendError } from "../helper.js";

const router = express.Router();

router.use(checkLogin);
// POST /api/quiz
// { career, icon, score, answers: [...], results: [{ name, icon, score }, ...] }
// career/icon/score = sabse achha match (My Profile me yahi dikhta hai)

router.post("/", async (req, res) => {
    const career = text(req.body.career).slice(0, 120);
    const score = Number(req.body.score);

    if (!career) {
        return sendError(res, 400, "Career name is required.");
    }
    if (isNaN(score) || score < 0 || score > 100) {
        return sendError(res, 400, "Valid score is required.");
    }

    // Quiz me chune gaye answer (max 20)
    const answers = Array.isArray(req.body.answers)
        ? req.body.answers.slice(0, 20).map((a) => text(a).slice(0, 100))
        : [];

    // Baki careers ki list
    const topCareers = Array.isArray(req.body.results)
        ? req.body.results.slice(0, 10).map((item) => ({
              name: text(item?.name).slice(0, 120),
              icon: text(item?.icon).slice(0, 16),
              score: Number(item?.score),
          }))
        : [];

    req.user.quizResult = {
        career,
        icon: text(req.body.icon).slice(0, 16),
        score: Math.round(score),
        answers,
        topCareers,
        savedAt: new Date(),
    };
    await req.user.save();

    res.status(201).json({ success: true, message: "Quiz result saved.", quizResult: req.user.quizResult });
});

// GET /api/quiz/latest   -->  { quizResult }  (quiz nahi diya to null)
router.get("/latest", (req, res) => {
    res.json({ success: true, quizResult: req.user.quizResult || null });
});

export default router;
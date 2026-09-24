import express from "express";
import checkLogin from "../middleware/checkLogin.js";
import { sendError } from "../helper.js";

const router = express.Router();

router.use(checkLogin); // login zaroori

// GET /api/favorites 

router.get("/", (req,res)=>{
    res.json({success: true, favorites:req.user.favorites})
});

//PUT /api/favorites
// poori list ek sath badal deta hai 

router.put("/", async (req,res)=>{
    const list=req.body.favorites;

    if(!Array.isArray(list)){
        return sendError(res, 400, " Favorites must be an array.");
    }
    if(list.length > 1000){
        return sendError(res, 400, "You can save at most 1000 favorites. ")
    }
    if(!list.every((item)=> typeof item==="string"&& item.length>0 && item.length <=300)){
        return sendError(res, 400, "Each favorite must be a non-empty text value.")
    }
    req.user.favorites= [...new Set(list)]; // set duplicate hata deta hai 
    await req.user.save();

    res.json({success:true, favorites: req.user.favorites});
})

export default router;
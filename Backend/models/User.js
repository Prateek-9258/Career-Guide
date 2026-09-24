// models/User.js  --  MongoDB me ek user ka data kaisa dikhega.
// (Pehle ye sab browser ke localStorage me tha.)

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        //-----Account-----
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, lowercase: true, trim: true },
        // passward kabhi seedha save nhi hota, sirf uska "hash" (bcrypt)save hota hai.
        // select:false ka matlab: query me ye field apne app nhi aati
        passwordHash: { type: String, required: true, select: false },

        //----Profile ---

        className: { type: String, default: "" },
        stream: { type: String, default: "" },
        // frontend isse text ki tarah rakhta hai
        percentage: { type: String, default: "" },
        // NOTE: DB field ka naam "intrest" hi rakha hai (purana naam, data migration se bachne ke liye).
        // API response mein ye "interest" (sahi spelling) ke naam se bhejte hain - dekho profileInfo() neeche.
        intrest: { type: String, default: "" },
        budget: { type: String, default: "" },

        //Profile photo (badi hoti hai, isliye select:false jab chiye tab hi mangwate hai)

        photo: { type: String, default: null, select: false },

        // pasand kiye hue colleges,
        favorites: { type: [String], default: [] },

        // Quiz ka latest result
        // mixed= koi bhi object, quiz nhi diya tho null.
        quizResult: { type: mongoose.Schema.Types.Mixed, default: null },
    },
    // createdAt aur updateAt apne app ban jate hai
    { timestamps: true }
);

// frontend ko user ki basic info bhejne ke liye (password nahi)
export function userInfo(user) {
    return { id: user.id, name: user.name, email: user.email };
}

// frontend ko profile bhejne ke liye
// NOTE: DB field "intrest" hai, lekin frontend "interest" (sahi spelling) expect karta hai -
// isliye yahan key ka naam badal kar bhejte hain.
export function profileInfo(user) {
    return {
        name: user.name,
        className: user.className,
        stream: user.stream,
        percentage: user.percentage,
        interest: user.intrest,
        budget: user.budget,
    };
}

export default mongoose.model("User", userSchema);
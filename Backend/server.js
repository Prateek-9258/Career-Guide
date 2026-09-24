
// ============================================================
// server.js
// Backend server yahin se start hota hai.
//
// Is file mein 4 main kaam hote hain:
// 1. .env ki settings check karna
// 2. Express app aur middleware setup karna
// 3. API routes add karna
// 4. MongoDB connect karke server start karna
// ============================================================


// .env file ki settings load karo
import "dotenv/config";
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
// Required packages
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";


// API routes
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import quizRoutes from "./routes/quiz.js";
import favoritesRoutes from "./routes/favorites.js";


// Error response helper
import { sendError } from "./helper.js";


// ============================================================
// 1. BASIC SETTINGS
// ============================================================


// Server ka port
// Agar .env mein PORT nahi hai to 5000 use hoga
const PORT = process.env.PORT || 5000;


// Check karo ki server production mein hai ya nahi
const isProduction = process.env.NODE_ENV === "production";


// MongoDB connection URL
const uri = process.env.MONGODB_URI?.replace(
  "<db_password>",
  encodeURIComponent(process.env.MONGODB_PASSWORD || "")
);


// ============================================================
// MongoDB URL check
// ============================================================

if (
  !uri ||
  uri.includes("<username>") ||
  uri.includes("<password>")
) {

  console.error(
    "❌ .env mein MONGODB_URI nahi mila."
  );

  console.error(
    "backend/.env.example ko .env naam se copy karke MongoDB URL add karo."
  );

  // Program stop karo
  process.exit(1);
}


// ============================================================
// JWT Secret check
// ============================================================

if (!process.env.JWT_SECRET) {

  console.error(
    "❌ .env mein JWT_SECRET nahi mila."
  );

  console.error(
    ".env.example se JWT_SECRET add karo."
  );

  process.exit(1);
}


// Production mein default development secret use nahi karna
if (
  isProduction &&
  process.env.JWT_SECRET.startsWith("dev-")
) {

  console.error(
    "❌ Production mein JWT_SECRET change karna zaroori hai."
  );

  process.exit(1);
}


// ============================================================
// 2. EXPRESS APP SETUP
// ============================================================


// Express application create karo
const app = express();


// Production mein proxy ke peeche real IP lene ke liye
if (isProduction) {
  app.set("trust proxy", 1);
}


// Security ke liye Helmet use karo
app.use(helmet());


// Frontend ko backend API access karne ki permission
app.use(
  cors({
    origin:
      process.env.CLIENT_URL ||
      "http://localhost:5173",

    // Cookies allow karo
    credentials: true,
  })
);


// Cookies read karne ke liye
app.use(cookieParser());


// ============================================================
// JSON DATA SETUP
// ============================================================


// Profile photo ke liye 8 MB limit
// Kyunki photo ka data bada ho sakta hai
app.use(
  "/api/profile/photo",
  express.json({
    limit: "8mb",
  })
);


// Baaki normal requests ke liye 100 KB limit
app.use(
  express.json({
    limit: "100kb",
  })
);


// Agar request mein body nahi hai,
// to empty object use hoga
app.use((req, res, next) => {

  req.body = req.body || {};

  next();
});


// ============================================================
// 3. API ROUTES
// ============================================================


// Health check route
// Isse check kar sakte hain ki server aur database
// properly connected hain ya nahi
app.get("/api/health", (req, res) => {

  // MongoDB readyState 1 = connected
  const connected =
    mongoose.connection.readyState === 1;


  // Connected hai to 200
  // Connected nahi hai to 503
  res.status(
    connected ? 200 : 503
  ).json({

    status:
      connected ? "ok" : "degraded",

    database:
      connected ? "connected" : "disconnected",
  });
});


// Login / Signup ke routes
app.use(
  "/api/auth",
  authRoutes
);


// Profile ke routes
app.use(
  "/api/profile",
  profileRoutes
);


// Quiz ke routes
app.use(
  "/api/quiz",
  quizRoutes
);


// Favorites ke routes
app.use(
  "/api/favorites",
  favoritesRoutes
);


// ============================================================
// Agar API route nahi mila
// ============================================================

app.use("/api", (req, res) => {

  sendError(
    res,
    404,
    `Route not found: ${req.method} ${req.originalUrl}`
  );

});


// ============================================================
// ERROR HANDLER
// ============================================================


// Server ke errors yahan handle hote hain
app.use((error, req, res, _next) => {


  // Request bahut badi hai
  if (error.type === "entity.too.large") {

    return sendError(
      res,
      413,
      "The request is too large."
    );

  }


  // JSON galat format mein hai
  if (error.type === "entity.parse.failed") {

    return sendError(
      res,
      400,
      "Invalid JSON in request body."
    );

  }


  // Email already database mein hai
  if (error.code === 11000) {

    return sendError(
      res,
      409,
      "Email already registered. Please login.",
      {
        email:
          "Email already registered. Please login.",
      }
    );

  }


  // Unknown error console mein show karo
  console.error(error);


  // User ko simple error message bhejo
  sendError(
    res,
    500,
    "Something went wrong on the server."
  );

});


// ============================================================
// 4. MONGODB CONNECT + SERVER START
// ============================================================


try {

  // MongoDB se connect karo
  await mongoose.connect(uri, {

    // Database ka naam
    dbName:
      process.env.DB_NAME ||
      "career-vision",

    // 10 seconds tak MongoDB ko connect hone ka wait
    serverSelectionTimeoutMS: 10000,
  });


  // MongoDB successfully connected
  console.log("✅ MongoDB connected");


  // MongoDB connect hone ke baad server start karo
  app.listen(PORT, () => {

    console.log(
      `✅ Server Start : http://localhost:${PORT}`
    );

  });


} catch (error) {


  // MongoDB connection fail hone par error
  console.error(
    "❌ MongoDB se connect nahi ho paya:",
    error.message
  );


  // Common solutions
  console.error(
    "   - .env mein username/password check karo."
  );

  console.error(
    "   - MongoDB Atlas mein apna IP address allow karo."
  );


  // Program stop karo
  process.exit(1);
}

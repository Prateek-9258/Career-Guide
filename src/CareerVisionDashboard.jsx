import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";

export default function CareerVisionDashboard() {
  const [search, setSearch] = useState("");
  const [userName, setUserName] = useState("Explorer");

  useEffect(() => {
    try {
      const savedName = localStorage.getItem("cv_name");
      const savedUser = JSON.parse(
        localStorage.getItem("cv_user") || "{}"
      );

      setUserName(savedName || savedUser?.name || "Explorer");
    } catch {
      setUserName("Explorer");
    }
  }, []);

  const careerCards = [
    {
      icon: "💻",
      title: "IT & Technology",
      description: "Software Developer, AI Engineer",
      keywords:
        "it software developer coding programmer ai engineer technology computer web",
    },
    {
      icon: "🩺",
      title: "Medical",
      description: "Doctor, Nurse, Pharmacist",
      keywords:
        "medical doctor mbbs nurse hospital health pharmacy neet",
    },
    {
      icon: "🏦",
      title: "Banking",
      description: "Bank PO, Clerk, Finance",
      keywords:
        "bank banking po clerk finance sbi ibps rbi",
    },
    {
      icon: "👨‍💼",
      title: "Government Jobs",
      description: "SSC, UPSC, Railway",
      keywords:
        "government sarkari ssc upsc railway police govt job",
    },
    {
      icon: "⚖️",
      title: "Law",
      description: "Lawyer, Judge, Legal Advisor",
      keywords:
        "law lawyer judge llb court vakil clat legal",
    },
    {
      icon: "🌾",
      title: "Agriculture",
      description: "Agriculture Officer, Scientist",
      keywords:
        "agriculture kheti farmer bsc agri icar officer scientist",
    },
  ];

  const courseCards = [
    {
      icon: "💻",
      title: "Computer Applications",
      description: "BCA, B.Sc IT",
      keywords:
        "bca bsc it computer applications software programming",
    },
    {
      icon: "⚙️",
      title: "Engineering",
      description: "B.Tech, Diploma",
      keywords:
        "engineering btech diploma engineer technology",
    },
    {
      icon: "📊",
      title: "Business",
      description: "BBA, MBA",
      keywords:
        "business bba mba management entrepreneur",
    },
    {
      icon: "💰",
      title: "Commerce",
      description: "B.Com, CA",
      keywords:
        "commerce bcom ca accountant finance",
    },
    {
      icon: "🏥",
      title: "Medical",
      description: "MBBS, Nursing",
      keywords:
        "medical mbbs nursing doctor hospital",
    },
    {
      icon: "⚖️",
      title: "Law",
      description: "LLB, CLAT",
      keywords:
        "law llb clat lawyer legal",
    },
    {
      icon: "🌾",
      title: "Agriculture",
      description: "B.Sc Agriculture",
      keywords:
        "agriculture bsc agri farmer agriculture officer",
    },
    {
      icon: "💊",
      title: "Pharmacy",
      description: "B.Pharma",
      keywords:
        "pharmacy bpharma medicine pharmacist drugs",
    },
  ];

  const normalizedSearch = search.toLowerCase().trim();

  const matchesSearch = (item) => {
    if (!normalizedSearch) return true;

    const text =
      item.title +
      " " +
      item.description +
      " " +
      item.keywords;

    return text.toLowerCase().includes(normalizedSearch);
  };

  const filteredCareers = careerCards.filter(matchesSearch);
  const filteredCourses = courseCards.filter(matchesSearch);

  const goTo = (path) => {
    window.location.href = path;
  };

  const handleSearch = () => {
    const results = document.getElementById("search-results");

    if (results) {
      results.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="career-page">

      <style>{`

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #030615;
          color: white;
          overflow-x: hidden;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        /* =========================================
           MAIN PAGE
        ========================================= */

        .career-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(0, 229, 255, 0.13),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 15%,
              rgba(168, 85, 247, 0.16),
              transparent 30%
            ),
            radial-gradient(
              circle at 50% 70%,
              rgba(59, 130, 246, 0.07),
              transparent 35%
            ),
            #030615;
        }

        .career-page::before {
          content: "";
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(0,229,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0,229,255,0.025) 1px,
              transparent 1px
            );

          background-size: 55px 55px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 90%
            );

          pointer-events: none;
        }

        /* =========================================
           FLOATING ORBS
        ========================================= */

        .orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(2px);
          z-index: 0;
        }

        .orb-one {
          width: 180px;
          height: 180px;
          left: -70px;
          top: 500px;

          background: rgba(0,229,255,0.12);

          box-shadow:
            0 0 100px rgba(0,229,255,0.18);

          animation: orbMoveOne 9s ease-in-out infinite;
        }

        .orb-two {
          width: 230px;
          height: 230px;
          right: -100px;
          top: 900px;

          background: rgba(168,85,247,0.12);

          box-shadow:
            0 0 120px rgba(168,85,247,0.2);

          animation: orbMoveTwo 11s ease-in-out infinite;
        }

        @keyframes orbMoveOne {
          0%,100% {
            transform: translate(0,0);
          }

          50% {
            transform: translate(80px,-60px);
          }
        }

        @keyframes orbMoveTwo {
          0%,100% {
            transform: translate(0,0);
          }

          50% {
            transform: translate(-80px,70px);
          }
        }

        /* =========================================
           STARS
        ========================================= */

        .star {
          position: absolute;
          width: 3px;
          height: 3px;

          border-radius: 50%;

          background: white;

          opacity: 0.25;

          pointer-events: none;

          animation:
            twinkle 3.5s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%,100% {
            opacity: 0.12;
            transform: scale(0.7);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.6);
          }
        }

        /* =========================================
           HERO
        ========================================= */

        .hero-section {
          position: relative;
          z-index: 2;

          max-width: 1450px;

          min-height: 680px;

          margin: auto;

          padding: 70px 5% 80px;

          display: grid;

          grid-template-columns:
            1fr 1fr;

          align-items: center;

          gap: 50px;
        }

        .hero-content {
          position: relative;
          z-index: 5;
        }

        .welcome-tag {
          display: inline-flex;

          padding: 9px 17px;

          border-radius: 40px;

          color: #00e5ff;

          background:
            rgba(0,229,255,0.06);

          border:
            1px solid rgba(0,229,255,0.25);

          box-shadow:
            0 0 25px rgba(0,229,255,0.08);

          margin-bottom: 22px;

          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.7px;

          animation:
            fadeUp 0.8s ease;
        }

        .hero-content h1 {
          max-width: 750px;

          font-size:
            clamp(40px, 5.3vw, 70px);

          line-height: 1.08;

          font-weight: 950;

          letter-spacing: -2px;

          animation:
            fadeUp 1s ease;
        }

        .hero-content h1 span {
          background:
            linear-gradient(
              90deg,
              #00e5ff,
              #6d5dfc,
              #a855f7,
              #ff4ecd
            );

          background-size: 250% auto;

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          animation:
            textGradient 5s linear infinite;
        }

        @keyframes textGradient {
          to {
            background-position: 250% center;
          }
        }

        .hero-content p {
          max-width: 650px;

          margin: 24px 0 30px;

          color: #9aa9ca;

          font-size: 16px;

          line-height: 1.8;

          animation:
            fadeUp 1.2s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =========================================
           BUTTONS
        ========================================= */

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;

          gap: 14px;

          margin-bottom: 28px;

          animation:
            fadeUp 1.35s ease;
        }

        .btn {
          position: relative;

          border: none;

          padding: 15px 27px;

          border-radius: 50px;

          font-size: 14px;
          font-weight: 900;

          cursor: pointer;

          overflow: hidden;

          transition:
            transform 0.35s,
            box-shadow 0.35s;
        }

        .btn::before {
          content: "";

          position: absolute;

          top: 0;
          left: -100%;

          width: 70%;
          height: 100%;

          background:
            linear-gradient(
              110deg,
              transparent,
              rgba(255,255,255,0.5),
              transparent
            );

          transform: skewX(-20deg);

          transition: 0.7s;
        }

        .btn:hover::before {
          left: 140%;
        }

        .btn-primary {
          color: #061022;

          background:
            linear-gradient(
              100deg,
              #00e5ff,
              #6d5dfc,
              #a855f7
            );

          box-shadow:
            0 10px 35px rgba(0,229,255,0.18);
        }

        .btn-primary:hover {
          transform:
            translateY(-5px)
            scale(1.03);

          box-shadow:
            0 18px 45px rgba(0,229,255,0.25),
            0 0 30px rgba(168,85,247,0.15);
        }

        .btn-secondary {
          color: white;

          background:
            rgba(255,255,255,0.055);

          border:
            1px solid rgba(255,255,255,0.16);

          backdrop-filter: blur(12px);
        }

        .btn-secondary:hover {
          transform:
            translateY(-5px);

          border-color: #00e5ff;

          background:
            rgba(0,229,255,0.08);

          box-shadow:
            0 12px 35px rgba(0,229,255,0.1);
        }

        /* =========================================
           SEARCH
        ========================================= */

        .search-box {
          position: relative;

          display: flex;

          max-width: 590px;

          background:
            rgba(255,255,255,0.045);

          border:
            1px solid rgba(168,85,247,0.5);

          border-radius: 16px;

          overflow: hidden;

          box-shadow:
            inset 0 0 25px rgba(0,229,255,0.025);

          backdrop-filter: blur(15px);

          animation:
            fadeUp 1.5s ease;

          transition: 0.35s;
        }

        .search-box:focus-within {
          border-color: #00e5ff;

          box-shadow:
            0 0 35px rgba(0,229,255,0.12),
            inset 0 0 25px rgba(0,229,255,0.04);
        }

        .search-box input {
          flex: 1;

          min-width: 0;

          padding: 16px 18px;

          color: white;

          background: transparent;

          border: none;
          outline: none;

          font-size: 14px;
        }

        .search-box input::placeholder {
          color: #687797;
        }

        .search-box button {
          width: 62px;

          border: none;

          color: white;

          cursor: pointer;

          font-size: 18px;

          background:
            linear-gradient(
              135deg,
              #6d28d9,
              #a855f7
            );

          transition: 0.3s;
        }

        .search-box button:hover {
          background:
            linear-gradient(
              135deg,
              #00bcd4,
              #7c3aed
            );

          box-shadow:
            0 0 25px rgba(0,229,255,0.2);
        }

        /* =========================================
           HERO 3D IMAGE
        ========================================= */

        .hero-image {
          position: relative;

          height: 560px;

          display: flex;

          align-items: center;
          justify-content: center;

          perspective: 1000px;
        }

        .hero-image::before {
          content: "";

          position: absolute;

          width: 75%;
          height: 75%;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(0,229,255,0.3),
              rgba(168,85,247,0.18),
              transparent 70%
            );

          filter: blur(35px);

          animation:
            heroGlow 4s ease-in-out infinite alternate;
        }

        .hero-image::after {
          content: "";

          position: absolute;

          width: 78%;
          height: 78%;

          border-radius: 50%;

          border:
            1px solid rgba(0,229,255,0.2);

          box-shadow:
            0 0 35px rgba(0,229,255,0.05);

          animation:
            ringRotate 15s linear infinite;
        }

        @keyframes heroGlow {
          from {
            transform: scale(0.88);
            opacity: 0.5;
          }

          to {
            transform: scale(1.12);
            opacity: 1;
          }
        }

        @keyframes ringRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .hero-image img {
          position: relative;
          z-index: 3;

          width: min(100%, 520px);

          max-height: 520px;

          object-fit: contain;

          filter:
            drop-shadow(
              0 20px 30px rgba(0,0,0,0.35)
            )
            drop-shadow(
              0 0 25px rgba(0,229,255,0.45)
            )
            drop-shadow(
              0 0 55px rgba(168,85,247,0.25)
            );

          animation:
            imageFloat 5s ease-in-out infinite;
        }

        @keyframes imageFloat {
          0%,100% {
            transform:
              translateY(0)
              rotateX(0deg)
              rotateY(0deg);
          }

          50% {
            transform:
              translateY(-18px)
              rotateX(2deg)
              rotateY(-3deg);
          }
        }

        /* =========================================
           QUICK ACCESS
        ========================================= */

        .welcome-cards {
          position: relative;
          z-index: 5;

          max-width: 1400px;

          margin: 0 auto 80px;

          padding: 0 5%;

          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 20px;
        }

        .w-card {
          position: relative;

          min-height: 155px;

          padding: 23px;

          color: white;

          text-decoration: none;

          border-radius: 20px;

          border:
            1px solid rgba(255,255,255,0.1);

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.08),
              rgba(255,255,255,0.025)
            );

          box-shadow:
            inset 0 1px rgba(255,255,255,0.08),
            0 15px 40px rgba(0,0,0,0.15);

          backdrop-filter: blur(18px);

          overflow: hidden;

          transition:
            transform 0.45s,
            border-color 0.45s,
            box-shadow 0.45s;

          animation:
            cardRise 0.8s ease both;
        }

        .w-card::before {
          content: "";

          position: absolute;

          width: 140px;
          height: 140px;

          right: -70px;
          bottom: -70px;

          border-radius: 50%;

          background:
            rgba(0,229,255,0.1);

          filter: blur(20px);

          transition: 0.5s;
        }

        .w-card:hover::before {
          transform: scale(1.7);
        }

        .w-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .w-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .w-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .w-card:nth-child(4) {
          animation-delay: 0.4s;
        }

        @keyframes cardRise {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .w-card:hover {
          transform:
            translateY(-10px)
            perspective(700px)
            rotateX(2deg)
            rotateY(-2deg);

          border-color:
            rgba(0,229,255,0.55);

          box-shadow:
            0 25px 55px rgba(0,229,255,0.12),
            inset 0 1px rgba(255,255,255,0.12);
        }

        .welcome-row {
          display: flex;

          gap: 13px;

          align-items: center;
        }

        .welcome-icon {
          width: 52px;
          height: 52px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 15px;

          font-size: 22px;

          box-shadow:
            0 10px 25px rgba(0,0,0,0.2);

          transition:
            transform 0.6s,
            box-shadow 0.4s;
        }

        .w-card:hover .welcome-icon {
          transform:
            rotateY(180deg)
            scale(1.08);

          box-shadow:
            0 0 25px rgba(0,229,255,0.2);
        }

        .w-card h3 {
          font-size: 16px;
          margin-bottom: 5px;
        }

        .w-card p {
          color: #8e9fc4;
          font-size: 12px;
        }

        .explore-text {
          display: block;

          margin-top: 19px;

          color: #00e5ff;

          font-size: 12px;
          font-weight: 800;

          transition: 0.3s;
        }

        .w-card:hover .explore-text {
          letter-spacing: 0.5px;
        }

        /* =========================================
           SECTION
        ========================================= */

        .section {
          position: relative;
          z-index: 3;

          max-width: 1400px;

          margin: 0 auto;

          padding: 45px 5% 90px;
        }

        .section-heading {
          text-align: center;

          margin-bottom: 42px;
        }

        .section-heading h2 {
          font-size:
            clamp(30px,4vw,47px);

          font-weight: 950;

          letter-spacing: -1px;

          margin-bottom: 11px;
        }

        .section-heading h2 span {
          background:
            linear-gradient(
              90deg,
              #00e5ff,
              #a855f7,
              #ff4ecd
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-heading p {
          color: #8999bd;
          font-size: 14px;
        }

        /* =========================================
           CAREER CARDS
        ========================================= */

        .career-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 23px;
        }

        .career-card {
          position: relative;

          min-height: 235px;

          padding: 30px 20px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          text-align: center;

          cursor: pointer;

          border-radius: 22px;

          border:
            1px solid rgba(255,255,255,0.1);

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.09),
              rgba(255,255,255,0.025)
            );

          box-shadow:
            inset 0 1px rgba(255,255,255,0.08),
            0 15px 45px rgba(0,0,0,0.16);

          backdrop-filter: blur(15px);

          overflow: hidden;

          transform-style: preserve-3d;

          transition:
            transform 0.45s,
            border-color 0.45s,
            box-shadow 0.45s;
        }

        .career-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #00e5ff,
              #a855f7,
              #ff00cc,
              transparent
            );

          transition: 0.7s;
        }

        .career-card::after {
          content: "";

          position: absolute;

          width: 160px;
          height: 160px;

          border-radius: 50%;

          top: -90px;
          right: -90px;

          background:
            rgba(0,229,255,0.08);

          filter: blur(25px);

          transition: 0.5s;
        }

        .career-card:hover::before {
          left: 120%;
        }

        .career-card:hover::after {
          transform: scale(1.8);
        }

        .career-card:hover {
          transform:
            translateY(-12px)
            rotateX(4deg)
            rotateY(-3deg);

          border-color:
            rgba(0,229,255,0.6);

          box-shadow:
            0 30px 65px rgba(0,229,255,0.13),
            0 0 30px rgba(168,85,247,0.08),
            inset 0 1px rgba(255,255,255,0.15);
        }

        .career-icon {
          position: relative;
          z-index: 2;

          width: 78px;
          height: 78px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 23px;

          background:
            linear-gradient(
              145deg,
              rgba(0,229,255,0.14),
              rgba(168,85,247,0.13)
            );

          border:
            1px solid rgba(0,229,255,0.14);

          box-shadow:
            inset 0 0 20px rgba(0,229,255,0.04),
            0 12px 25px rgba(0,0,0,0.18);

          font-size: 38px;

          margin-bottom: 18px;

          transition:
            transform 0.65s,
            box-shadow 0.5s;
        }

        .career-card:hover .career-icon {
          transform:
            translateZ(30px)
            rotateY(360deg)
            scale(1.12);

          box-shadow:
            0 0 35px rgba(0,229,255,0.16);
        }

        .career-card h3 {
          position: relative;
          z-index: 2;

          font-size: 20px;

          margin-bottom: 9px;
        }

        .career-card p {
          position: relative;
          z-index: 2;

          color: #91a2c5;

          font-size: 13px;
        }

        /* =========================================
           COURSES
        ========================================= */

        .course-grid {
          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 20px;
        }

        .course-card {
          position: relative;

          min-height: 205px;

          padding: 25px 21px;

          border-radius: 21px;

          border:
            1px solid rgba(255,255,255,0.1);

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.075),
              rgba(255,255,255,0.022)
            );

          backdrop-filter: blur(15px);

          cursor: pointer;

          overflow: hidden;

          transform-style: preserve-3d;

          transition:
            transform 0.45s,
            border-color 0.45s,
            box-shadow 0.45s;
        }

        .course-card::before {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              120deg,
              transparent 30%,
              rgba(0,229,255,0.07),
              transparent 70%
            );

          transform:
            translateX(-100%);

          transition: 0.7s;
        }

        .course-card:hover::before {
          transform:
            translateX(100%);
        }

        .course-card:hover {
          transform:
            translateY(-10px)
            rotateX(3deg)
            rotateY(3deg);

          border-color:
            rgba(168,85,247,0.65);

          box-shadow:
            0 25px 55px rgba(168,85,247,0.12);
        }

        .course-icon {
          position: relative;
          z-index: 2;

          width: 60px;
          height: 60px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 17px;

          background:
            linear-gradient(
              135deg,
              rgba(0,229,255,0.15),
              rgba(168,85,247,0.18)
            );

          border:
            1px solid rgba(255,255,255,0.08);

          font-size: 28px;

          margin-bottom: 18px;

          transition:
            transform 0.6s;
        }

        .course-card:hover .course-icon {
          transform:
            translateZ(30px)
            rotateY(360deg)
            scale(1.08);
        }

        .course-card h3 {
          position: relative;
          z-index: 2;

          font-size: 17px;

          margin-bottom: 8px;
        }

        .course-card p {
          position: relative;
          z-index: 2;

          color: #8d9ec1;

          font-size: 13px;
        }

        /* =========================================
           NO RESULTS
        ========================================= */

        .no-results {
          grid-column: 1 / -1;

          text-align: center;

          padding: 60px 25px;

          border-radius: 22px;

          border:
            1px dashed rgba(0,229,255,0.3);

          background:
            rgba(255,255,255,0.025);

          color: #8ea0c8;
        }

        .no-results h3 {
          margin-bottom: 8px;
          color: white;
        }

        /* =========================================
           CTA
        ========================================= */

        .guidance-box {
          position: relative;
          z-index: 4;

          text-align: center;

          padding: 20px 5% 90px;
        }

        .guidance-btn {
          position: relative;

          border: none;

          padding: 18px 42px;

          border-radius: 50px;

          cursor: pointer;

          color: white;

          font-size: 14px;
          font-weight: 950;

          letter-spacing: 0.3px;

          background:
            linear-gradient(
              90deg,
              #00bcd4,
              #6d5dfc,
              #a855f7,
              #ff00cc
            );

          background-size: 250% 100%;

          animation:
            gradientShift 5s linear infinite;

          box-shadow:
            0 12px 45px rgba(168,85,247,0.25);

          overflow: hidden;

          transition: 0.4s;
        }

        .guidance-btn::after {
          content: "";

          position: absolute;

          top: 0;
          left: -80%;

          width: 50%;
          height: 100%;

          background:
            linear-gradient(
              120deg,
              transparent,
              rgba(255,255,255,0.5),
              transparent
            );

          transform: skewX(-20deg);

          animation:
            ctaShine 3.5s ease-in-out infinite;
        }

        @keyframes ctaShine {
          0%,45% {
            left: -80%;
          }

          75%,100% {
            left: 140%;
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .guidance-btn:hover {
          transform:
            translateY(-7px)
            scale(1.04);

          box-shadow:
            0 20px 60px rgba(0,229,255,0.2),
            0 0 35px rgba(168,85,247,0.15);
        }

        /* =========================================
           CONTACT
        ========================================= */

        .contact-section {
          position: relative;
          z-index: 4;

          max-width: 1300px;

          margin: 0 auto 70px;

          padding: 55px 5%;

          border-radius: 28px;

          background:
            linear-gradient(
              145deg,
              rgba(12,24,70,0.88),
              rgba(7,9,32,0.9)
            );

          border:
            1px solid rgba(0,229,255,0.14);

          box-shadow:
            0 25px 70px rgba(0,0,0,0.25),
            inset 0 1px rgba(255,255,255,0.07);

          backdrop-filter: blur(20px);

          overflow: hidden;
        }

        .contact-section::before {
          content: "";

          position: absolute;

          width: 250px;
          height: 250px;

          right: -100px;
          top: -100px;

          border-radius: 50%;

          background:
            rgba(0,229,255,0.08);

          filter: blur(35px);

          animation:
            contactGlow 7s ease-in-out infinite alternate;
        }

        @keyframes contactGlow {
          to {
            transform:
              translate(-80px,80px)
              scale(1.3);
          }
        }

        .contact-heading {
          position: relative;
          z-index: 2;

          text-align: center;

          margin-bottom: 38px;
        }

        .contact-heading h2 {
          font-size: 35px;

          margin-bottom: 9px;

          background:
            linear-gradient(
              90deg,
              #00e5ff,
              #a855f7
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-heading p {
          color: #8ea0c8;
          font-size: 14px;
        }

        .team-container {
          position: relative;
          z-index: 2;

          display: grid;

          grid-template-columns:
            repeat(5,1fr);

          gap: 15px;
        }

        .team-card {
          padding: 21px;

          border-radius: 18px;

          background:
            rgba(255,255,255,0.045);

          border:
            1px solid rgba(255,255,255,0.09);

          backdrop-filter: blur(10px);

          transition:
            transform 0.4s,
            border-color 0.4s,
            box-shadow 0.4s;
        }

        .team-card:hover {
          transform:
            translateY(-8px)
            rotateX(3deg);

          border-color:
            rgba(0,229,255,0.5);

          box-shadow:
            0 18px 40px rgba(0,229,255,0.08);
        }

        .team-card h3 {
          color: #00e5ff;

          margin-bottom: 13px;

          font-size: 16px;
        }

        .team-card p {
          color: #9eacd0;

          font-size: 11px;

          line-height: 1.9;

          word-break: break-word;
        }

        /* =========================================
           FOOTER
        ========================================= */

        footer {
          position: relative;
          z-index: 4;

          padding: 55px 5% 20px;

          background:
            linear-gradient(
              180deg,
              #05091d,
              #02040e
            );

          border-top:
            1px solid rgba(0,229,255,0.12);
        }

        .footer-grid {
          max-width: 1300px;

          margin: auto;

          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 35px;
        }

        .footer-grid h3,
        .footer-grid h4 {
          color: #00e5ff;

          margin-bottom: 14px;
        }

        .footer-grid p,
        .footer-grid a {
          color: #7f90b3;

          text-decoration: none;

          font-size: 12px;

          line-height: 1.9;
        }

        .footer-grid a {
          transition: 0.3s;
        }

        .footer-grid a:hover {
          color: #00e5ff;
          padding-left: 4px;
        }

        .copyright {
          max-width: 1300px;

          margin: 32px auto 0;

          padding-top: 20px;

          border-top:
            1px solid rgba(255,255,255,0.07);

          text-align: center;

          color: #5d6a84;

          font-size: 11px;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1100px) {

          .hero-section {
            grid-template-columns: 1fr;
            text-align: center;

            padding-top: 55px;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-image {
            order: -1;
            height: 430px;
          }

          .hero-image img {
            max-height: 410px;
          }

          .welcome-cards {
            grid-template-columns:
              repeat(2,1fr);
          }

          .career-grid {
            grid-template-columns:
              repeat(2,1fr);
          }

          .course-grid {
            grid-template-columns:
              repeat(3,1fr);
          }

          .team-container {
            grid-template-columns:
              repeat(3,1fr);
          }

        }

        /* =========================================
           MOBILE NAV
        ========================================= */

        @media (max-width: 850px) {

          .team-container {
            grid-template-columns:
              repeat(2,1fr);
          }

          .footer-grid {
            grid-template-columns:
              repeat(2,1fr);
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .hero-section {
            min-height: auto;

            padding:
              35px 20px 65px;

            gap: 15px;
          }

          .hero-image {
            height: 285px;
          }

          .hero-image img {
            max-height: 280px;
          }

          .hero-image::after {
            width: 90%;
            height: 90%;
          }

          .hero-content h1 {
            font-size: 34px;
            letter-spacing: -1px;
          }

          .hero-content p {
            font-size: 14px;
            line-height: 1.7;
          }

          .welcome-tag {
            font-size: 10px;
            text-align: center;
          }

          .hero-buttons {
            width: 100%;
          }

          .btn {
            width: 100%;
          }

          .search-box {
            width: 100%;
          }

          .welcome-cards {
            grid-template-columns: 1fr;

            padding: 0 20px;

            margin-bottom: 55px;
          }

          .section {
            padding:
              30px 20px 65px;
          }

          .section-heading {
            margin-bottom: 30px;
          }

          .section-heading h2 {
            font-size: 31px;
          }

          .career-grid,
          .course-grid {
            grid-template-columns: 1fr;
          }

          .career-card {
            min-height: 200px;
          }

          .course-card {
            min-height: 175px;
          }

          .team-container {
            grid-template-columns: 1fr;
          }

          .contact-section {
            margin:
              0 20px 45px;

            padding:
              40px 20px;
          }

          .contact-heading h2 {
            font-size: 29px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .guidance-box {
            padding-bottom: 65px;
          }

          .guidance-btn {
            width: 95%;
            padding: 17px 20px;
            font-size: 12px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }

        }

      `}</style>

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="orb orb-one" />
      <div className="orb orb-two" />

      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 7) * 0.45}s`,
          }}
        />
      ))}

      {/* ========================================= */}
      {/* NAVBAR (shared component, locked to top) */}
      {/* ========================================= */}

      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero-section">

        <div className="hero-content">

          <div className="welcome-tag">
            ✨ YOUR CAREER JOURNEY STARTS HERE
          </div>

          <h1 id="welcomeText">
            Welcome Back, {userName}! 👋
            <br />
            Find Your{" "}
            <span>Dream Career</span>
          </h1>

          <p>
            Explore careers, courses, entrance exams
            and personalized career guidance to build
            a successful future.
          </p>

          <div className="hero-buttons">

            <button
              className="btn btn-primary"
              onClick={() => goTo("/quiz")}
            >
              🚀 Get Started
            </button>

            <button
              className="btn btn-secondary"
              onClick={() =>
                goTo("/career-details")
              }
            >
              Explore Careers
            </button>

          </div>

          <div className="search-box">

            <input
              type="text"
              placeholder="Search courses, careers, exams..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button onClick={handleSearch}>
              🔍
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="/homelogo.jpg"
            alt="Career Vision"
          />

        </div>

      </section>

      {/* =========================================
          QUICK ACCESS
      ========================================= */}

      <section className="welcome-cards">

        <a
          href="/career-details"
          className="w-card"
        >
          <div className="welcome-row">

            <div
              className="welcome-icon"
              style={{
                background:
                  "linear-gradient(135deg,#6d28d9,#a855f7)",
              }}
            >
              💼
            </div>

            <div>
              <h3>Explore Careers</h3>
              <p>
                Discover the best career options
              </p>
            </div>

          </div>

          <span className="explore-text">
            → Explore Now
          </span>
        </a>

        <a
          href="/roadmap"
          className="w-card"
        >
          <div className="welcome-row">

            <div
              className="welcome-icon"
              style={{
                background:
                  "linear-gradient(135deg,#2563eb,#00e5ff)",
              }}
            >
              🗺️
            </div>

            <div>
              <h3>Career Roadmaps</h3>
              <p>
                Step-by-step career guidance
              </p>
            </div>

          </div>

          <span className="explore-text">
            → View Roadmaps
          </span>
        </a>

        <a
          href="/comparisons"
          className="w-card"
        >
          <div className="welcome-row">

            <div
              className="welcome-icon"
              style={{
                background:
                  "linear-gradient(135deg,#7c3aed,#ec4899)",
              }}
            >
              📖
            </div>

            <div>
              <h3>Compare Courses</h3>
              <p>
                Find the right course for you
              </p>
            </div>

          </div>

          <span className="explore-text">
            → Compare Now
          </span>
        </a>

        <a
          href="/quiz"
          className="w-card"
        >
          <div className="welcome-row">

            <div
              className="welcome-icon"
              style={{
                background:
                  "linear-gradient(135deg,#ea580c,#facc15)",
              }}
            >
              🧠
            </div>

            <div>
              <h3>Career Quiz</h3>
              <p>
                Find your perfect career
              </p>
            </div>

          </div>

          <span className="explore-text">
            → Take Quiz
          </span>
        </a>

      </section>

      {/* =========================================
          CAREERS
      ========================================= */}

      <section
        className="section"
        id="search-results"
      >

        <div className="section-heading">

          <h2>
            Explore{" "}
            <span>Career Categories</span>
          </h2>

          <p>
            Discover career opportunities based on
            your interests and goals.
          </p>

        </div>

        <div className="career-grid">

          {filteredCareers.length > 0 ? (

            filteredCareers.map((career) => (

              <div
                className="career-card"
                key={career.title}
                onClick={() =>
                  goTo("/career-details")
                }
              >

                <div className="career-icon">
                  {career.icon}
                </div>

                <h3>
                  {career.title}
                </h3>

                <p>
                  {career.description}
                </p>

              </div>

            ))

          ) : (

            <div className="no-results">

              <h3>
                No Career Found 🔍
              </h3>

              <p>
                Try searching with another keyword.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* =========================================
          COURSES
      ========================================= */}

      <section className="section">

        <div className="section-heading">

          <h2>
            Top <span>Courses</span>
          </h2>

          <p>
            Explore popular courses and choose the
            path that suits your future.
          </p>

        </div>

        <div className="course-grid">

          {filteredCourses.length > 0 ? (

            filteredCourses.map((course) => (

              <div
                className="course-card"
                key={course.title}
                onClick={() =>
                  goTo("/career-details")
                }
              >

                <div className="course-icon">
                  {course.icon}
                </div>

                <h3>
                  {course.title}
                </h3>

                <p>
                  {course.description}
                </p>

              </div>

            ))

          ) : (

            <div className="no-results">

              <h3>
                No Course Found 📚
              </h3>

              <p>
                Try another search keyword.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <div className="guidance-box">

        <button
          className="guidance-btn"
          onClick={() => goTo("/quiz")}
        >
          🚀 GET PERSONALIZED CAREER GUIDANCE
        </button>

      </div>

      {/* =========================================
          CONTACT
      ========================================= */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-heading">

          <h2>
            Contact Our Team
          </h2>

          <p>
            Have any questions? Reach out to our
            Career Vision team.
          </p>

        </div>

        <div className="team-container">

          <div className="team-card">
            <h3>Ajay</h3>
            <p>📞 9259296423</p>
            <p>
              📧 thakurajay0918@gmail.com
            </p>
          </div>

          <div className="team-card">
            <h3>Prateek Saini</h3>
            <p>📞 9258833113</p>
            <p>
              📧 prateeksaini9258@email.com
            </p>
          </div>

          <div className="team-card">
            <h3>David</h3>
            <p>📞 9720977205</p>
            <p>
              📧 davidmeena9720@email.com
            </p>
          </div>

          <div className="team-card">
            <h3>Sagar</h3>
            <p>📞 9548225363</p>
            <p>
              📧 yuvisingh8104725@email.com
            </p>
          </div>

          <div className="team-card">
            <h3>Aadesh Kumar</h3>
            <p>📞 8630200891</p>
            <p>
              📧 Aadeshkumar8630@email.com
            </p>
          </div>

        </div>

      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer>

        <div className="footer-grid">

          <div>

            <h3>
              Career Vision
            </h3>

            <p>
              Discover your interests, explore
              opportunities and find your dream
              career.
            </p>

          </div>

          <div>

            <h4>
              Quick Links
            </h4>

            <p>
              <a href="/quiz">
                Home
              </a>
            </p>

            <p>
              <a href="/career-details">
                Careers
              </a>
            </p>

            <p>
              <a href="/roadmap">
                Roadmap
              </a>
            </p>

          </div>

          <div>

            <h4>
              Categories
            </h4>

            <p>
              IT & Technology
            </p>

            <p>
              Medical
            </p>

            <p>
              Commerce
            </p>

            <p>
              Government Jobs
            </p>

          </div>

          <div>

            <h4>
              Contact
            </h4>

            <p>
              hello@careerconnect.com
            </p>

            <p>
              Career guidance for your future.
            </p>

          </div>

        </div>

        <div className="copyright">
          © 2026 Career Vision | All Rights
          Reserved
        </div>

      </footer>

    </div>
  );
}
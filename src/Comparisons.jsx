import { useState } from "react";
import Navbar from "./Navbar.jsx";

const data = [
  { id: 1, cat: "engineering", c1: "BCA", c2: "B.Tech CSE", fee1: "₹40K–₹1.2L", fee2: "₹1L–₹4L" },
  { id: 2, cat: "engineering", c1: "BCA + MCA", c2: "B.Tech CSE", fee1: "₹1L–₹3L", fee2: "₹1L–₹4L" },
  { id: 3, cat: "engineering", c1: "BCA + MCA", c2: "BBA + MBA", fee1: "₹1L–₹3L", fee2: "₹2L–₹6L" },
  { id: 4, cat: "engineering", c1: "B.Tech CSE", c2: "B.Tech IT", fee1: "₹1L–₹4L", fee2: "₹1L–₹4L" },
  { id: 5, cat: "engineering", c1: "BCA", c2: "B.Sc CS", fee1: "₹40K–₹1.2L", fee2: "₹30K–₹1L" },
  { id: 6, cat: "engineering", c1: "B.Tech", c2: "BCA + MCA + MBA", fee1: "₹1L–₹4L", fee2: "₹3L–₹8L" },
  { id: 7, cat: "engineering", c1: "BCA + MBA", c2: "B.Tech + MBA", fee1: "₹2L–₹6L", fee2: "₹3L–₹8L" },
  { id: 8, cat: "engineering", c1: "B.Tech CSE", c2: "BCA + MBA", fee1: "₹1L–₹4L", fee2: "₹2L–₹6L" },

  { id: 9, cat: "management", c1: "B.Com + M.Com", c2: "B.Com + MBA", fee1: "₹50K–₹2L", fee2: "₹2L–₹6L" },
  { id: 10, cat: "management", c1: "BBA + MBA", c2: "B.Com + MBA", fee1: "₹2L–₹6L", fee2: "₹2L–₹6L" },
  { id: 11, cat: "management", c1: "BCA + MBA", c2: "BBA + MBA", fee1: "₹2L–₹6L", fee2: "₹2L–₹6L" },
  { id: 12, cat: "management", c1: "B.Com + MBA", c2: "BBA + MBA", fee1: "₹2L–₹6L", fee2: "₹2L–₹6L" },
  { id: 13, cat: "management", c1: "BBA", c2: "B.Com", fee1: "₹50K–₹2L", fee2: "₹30K–₹1.5L" },
  { id: 14, cat: "management", c1: "BBA", c2: "BCA", fee1: "₹50K–₹2L", fee2: "₹40K–₹1.2L" },
  { id: 15, cat: "management", c1: "MBA", c2: "MCA", fee1: "₹2L–₹8L", fee2: "₹1L–₹4L" },
  { id: 16, cat: "management", c1: "B.Com + M.Com + B.Ed", c2: "B.Com + MBA", fee1: "₹1L–₹3L", fee2: "₹2L–₹6L" },

  { id: 17, cat: "medical", c1: "MBBS", c2: "BDS", fee1: "₹5L–₹25L+", fee2: "₹3L–₹15L+" },
  { id: 18, cat: "medical", c1: "MBBS", c2: "BAMS", fee1: "₹5L–₹25L+", fee2: "₹2L–₹10L" },
  { id: 19, cat: "medical", c1: "MBBS + MD", c2: "MBBS + MS", fee1: "₹8L–₹30L+", fee2: "₹8L–₹30L+" },
  { id: 20, cat: "medical", c1: "B.Pharm", c2: "D.Pharm", fee1: "₹60K–₹2L", fee2: "₹30K–₹1L" },
  { id: 21, cat: "medical", c1: "B.Pharm + M.Pharm", c2: "B.Pharm + MBA", fee1: "₹1L–₹4L", fee2: "₹2L–₹6L" },
  { id: 22, cat: "medical", c1: "B.Sc Nursing", c2: "GNM", fee1: "₹60K–₹3L", fee2: "₹50K–₹2L" },
  { id: 23, cat: "medical", c1: "BAMS", c2: "BHMS", fee1: "₹2L–₹10L", fee2: "₹2L–₹8L" },
  { id: 24, cat: "medical", c1: "BPT", c2: "B.Sc Nursing", fee1: "₹60K–₹3L", fee2: "₹60K–₹3L" },

  { id: 25, cat: "law", c1: "BA LLB", c2: "BBA LLB", fee1: "₹1L–₹5L", fee2: "₹1L–₹5L" },
  { id: 26, cat: "law", c1: "LLB 3Y", c2: "BA LLB 5Y", fee1: "₹50K–₹3L", fee2: "₹1L–₹5L" },
  { id: 27, cat: "law", c1: "BA LLB + LLM", c2: "BBA LLB + MBA", fee1: "₹2L–₹7L", fee2: "₹3L–₹8L" },
  { id: 28, cat: "law", c1: "LLB + LLM", c2: "LLB + MBA", fee1: "₹2L–₹6L", fee2: "₹2L–₹7L" },

  { id: 29, cat: "agriculture", c1: "B.Sc Agri", c2: "B.Tech Agri", fee1: "₹50K–₹3L", fee2: "₹1L–₹4L" },
  { id: 30, cat: "agriculture", c1: "B.Sc Agri + MBA", c2: "B.Sc Agri + M.Sc", fee1: "₹2L–₹6L", fee2: "₹1L–₹4L" },
  { id: 31, cat: "agriculture", c1: "Diploma Agri", c2: "B.Sc Agri", fee1: "₹20K–₹1L", fee2: "₹50K–₹3L" },

  { id: 32, cat: "banking", c1: "B.Com + MBA", c2: "B.Com + M.Com + B.Ed", fee1: "₹2L–₹6L", fee2: "₹1L–₹3L" },
  { id: 33, cat: "banking", c1: "BA + MA", c2: "BA + MBA", fee1: "₹50K–₹2L", fee2: "₹2L–₹6L" },
  { id: 34, cat: "banking", c1: "B.Com", c2: "BBA", fee1: "₹30K–₹1.5L", fee2: "₹50K–₹2L" },
  { id: 35, cat: "banking", c1: "BA", c2: "B.Com", fee1: "₹20K–₹1L", fee2: "₹30K–₹1.5L" },
  { id: 36, cat: "banking", c1: "B.Com + CA", c2: "B.Com + MBA", fee1: "₹1L–₹3L+", fee2: "₹2L–₹6L" },

  { id: 37, cat: "diploma", c1: "ITI", c2: "Diploma", fee1: "₹10K–₹50K", fee2: "₹30K–₹1.5L" },
  { id: 38, cat: "diploma", c1: "Diploma CSE", c2: "BCA", fee1: "₹30K–₹1.5L", fee2: "₹40K–₹1.2L" },
  { id: 39, cat: "diploma", c1: "Polytechnic + B.Tech", c2: "12th + B.Tech", fee1: "₹1L–₹4L", fee2: "₹1L–₹4L" },
  { id: 40, cat: "diploma", c1: "BCA", c2: "BCA + MCA + MBA Triple", fee1: "₹40K–₹1.2L", fee2: "₹3L–₹8L" },

  { id: 41, cat: "engineering", c1: "BCA + MCA", c2: "B.Sc + M.Sc CS", fee1: "₹1L–₹3L", fee2: "₹1L–₹3L" },
  { id: 42, cat: "management", c1: "B.Com + LLB", c2: "BBA + LLB", fee1: "₹1L–₹5L", fee2: "₹1L–₹5L" },
];

const icons = {
  engineering: "💻",
  management: "📊",
  medical: "🩺",
  law: "⚖️",
  agriculture: "🌾",
  banking: "🏦",
  diploma: "🎓",
};

const names = {
  engineering: "Engineering",
  management: "Management",
  medical: "Medical",
  law: "Law",
  agriculture: "Agriculture",
  banking: "Banking",
  diploma: "Diploma",
};

/* -------------------------------------------------------
   Dynamic information generator
------------------------------------------------------- */

function getCourseInfo(course, side) {
  const courseName = side === 1 ? course.c1 : course.c2;

  const common = {
    engineering: {
      duration: courseName.includes("B.Tech") ? "4 Years" : "3–5 Years",
      study: "Programming, computer applications, software, databases and technology.",
      jobs: ["Software Developer", "Web Developer", "App Developer", "Data Analyst"],
      higher: "MCA, M.Tech, MBA, certifications",
      difficulty: "Moderate",
      scope: "Very High",
    },

    management: {
      duration: courseName.includes("MBA") ? "4–6 Years" : "3 Years",
      study: "Business, finance, marketing, management and organizational skills.",
      jobs: ["Business Analyst", "Marketing Executive", "HR Executive", "Manager"],
      higher: "MBA, M.Com, professional certifications",
      difficulty: "Moderate",
      scope: "High",
    },

    medical: {
      duration: courseName.includes("MBBS") ? "5.5+ Years" : "2–5 Years",
      study: "Healthcare, patient care, medical science and practical training.",
      jobs: ["Healthcare Professional", "Hospital Jobs", "Clinical Roles", "Research"],
      higher: "PG specialization, master's and research",
      difficulty: "High",
      scope: "High",
    },

    law: {
      duration: courseName.includes("3Y") ? "3 Years" : "5 Years",
      study: "Law, legal systems, contracts, constitutional studies and practical law.",
      jobs: ["Lawyer", "Legal Advisor", "Corporate Legal", "Legal Research"],
      higher: "LLM, specialization, judicial preparation",
      difficulty: "Moderate–High",
      scope: "High",
    },

    agriculture: {
      duration: courseName.includes("Diploma") ? "2–3 Years" : "4 Years",
      study: "Agriculture, crops, soil, technology, farm management and rural development.",
      jobs: ["Agriculture Officer", "Farm Manager", "Agri Business", "Research"],
      higher: "M.Sc Agriculture, MBA, research",
      difficulty: "Moderate",
      scope: "High",
    },

    banking: {
      duration: "3–6 Years",
      study: "Commerce, finance, banking, accounting and business management.",
      jobs: ["Bank PO", "Bank Clerk", "Financial Analyst", "Accounts Executive"],
      higher: "MBA, M.Com, CA and banking certifications",
      difficulty: "Moderate",
      scope: "High",
    },

    diploma: {
      duration: courseName.includes("ITI") ? "1–2 Years" : "2–3 Years",
      study: "Practical technical skills, vocational subjects and industry-oriented training.",
      jobs: ["Technician", "Junior Developer", "Technical Assistant", "Supervisor"],
      higher: "B.Tech, BCA or other graduation routes",
      difficulty: "Moderate",
      scope: "Good",
    },
  };

  return common[course.cat];
}

/* -------------------------------------------------------
   Main component
------------------------------------------------------- */

export default function Comparisons() {
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filtered =
    category === "all"
      ? data
      : data.filter((item) => item.cat === category);

  const openDetail = (item) => {
    setSelected(item);
    setMobileOpen(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const goBack = () => {
    setSelected(null);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <div className="comparisons-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .comparisons-page {
          min-height: 100vh;
          padding: 1px 18px 80px;
          color: #fff;
          overflow-x: hidden;

          background:
            radial-gradient(circle at 10% 5%, rgba(0,229,255,.10), transparent 28%),
            radial-gradient(circle at 90% 10%, rgba(168,85,247,.12), transparent 30%),
            linear-gradient(135deg,#050816,#090d24 50%,#050816);

          font-family:
            Inter,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        /* ================= HERO ================= */

        .hero {
          max-width: 1100px;
          margin: 0 auto 32px;
          text-align: center;

          animation: heroIn .8s ease both;
        }

        .hero h1 {
          margin: 0;

          font-size: clamp(40px,6vw,70px);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 950;
        }

        .hero h1 span {
          background: linear-gradient(90deg,#00e5ff,#8b5cf6,#ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .sub {
          max-width: 700px;
          margin: 18px auto 0;

          color: #8993b2;
          font-size: 14px;
          line-height: 1.7;
        }

        /* ================= FILTER ================= */

        .filters {
          width: min(1350px,100%);
          margin: 0 auto 28px;

          display: flex;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;

          animation: fadeUp .7s .1s ease both;
        }

        .filters button {
          padding: 10px 15px;

          color: #aab4d2;
          background: rgba(255,255,255,.045);

          border: 1px solid rgba(255,255,255,.09);
          border-radius: 999px;

          font-size: 12px;
          font-weight: 800;

          cursor: pointer;
          transition: .25s ease;
        }

        .filters button:hover {
          color: white;
          transform: translateY(-3px);
        }

        .filters button.active {
          color: white;
          border-color: rgba(0,229,255,.35);
          background: rgba(0,229,255,.10);
          box-shadow: 0 0 25px rgba(0,229,255,.07);
        }

        /* ================= CARDS ================= */

        .grid {
          width: min(1400px,100%);
          margin: auto;

          display: grid;
          grid-template-columns: repeat(2,minmax(0,1fr));
          gap: 16px;
        }

        .comp-card {
          position: relative;
          overflow: hidden;

          min-height: 155px;
          padding: 23px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.065),
              rgba(255,255,255,.025)
            );

          border: 1px solid rgba(255,255,255,.09);
          border-radius: 20px;

          cursor: pointer;

          animation: cardIn .55s ease both;

          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .comp-card::after {
          content: "";
          position: absolute;

          width: 180px;
          height: 180px;

          right: -100px;
          top: -100px;

          border-radius: 50%;

          background: #00e5ff;
          filter: blur(50px);
          opacity: .07;

          transition: .4s ease;
        }

        .comp-card:hover {
          transform: translateY(-7px);

          border-color: rgba(0,229,255,.28);

          box-shadow:
            0 20px 50px rgba(0,0,0,.28),
            0 0 30px rgba(0,229,255,.06);
        }

        .comp-card:hover::after {
          opacity: .18;
          transform: scale(1.5);
        }

        .card-top {
          position: relative;
          z-index: 2;

          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 12px;
          align-items: center;
        }

        .card-top b {
          font-size: 17px;
          line-height: 1.35;
        }

        .card-top b:last-child {
          text-align: right;
        }

        .vs {
          display: flex;
          align-items: center;
          justify-content: center;

          min-width: 44px;
          height: 30px;

          border: 1px solid rgba(255,255,255,.12);
          border-radius: 999px;

          background: linear-gradient(
            135deg,
            rgba(0,229,255,.14),
            rgba(168,85,247,.20)
          );

          font-size: 10px;
          font-weight: 950;
        }

        .meta {
          position: relative;
          z-index: 2;

          margin-top: 14px;

          color: #737e9f;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .fees {
          position: relative;
          z-index: 2;

          display: flex;
          justify-content: space-between;

          margin-top: 17px;

          color: #c5cce0;
          font-size: 12px;
          font-weight: 650;
        }

        .fees span:last-child {
          color: #a855f7;
        }

        /* ================= DETAIL ================= */

        .detail {
          width: min(1200px,100%);
          margin: auto;

          animation: detailIn .6s cubic-bezier(.2,.8,.2,1);
        }

        .back {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 20px;
          padding: 11px 16px;

          color: #dce2f5;
          background: rgba(255,255,255,.05);

          border: 1px solid rgba(255,255,255,.10);
          border-radius: 12px;

          font-size: 13px;
          font-weight: 800;

          cursor: pointer;
          transition: .25s ease;
        }

        .back:hover {
          transform: translateX(-5px);
          color: white;
          border-color: rgba(0,229,255,.3);
          background: rgba(0,229,255,.07);
        }

        .detail-head {
          padding: 38px 20px 32px;

          text-align: center;

          border: 1px solid rgba(255,255,255,.09);
          border-radius: 25px;

          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(0,229,255,.11),
              transparent 50%
            ),
            rgba(255,255,255,.035);

          box-shadow: 0 20px 65px rgba(0,0,0,.20);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          padding: 7px 13px;

          color: #aab3cf;
          background: rgba(255,255,255,.05);

          border: 1px solid rgba(255,255,255,.08);
          border-radius: 999px;

          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .detail-head h2 {
          margin: 20px 0 10px;

          font-size: clamp(28px,5vw,53px);
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .detail-head h2 span {
          color: #00e5ff;
          font-size: .55em;
        }

        .detail-head p {
          margin: 0;
          color: #7f89a7;
          font-size: 13px;
        }

        /* ================= QUICK VERDICT ================= */

        .verdict {
          position: relative;
          overflow: hidden;

          margin-top: 18px;
          padding: 23px;

          border: 1px solid rgba(0,229,255,.14);
          border-radius: 20px;

          background:
            linear-gradient(
              135deg,
              rgba(0,229,255,.08),
              rgba(168,85,247,.06)
            );

          animation: fadeUp .6s .15s ease both;
        }

        .verdict-label {
          color: #00e5ff;
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .verdict h3 {
          margin: 8px 0;

          font-size: 22px;
        }

        .verdict p {
          margin: 0;

          color: #9ca6c3;
          font-size: 13px;
          line-height: 1.7;
        }

        /* ================= TWO COURSE PANELS ================= */

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 15px;
          align-items: stretch;

          margin-top: 18px;
        }

        .course-panel {
          position: relative;

          padding: 27px;

          border: 1px solid rgba(255,255,255,.09);
          border-radius: 22px;

          background: rgba(255,255,255,.035);

          animation: panelIn .6s ease both;
        }

        .course-panel.right {
          animation-delay: .1s;
        }

        .course-panel.best {
          border-color: rgba(0,229,255,.23);

          background:
            linear-gradient(
              145deg,
              rgba(0,229,255,.075),
              rgba(168,85,247,.035)
            );
        }

        .best-tag {
          position: absolute;
          top: 17px;
          right: 17px;

          padding: 6px 9px;

          color: #07101d;
          background: #00e5ff;

          border-radius: 999px;

          font-size: 9px;
          font-weight: 950;
        }

        .small-title {
          color: #6e7898;

          font-size: 9px;
          font-weight: 950;

          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .course-panel h3 {
          margin: 9px 0 20px;

          font-size: 25px;
        }

        .stat {
          padding: 13px 0;

          border-top: 1px solid rgba(255,255,255,.07);
        }

        .stat-label {
          color: #727d9e;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
        }

        .stat-value {
          margin-top: 5px;

          color: #e8ebf5;
          font-size: 13px;
          line-height: 1.55;
          font-weight: 650;
        }

        .job-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;

          margin-top: 8px;
        }

        .job {
          padding: 6px 8px;

          color: #aeb8d3;
          background: rgba(255,255,255,.045);

          border: 1px solid rgba(255,255,255,.07);
          border-radius: 8px;

          font-size: 10px;
        }

        .middle-vs {
          align-self: center;

          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: white;

          border: 1px solid rgba(255,255,255,.12);
          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              rgba(0,229,255,.15),
              rgba(168,85,247,.20)
            );

          font-size: 11px;
          font-weight: 950;

          animation: pulse 2.5s ease infinite;
        }

        /* ================= SCORE ================= */

        .score-section {
          margin-top: 18px;
          padding: 25px;

          border: 1px solid rgba(255,255,255,.08);
          border-radius: 21px;

          background: rgba(255,255,255,.03);
        }

        .section-title {
          margin-bottom: 22px;

          font-size: 18px;
          font-weight: 900;
        }

        .score-row {
          display: grid;
          grid-template-columns: 150px 1fr 45px;
          gap: 13px;

          align-items: center;

          margin-bottom: 15px;
        }

        .score-name {
          color: #aeb7d1;
          font-size: 11px;
          font-weight: 750;
        }

        .bar {
          height: 8px;
          overflow: hidden;

          border-radius: 999px;
          background: rgba(255,255,255,.07);
        }

        .bar-fill {
          height: 100%;
          border-radius: inherit;

          background: linear-gradient(90deg,#00e5ff,#8b5cf6);

          animation: barGrow 1s ease both;
        }

        .score-number {
          color: #00e5ff;
          font-size: 11px;
          font-weight: 900;
          text-align: right;
        }

        /* ================= PROS CONS ================= */

        .pros-cons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;

          margin-top: 18px;
        }

        .info-box {
          padding: 22px;

          border: 1px solid rgba(255,255,255,.08);
          border-radius: 19px;

          background: rgba(255,255,255,.03);
        }

        .info-box h4 {
          margin: 0 0 15px;
          font-size: 14px;
        }

        .info-box ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .info-box li {
          padding: 8px 0;

          color: #909ab7;
          border-bottom: 1px solid rgba(255,255,255,.05);

          font-size: 12px;
          line-height: 1.5;
        }

        .info-box li:last-child {
          border-bottom: 0;
        }

        /* ================= FINAL ================= */

        .final-box {
          margin-top: 18px;
          padding: 25px;

          text-align: center;

          border: 1px solid rgba(168,85,247,.18);
          border-radius: 21px;

          background:
            linear-gradient(
              135deg,
              rgba(168,85,247,.08),
              rgba(0,229,255,.05)
            );
        }

        .final-box h3 {
          margin: 0 0 10px;
          font-size: 21px;
        }

        .final-box p {
          max-width: 800px;
          margin: auto;

          color: #929dbb;
          font-size: 13px;
          line-height: 1.7;
        }

        .note {
          margin-top: 16px;

          color: #66718f;
          text-align: center;

          font-size: 10px;
          line-height: 1.6;
        }

        /* ================= ANIMATIONS ================= */

        @keyframes navDrop {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes detailIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes panelIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }

        @keyframes barGrow {
          from {
            width: 0 !important;
          }
        }

        /* ================= MOBILE ================= */

        @media(max-width:760px) {

          .comparisons-page {
            padding-left: 9px;
            padding-right: 9px;
          }

          .hero h1 {
            font-size: 42px;
          }

          .sub {
            font-size: 12px;
          }

          .filters {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;

            padding-bottom: 8px;

            scrollbar-width: none;
          }

          .filters::-webkit-scrollbar {
            display: none;
          }

          .filters button {
            flex: 0 0 auto;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .comp-card {
            min-height: 145px;
            padding: 19px;
            border-radius: 17px;
          }

          .card-top {
            gap: 7px;
          }

          .card-top b {
            font-size: 14px;
          }

          .fees {
            flex-direction: column;
            gap: 5px;
          }

          .detail-head {
            padding: 28px 14px 24px;
            border-radius: 19px;
          }

          .detail-head h2 {
            font-size: 30px;
          }

          .verdict {
            padding: 19px;
          }

          .detail-grid {
            grid-template-columns: 1fr;
            gap: 11px;
          }

          .middle-vs {
            width: 45px;
            height: 45px;
            margin: 0 auto;
          }

          .course-panel {
            padding: 21px;
            border-radius: 18px;
          }

          .course-panel h3 {
            font-size: 21px;
          }

          .score-section {
            padding: 19px;
          }

          .score-row {
            grid-template-columns: 105px 1fr 35px;
            gap: 8px;
          }

          .score-name {
            font-size: 9px;
          }

          .pros-cons {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= LIST ================= */}

      {!selected && (
        <>
          <section className="hero">
            <h1>
              Compare <span>40+ Courses</span>
            </h1>

            <p className="sub">
              Engineering • Medical • Law • Banking • Masters Combo •
              All aamne-saamne
            </p>
          </section>

          <div className="filters">
            <button
              className={category === "all" ? "active" : ""}
              onClick={() => setCategory("all")}
            >
              All 40+
            </button>

            {Object.keys(names).map((cat) => (
              <button
                key={cat}
                className={category === cat ? "active" : ""}
                onClick={() => setCategory(cat)}
              >
                {names[cat]} {icons[cat]}
              </button>
            ))}
          </div>

          <div className="grid">
            {filtered.map((item, index) => (
              <div
                className="comp-card"
                key={item.id}
                onClick={() => openDetail(item)}
                style={{
                  animationDelay: `${Math.min(index * 0.025, 0.5)}s`,
                }}
              >
                <div className="card-top">
                  <b>{item.c1}</b>

                  <span className="vs">VS</span>

                  <b>{item.c2}</b>
                </div>

                <div className="meta">
                  {item.cat.toUpperCase()} • #{item.id} • TAP TO COMPARE
                </div>

                <div className="fees">
                  <span>
                    {item.c1}: {item.fee1}
                  </span>

                  <span>
                    {item.c2}: {item.fee2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= DETAILED COMPARISON ================= */}

      {selected && (() => {
        const left = getCourseInfo(selected, 1);
        const right = getCourseInfo(selected, 2);

        return (
          <section className="detail">

            <button className="back" onClick={goBack}>
              ← Back to All Comparisons
            </button>

            <div className="detail-head">
              <div className="badge">
                {icons[selected.cat]}
                {names[selected.cat]}
              </div>

              <h2>
                {selected.c1} <span>VS</span> {selected.c2}
              </h2>

              <p>
                Complete career comparison • Comparison #{selected.id}
              </p>
            </div>

            {/* QUICK VERDICT */}

            <div className="verdict">
              <div className="verdict-label">
                ⚡ Quick Verdict
              </div>

              <h3>
                Which one should you choose?
              </h3>

              <p>
                <strong>{selected.c1}</strong> can be a strong choice if
                your priority is a flexible career path and further
                specialization.{" "}
                <strong>{selected.c2}</strong> may be better if you want
                a more specialized and structured path. Your interests,
                budget, college quality and long-term career goal should
                decide the final choice.
              </p>
            </div>

            {/* COURSE DETAILS */}

            <div className="detail-grid">

              <CoursePanel
                course={selected}
                info={left}
                side={1}
                best={selected.id % 2 === 0}
              />

              <div className="middle-vs">
                VS
              </div>

              <CoursePanel
                course={selected}
                info={right}
                side={2}
                best={selected.id % 2 !== 0}
              />

            </div>

            {/* SCORE */}

            <div className="score-section">

              <div className="section-title">
                📊 Overall Comparison
              </div>

              <ScoreRow
                name="Career Scope"
                value1={90}
                value2={95}
                left={selected.c1}
                right={selected.c2}
              />

              <ScoreRow
                name="Job Options"
                value1={88}
                value2={94}
                left={selected.c1}
                right={selected.c2}
              />

              <ScoreRow
                name="Flexibility"
                value1={92}
                value2={85}
                left={selected.c1}
                right={selected.c2}
              />

              <ScoreRow
                name="Higher Studies"
                value1={90}
                value2={90}
                left={selected.c1}
                right={selected.c2}
              />

              <ScoreRow
                name="Industry Demand"
                value1={91}
                value2={94}
                left={selected.c1}
                right={selected.c2}
              />

            </div>

            {/* PROS & CONS */}

            <div className="pros-cons">

              <div className="info-box">
                <h4>
                  🟢 {selected.c1} — Good Points
                </h4>

                <ul>
                  <li>✓ Flexible career opportunities</li>
                  <li>✓ Multiple specialization options</li>
                  <li>✓ Can lead to higher studies</li>
                  <li>✓ Different industries available</li>
                </ul>
              </div>

              <div className="info-box">
                <h4>
                  🟣 {selected.c2} — Good Points
                </h4>

                <ul>
                  <li>✓ Strong professional pathway</li>
                  <li>✓ Multiple job opportunities</li>
                  <li>✓ Good long-term growth potential</li>
                  <li>✓ Useful for specialization</li>
                </ul>
              </div>

            </div>

            {/* FINAL RECOMMENDATION */}

            <div className="final-box">

              <h3>
                🏆 Final Recommendation
              </h3>

              <p>
                There is no single course that is automatically best for
                everyone. Choose <strong>{selected.c1}</strong> if its
                subjects and career path match your interests. Choose{" "}
                <strong>{selected.c2}</strong> if you prefer its
                specialization, career opportunities or learning style.
              </p>

            </div>

            <div className="note">
              💡 Fees, salaries, eligibility and career opportunities can
              vary depending on college, location, specialization,
              experience and current market conditions.
            </div>

          </section>
        );
      })()}
    </div>
  );
}

/* =========================================================
   COURSE PANEL
========================================================= */

function CoursePanel({ course, info, side, best }) {
  const name = side === 1 ? course.c1 : course.c2;
  const fee = side === 1 ? course.fee1 : course.fee2;

  return (
    <div className={`course-panel ${best ? "best" : ""}`}>

      {best && (
        <div className="best-tag">
          RECOMMENDED
        </div>
      )}

      <div className="small-title">
        Option {side === 1 ? "01" : "02"}
      </div>

      <h3>{name}</h3>

      <div className="stat">
        <div className="stat-label">
          💰 Approx. Fee
        </div>

        <div className="stat-value">
          {fee}
        </div>
      </div>

      <div className="stat">
        <div className="stat-label">
          ⏱ Duration
        </div>

        <div className="stat-value">
          {info.duration}
        </div>
      </div>

      <div className="stat">
        <div className="stat-label">
          📚 What You Study
        </div>

        <div className="stat-value">
          {info.study}
        </div>
      </div>

      <div className="stat">
        <div className="stat-label">
          💼 Career Options
        </div>

        <div className="job-list">
          {info.jobs.map((job) => (
            <span className="job" key={job}>
              {job}
            </span>
          ))}
        </div>
      </div>

      <div className="stat">
        <div className="stat-label">
          🎓 Higher Studies
        </div>

        <div className="stat-value">
          {info.higher}
        </div>
      </div>

      <div className="stat">
        <div className="stat-label">
          📈 Career Scope
        </div>

        <div className="stat-value">
          {info.scope}
        </div>
      </div>

      <div className="stat">
        <div className="stat-label">
          🎯 Difficulty
        </div>

        <div className="stat-value">
          {info.difficulty}
        </div>
      </div>

    </div>
  );
}

/* =========================================================
   SCORE ROW
========================================================= */

function ScoreRow({
  name,
  value1,
  value2,
  left,
  right,
}) {
  return (
    <div className="score-row">

      <div className="score-name">
        {name}
      </div>

      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <div
          className="bar"
          style={{ flex: 1 }}
          title={`${left}: ${value1}%`}
        >
          <div
            className="bar-fill"
            style={{ width: `${value1}%` }}
          />
        </div>

        <div
          className="bar"
          style={{ flex: 1 }}
          title={`${right}: ${value2}%`}
        >
          <div
            className="bar-fill"
            style={{
              width: `${value2}%`,
              background:
                "linear-gradient(90deg,#a855f7,#ec4899)",
            }}
          />
        </div>
      </div>

      <div className="score-number">
        {Math.round((value1 + value2) / 2)}%
      </div>

    </div>
  );
}
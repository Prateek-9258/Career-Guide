
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {

  // Mobile menu open/close state.
  const [menuOpen, setMenuOpen] = useState(false);

  // Current URL/path ko read karta hai.
  const location = useLocation();

  // React Router ke through navigation ke liye.
  const navigate = useNavigate();


  // Navbar ke saare navigation links.
  const links = [

    {
      to: "/career-vision",
      label: "Home",
      icon: "⌂"
    },

    {
      to: "/career-details",
      label: "Careers & Courses",
      icon: "🎓"
    },

    {
      to: "/comparisons",
      label: "Compare",
      icon: "⚖"
    },

    {
      to: "/roadmap",
      label: "Roadmap",
      icon: "🗺"
    },

    {
      to: "/about",
      label: "About",
      icon: "ⓘ"
    },

    {
      to: "/career-vision#contact",
      label: "Contact",
      icon: "✉",
      isHash: true
    },

    {
      to: "/profile",
      label: "My Profile",
      icon: "👤",
      isProfile: true
    }
  ];


  // Logo click hone par Home page par jayega.
  const goHome = () => {

    // Mobile menu close.
    setMenuOpen(false);

    // Home page.
    navigate("/career-vision");
  };


  // Navbar link click handler.
  const goToLink = (e, link) => {

    // Contact/hash link ke liye.
    if (link.isHash) {

      // Mobile menu close.
      setMenuOpen(false);

      // Normal navigation yahan nahi chahiye.
      return;
    }

    // Browser ka default link behaviour stop.
    e.preventDefault();

    // Mobile menu close.
    setMenuOpen(false);

    // Selected page par navigate.
    navigate(link.to);
  };


  // Check karta hai ki current page kaunsa hai.
  const isActive = (link) => {

    // Contact ko active nahi dikhana.
    if (link.isHash) return false;

    // Current pathname aur link route compare.
    return location.pathname === link.to;
  };


  return (
    <>
      {/* ================================
          MAIN NAVBAR
      ================================= */}

      <nav className="navbar">

        {/* Decorative background glow */}
        <div className="nav-glow glow-one"></div>
        <div className="nav-glow glow-two"></div>


        {/* ================================
            LOGO
        ================================= */}

        <div className="logo-box" onClick={goHome}>

          <div className="logo-orbit">

            <div className="logo-mark">
              <span>CV</span>
            </div>

          </div>


          <div className="logo-text">

            <strong>Career Vision</strong>

            <small>Discover Your Future</small>

          </div>

        </div>


        {/* ================================
            NAVIGATION LINKS
        ================================= */}

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>

          {links.map((link) => (

            <li key={link.to}>

              <a
                href={link.to}

                className={`
                  ${link.isProfile ? "profile-link" : ""}
                  ${isActive(link) ? "active" : ""}
                `}

                onClick={(e) => goToLink(e, link)}
              >

                <span className="nav-icon">
                  {link.icon}
                </span>

                <span>
                  {link.label}
                </span>

                {isActive(link) && (
                  <span className="active-dot"></span>
                )}

              </a>

            </li>

          ))}

        </ul>


        {/* ================================
            MOBILE HAMBURGER
        ================================= */}

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}

          onClick={() => setMenuOpen(!menuOpen)}

          aria-label="Toggle menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </nav>


      {/* Fixed navbar ke liye spacer */}
      <div className="navbar-spacer"></div>


      <style>{`

        /* =========================================
           MAIN NAVBAR
        ========================================= */

        .navbar {
          position: fixed;

          top: 0;
          left: 0;

          width: 100%;
          height: 82px;

          z-index: 1000;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 5%;

          background:
            linear-gradient(
              135deg,
              rgba(5, 10, 35, 0.94),
              rgba(10, 15, 45, 0.88)
            );

          border-bottom:
            1px solid rgba(0, 229, 255, 0.12);

          box-shadow:
            0 12px 45px rgba(0, 0, 0, 0.35);

          backdrop-filter: blur(18px);

          /*
            IMPORTANT:
            Mobile dropdown navbar ke bahar visible rahega.
            Pehle yahan overflow: hidden tha,
            jiski wajah se dropdown cut ho raha tha.
          */
          overflow: visible;

          animation:
            navbarEnter 0.8s ease forwards;
        }


        /* =========================================
           ANIMATED BOTTOM LINE
        ========================================= */

        .navbar::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 0;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #00e5ff,
              #2563eb,
              #a855f7,
              #ff00cc,
              #00e5ff,
              transparent
            );

          background-size: 300% 100%;

          animation:
            movingLine 4s linear infinite;
        }


        @keyframes movingLine {

          0% {
            background-position: 0% 50%;
          }

          100% {
            background-position: 300% 50%;
          }

        }


        /* =========================================
           NAVBAR ENTRY ANIMATION
        ========================================= */

        @keyframes navbarEnter {

          from {
            opacity: 0;
            transform: translateY(-100%);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* =========================================
           BACKGROUND GLOW
        ========================================= */

        .nav-glow {
          position: absolute;

          width: 180px;
          height: 180px;

          border-radius: 50%;

          filter: blur(80px);

          pointer-events: none;

          opacity: 0.12;
        }


        .glow-one {
          left: 20%;
          top: -100px;

          background: #00e5ff;

          animation:
            glowMoveOne 6s ease-in-out infinite;
        }


        .glow-two {
          right: 15%;
          top: -100px;

          background: #a855f7;

          animation:
            glowMoveTwo 7s ease-in-out infinite;
        }


        @keyframes glowMoveOne {

          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(120px);
          }

        }


        @keyframes glowMoveTwo {

          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(-120px);
          }

        }


        /* =========================================
           LOGO
        ========================================= */

        .logo-box {
          position: relative;

          z-index: 2;

          display: flex;
          align-items: center;

          gap: 13px;

          cursor: pointer;

          transition:
            transform 0.4s ease,
            filter 0.4s ease;
        }


        .logo-box:hover {
          transform:
            translateY(-2px)
            scale(1.03);

          filter:
            drop-shadow(
              0 0 18px rgba(0, 229, 255, 0.25)
            );
        }


        /* =========================================
           LOGO ORBIT
        ========================================= */

        .logo-orbit {
          position: relative;

          width: 54px;
          height: 54px;

          display: flex;
          align-items: center;
          justify-content: center;
        }


        .logo-orbit::before {
          content: "";

          position: absolute;

          inset: -4px;

          border-radius: 18px;

          background:
            conic-gradient(
              from 0deg,
              #00e5ff,
              #2563eb,
              #a855f7,
              #ff00cc,
              #00e5ff
            );

          animation:
            logoRotate 4s linear infinite;

          box-shadow:
            0 0 25px rgba(0, 229, 255, 0.35);
        }


        .logo-orbit::after {
          content: "";

          position: absolute;

          inset: -8px;

          border-radius: 22px;

          border:
            1px solid rgba(0, 229, 255, 0.18);

          animation:
            orbitPulse 2.5s ease-in-out infinite;
        }


        @keyframes logoRotate {

          to {
            transform: rotate(360deg);
          }

        }


        @keyframes orbitPulse {

          0%,
          100% {
            transform: scale(0.95);
            opacity: 0.4;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }

        }


        /* =========================================
           LOGO INNER
        ========================================= */

        .logo-mark {
          position: relative;

          z-index: 2;

          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 15px;

          background:
            linear-gradient(
              145deg,
              #121b4d,
              #050817
            );

          box-shadow:
            inset 0 0 20px rgba(0, 229, 255, 0.12);
        }


        .logo-mark span {
          font-size: 18px;

          font-weight: 900;

          letter-spacing: 1px;

          background:
            linear-gradient(
              90deg,
              #00e5ff,
              #a855f7,
              #ff4ecd
            );

          -webkit-background-clip: text;

          -webkit-text-fill-color: transparent;

          filter:
            drop-shadow(
              0 0 8px rgba(0, 229, 255, 0.5)
            );
        }


        /* =========================================
           LOGO TEXT
        ========================================= */

        .logo-text {
          display: flex;
          flex-direction: column;

          line-height: 1.15;
        }


        .logo-text strong {
          color: white;

          font-size: 18px;

          font-weight: 900;

          letter-spacing: 0.2px;
        }


        .logo-text small {
          margin-top: 4px;

          color: #7d8bb3;

          font-size: 10px;

          letter-spacing: 0.5px;
        }


        /* =========================================
           NAV LINKS
        ========================================= */

        .nav-links {
          position: relative;

          z-index: 2;

          display: flex;
          align-items: center;

          gap: 4px;

          list-style: none;

          margin: 0;
          padding: 0;
        }


        .nav-links li {
          position: relative;
        }


        .nav-links a {
          position: relative;

          display: flex;
          align-items: center;

          gap: 7px;

          padding: 10px 13px;

          color: #9eabc8;

          text-decoration: none;

          border-radius: 10px;

          font-size: 13px;
          font-weight: 700;

          overflow: hidden;

          transition:
            color 0.3s ease,
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }


        /* =========================================
           LINK SHINE
        ========================================= */

        .nav-links a::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 70%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(255,255,255,0.15),
              transparent
            );

          transform: skewX(-20deg);

          transition: 0.6s;
        }


        .nav-links a:hover::before {
          left: 140%;
        }


        .nav-links a:hover {
          color: white;

          background:
            rgba(0, 229, 255, 0.07);

          transform:
            translateY(-3px);

          box-shadow:
            0 10px 25px rgba(0, 229, 255, 0.08);
        }


        /* =========================================
           ICON
        ========================================= */

        .nav-icon {
          font-size: 13px;

          opacity: 0.75;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }


        .nav-links a:hover .nav-icon {
          transform:
            translateY(-2px)
            scale(1.15);

          opacity: 1;
        }


        /* =========================================
           ACTIVE LINK
        ========================================= */

        .nav-links a.active {
          color: #ffffff;

          background:
            linear-gradient(
              135deg,
              rgba(0, 229, 255, 0.13),
              rgba(168, 85, 247, 0.08)
            );

          box-shadow:
            inset 0 0 20px rgba(0, 229, 255, 0.05),
            0 8px 25px rgba(0, 229, 255, 0.08);
        }


        .nav-links a.active::after {
          content: "";

          position: absolute;

          left: 12px;
          right: 12px;

          bottom: 3px;

          height: 2px;

          border-radius: 20px;

          background:
            linear-gradient(
              90deg,
              #00e5ff,
              #a855f7
            );

          box-shadow:
            0 0 10px #00e5ff;

          animation:
            activeLine 0.4s ease;
        }


        @keyframes activeLine {

          from {
            transform: scaleX(0);
            opacity: 0;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }

        }


        /* =========================================
           ACTIVE DOT
        ========================================= */

        .active-dot {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #00e5ff;

          box-shadow:
            0 0 8px #00e5ff;

          animation:
            dotPulse 1.5s infinite;
        }


        @keyframes dotPulse {

          0%,
          100% {
            opacity: 0.5;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.2);
          }

        }


        /* =========================================
           PROFILE BUTTON
        ========================================= */

        .profile-link {
          color: #00e5ff !important;

          border:
            1px solid rgba(0, 229, 255, 0.25);

          background:
            rgba(0, 229, 255, 0.045);
        }


        .profile-link:hover {
          border-color:
            rgba(0, 229, 255, 0.5);

          box-shadow:
            0 0 20px rgba(0, 229, 255, 0.12);
        }


        /* =========================================
           HAMBURGER
        ========================================= */

        .hamburger {
          position: relative;

          z-index: 1100;

          display: none;

          width: 43px;
          height: 43px;

          padding: 9px;

          border: none;

          border-radius: 12px;

          background:
            rgba(0, 229, 255, 0.07);

          cursor: pointer;
        }


        .hamburger span {
          display: block;

          width: 24px;
          height: 2px;

          margin: 5px auto;

          border-radius: 10px;

          background: #00e5ff;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }


        .hamburger.open span:nth-child(1) {
          transform:
            translateY(7px)
            rotate(45deg);
        }


        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }


        .hamburger.open span:nth-child(3) {
          transform:
            translateY(-7px)
            rotate(-45deg);
        }


        /* =========================================
           SPACER
        ========================================= */

        .navbar-spacer {
          width: 100%;
          height: 82px;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1100px) {

          .navbar {
            padding: 0 25px;
          }


          .nav-links {
            gap: 1px;
          }


          .nav-links a {
            padding: 9px 8px;
            font-size: 12px;
          }


          .nav-icon {
            display: none;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 850px) {

          .navbar {
            height: 70px;

            padding: 0 18px;

            /*
              IMPORTANT:
              Dropdown ko navbar ke bahar visible
              rehne dena hai.
            */
            overflow: visible;
          }


          .navbar-spacer {
            height: 70px;
          }


          /* Hamburger show */
          .hamburger {
            display: block;
          }


          /* =====================================
             MOBILE DROPDOWN
          ===================================== */

          .nav-links {

            position: absolute;

            top: 78px;

            left: 15px;
            right: 15px;

            /*
              IMPORTANT:
              Dropdown hamburger/navbar ke upar
              properly visible rahega.
            */
            z-index: 1050;

            display: flex;

            flex-direction: column;

            align-items: stretch;

            gap: 5px;

            padding: 12px;

            border-radius: 20px;

            background:
              linear-gradient(
                145deg,
                rgba(8, 14, 43, 0.98),
                rgba(4, 8, 27, 0.98)
              );

            border:
              1px solid rgba(0, 229, 255, 0.18);

            box-shadow:
              0 25px 60px rgba(0,0,0,0.5),
              0 0 40px rgba(0,229,255,0.05);

            backdrop-filter: blur(20px);

            /*
              Initially hidden.
            */
            opacity: 0;

            visibility: hidden;

            transform:
              translateY(-20px)
              scale(0.96);

            transform-origin: top;

            transition:
              opacity 0.3s ease,
              transform 0.3s ease,
              visibility 0.3s;
          }


          /*
            Hamburger click ke baad React
            "show" class add karega.
          */
          .nav-links.show {

            opacity: 1;

            visibility: visible;

            transform:
              translateY(0)
              scale(1);
          }


          /* =====================================
             MOBILE LINK ANIMATION
          ===================================== */

          .nav-links li {

            width: 100%;

            opacity: 0;

            transform:
              translateX(-15px);
          }


          .nav-links.show li {

            animation:
              mobileLink 0.35s ease forwards;
          }


          .nav-links.show li:nth-child(1) {
            animation-delay: 0.05s;
          }


          .nav-links.show li:nth-child(2) {
            animation-delay: 0.08s;
          }


          .nav-links.show li:nth-child(3) {
            animation-delay: 0.11s;
          }


          .nav-links.show li:nth-child(4) {
            animation-delay: 0.14s;
          }


          .nav-links.show li:nth-child(5) {
            animation-delay: 0.17s;
          }


          .nav-links.show li:nth-child(6) {
            animation-delay: 0.20s;
          }


          .nav-links.show li:nth-child(7) {
            animation-delay: 0.23s;
          }


          @keyframes mobileLink {

            to {
              opacity: 1;
              transform:
                translateX(0);
            }

          }


          /* Mobile links full width */
          .nav-links a {

            width: 100%;

            justify-content: center;

            padding: 12px;

            font-size: 14px;
          }


          /* Mobile par icons visible */
          .nav-icon {
            display: inline;
          }

        }


        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .logo-text strong {
            font-size: 16px;
          }


          .logo-text small {
            display: none;
          }


          .logo-orbit {
            width: 46px;
            height: 46px;
          }


          .logo-mark {
            width: 44px;
            height: 44px;

            border-radius: 13px;
          }


          .logo-mark span {
            font-size: 16px;
          }


          .hamburger {
            width: 40px;
            height: 40px;
          }

        }

      `}</style>
    </>
  );
}



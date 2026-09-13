import { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";

export default function About() {
  // Scroll ki current percentage store karta hai.
  // Iska use top par scroll progress bar dikhane ke liye hota hai.
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    // Page scroll hone par yeh function chalega.
    const update = () => {
      // Page ki total scrollable height calculate karta hai.
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      // Scroll position ko 0-100 percentage me convert karta hai.
      setScroll(
        max > 0 ? (window.scrollY / max) * 100 : 0
      );
    };

    // Page load hote hi initial scroll position calculate karta hai.
    update();

    // Scroll event ko listen karta hai.
    window.addEventListener("scroll", update, {
      passive: true,
    });

    // Component remove hone par event listener remove karta hai.
    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <main className="about-page">

      {/* Neeche diya gaya CSS isi component ke andar apply hoga. */}
      <style>{styles}</style>

      {/* 
        Scroll ke according iski width change hoti hai.
        Example: agar 50% page scroll hua hai to width 50% hogi.
      */}
      <div
        className="scroll-progress"
        style={{
          width: `${scroll}%`,
        }}
      />

      {/* Common Navbar component */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        <div className="hero-copy">

          {/* Small heading / label */}
          <span className="badge">
            ✦ ABOUT CAREER VISION
          </span>

          {/* Main page heading */}
          <h1>
            Your Career.
            <br />

            <em>Your Future.</em>
            <br />

            Your Vision.
          </h1>

          {/* Hero section description */}
          <p>
            Discover the direction that fits you. Career Vision helps
            students explore opportunities, understand their strengths
            and take the next step with confidence.
          </p>

          {/* Action buttons */}
          <div className="actions">

            {/* Quiz page par le jaata hai */}
            <a href="/quiz" className="primary">
              Find My Career →
            </a>

            {/* Career details page par le jaata hai */}
            <a
              href="/career-details"
              className="secondary"
            >
              Explore Careers
            </a>

          </div>
        </div>

        {/* ================= ORBIT DESIGN ================= */}
        <div className="orbit">

          {/* Center icon */}
          <div className="core">
            🎯
          </div>

          {/* Floating career points */}
          <div className="orb one">
            🎓
            <small>Choose your path</small>
          </div>

          <div className="orb two">
            💡
            <small>Know yourself</small>
          </div>

          <div className="orb three">
            🚀
            <small>Build your future</small>
          </div>

        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="section two-col">

        <div>

          <span className="badge">
            WHO WE ARE
          </span>

          <h2>
            Guiding You Towards{" "}
            <em>The Right Career.</em>
          </h2>

          <p className="lead">
            Career Vision is a student-focused platform designed
            to make career selection clearer, simpler and more
            meaningful.
          </p>

          <p>
            Explore career options, courses and opportunities
            based on your interests, education and goals—all in
            one place.
          </p>

          {/* Features */}
          <div className="feature-grid">

            <Feature
              icon="🎯"
              title="Personalized"
              text="Guidance based on your profile"
            />

            <Feature
              icon="📚"
              title="Explore"
              text="Courses and opportunities"
            />

            <Feature
              icon="⚡"
              title="Future Ready"
              text="Plan your next step"
            />

          </div>
        </div>

        {/* ================= VISION CARD ================= */}
        <div className="vision-card">

          <span className="mini-title">
            CAREER VISION ✦
          </span>

          <div className="big-icon">
            🧭
          </div>

          <h3>
            Discover Your Potential
          </h3>

          <p>
            Understand your strengths and turn possibilities
            into a clear direction.
          </p>

          <div className="journey">

            <div>
              <span>Your Journey</span>
              <b>Start →</b>
            </div>

            {/* Progress bar */}
            <div className="bar">
              <i />
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="section center">

        <span className="badge">
          OUR MISSION
        </span>

        <h2>
          Making Career Choices{" "}
          <em>Simple & Clear.</em>
        </h2>

        <p className="intro">
          From confusion to clarity—one confident step at a time.
        </p>

        <div className="mission-grid">

          <Mission
            icon="🔍"
            title="Discover"
            text="Explore possibilities that match your interests."
          />

          <Mission
            icon="🧠"
            title="Understand"
            text="Know your strengths before choosing a direction."
          />

          <Mission
            icon="🗺️"
            title="Plan"
            text="Create a roadmap for your next career milestone."
          />

        </div>
      </section>

      {/* ================= ROADMAP ================= */}
      <section className="roadmap-section">

        <span className="badge">
          YOUR JOURNEY
        </span>

        <h2>
          A Simple Roadmap To{" "}
          <em>Your Next Big Step.</em>
        </h2>

        <div className="roadmap">

          <Step
            n="01"
            title="Discover"
            text="Learn what excites you."
          />

          <Step
            n="02"
            title="Explore"
            text="Compare careers and courses."
          />

          <Step
            n="03"
            title="Decide"
            text="Choose your best direction."
          />

          <Step
            n="04"
            title="Grow"
            text="Start building your future."
          />

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">

        <h2>
          Small Decisions.{" "}
          <em>Big Futures.</em>
        </h2>

        <div className="stats">

          <Stat
            value="100%"
            label="Student Focused"
          />

          <Stat
            value="24/7"
            label="Explore Anytime"
          />

          <Stat
            value="∞"
            label="Career Possibilities"
          />

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="cta">

        <div>

          <span className="badge">
            READY TO BEGIN?
          </span>

          <h2>
            Your future won't wait.
            <br />
            <em>Why should you?</em>
          </h2>

          <a
            href="/quiz"
            className="primary"
          >
            Start Your Career Journey →
          </a>

        </div>
      </section>

    </main>
  );
}


/* =========================================================
   FEATURE COMPONENT
   ========================================================= */

function Feature({ icon, title, text }) {
  return (
    <div className="feature">

      <span>
        {icon}
      </span>

      <div>

        <b>
          {title}
        </b>

        <small>
          {text}
        </small>

      </div>
    </div>
  );
}


/* =========================================================
   MISSION COMPONENT
   ========================================================= */

function Mission({ icon, title, text }) {
  return (
    <article className="mission">

      <span>
        {icon}
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </article>
  );
}


/* =========================================================
   ROADMAP STEP COMPONENT
   ========================================================= */

function Step({ n, title, text }) {
  return (
    <article className="step">

      <strong>
        {n}
      </strong>

      <div>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </article>
  );
}


/* =========================================================
   STAT COMPONENT
   ========================================================= */

function Stat({ value, label }) {
  return (
    <div className="stat">

      <b>
        {value}
      </b>

      <span>
        {label}
      </span>

    </div>
  );
}


/* =========================================================
   ABOUT PAGE CSS
   Har property ko alag line me rakha gaya hai.
   Comments se pata chalega ki property kyu use hui hai.
   ========================================================= */

const styles = `

/* ---------------------------------------------------------
   GLOBAL BOX SIZING
   --------------------------------------------------------- */

/*
  Width aur height ke calculation me padding aur border
  ko bhi include karta hai.
*/
* {
  box-sizing: border-box;
}


/*
  Anchor/link click karne par page smoothly scroll karega.
*/
html {
  scroll-behavior: smooth;
}


/*
  Body ka default margin remove kiya.
  Dark background aur overall font set kiya.
*/
body {
  margin: 0;
  background: #050817;
  color: #f7f8ff;
  font-family: Inter, system-ui, Arial, sans-serif;
}


/* ---------------------------------------------------------
   MAIN ABOUT PAGE
   --------------------------------------------------------- */

/*
  Puri About page ki minimum height screen jitni hogi.
*/
.about-page {
  min-height: 100vh;

  /*
    Page ke bahar nikalne wale content ko hide karta hai.
  */
  overflow: hidden;

  /*
    Purple glow + dark background.
  */
  background:
    radial-gradient(
      circle at 10% 5%,
      #211b54 0,
      transparent 30%
    ),
    #050817;
}


/* ---------------------------------------------------------
   SCROLL PROGRESS BAR
   --------------------------------------------------------- */

/*
  Page ke top par fixed progress bar.
*/
.scroll-progress {
  position: fixed;

  top: 0;
  left: 0;

  /*
    Bar ki initial height.
  */
  height: 3px;

  /*
    Navbar aur other elements ke upar dikhane ke liye.
  */
  z-index: 1000;

  /*
    Purple se cyan gradient.
  */
  background:
    linear-gradient(
      90deg,
      #806cff,
      #48dfff
    );

  /*
    Glow effect.
  */
  box-shadow:
    0 0 18px #48dfff;
}


/* ---------------------------------------------------------
   HERO SECTION
   --------------------------------------------------------- */

/*
  Hero ko minimum screen height di gayi hai.
*/
.hero {
  min-height: 100vh;

  /*
    Top, right, bottom, left spacing.
  */
  padding: 140px 9% 90px;

  /*
    Content ko vertically center karta hai.
  */
  display: flex;

  align-items: center;

  /*
    Left aur right content ko opposite sides par rakhta hai.
  */
  justify-content: space-between;

  /*
    Hero content aur orbit ke beech gap.
  */
  gap: 60px;

  /*
    Absolute elements ke liye reference point.
  */
  position: relative;

  /*
    Right side par blue glow.
  */
  background:
    radial-gradient(
      circle at 80% 50%,
      #1b315a99,
      transparent 34%
    );
}


/*
  Hero ka left text area.
*/
.hero-copy {
  max-width: 690px;

  /*
    Orbit ke elements ke upar text dikhane ke liye.
  */
  position: relative;

  z-index: 2;
}


/* ---------------------------------------------------------
   BADGE
   --------------------------------------------------------- */

/*
  Small rounded label.
*/
.badge {
  display: inline-block;

  /*
    Badge ke andar spacing.
  */
  padding: 9px 15px;

  /*
    Thin border.
  */
  border: 1px solid #8e83ff44;

  /*
    999px se pill shape ban jati hai.
  */
  border-radius: 999px;

  /*
    Transparent purple background.
  */
  background: #7668ff14;

  /*
    Text color.
  */
  color: #c8c3ff;

  /*
    Chhota text.
  */
  font-size: 11px;

  /*
    Text ko bold banata hai.
  */
  font-weight: 800;

  /*
    Letters ke beech spacing.
  */
  letter-spacing: 1.5px;
}


/* ---------------------------------------------------------
   HEADINGS
   --------------------------------------------------------- */

/*
  h1 aur h2 ka default margin control.
*/
h1,
h2 {
  margin: 20px 0;

  /*
    Line spacing compact rakhta hai.
  */
  line-height: 1.05;

  /*
    Heading ko modern look deta hai.
  */
  letter-spacing: -2px;
}


/*
  Main hero heading responsive rahegi.
*/
h1 {
  font-size: clamp(
    52px,
    7vw,
    86px
  );
}


/*
  Other large headings responsive rahengi.
*/
h2 {
  font-size: clamp(
    38px,
    5vw,
    64px
  );
}


/*
  em ke andar gradient text banaya gaya hai.
*/
em {
  font-style: normal;

  /*
    Gradient text ko inline block karta hai.
  */
  display: inline-block;

  background:
    linear-gradient(
      90deg,
      #9a83ff,
      #48ddff
    );

  /*
    Gradient ko text ke andar clip karta hai.
  */
  -webkit-background-clip: text;
  background-clip: text;

  /*
    Normal text color transparent rakhta hai
    taaki background gradient visible ho.
  */
  color: transparent;
}


/* ---------------------------------------------------------
   HERO PARAGRAPH
   --------------------------------------------------------- */

.hero p,
.section p {
  color: #aeb9d3;

  /*
    Paragraph ko readable banata hai.
  */
  font-size: 17px;

  /*
    Lines ke beech proper space.
  */
  line-height: 1.8;
}


/*
  Lead paragraph ko normal paragraph se thoda bada rakha.
*/
.lead {
  color: #e0e6f7 !important;
  font-size: 19px !important;
}


/* ---------------------------------------------------------
   ACTION BUTTONS
   --------------------------------------------------------- */

.actions {
  display: flex;

  /*
    Buttons ke beech distance.
  */
  gap: 14px;

  /*
    Heading/paragraph se button ka distance.
  */
  margin-top: 32px;

  /*
    Chhoti screen par buttons next line me aa sakein.
  */
  flex-wrap: wrap;
}


/*
  Dono buttons ki common styling.
*/
.primary,
.secondary {
  padding: 15px 25px;

  /*
    Pill-shaped button.
  */
  border-radius: 999px;

  /*
    Link ka underline remove.
  */
  text-decoration: none;

  /*
    Button text bold.
  */
  font-weight: 800;

  /*
    Hover animation smooth.
  */
  transition: 0.3s;
}


/*
  Primary button ka gradient.
*/
.primary {
  color: white;

  background:
    linear-gradient(
      90deg,
      #705dff,
      #32ccff
    );

  /*
    Button ke around glow.
  */
  box-shadow:
    0 14px 38px #4c7cff44;
}


/*
  Secondary button.
*/
.secondary {
  color: #dce9ff;

  border: 1px solid #4bdcff66;

  /*
    Very light transparent background.
  */
  background: #ffffff08;
}


/*
  Mouse le jaane par button thoda upar move karega.
*/
.primary:hover,
.secondary:hover {
  transform: translateY(-5px);
}


/* ---------------------------------------------------------
   ORBIT
   --------------------------------------------------------- */

.orbit {
  width: 430px;
  height: 430px;

  /*
    Desktop par orbit screen ko unnecessarily large
    na banaye.
  */
  max-width: 40vw;

  /*
    Circular border.
  */
  border: 1px solid #8e9fff35;

  border-radius: 50%;

  /*
    Floating items ko position karne ke liye.
  */
  position: relative;

  /*
    Center item ko center me rakhta hai.
  */
  display: grid;
  place-items: center;

  /*
    Center me purple radial glow.
  */
  background:
    radial-gradient(
      circle,
      #695cff33,
      transparent 62%
    );

  /*
    Inner aur outer glow.
  */
  box-shadow:
    inset 0 0 70px #48dcff0d,
    0 0 90px #735fff22;

  /*
    Orbit ko continuously halka up/down move karta hai.
  */
  animation:
    float 6s ease-in-out infinite;
}


/*
  Orbit ka center target.
*/
.core {
  width: 150px;
  height: 150px;

  display: grid;
  place-items: center;

  border-radius: 42px;

  font-size: 65px;

  /*
    Transparent glass effect.
  */
  background: #ffffff0b;

  /*
    Soft border.
  */
  border: 1px solid #fff2;

  /*
    Glow around center.
  */
  box-shadow:
    0 0 60px #655cff44;

  /*
    Center box ko slightly rotate karta hai.
  */
  transform: rotate(-8deg);
}


/* ---------------------------------------------------------
   FLOATING ORB ITEMS
   --------------------------------------------------------- */

.orb {
  position: absolute;

  /*
    Icon aur text ko ek line me rakhta hai.
  */
  display: flex;

  align-items: center;

  gap: 9px;

  padding: 12px 15px;

  border: 1px solid #ffffff22;

  border-radius: 18px;

  /*
    Dark glass background.
  */
  background: #0b1231cc;

  /*
    Glass blur effect.
  */
  backdrop-filter: blur(12px);

  font-size: 22px;

  /*
    Card ko depth dene ke liye shadow.
  */
  box-shadow:
    0 15px 35px #0005;
}


/*
  Orb ke andar small description.
*/
.orb small {
  font-size: 11px;
  color: #aeb8d1;
}


/*
  First orb ki position.
*/
.one {
  top: 30px;
  left: -35px;
}


/*
  Second orb ki position.
*/
.two {
  bottom: 45px;
  left: -55px;
}


/*
  Third orb right side par.
*/
.three {
  right: -55px;
  top: 45%;
}


/* ---------------------------------------------------------
   COMMON SECTION
   --------------------------------------------------------- */

.section {
  padding: 115px 9%;
  position: relative;
}


/* ---------------------------------------------------------
   TWO COLUMN SECTION
   --------------------------------------------------------- */

.two-col {
  display: grid;

  /*
    Left column ko right column se bada rakha.
  */
  grid-template-columns: 1.2fr 0.8fr;

  gap: 80px;

  /*
    Dono columns ko vertically center.
  */
  align-items: center;

  background: #08101f;
}


/* ---------------------------------------------------------
   FEATURE GRID
   --------------------------------------------------------- */

.feature-grid {
  display: grid;

  /*
    3 feature cards ek row me.
  */
  grid-template-columns:
    repeat(3, 1fr);

  gap: 13px;

  margin-top: 35px;
}


/*
  Individual feature card.
*/
.feature {
  padding: 18px 14px;

  border: 1px solid #ffffff18;

  border-radius: 18px;

  display: flex;

  gap: 10px;

  align-items: center;

  background: #ffffff05;

  /*
    Hover animation smooth.
  */
  transition: 0.3s;
}


/*
  Feature card hover.
*/
.feature:hover,
.mission:hover,
.step:hover {
  transform: translateY(-8px);

  border-color: #766cff;

  background: #7868ff0d;
}


/*
  Feature icon.
*/
.feature > span {
  font-size: 24px;
}


/*
  Feature title aur description ko block me rakhta hai.
*/
.feature b,
.feature small {
  display: block;
}


/*
  Feature description.
*/
.feature small {
  font-size: 11px;
  color: #94a0bb;
  margin-top: 4px;
}


/* ---------------------------------------------------------
   VISION CARD
   --------------------------------------------------------- */

.vision-card {
  padding: 32px;

  border-radius: 30px;

  border: 1px solid #9a90ff3b;

  /*
    Card me diagonal purple-to-dark gradient.
  */
  background:
    linear-gradient(
      145deg,
      #6d5eff24,
      #0b1330d9
    );

  /*
    Card ko depth deta hai.
  */
  box-shadow:
    0 30px 80px #0007;

  /*
    Hover smooth.
  */
  transition: 0.4s;
}


/*
  Hover par card slightly rotate aur upar move hoga.
*/
.vision-card:hover {
  transform:
    rotate(-1deg)
    translateY(-10px);
}


/*
  Card ka small heading.
*/
.mini-title {
  font-size: 11px;
  color: #aab7d0;
  letter-spacing: 1px;
}


/*
  Large compass icon.
*/
.big-icon {
  width: 95px;
  height: 95px;

  margin: 35px auto 20px;

  display: grid;
  place-items: center;

  border-radius: 28px;

  font-size: 45px;

  background: #ffffff0b;

  border: 1px solid #fff2;
}


/*
  Vision card heading center.
*/
.vision-card h3 {
  text-align: center;
  font-size: 26px;
}


/*
  Vision card paragraph center.
*/
.vision-card p {
  text-align: center;
  font-size: 14px;
}


/* ---------------------------------------------------------
   JOURNEY PROGRESS
   --------------------------------------------------------- */

.journey {
  margin-top: 25px;

  padding: 17px;

  border-radius: 18px;

  background: #0003;
}


/*
  Journey heading aur Start text ko opposite sides par.
*/
.journey > div:first-child {
  display: flex;

  justify-content: space-between;

  font-size: 12px;
}


/*
  Start text ko cyan color.
*/
.journey b {
  color: #57ddff;
}


/*
  Progress bar ka outer container.
*/
.bar {
  height: 8px;

  margin-top: 12px;

  border-radius: 9px;

  background: #fff1;

  /*
    Bar se bahar progress na nikle.
  */
  overflow: hidden;
}


/*
  Actual progress indicator.
*/
.bar i {
  display: block;

  width: 72%;

  height: 100%;

  background:
    linear-gradient(
      90deg,
      #725fff,
      #4edcff
    );
}


/* ---------------------------------------------------------
   CENTER SECTION
   --------------------------------------------------------- */

.center {
  text-align: center;

  /*
    Center me soft purple glow.
  */
  background:
    radial-gradient(
      circle at center,
      #5140a316,
      transparent 55%
    );
}


/*
  Intro text ki maximum width.
*/
.intro {
  max-width: 650px;

  /*
    Horizontal auto margin se center.
  */
  margin: 0 auto;
}


/* ---------------------------------------------------------
   MISSION GRID
   --------------------------------------------------------- */

.mission-grid {
  max-width: 1100px;

  margin: 48px auto 0;

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}


/*
  Mission card.
*/
.mission {
  padding: 32px 25px;

  border-radius: 25px;

  border: 1px solid #ffffff18;

  background: #ffffff05;

  transition: 0.35s;
}


/*
  Mission icon.
*/
.mission span {
  font-size: 34px;
}


/*
  Mission heading.
*/
.mission h3 {
  font-size: 22px;

  margin: 16px 0 8px;
}


/*
  Mission description.
*/
.mission p {
  font-size: 14px !important;

  margin: 0;
}


/* ---------------------------------------------------------
   ROADMAP SECTION
   --------------------------------------------------------- */

.roadmap-section {
  padding: 110px 9%;

  background: #070d1d;

  text-align: center;
}


/*
  Roadmap cards ko 4 columns me arrange karta hai.
*/
.roadmap {
  max-width: 1100px;

  margin: 55px auto 0;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}


/*
  Individual roadmap step.
*/
.step {
  text-align: left;

  padding: 25px;

  border: 1px solid #ffffff17;

  border-radius: 22px;

  background: #ffffff04;

  transition: 0.35s;
}


/*
  Number box.
*/
.step strong {
  display: inline-grid;

  place-items: center;

  width: 45px;

  height: 45px;

  border-radius: 14px;

  /*
    Number ke liye gradient background.
  */
  background:
    linear-gradient(
      135deg,
      #6d5dff,
      #3bcfff
    );

  font-size: 13px;
}


/*
  Step title.
*/
.step h3 {
  margin: 20px 0 8px;
}


/*
  Step description.
*/
.step p {
  font-size: 13px !important;

  margin: 0;
}


/* ---------------------------------------------------------
   STATS SECTION
   --------------------------------------------------------- */

.stats-section {
  padding: 100px 9%;

  text-align: center;

  /*
    Stats section ka background gradient.
  */
  background:
    linear-gradient(
      135deg,
      #080c1d,
      #092344
    );
}


/*
  Stats ko 3 columns me arrange karta hai.
*/
.stats {
  max-width: 1000px;

  margin: 48px auto 0;

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}


/*
  Individual stat card.
*/
.stat {
  padding: 30px;

  border-radius: 24px;

  border: 1px solid #4cddff28;

  background: #ffffff05;
}


/*
  Large statistic number.
*/
.stat b {
  display: block;

  font-size: 54px;

  /*
    Number ke andar gradient.
  */
  background:
    linear-gradient(
      135deg,
      #fff,
      #56dcff
    );

  -webkit-background-clip: text;

  color: transparent;
}


/*
  Stat label.
*/
.stat span {
  color: #aab6ce;
}


/* ---------------------------------------------------------
   FINAL CTA SECTION
   --------------------------------------------------------- */

.cta {
  padding: 110px 9%;

  text-align: center;

  /*
    Last section me large purple glow.
  */
  background:
    radial-gradient(
      circle,
      #6754b52b,
      transparent 55%
    ),
    #050817;
}


/*
  CTA heading ko thoda larger.
*/
.cta h2 {
  font-size: clamp(
    42px,
    6vw,
    75px
  );
}


/* ---------------------------------------------------------
   FLOAT ANIMATION
   --------------------------------------------------------- */

/*
  Orbit continuously upar aur neeche move karega.
*/
@keyframes float {

  /*
    Starting position.
  */
  0%,
  100% {
    transform: translateY(0);
  }

  /*
    Middle point par 16px upar.
  */
  50% {
    transform: translateY(-16px);
  }
}


/* =========================================================
   TABLET / SMALL LAPTOP RESPONSIVE DESIGN
   ========================================================= */

@media (max-width: 900px) {

  /*
    Hero ke elements vertically aa jayenge.
  */
  .hero {
    flex-direction: column;

    text-align: center;
  }


  /*
    Orbit ko screen ke 80% tak allow kiya.
  */
  .orbit {
    max-width: 80vw;
  }


  /*
    Two-column section single column ho jayega.
  */
  .two-col {
    grid-template-columns: 1fr;

    text-align: center;
  }


  /*
    Feature, mission, roadmap aur stats
    mobile/tablet par single column.
  */
  .feature-grid,
  .mission-grid,
  .roadmap,
  .stats {
    grid-template-columns: 1fr;

    max-width: 560px;

    margin-left: auto;

    margin-right: auto;
  }


  /*
    Feature card ka text left aligned rakha.
  */
  .feature {
    text-align: left;
  }


  /*
    Hero buttons center me.
  */
  .actions {
    justify-content: center;
  }
}


/* =========================================================
   MOBILE RESPONSIVE DESIGN
   ========================================================= */

@media (max-width: 560px) {

  /*
    Chhoti screen par horizontal padding kam.
  */
  .hero,
  .section,
  .roadmap-section,
  .stats-section,
  .cta {
    padding-left: 22px;

    padding-right: 22px;
  }


  /*
    Hero ke top ka space mobile navbar ke liye.
  */
  .hero {
    padding-top: 120px;
  }


  /*
    Mobile par orbit chhota.
  */
  .orbit {
    width: 280px;

    height: 280px;
  }


  /*
    Center icon ko mobile ke liye chhota.
  */
  .core {
    width: 105px;

    height: 105px;

    font-size: 48px;
  }


  /*
    Floating orbs ko mobile par compact.
  */
  .orb {
    font-size: 17px;

    padding: 9px;
  }


  /*
    Mobile par orb description hide.
  */
  .orb small {
    display: none;
  }


  /*
    First orb ko screen ke andar rakhne ke liye.
  */
  .one {
    left: -15px;
  }


  /*
    Second orb ki mobile position.
  */
  .two {
    left: -20px;
  }


  /*
    Third orb ki mobile position.
  */
  .three {
    right: -20px;
  }


  /*
    Mobile par buttons full width.
  */
  .primary,
  .secondary {
    width: 100%;

    text-align: center;
  }


  /*
    Buttons ka container bhi full width.
  */
  .actions {
    width: 100%;
  }
}

`;
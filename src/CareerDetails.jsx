import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import { api } from "./api.js";
// ------------------------------------------------------------------
// STYLES
// ------------------------------------------------------------------
const styles = `

/* ================= NEXT-LEVEL MOTION SYSTEM ================= */
html{scroll-behavior:smooth}
.careerdetails-page{position:relative;overflow:hidden;background:#06142d}
.careerdetails-page:before,.careerdetails-page:after{content:"";position:fixed;width:42vw;height:42vw;border-radius:50%;filter:blur(90px);opacity:.16;pointer-events:none;z-index:0;animation:orbFloat 16s ease-in-out infinite}
.careerdetails-page:before{top:-18vw;left:-12vw;background:#00d9ff}
.careerdetails-page:after{right:-15vw;bottom:-20vw;background:#7655ff;animation-delay:-8s}
@keyframes orbFloat{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(8vw,6vh) scale(1.18)}}
.careerdetails-page>*{position:relative;z-index:1}

/* reveal on scroll */
.careerdetails-page .motion-reveal{opacity:0;transform:translateY(50px) scale(.98);filter:blur(8px);transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1),filter .75s ease}
.careerdetails-page .motion-reveal.in-view{opacity:1;transform:none;filter:none}
.careerdetails-page .motion-card{opacity:0;transform:translateY(34px) rotateX(8deg);transition:opacity .65s ease,transform .7s cubic-bezier(.16,1,.3,1),box-shadow .35s ease,border-color .35s ease}

/* stagger cards */
.careerdetails-page .motion-card.in-view{opacity:1;transform:none}
.careerdetails-page .cat-card,.careerdetails-page .college-card,.careerdetails-page .course-card{
position:relative;overflow:hidden;transform-style:preserve-3d;will-change:transform;
border:1px solid rgba(78,210,255,.16)!important;
background:linear-gradient(145deg,rgba(16,42,84,.94),rgba(6,20,48,.9))!important;
transition:transform .38s cubic-bezier(.2,.8,.2,1),box-shadow .38s ease,border-color .38s ease!important}
.careerdetails-page .cat-card:before,.careerdetails-page .college-card:before,.careerdetails-page .course-card:before{
content:"";position:absolute;inset:-2px;background:linear-gradient(115deg,transparent 28%,rgba(255,255,255,.13) 47%,transparent 62%);
transform:translateX(-120%) skewX(-15deg);transition:transform .8s ease;pointer-events:none}
.careerdetails-page .cat-card:hover:before,.careerdetails-page .college-card:hover:before,.careerdetails-page .course-card:hover:before{transform:translateX(130%) skewX(-15deg)}
.careerdetails-page .cat-card:hover,.careerdetails-page .college-card:hover,.careerdetails-page .course-card:hover{
transform:translateY(-10px) rotateX(2deg)!important;border-color:rgba(0,217,255,.6)!important;
box-shadow:0 26px 55px rgba(0,0,0,.4),0 0 35px rgba(0,200,255,.13)!important}
.careerdetails-page .college-card{animation:none}
.careerdetails-page .college-card img{transition:transform .7s cubic-bezier(.16,1,.3,1),filter .5s ease}
.careerdetails-page .college-card:hover img{transform:scale(1.12);filter:saturate(1.15) brightness(1.08)}
.careerdetails-page .college-card h3,.careerdetails-page .college-card h4{transition:transform .35s ease,color .35s ease}
.careerdetails-page .college-card:hover h3,.careerdetails-page .college-card:hover h4{transform:translateX(7px)}

@keyframes gradientMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.careerdetails-page .btn{
position:relative;overflow:hidden;background-size:200% 200%;animation:gradientMove 5s ease infinite;
transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s ease!important}
.careerdetails-page .btn:before{content:"";position:absolute;width:20px;height:160%;top:-30%;left:-60px;background:rgba(255,255,255,.25);transform:rotate(25deg);transition:left .55s ease}
.careerdetails-page .btn:hover:before{left:120%}
.careerdetails-page .btn:hover{transform:translateY(-4px) scale(1.025)!important;box-shadow:0 16px 32px rgba(0,170,255,.28)!important}
.careerdetails-page .btn:active{transform:scale(.96)!important}

.careerdetails-page .tag{display:inline-block;transition:transform .25s ease,box-shadow .25s ease}
.careerdetails-page .tag:hover{transform:translateY(-4px) rotate(-1deg);box-shadow:0 8px 18px rgba(0,0,0,.2)}

.careerdetails-page .modal{backdrop-filter:blur(14px);background:rgba(1,8,25,.68)!important}
.careerdetails-page .modal-content{animation:modalEnter .45s cubic-bezier(.16,1,.3,1) both}
@keyframes modalEnter{from{opacity:0;transform:translateY(45px) scale(.88);filter:blur(10px)}to{opacity:1;transform:none;filter:none}}

.careerdetails-page input,.careerdetails-page select{transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.careerdetails-page input:focus,.careerdetails-page select:focus{transform:translateY(-3px);box-shadow:0 14px 30px rgba(0,0,0,.25),0 0 0 4px rgba(0,217,255,.1)}

@media(prefers-reduced-motion:reduce){
.careerdetails-page *,.careerdetails-page:before,.careerdetails-page:after{animation:none!important;transition:none!important}
.careerdetails-page .motion-reveal,.careerdetails-page .motion-card{opacity:1;transform:none;filter:none}
}

/* ===== Merged from Style.css ===== */
html{
    scroll-behaviour:smooth;
}

body
{
    background:#081b3a;
}

nav ul li a{
        color:#fff;
        text-decoration:none;
        font-weight:20px;
        font: size 20px;
    }

.logo-area h2{
        color:#ff0080;
        margin-left:10px;
       }

nav ul li a{
            color:white;
            text-decoration:none;
            font-size:24px;
            transition:.3s;
        }

nav ul li a:hover{
            color:#00c3ff
        }

.hero-text h1{
    font-size:55px;
    color:white;
    margin-bottom:20px;
}

.hero-text p{
    color:#d8d8d8;
    font-size:20px;
    margin-bottom:30px;
    line-height:30px;
}

.search-box{
    margin-top:40px;
}

.search-box input{
    width:380px;
    padding:15px;
    border:none;
    border-radius:8px;
    font-size:16px;
}

.search-box button{
    padding:15px 20px;
    border:none;
    background:#0099ff;
    color:white;
    border-radius:8px;
    cursor:pointer;
}

.hero-image img{
    width:100px;
    max-height:200px;
    height:auto;
    object-fit:contain;
}

.career-form h2{
    text-align:center;
    color:#0d3b8e;
    margin-bottom:10px;
}

.career-form p{
    text-align:center;
    margin-bottom:25px;
}

.career-form input,
.career-form select{
    width:100%;
    padding:12px;
    margin-top:8px;
    border:1px solid #ccc;
    border-radius:8px;
    font-size:16px;
}

.career-form button{
    width:100%;
    padding:14px;
    background:#00C3FF;
    color:white;
    border:none;
    border-radius:8px;
    font-size:18px;
    cursor:pointer;
}

.career-form button:hover{
    background:00d4f;
}

.categories h2{
    color:#0d3b8e;
    margin-bottom:40px;
}

.card h3{
    color:#00C3FF;
    margin-bottom:15px;
}

.top-courses h2{
    color:#0d3b8e;
    margin-bottom:30px;
}

.course-box h3{
    color:#00C3FF;
}

.career-form input::placeholder{
    color:#666;
}

.career-section h2 {
    font-size: 40px;
    color: #001f4d;
    margin-bottom: 10px;
    font-weight: 900;
}

.career-card h3 { color: #001f4d; font-size: 20px; margin-bottom: 10px; font-weight: 800; }

.career-card p { color: #555; font-size: 14px; line-height: 1.6; }

.top-courses-section h2 {
    font-size: 44px;
    color: white;
    margin-bottom: 10px;
    font-weight: 900;
    background: linear-gradient(90deg, #00c6ff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.course-card p { color: #8aa4c2; font-size: 13px; }

.form-section h2 {
    font-size: 40px;
    color: white;
    margin-bottom: 10px;
    font-weight: 900;
    background: linear-gradient(90deg, #00c6ff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 15px 20px;
    background: rgba(10, 14, 39, 0.8);
    border: 2px solid rgba(0, 198, 255, 0.3);
    border-radius: 12px;
    color: white;
    font-size: 15px;
    font-weight: 500;
    outline: none;
    transition: all 0.3s ease;
}

.form-group input::placeholder {
    color: #5a6b8a;
}

.form-group input:hover,
.form-group select:hover {
    border-color: #00c6ff;
}

.form-group input:focus,
.form-group select:focus {
    border-color: #ff00ff;
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.4);
    background: rgba(10, 14, 39, 1);
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-30px); }
}

.hero-content h1 {
    font-size: 58px;
    font-weight: 900;
    color: white;
    line-height: 1.2;
    margin-bottom: 20px;
    background: linear-gradient(90deg, #ffffff, #00c6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-content p {
    font-size: 18px;
    color: #cbd5e1;
    margin-bottom: 35px;
    line-height: 1.7;
}

@media (max-width: 968px) {
    .hero-container { grid-template-columns: 1fr; text-align: center; }
    .hero-buttons { justify-content: center; }
    .hero-content h1 { font-size: 40px; }
}

.hero-content h1 {
    animation: glowText 3s ease-in-out infinite alternate;
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-image img {
    width: 100% !important;
    max-width: 550px !important;
    height: auto;
    border-radius: 20px;
    animation: float 6s ease-in-out infinite;
    box-shadow: 0 20px 60px rgba(0,198,255,0.3);
}

.hero-image::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    filter:blur(35px);
    background: linear-gradient(45deg, #00c6ff, #ff00ff);
    border-radius: 30px;
    z-index: -1;
    filter: blur(25px);
    opacity: 0.6;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes glowText {
    from { text-shadow: 0 0 10px rgba(0,198,255,0.5); }
    to { text-shadow: 0 0 25px rgba(255,0,255,0.8); }
}

.hero-image {
    position: relative;
}

@keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
}

html{
    scroll-behavior: smooth;
}

.contact-section h2{
    font-size: 42px;
    font-weight: 700;
    background: linear-gradient(90deg, #00f2fe, #4facfe, #00f2fe);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s linear infinite;
    margin-bottom: 10px;
}

.contact-section > p{
    color: #aaa;
    font-size: 16px;
    margin-bottom: 50px;
}

@keyframes shine {
    to { background-position: 200% center; }
}

.team-card h3{
    font-size: 22px;
    color: #4facfe;
    margin-bottom: 15px;
    font-weight: 600;
}

.team-card p{
    margin: 10px 0;
    font-size: 15px;
    color: #ccc;
}

.team-card p:hover{
    color: #fff;
}

@media (max-width: 768px){
    .contact-section{
        padding: 60px 20px;
    }
    .contact-section h2{
        font-size: 32px;
    }
}

.team-card h3 {
    color: #00FFFF;
    margin-bottom: 10px;
    font-size: 20px;
}

.team-card p {
    color: white;
    margin: 8px 0;
    font-size: 14px;
}

@media (max-width:768px){
    footer>div:first-child{
        grid: template child column 1fr !important;
        text-align: center;
    }
}

.about-hero h1 {
    font-size: clamp(42px, 5vw, 72px);
    line-height: 1.08;

    margin: 0 0 25px;

    font-weight: 800;
    letter-spacing: -2px;

    color: #ffffff;
}

.about-hero h1 span {
    display: block;

    background: linear-gradient(
        90deg,
        #7c6cff,
        #4ddcff
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
}

.about-hero p {
    max-width: 650px;

    font-size: 17px;
    line-height: 1.8;

    color: #b8c1d9;

    margin-bottom: 35px;
}

.floating-card > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

@keyframes circleFloat {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

@keyframes floatingOne {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }
}

@keyframes floatingTwo {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }
}

@keyframes floatingThree {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}

@media (max-width: 900px) {

    .about-hero {
        padding: 70px 6%;

        flex-direction: column;

        text-align: center;
    }


    .about-hero-content {
        width: 100%;
    }


    .about-hero p {
        margin-left: auto;
        margin-right: auto;
    }


    .about-hero-buttons {
        justify-content: center;
    }


    .about-hero-visual {
        width: 100%;
        min-height: 400px;
    }
}

@media (max-width: 600px) {

    .about-hero {
        min-height: auto;

        padding: 60px 20px 80px;
    }


    .about-hero h1 {
        font-size: 40px;
        letter-spacing: -1px;
    }


    .about-hero p {
        font-size: 15px;
        line-height: 1.7;
    }


    .about-hero-buttons {
        flex-direction: column;
    }


    .hero-btn {
        width: 100%;
        max-width: 280px;
    }


    .about-hero-visual {
        min-height: 350px;
    }


    .career-circle {
        width: 210px;
        height: 210px;
    }


    .circle-icon {
        width: 95px;
        height: 95px;

        font-size: 42px;
    }


    .floating-card {
        padding: 10px 13px;
        min-width: 120px;
    }


    .card-one {
        left: 0;
        top: 35px;
    }


    .card-two {
        right: 0;
        bottom: 35px;
    }


    .card-three {
        right: -5px;
        top: 45%;
    }
}

.about-info h2 {
    font-size: clamp(34px, 4vw, 52px);

    line-height: 1.15;

    margin: 0 0 22px;

    letter-spacing: -1px;
}

.about-info h2 span {
    display: block;

    background: linear-gradient(
        90deg,
        #7c6cff,
        #4ddcff
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
}

.about-info-content > p {
    color: #aeb8d0;

    font-size: 16px;

    line-height: 1.8;

    max-width: 700px;

    margin-bottom: 16px;
}

.highlight-box h3 {
    margin: 0 0 4px;

    font-size: 14px;
}

.highlight-box p {
    margin: 0;

    color: #8994b0;

    font-size: 11px;

    line-height: 1.4;
}

.vision-card h3 {
    text-align: center;

    font-size: 24px;

    margin-bottom: 12px;
}

.vision-card > p {
    text-align: center;

    color: #9da8c2;

    font-size: 14px;

    line-height: 1.7;

    margin-bottom: 28px;
}

.progress-line span {
    display: block;

    width: 72%;
    height: 100%;

    border-radius: 10px;

    background: linear-gradient(
        90deg,
        #675aff,
        #45d9ff
    );

    box-shadow: 0 0 12px rgba(70, 180, 255, 0.4);
}

@media (max-width: 900px) {

    .about-info {
        flex-direction: column;

        padding: 80px 6%;
    }


    .about-info-content,
    .about-info-visual {
        width: 100%;
    }


    .about-info-content {
        text-align: center;
    }


    .about-info-content > p {
        margin-left: auto;
        margin-right: auto;
    }


    .about-highlights {
        text-align: left;
    }
}

@media (max-width: 600px) {

    .about-info {
        padding: 70px 20px;
    }


    .about-info h2 {
        font-size: 35px;
    }


    .about-info-content .about-intro {
        font-size: 16px;
    }


    .about-highlights {
        grid-template-columns: 1fr;
    }


    .highlight-box {
        padding: 15px;
    }


    .vision-card {
        padding: 24px;
    }


    .vision-card h3 {
        font-size: 21px;
    }
}

.about-info h2 {
    font-size: clamp(34px, 4vw, 52px);
    line-height: 1.15;

    margin: 0 0 22px;
    letter-spacing: -1px;
}

.about-info h2 span {
    display: block;

    background: linear-gradient(
        90deg,
        #7c6cff,
        #4ddcff
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.about-info-content > p {
    color: #aeb8d0;
    font-size: 16px;
    line-height: 1.8;

    max-width: 700px;
    margin-bottom: 16px;
}

.highlight-box h3 {
    margin: 0 0 4px;
    font-size: 14px;
}

.highlight-box p {
    margin: 0;
    color: #8994b0;

    font-size: 11px;
    line-height: 1.4;
}

.vision-card h3 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 12px;
}

.vision-card > p {
    text-align: center;

    color: #9da8c2;

    font-size: 14px;
    line-height: 1.7;

    margin-bottom: 28px;
}

.progress-line span {
    display: block;

    width: 72%;
    height: 100%;

    border-radius: 10px;

    background: linear-gradient(
        90deg,
        #675aff,
        #45d9ff
    );
}

@media (max-width: 600px) {

    .about-info {
        padding: 70px 20px;
    }

    .about-info h2 {
        font-size: 35px;
    }

    .about-highlights {
        grid-template-columns: 1fr;
    }

    .vision-card {
        padding: 24px;
    }
}

.mission-heading h2 {
    margin: 0 0 18px;

    font-size: clamp(34px, 4vw, 50px);

    line-height: 1.15;

    letter-spacing: -1px;
}

.mission-heading h2 span {
    display: block;

    background: linear-gradient(
        90deg,
        #7c6cff,
        #4ddcff
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
}

.mission-heading p {
    margin: auto;

    max-width: 620px;

    color: #aab5ce;

    font-size: 15px;

    line-height: 1.8;
}

.mission-card h3 {
    margin: 0 0 10px;

    font-size: 19px;
}

.mission-card p {
    margin: 0;

    color: #929db8;

    font-size: 13px;

    line-height: 1.7;
}

@media (max-width: 600px) {

    .mission-section {
        padding: 65px 20px;
    }

    .mission-heading h2 {
        font-size: 34px;
    }

    .mission-heading p {
        font-size: 14px;
    }
}

.stats h2 { color: #00FFFF; font-size: 36px; margin-bottom: 40px; }

.stats-grid h3 { font-size: 48px; color: white; }

.stats-grid p { color: #aaa; }

.important-note span {
    font-size: 18px;
    flex-shrink: 0;
}

.important-note p {
    margin: 0;
}

.roadmap-page a {
    text-decoration: none;
}

.roadmap-page .roadmap-logo span {
    color: #6556e8;
}

.roadmap-page .roadmap-navbar nav a {
    position: relative;

    color: #626b82;

    font-size: 14px;
    font-weight: 700;

    transition: .3s;
}

.roadmap-page .roadmap-navbar nav a:hover,
.roadmap-page .roadmap-navbar nav a.active {
    color: #6556e8;
}

.roadmap-page .roadmap-navbar nav a.active::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;
    bottom: -10px;

    height: 3px;

    border-radius: 20px;

    background: linear-gradient(
        90deg,
        #5b4bdc,
        #9a8cff
    );
}

.roadmap-page .hero-text h1 {
    margin: 0 0 22px;

    color: #18203a;

    font-size: clamp(45px, 6vw, 70px);

    line-height: 1.05;

    letter-spacing: -2px;
}

.roadmap-page .hero-text h1 span {
    display: block;

    background: linear-gradient(
        90deg,
        #5b4bdc,
        #9b80ff
    );

    -webkit-background-clip: text;
    background-clip: text;

    -webkit-text-fill-color: transparent;
}

.roadmap-page .hero-text > p {
    max-width: 620px;

    margin: 0 0 30px;

    color: #687287;

    font-size: 17px;

    line-height: 1.8;
}

@keyframes roadmapRotate {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes floatRoadmap {
    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.roadmap-page .section-heading h2 {
    margin: 0 0 15px;

    color: #18203a;

    font-size: 42px;
}

.roadmap-page .section-heading h2 span {
    color: #6556e8;
}

.roadmap-page .section-heading > p:last-child {
    margin: 0;

    color: #737d90;

    line-height: 1.8;
}

.roadmap-page .roadmap-intro h2 {
    margin: 0 0 15px;

    color: #18203a;

    font-size: 43px;
}

.roadmap-page .roadmap-intro h2 span {
    color: #6556e8;
}

.roadmap-page .roadmap-intro > p:last-child {
    max-width: 720px;

    margin: auto;

    color: #737d90;

    line-height: 1.8;
}

.roadmap-page .path-card h3 {
    margin: 0 0 10px;

    color: #18203a;

    font-size: 24px;
}

.roadmap-page .path-card > p {
    margin: 0 0 20px;

    color: #70798d;

    line-height: 1.7;
}

.roadmap-page .course-list span {
    padding: 7px 11px;

    color: #6556e8;

    background: #efedff;

    border: 1px solid #dfdbff;

    border-radius: 30px;

    font-size: 11px;
    font-weight: 800;
}

.roadmap-page .journey-step > span {
    display: block;

    margin: 13px 0 8px;

    color: #c4c5d8;

    font-size: 12px;
    font-weight: 900;
}

.roadmap-page .journey-step h3 {
    margin: 0 0 8px;

    color: #29334b;

    font-size: 16px;
}

.roadmap-page .journey-step p {
    margin: 0;

    color: #737d90;

    font-size: 12px;

    line-height: 1.6;
}

.roadmap-page .stream-card h3 {
    margin: 0 0 7px;

    color: #29334b;

    font-size: 18px;
}

.roadmap-page .stream-card > p {
    margin: 0 0 15px;

    color: #737d90;

    font-size: 12px;
}

.roadmap-page .skill-box h3 {
    margin: 15px 0 8px;

    color: #29334b;

    font-size: 17px;
}

.roadmap-page .skill-box p {
    margin: 0;

    color: #737d90;

    font-size: 13px;

    line-height: 1.6;
}

.roadmap-page .bonus-content h2 {
    margin: 17px 0;

    font-size: 45px;
}

.roadmap-page .bonus-content h2 span {
    color: #9d91ff;
}

.roadmap-page .bonus-content > p {
    max-width: 700px;

    margin: auto;

    color: #b9bfd1;

    line-height: 1.8;
}

.roadmap-page .bonus-grid > div {
    padding: 29px 18px;

    background: rgba(255,255,255,.06);

    border: 1px solid rgba(255,255,255,.11);

    border-radius: 20px;

    transition: .3s;
}

.roadmap-page .bonus-grid > div:hover {
    transform: translateY(-8px);

    background: rgba(103,88,232,.18);
}

.roadmap-page .bonus-grid h3 {
    margin: 15px 0 8px;

    font-size: 16px;
}

.roadmap-page .bonus-grid p {
    margin: 0;

    color: #b0b8cb;

    font-size: 13px;

    line-height: 1.6;
}

.roadmap-page .quiz-content h2 {
    margin: 0 0 10px;

    color: #fff;

    font-size: 34px;
}

.roadmap-page .quiz-content h2 span {
    color: #e4e0ff;
}

.roadmap-page .quiz-content > div:nth-child(2) > p:last-child {
    max-width: 650px;

    margin: 0;

    color: rgba(255,255,255,.88);

    line-height: 1.7;
}

.roadmap-page .footer-logo i,
.roadmap-page .footer-logo span {
    color: #8d80ff;
}

.roadmap-page .roadmap-footer > p {
    color: #8d96aa;

    font-size: 13px;
}

@media (max-width: 1050px) {

    .roadmap-page .roadmap-navbar nav {
        gap: 12px;
    }

    .roadmap-page .roadmap-navbar nav a {
        font-size: 12px;
    }

    .roadmap-page .roadmap-hero {
        padding: 70px 6%;
    }

    .roadmap-page .journey-line {
        grid-template-columns: repeat(3,1fr);
    }

    .roadmap-page .stream-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .roadmap-page .skills-grid {
        grid-template-columns: repeat(2,1fr);
    }

    .roadmap-page .bonus-grid {
        grid-template-columns: repeat(2,1fr);
    }
}

@media (max-width: 760px) {

    .roadmap-page .roadmap-navbar {
        padding: 12px 5%;
    }

    .roadmap-page .roadmap-navbar nav {
        display: none;
    }

    .roadmap-page .roadmap-logo {
        font-size: 21px;
    }

    .roadmap-page .roadmap-hero {
        min-height: auto;

        padding: 65px 6% 80px;

        flex-direction: column;

        text-align: center;
    }

    .roadmap-page .hero-text h1 {
        font-size: 44px;
    }

    .roadmap-page .hero-text > p {
        font-size: 15px;
    }

    .roadmap-page .hero-visual {
        width: 260px;
        height: 260px;
    }

    .roadmap-page .hero-circle {
        width: 165px;
        height: 165px;
    }

    .roadmap-page .hero-circle::before {
        width: 225px;
        height: 225px;
    }

    .roadmap-page .hero-circle i {
        font-size: 52px;
    }

    .roadmap-page .floating-icon {
        width: 48px;
        height: 48px;

        font-size: 18px;
    }
}
/* ===== Page-specific styles ===== */

/* PHONE FIX */
*{box-sizing:border-box}
html,body{width:100%;overflow-x:hidden}
img{max-width:100%;height:auto}
@media(max-width:600px){
h1{font-size:20px !important}
.cat-card{width:100% !important}
.college-grid-main{grid-template-columns:1fr !important}
.course-grid{grid-template-columns:1fr !important}
.search-box{flex-direction:column !important}
.filters{flex-wrap:nowrap !important;overflow-x:auto;justify-content:flex-start !important}
.filter{white-space:nowrap;flex-shrink:0}
}



*{
    font-family:'Poppins',sans-serif;
    box-sizing:border-box;
}

body{
    margin:0;
    padding:0 20px 30px;
    min-height:100vh;
    color:#fff;
    background:
    radial-gradient(circle at 10% 20%,rgba(120,119,198,0.35) 0%,transparent 40%),
    radial-gradient(circle at 90% 10%,rgba(255,119,198,0.25) 0%,transparent 40%),
    radial-gradient(circle at 50% 90%,rgba(99,102,241,0.25) 0%,transparent 50%),
    #020617;
}

.container{
    max-width:1350px;
    margin:auto;
}

h1{
    text-align:center;
    font-size:42px;
    font-weight:800;
    margin:0;
    text-shadow:0 0 25px rgba(99,102,241,0.7);
}

.subtitle{
    text-align:center;
    background:rgba(255,255,255,0.08);
    border:1px solid rgba(255,255,255,0.18);
    padding:10px 22px;
    border-radius:30px;
    display:table;
    margin:15px auto;
    color:#e2e8f0;
    font-size:14px;
}


/* =====================================================
   CATEGORY SECTION
===================================================== */

.grid{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:22px;
    margin-top:35px;
}

.cat-card{
    width:calc(25% - 22px);
    min-width:300px;
    min-height:145px;
    background:rgba(255,255,255,0.07);
    border:1px solid rgba(56,189,248,0.25);
    border-radius:22px;
    padding:26px;
    cursor:pointer;
    backdrop-filter:blur(25px);
    box-shadow:0 0 30px rgba(99,102,241,0.18);
    transition:0.4s;
}

.cat-card:hover{
    transform:translateY(-10px) scale(1.03);
    background:rgba(255,255,255,0.12);
    border-color:#38bdf8;
}

.cat-card.active{
    background:linear-gradient(
        135deg,
        rgba(14,165,233,0.35),
        rgba(99,102,241,0.35)
    );
    border-color:#38bdf8;
}


/* =====================================================
   COLLEGE FINDER
===================================================== */

.college-finder-section{
    margin-top:35px;
    background:rgba(15,23,42,0.75);
    backdrop-filter:blur(25px);
    border-radius:24px;
    padding:24px;
    border:1px solid rgba(56,189,248,0.3);
}

.college-finder-title{
    font-size:22px;
    font-weight:800;
    color:#38bdf8;
    text-align:center;
    margin:0 0 14px 0;
}

.search-box{
    display:flex;
    gap:10px;
    max-width:850px;
    margin:0 auto 12px;
}

.search-box input{
    flex:1;
    padding:14px 18px;
    border-radius:30px;
    border:1px solid rgba(56,189,248,0.3);
    background:rgba(255,255,255,0.08);
    color:#fff;
    font-size:14px;
    outline:none;
}

.search-box input::placeholder{
    color:#94a3b8;
}

.search-box input:focus{
    border-color:#38bdf8;
    box-shadow:0 0 15px rgba(56,189,248,0.15);
}

.search-box button{
    padding:12px 22px;
    border-radius:30px;
    border:none;
    background:linear-gradient(135deg,#4f46e5,#7c3aed);
    color:#fff;
    font-weight:700;
    cursor:pointer;
}


/* SMART SEARCH */

.smart-search{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:7px;
    margin:10px auto 15px;
    max-width:1100px;
}

.smart-search-title{
    width:100%;
    text-align:center;
    color:#94a3b8;
    font-size:11px;
    margin-bottom:3px;
}

.smart-search button{
    padding:6px 11px;
    border-radius:18px;
    border:1px solid rgba(56,189,248,0.25);
    background:rgba(56,189,248,0.07);
    color:#7dd3fc;
    font-size:10px;
    cursor:pointer;
    transition:.2s;
}

.smart-search button:hover{
    background:rgba(56,189,248,0.18);
    transform:translateY(-2px);
}


/* FILTERS */

.filters{
    display:flex;
    gap:8px;
    flex-wrap:wrap;
    justify-content:center;
    margin:10px 0;
}

.filter{
    padding:7px 12px;
    border-radius:20px;
    border:1px solid rgba(255,255,255,0.15);
    background:rgba(255,255,255,0.06);
    color:#e2e8f0;
    font-size:11px;
    cursor:pointer;
}

.filter.active{
    background:linear-gradient(
        135deg,
        rgba(14,165,233,0.4),
        rgba(99,102,241,0.4)
    );
    border-color:#38bdf8;
    color:#fff;
}


/* COLLEGE CARDS */

.college-grid-main{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(340px,1fr));
    gap:14px;
    margin-top:16px;
}

.college-card-main{
    background:rgba(255,255,255,0.07);
    border:1px solid rgba(56,189,248,0.2);
    border-radius:18px;
    overflow:hidden;
    cursor:pointer;
    transition:0.3s;
}

.college-card-main:hover{
    transform:translateY(-6px);
    border-color:#38bdf8;
    background:rgba(255,255,255,0.1);
}

.college-image-wrap{
    position:relative;
    height:200px;
    overflow:hidden;
}

.college-card-main img{
    width:100%;
    height:200px;
    object-fit:cover;
    display:block;
}

.college-type-overlay{
    position:absolute;
    top:12px;
    left:12px;
    z-index:2;
    padding:6px 11px;
    border-radius:14px;
    font-size:11px;
    font-weight:800;
    backdrop-filter:blur(8px);
    box-shadow:0 4px 14px rgba(0,0,0,.28);
}

.college-type-overlay.govt{
    background:rgba(20,83,45,.88);
    border:1px solid #22c55e;
    color:#dcfce7;
}

.college-type-overlay.pvt{
    background:rgba(127,29,29,.88);
    border:1px solid #fb7185;
    color:#ffe4e6;
}

.college-website-btn{
    display:inline-flex;
    align-items:center;
    gap:5px;
    margin-top:10px;
    padding:7px 11px;
    border-radius:10px;
    background:rgba(14,165,233,.14);
    border:1px solid rgba(56,189,248,.5);
    color:#7dd3fc;
    text-decoration:none;
    font-size:11px;
    font-weight:700;
}

.college-website-btn:hover{
    background:rgba(14,165,233,.25);
    color:#fff;
}

.college-body{
    padding:14px;
}

.city-tag{
    background:rgba(99,102,241,0.2);
    color:#c7d2fe;
    padding:3px 8px;
    border-radius:12px;
    font-size:10px;
}

.course-tag{
    background:#0f172a;
    border:1px solid rgba(56,189,248,0.3);
    color:#7dd3fc;
    padding:3px 8px;
    border-radius:12px;
    font-size:10px;
    display:inline-block;
    margin:2px;
}

.finder-advanced-controls{
    display:grid;
    grid-template-columns:repeat(4,minmax(140px,1fr));
    gap:10px;
    max-width:1100px;
    margin:16px auto 8px;
    padding:14px;
    border-radius:16px;
    background:rgba(2,132,199,.08);
    border:1px solid rgba(56,189,248,.16);
}

.finder-control{
    display:flex;
    flex-direction:column;
    gap:6px;
    color:#94a3b8;
    font-size:10px;
    font-weight:700;
    text-transform:uppercase;
    letter-spacing:.5px;
}

.finder-control select{
    width:100%;
    min-height:36px;
    padding:8px 10px;
    border:1px solid rgba(56,189,248,.25);
    border-radius:10px;
    background:#0f274d;
    color:#e2e8f0;
    outline:none;
    font-size:12px;
    text-transform:none;
    letter-spacing:0;
}

.finder-action-row{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    gap:8px;
    margin:10px auto;
}

.finder-action{
    padding:8px 12px;
    border-radius:10px;
    border:1px solid rgba(56,189,248,.28);
    background:rgba(56,189,248,.08);
    color:#bae6fd;
    cursor:pointer;
    font-size:11px;
    font-weight:700;
}

.finder-action.active,.finder-action:hover{
    background:rgba(14,165,233,.25);
    border-color:#38bdf8;
    color:#fff;
}

.finder-summary{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    gap:10px;
    margin-top:12px;
}

.finder-summary select{
    padding:7px 10px;
    border-radius:9px;
    border:1px solid rgba(56,189,248,.25);
    background:#0f274d;
    color:#e2e8f0;
    font-size:11px;
}

.college-card-main{
    position:relative;
}

.college-card-tools{
    position:absolute;
    top:12px;
    right:12px;
    z-index:3;
    display:flex;
    gap:6px;
}

.college-card-tool{
    width:31px;
    height:31px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    border:1px solid rgba(255,255,255,.25);
    border-radius:50%;
    background:rgba(2,6,23,.72);
    color:#e2e8f0;
    cursor:pointer;
    font-size:15px;
}

.college-card-tool.active,.college-card-tool:hover{
    border-color:#38bdf8;
    background:rgba(14,165,233,.35);
}

.college-rank{
    margin-left:auto;
    color:#fbbf24;
    font-size:10px;
    font-weight:800;
}

.finder-pagination{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    gap:7px;
    margin:20px 0 4px;
}

.finder-page-btn{
    min-width:34px;
    min-height:32px;
    padding:6px 10px;
    border-radius:9px;
    border:1px solid rgba(56,189,248,.25);
    background:rgba(255,255,255,.06);
    color:#cbd5e1;
    cursor:pointer;
    font-size:11px;
}

.finder-page-btn.active,.finder-page-btn:hover{
    background:#2563eb;
    border-color:#38bdf8;
    color:#fff;
}

.compare-panel{
    display:none;
    margin:14px auto 0;
    padding:14px;
    border-radius:15px;
    background:rgba(15,23,42,.9);
    border:1px solid rgba(56,189,248,.25);
    color:#cbd5e1;
    font-size:11px;
}

.compare-panel.visible{
    display:block;
}

.compare-panel table{
    width:100%;
    border-collapse:collapse;
    margin-top:10px;
}

.compare-panel th,.compare-panel td{
    padding:8px;
    border-bottom:1px solid rgba(148,163,184,.16);
    text-align:left;
    vertical-align:top;
}

.compare-panel th{
    color:#7dd3fc;
    font-size:11px;
}

.compare-remove{
    margin-left:6px;
    padding:2px 6px;
    border:0;
    border-radius:8px;
    background:rgba(248,113,113,.2);
    color:#fecaca;
    cursor:pointer;
}

@media(max-width:800px){
    .finder-advanced-controls{grid-template-columns:repeat(2,minmax(130px,1fr))}
}

@media(max-width:520px){
    .finder-advanced-controls{grid-template-columns:1fr}
    .finder-summary{align-items:stretch;flex-direction:column}
}

.badge{
    padding:2px 7px;
    border-radius:8px;
    font-size:10px;
    font-weight:700;
}

.govt{
    background:rgba(34,197,94,0.2);
    border:1px solid #22c55e;
    color:#86efac;
}

.pvt{
    background:rgba(251,113,133,0.15);
    border:1px solid #fb7185;
    color:#fda4af;
}


/* COURSE SECTION */

#courseSection{
    display:none;
    margin-top:40px;
    background:rgba(15,23,42,0.65);
    backdrop-filter:blur(25px);
    border-radius:24px;
    padding:28px;
    border:1px solid rgba(56,189,248,0.25);
}

.back-to-cat{
    display:inline-flex;
    align-items:center;
    gap:6px;
    background:#fff;
    color:#000;
    padding:9px 18px;
    border-radius:24px;
    font-size:13px;
    font-weight:700;
    cursor:pointer;
    border:none;
    margin-bottom:14px;
}

.course-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:18px;
    margin-top:20px;
    align-items:stretch;
}

.course-card{
    min-height:190px;
    padding:22px;
    border-radius:18px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:#f8fafc !important;
    box-shadow:0 10px 28px rgba(0,0,0,0.18);
}

.course-card h4{
    margin:0 0 16px !important;
    color:#ffffff !important;
    font-size:19px;
    line-height:1.35;
}

.course-tags{
    display:flex;
    flex-wrap:wrap;
    gap:8px;
    margin-bottom:14px;
}

.tag{
    background:rgba(255,255,255,0.10);
    border:1px solid rgba(148,163,184,0.32);
    color:#e2e8f0;
    border-radius:999px;
    padding:7px 11px;
    font-size:11px;
    margin:0;
    display:inline-flex;
    align-items:center;
    white-space:nowrap;
}

.course-card .btn{
    align-self:flex-start;
    margin-top:auto;
    padding:10px 20px;
    border-radius:999px;
    font-size:13px;
}

@media(max-width:900px){
    .course-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
}

@media(max-width:600px){
    #courseSection{padding:18px}
    .course-grid{grid-template-columns:1fr;gap:14px}
    .course-card{min-height:0;padding:18px}
}

.btn{
    margin-top:8px;
    background:linear-gradient(135deg,#4f46e5,#7c3aed);
    color:#fff;
    border:none;
    padding:8px 16px;
    border-radius:20px;
    cursor:pointer;
    font-size:12px;
    font-weight:600;
}


/* MODALS */

#courseModal,
#collegeModal{
    display:none;
    position:fixed;
    inset:0;
    background:rgba(2,6,23,0.85);
    backdrop-filter:blur(14px);
    z-index:99999;
    padding:18px;
    overflow-y:auto;
}

.modal-box{
    max-width:1150px;
    margin:15px auto;
    background:rgba(15,23,42,0.92);
    border-radius:24px;
    padding:26px;
    border:1px solid rgba(56,189,248,0.4);
}

.sec{
    margin-top:16px;
}

.sec-head{
    font-size:11px;
    font-weight:800;
    color:#7dd3fc;
    letter-spacing:0.8px;
    text-transform:uppercase;
    margin-bottom:6px;
}

.info{
    background:rgba(255,255,255,0.06);
    border:1px solid rgba(255,255,255,0.12);
    padding:12px;
    border-radius:12px;
    font-size:13px;
    line-height:1.7;
}

.college-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
    gap:10px;
}

.college-item{
    display:flex;
    gap:10px;
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.1);
    border-radius:14px;
    padding:10px;
}

.college-item img{
    width:90px;
    height:68px;
    border-radius:8px;
    object-fit:cover;
}

.entrance{
    background:rgba(99,102,241,0.2);
    border:1px solid #818cf8;
    color:#c7d2fe;
    padding:3px 8px;
    border-radius:16px;
    font-size:10px;
    font-weight:700;
    display:inline-block;
    margin-top:3px;
}

.college-link{
    color:#7dd3fc;
    font-weight:700;
    text-decoration:none;
    font-size:11px;
}

.modal-img{
    width:100%;
    height:300px;
    object-fit:cover;
    border-radius:16px;
}


/* RESPONSIVE */

@media(max-width:900px){
    .course-grid{
        grid-template-columns:repeat(2,1fr);
    }

    .cat-card{
        width:calc(50% - 22px);
    }
}

@media(max-width:600px){

    body{
        padding:0 10px 20px;
    }

    h1{
        font-size:28px;
    }

    .search-box{
        flex-direction:column;
    }

    .search-box button{
        width:100%;
    }

    .course-grid{
        grid-template-columns:1fr;
    }

    .cat-card{
        width:100%;
        min-width:0;
    }

    .college-grid-main{
        grid-template-columns:1fr;
    }
}

/* =====================================================
   COURSE MODAL - COLLEGE LIST + ALIGNMENT FIX
===================================================== */

.modal-box{
    width:100%;
    box-sizing:border-box;
}

.modal-box > div:first-child{
    gap:12px;
    flex-wrap:wrap;
}

#mTitle{
    word-break:break-word;
}

.cd-head-wrap{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    gap:8px;
}

.cd-chip{
    display:inline-flex;
    align-items:center;
    background:rgba(255,255,255,0.08);
    border:1px solid rgba(255,255,255,0.16);
    color:#e2e8f0;
    padding:5px 12px;
    border-radius:999px;
    font-size:11px;
    font-weight:600;
    white-space:nowrap;
}

.cd-chip.primary{
    background:rgba(56,189,248,0.18);
    border-color:rgba(56,189,248,0.5);
    color:#bae6fd;
    font-weight:800;
}

.cd-chip.good{
    background:rgba(34,197,94,0.16);
    border-color:rgba(34,197,94,0.45);
    color:#86efac;
    font-weight:800;
}

.cd-sec-top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:8px;
    margin-bottom:10px;
}

.cd-count{
    display:inline-flex;
    align-items:center;
    background:rgba(56,189,248,0.14);
    border:1px solid rgba(56,189,248,0.38);
    color:#7dd3fc;
    padding:4px 12px;
    border-radius:999px;
    font-size:10.5px;
    font-weight:800;
    letter-spacing:0.5px;
    text-transform:uppercase;
    white-space:nowrap;
}

.cd-hint{
    font-size:10.5px;
    color:#64748b;
    font-weight:600;
}

.cd-empty{
    font-size:12.5px;
    color:#94a3b8;
    line-height:1.7;
}

.cd-scroll{
    max-height:470px;
    overflow-y:auto;
    overflow-x:hidden;
    padding:4px 10px 6px 4px;
    scrollbar-width:thin;
    scrollbar-color:rgba(56,189,248,0.5) transparent;
}

.cd-scroll::-webkit-scrollbar{width:8px}
.cd-scroll::-webkit-scrollbar-track{background:rgba(255,255,255,0.04);border-radius:8px}
.cd-scroll::-webkit-scrollbar-thumb{background:rgba(56,189,248,0.45);border-radius:8px}
.cd-scroll::-webkit-scrollbar-thumb:hover{background:rgba(56,189,248,0.7)}

.college-grid{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
    gap:12px;
    align-items:stretch;
}

.college-item{
    display:flex;
    align-items:stretch;
    gap:12px;
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.1);
    border-radius:14px;
    padding:12px;
    min-width:0;
    height:100%;
    box-sizing:border-box;
    cursor:pointer;
    transition:transform .25s ease,border-color .25s ease,background .25s ease;
}

.college-item:hover{
    transform:translateY(-3px);
    border-color:rgba(56,189,248,0.5);
    background:rgba(56,189,248,0.08);
}

.college-item img{
    width:92px;
    height:92px;
    flex:0 0 92px;
    border-radius:10px;
    object-fit:cover;
    background:rgba(255,255,255,0.06);
    align-self:flex-start;
}

.ci-body{
    display:flex;
    flex-direction:column;
    flex:1 1 auto;
    min-width:0;
    gap:4px;
}

.ci-head{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    gap:8px;
}

.ci-name{
    flex:1 1 auto;
    min-width:0;
    font-size:12.5px;
    font-weight:800;
    color:#e2e8f0;
    line-height:1.35;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
    word-break:break-word;
}

.ci-head .badge{
    flex:0 0 auto;
    align-self:flex-start;
    white-space:nowrap;
}

.ci-loc{
    font-size:10.5px;
    color:#94a3b8;
    line-height:1.45;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.ci-fee{
    font-size:11px;
    color:#cbd5e1;
    line-height:1.5;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
    word-break:break-word;
}

.ci-tags{
    display:flex;
    flex-wrap:wrap;
    gap:5px;
}

.ci-tags .entrance{
    margin-top:0;
    max-width:100%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}

.ci-foot{
    margin-top:auto;
    padding-top:8px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:8px;
}

.ci-more{
    font-size:10.5px;
    font-weight:700;
    color:#94a3b8;
    white-space:nowrap;
}

.college-item:hover .ci-more{color:#7dd3fc}

.sec{
    margin-top:20px;
}

.sec-head{
    display:flex;
    align-items:center;
    gap:8px;
    margin-bottom:10px;
}

@media(max-width:760px){
    .modal-box{padding:18px;border-radius:18px;margin:10px auto}
    .college-grid{grid-template-columns:1fr}
    .cd-scroll{max-height:none;overflow:visible;padding-right:0}
    .cd-hint{display:none}
    .college-item img{width:74px;height:74px;flex:0 0 74px}
    .ci-loc{white-space:normal}
}

`;

// ------------------------------------------------------------------
// MARKUP (original HTML body, kept as-is so look/behaviour match)
// ------------------------------------------------------------------
const markup = `
<div class="container">

<h1>
    🚀 Discover Your Future - Your Career Starts Here
</h1>

<p class="subtitle">
    ✨100+ Career Paths | College Finder | Govt & Private | Course & Career Guidance
</p>


<!-- =====================================================
     1. CATEGORY SECTION
     AB COLLEGE FINDER SE PEHLE HAI
===================================================== -->

<div style="
text-align:center;
margin:45px auto 25px auto;
max-width:900px;
background:rgba(15,23,42,0.55);
backdrop-filter:blur(25px);
border:1px solid rgba(56,189,248,0.25);
border-radius:24px;
padding:28px 22px;
box-shadow:0 8px 32px rgba(0,0,0,0.3),0 0 40px rgba(56,189,248,0.15);
">

<h2 style="
font-size:28px;
font-weight:800;
color:#fff;
margin:0;
">
Explore Your Courses
</h2>

<p style="
color:#38bdf8;
font-size:13px;
font-weight:700;
margin-top:10px;
letter-spacing:1px;
background:rgba(56,189,248,0.12);
border:1px solid rgba(56,189,248,0.2);
display:inline-block;
padding:6px 16px;
border-radius:30px;
">
82+ COURSES | 200+ COLLEGE DETAILS | FEES | PLACEMENTS
</p>

<p style="
color:#cbd5e1;
font-size:12.5px;
margin-top:14px;
line-height:1.7;
">
Discover Government & Private Colleges, Fees, Eligibility,
Admission Process, Career Scope and Salary Packages.
</p>

</div>


<div class="grid" id="categoryGrid">


<!-- IT -->

<div class="cat-card"
     onclick="showCourses('it',this)">

<h3>
💻 IT & Technology (14)
</h3>

<p>
BCA, B.Tech CSE, MCA, BSc IT, Data Science,
Web Dev, AI/ML, Cyber Security
</p>

<div style="margin-top:12px">

<button class="btn"
onclick="event.stopPropagation();showCourses('it',this)">
Explore Courses →
</button>

</div>

</div>


<!-- ENGINEERING -->

<div class="cat-card"
     onclick="showCourses('engineering',this)">

<h3>
⚙️ Engineering (12)
</h3>

<p>
B.Tech, BE, M.Tech, Diploma Engineering,
Civil, Mechanical, Electrical, CSE, ECE,
AI/ML, Automobile
</p>

<div style="margin-top:12px">

<button class="btn"
onclick="event.stopPropagation();showCourses('engineering',this)">
Explore Courses →
</button>

</div>

</div>


<!-- MEDICAL -->

<div class="cat-card"
     onclick="showCourses('medical',this)">

<h3>
🩺 Medical (16)
</h3>

<p>
MBBS, BDS, B.Pharma, BSc Nursing,
BAMS, GNM, DMLT, BHMS, B.Optom, BPT
</p>

<div style="margin-top:12px">

<button class="btn"
onclick="event.stopPropagation();showCourses('medical',this)">
Explore Courses →
</button>

</div>

</div>


<!-- LAW -->

<div class="cat-card"
     onclick="showCourses('law',this)">

<h3>
⚖️ Law (8)
</h3>

<p>
BA LLB, BBA LLB, LLB, LLM,
Cyber Law, Judiciary
</p>

<div style="margin-top:12px">

<button class="btn"
onclick="event.stopPropagation();showCourses('law',this)">
Explore Courses →
</button>

</div>

</div>


<!-- GOVERNMENT -->

<div class="cat-card"
     onclick="showCourses('govt',this)">

<h3>
🏛️ Govt Jobs (24)
</h3>

<p>
SSC CGL, UPSC, Railway, NDA,
State PCS, Bank PO, Lekhpal, Agniveer
</p>

<div style="margin-top:12px">

<button class="btn"
onclick="event.stopPropagation();showCourses('govt',this)">
Explore Courses →
</button>

</div>

</div>


<!-- BANKING -->

<div class="cat-card"
     onclick="showCourses('banking',this)">

<h3>
🏦 Banking & Finance (10)
</h3>

<p>
B.Com, BBA Finance, CA, MBA Finance,
M.Com, Banking Diploma, CFA
</p>

<div style="margin-top:12px">

<button class="btn"
onclick="event.stopPropagation();showCourses('banking',this)">
Explore Courses →
</button>

</div>

</div>


<!-- AGRICULTURE -->

<div class="cat-card"
     onclick="showCourses('agri',this)">

<h3>
🌱 Agriculture (10)
</h3>

<p>
BSc Agriculture, B.Tech Agriculture,
MSc Agriculture, Horticulture, Forestry,
MBA Agribusiness
</p>

<div style="margin-top:12px">

<button class="btn"
onclick="event.stopPropagation();showCourses('agri',this)">
Explore Courses →
</button>

</div>

</div>


</div>


<!-- =====================================================
     2. COLLEGE FINDER
===================================================== -->

<div class="college-finder-section">

<h2 class="college-finder-title">
🎓 College Finder - Search Any Course, Degree, Diploma or College
</h2>


<div class="search-box">

<input
id="searchInput"
placeholder="Try: Top BCA in Noida, Best B.Tech Delhi, Top B.Com, MBA Gurgaon, MBBS Lucknow, Law..."
oninput="clearTimeout(window.collegeSearchTimer);window.collegeSearchTimer=setTimeout(doCollegeSearch,180)"
onkeyup="if(event.key==='Enter')doCollegeSearch()"
>

<button onclick="doCollegeSearch()">
🔍 Search College
</button>

</div>


<!-- SMART SEARCH -->

<div class="smart-search">

<div class="smart-search-title">
🔎 Smart College Search - Try Any Course
</div>

<button onclick="quickSearch('BCA')">
BCA
</button>

<button onclick="quickSearch('Top BCA College')">
Top BCA
</button>

<button onclick="quickSearch('Best BCA College')">
Best BCA
</button>

<button onclick="quickSearch('Top BCA College in Noida')">
Top BCA Noida
</button>

<button onclick="quickSearch('Top B.Tech College')">
Top B.Tech
</button>

<button onclick="quickSearch('Best B.Tech CSE College')">
Best B.Tech CSE
</button>

<button onclick="quickSearch('Top B.Com College')">
Top B.Com
</button>

<button onclick="quickSearch('Top BBA College')">
Top BBA
</button>

<button onclick="quickSearch('Top MBA College')">
Top MBA
</button>

<button onclick="quickSearch('Top MBBS College')">
Top MBBS
</button>

<button onclick="quickSearch('Top BDS College')">
Top BDS
</button>

<button onclick="quickSearch('Top B.Pharm College')">
Top Pharmacy
</button>

<button onclick="quickSearch('Top Nursing College')">
Top Nursing
</button>

<button onclick="quickSearch('Top Law College')">
Top Law
</button>

<button onclick="quickSearch('Top Agriculture College')">
Agriculture
</button>

<button onclick="quickSearch('Diploma Engineering')">
Diploma
</button>

<button onclick="quickSearch('Polytechnic College')">
Polytechnic
</button>

</div>


<!-- CITY FILTER -->

<div class="filters">

<span class="filter active"
onclick="setCity('all',this)">
All India
</span>

<span class="filter"
onclick="setCity('Bulandshahr',this)">
Bulandshahr
</span>

<span class="filter"
onclick="setCity('Noida',this)">
Noida
</span>

<span class="filter"
onclick="setCity('Ghaziabad',this)">
Ghaziabad
</span>

<span class="filter"
onclick="setCity('Hapur',this)">
Hapur
</span>

<span class="filter"
onclick="setCity('Meerut',this)">
Meerut
</span>

<span class="filter"
onclick="setCity('Delhi',this)">
Delhi
</span>

<span class="filter"
onclick="setCity('Gurgaon',this)">
Gurgaon/Haryana
</span>

<span class="filter"
onclick="setCity('Lucknow',this)">
Lucknow
</span>

<span class="filter"
onclick="setCity('Prayagraj',this)">
Prayagraj
</span>

<span class="filter"
onclick="setCity('Mumbai',this)">
Mumbai/Pune
</span>

<span class="filter"
onclick="setCity('Bangalore',this)">
Bangalore
</span>

<span class="filter"
onclick="setCity('Hyderabad',this)">
Hyderabad
</span>

<span class="filter"
onclick="setCity('Kolkata',this)">
Kolkata
</span>

<span class="filter"
onclick="setCity('Patna',this)">
Patna
</span>

<span class="filter"
onclick="setCity('Goa',this)">
Goa
</span>

</div>


<!-- COURSE FILTER -->

<div class="filters">

<span class="filter active"
onclick="setCourseFilter('all',this)">
All Courses
</span>

<span class="filter"
onclick="setCourseFilter('BCA',this)">
BCA/MCA
</span>

<span class="filter"
onclick="setCourseFilter('B.Tech',this)">
B.Tech
</span>

<span class="filter"
onclick="setCourseFilter('BBA',this)">
BBA/MBA
</span>

<span class="filter"
onclick="setCourseFilter('B.Com',this)">
B.Com/M.Com
</span>

<span class="filter"
onclick="setCourseFilter('MBBS',this)">
MBBS
</span>

<span class="filter"
onclick="setCourseFilter('BDS',this)">
BDS/Dentist
</span>

<span class="filter"
onclick="setCourseFilter('B.Pharma',this)">
Pharma
</span>

<span class="filter"
onclick="setCourseFilter('Nursing',this)">
Nursing
</span>

<span class="filter"
onclick="setCourseFilter('BA LLB',this)">
Law
</span>

<span class="filter"
onclick="setCourseFilter('B.Des',this)">
Designing
</span>

<span class="filter"
onclick="setCourseFilter('Diploma',this)">
Diploma
</span>

<span class="filter"
onclick="setCourseFilter('BSc Agriculture',this)">
Agriculture
</span>

</div>

<div class="finder-advanced-controls" aria-label="Advanced college filters">
  <label class="finder-control">
    State
    <select id="stateSelect" onchange="setAdvancedFilter('state',this.value)">
      <option value="all">All India</option>
    </select>
  </label>
  <label class="finder-control">
    City / District
    <select id="citySelect" onchange="setAdvancedFilter('city',this.value)">
      <option value="all">All cities</option>
    </select>
  </label>
  <label class="finder-control">
    College type
    <select id="typeSelect" onchange="setAdvancedFilter('type',this.value)">
      <option value="all">All types</option>
    </select>
  </label>
  <label class="finder-control">
    Sort results
    <select id="sortSelect" onchange="setAdvancedFilter('sort',this.value)">
      <option value="relevance">Recommended</option>
      <option value="name">Name A–Z</option>
      <option value="state">State A–Z</option>
      <option value="city">City A–Z</option>
    </select>
  </label>
</div>

<div class="finder-action-row">
  <button id="favoritesToggle" class="finder-action" onclick="toggleFavoritesOnly()">
    ♡ Favorites only
  </button>
  <button class="finder-action" onclick="clearAdvancedFilters()">
    ↺ Clear all filters
  </button>
</div>

<div id="comparePanel" class="compare-panel"></div>

<div id="resultsInfo"
style="color:#94a3b8;font-size:12px;text-align:center;margin-top:8px">
Showing Colleges - Search any course or location
</div>

<div class="finder-summary">
  <span style="color:#64748b;font-size:10px">
    Tip: select up to 3 colleges with ⚖️ to compare fees, approvals and admissions.
  </span>
  <label style="color:#94a3b8;font-size:11px">
    Per page
    <select id="pageSizeSelect" onchange="changePageSize(this.value)">
      <option value="24">24</option>
      <option value="36">36</option>
      <option value="60">60</option>
    </select>
  </label>
</div>

<div class="college-grid-main"
id="collegeGrid">
</div>

<div id="collegePagination" class="finder-pagination"></div>

</div>


<!-- =====================================================
     COURSE SECTION
===================================================== -->

<div id="courseSection">

<button class="back-to-cat"
onclick="backToCategories()">
← Back to Categories
</button>

<h2 id="catTitle"
style="color:#fff;font-size:18px;margin:8px 0">
</h2>

<div class="course-grid"
id="courseList">
</div>

</div>


<!-- =====================================================
     COURSE MODAL
===================================================== -->

<div id="courseModal"
onclick="if(event.target==this)closeModal()">

<div class="modal-box">

<div style="display:flex;justify-content:space-between;align-items:center">

<button class="back-to-cat"
onclick="closeModal()">
← Back to Courses
</button>

<span
onclick="closeModal()"
style="cursor:pointer;background:rgba(255,255,255,0.1);width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:50%">
✖
</span>

</div>

<h2 id="mTitle"
style="color:#38bdf8;margin:10px 0 0 0;font-size:22px">
</h2>

<div id="mFull"
class="info"
style="margin-top:8px;background:rgba(56,189,248,0.12)">
</div>

<div id="normalSections">

<div class="sec">
<div class="sec-head">
Government Colleges
</div>
<div id="mGovt"></div>
</div>

<div class="sec">
<div class="sec-head">
Private Colleges
</div>
<div id="mPvt"></div>
</div>

<div class="sec">
<div class="sec-head">
Career + Package
</div>
<div id="mCareer"
class="info">
</div>
</div>

</div>


<div id="govtJobSections"
style="display:none">

<div class="sec">
<div class="sec-head">
🎓 Eligibility / Required Degree
</div>
<div id="gElig" class="info"></div>
</div>

<div class="sec">
<div class="sec-head">
📝 Exam Pattern
</div>
<div id="gExam" class="info"></div>
</div>

<div class="sec">
<div class="sec-head">
📚 Preparation
</div>
<div id="gPrep" class="info"></div>
</div>

<div class="sec">
<div class="sec-head">
💡 Required Skills
</div>
<div id="gSkills" class="info"></div>
</div>

<div class="sec">
<div class="sec-head">
📈 Promotion / Growth
</div>
<div id="gPromo" class="info"></div>
</div>

<div class="sec">
<div class="sec-head">
💰 Salary + Facilities
</div>
<div id="gSal"
class="info"
style="color:#a5f3fc;font-weight:700">
</div>
</div>

</div>

</div>
</div>


<!-- =====================================================
     COLLEGE MODAL
===================================================== -->

<div id="collegeModal"
onclick="if(event.target==this)closeCollegeModal()">

<div class="modal-box">

<img
id="collegeModalImg"
class="modal-img"
>

<div style="padding:20px 0 0 0">

<div style="display:flex;justify-content:space-between">

<h2
id="collegeModalName"
style="color:#38bdf8;margin:0">
</h2>

<span
onclick="closeCollegeModal()"
style="cursor:pointer;background:rgba(255,255,255,0.1);width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:50%">
✖
</span>

</div>

<p
id="collegeModalCity"
style="color:#94a3b8">
</p>

<div
id="collegeModalCourses"
style="margin:10px 0">
</div>

<div class="sec">
<div class="sec-head">
💰 Fee Structure
</div>
<div id="collegeModalFee"
class="info">
</div>
</div>

<div class="sec">
<div class="sec-head">
🎓 Admission Process
</div>
<div id="collegeModalAdmission"
class="info">
</div>
</div>

<div class="sec">
<div class="sec-head">
🏛️ Affiliation & Approval
</div>
<div id="collegeModalApproval"
class="info">
</div>
</div>

<div class="sec">
<div class="sec-head">
💼 Placement / Recruiters
</div>
<div id="collegeModalPlacement"
class="info">
</div>
</div>

<div style="margin-top:16px">

<a
id="collegeModalLink"
target="_blank"
style="display:inline-block;background:#fff;color:#000;padding:10px 18px;border-radius:20px;text-decoration:none;font-weight:700">
Visit Official Website →
</a>

</div>

</div>

</div>
</div>
`;

/* ============================================================
   CAREER DETAILS - EASY JS GUIDE
   ------------------------------------------------------------
   Is file ko beginner bhi easily samajh sake, isliye har major
   part ke upar comments diye gaye hain:
   1. Data / helper functions  -> data ko prepare karte hain
   2. Search functions          -> college/course search
   3. Filter functions          -> city/course/favorite filters
   4. Pagination                -> pages aur page size handle
   5. Compare / Favorite        -> college compare & save
   6. Modal functions           -> college/course popup
   7. Animation setup           -> scroll animations
   8. Window handlers           -> HTML ke onclick ko React JS se connect
   9. Return                    -> page ko browser par show karta hai
   ============================================================ */

export default function CareerDetails() {

  useEffect(() => {
    // ---- original inline <script> logic from the page (runs after markup mounts) ----
    /* =====================================================
       COLLEGE DATABASE
       TUMHARA EXISTING DATA
    ===================================================== */

    let colleges=[

{
    name:"IP College Campus-2 Bulandshahr",
    city:"Bulandshahr",
    state:"UP",
    type:"Private",
    courses:[
    "BCA","MCA","BBA","MBA","B.Com","M.Com",
    "BA LLB","LLB"
    ],
    fee:"BCA/BBA/B.Com: ₹35,000/yr, MCA: ₹60,000/yr, MBA: ₹80,000/yr, BA LLB: ₹30,000/yr",
    admission:"CUET + Merit Based Direct Admission.",
    approval:"CCSU Meerut Affiliated, UGC Approved",
    placement:"HCL, Wipro BPS, TCS BPS, Local Schools",
    image:"https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=85",
    link:"https://ipcollege.edu.in"
    },

{
    name:"Jaypee University Anoopshahr",
    city:"Bulandshahr",
    state:"UP",
    type:"Private University",
    courses:[
    "B.Tech","BCA","MCA","BBA","B.Com","B.Pharma",
    "D.Pharma","BSc Nursing","BA LLB",
    "BSc Agriculture","B.Des - Designing",
    "BDS","B.Optom - Optometry"
    ],
    fee:"B.Tech CSE: ₹1,35,000/yr, BCA: ₹80,000/yr, B.Pharma: ₹1,10,000/yr, BSc Nursing: ₹90,000/yr",
    admission:"JUAT + JEE Main / CUET / NEET / CLAT",
    approval:"UGC Approved Private University",
    placement:"Jaypee Group, TCS, Infosys, ICICI Bank - Avg 4.5 LPA",
    image:"https://ik.imagekit.io/syustaging/SYU_PREPROD/Cover-image_7yZY_kYla.webp",
    link:"https://www.jaypeeu.ac.in"
    },

{
    name:"Rajkiya Degree College Bulandshahr",
    city:"Bulandshahr",
    state:"UP",
    type:"Govt",
    courses:[
    "BCA","BBA","B.Com","M.Com","BA LLB"
    ],
    fee:"BCA: ₹12,000/yr, B.Com: ₹5,000/yr, BA LLB: ₹15,000/yr",
    admission:"CCSU Merit + CUET",
    approval:"CCSU Meerut Affiliated, Govt of UP",
    placement:"Govt Jobs Preparation Support",
    image:"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85",
    link:"https://ccsuniversity.ac.in"
    },

{
    name:"Amity University Noida",
    city:"Noida",
    state:"UP",
    type:"Private University",
    courses:[
    "BCA","MCA","B.Tech","BBA","MBA","B.Com","M.Com",
    "B.Pharma","D.Pharma","MBBS","BDS",
    "B.Optom - Optometry","BSc Nursing",
    "BPT - Physiotherapy","BMLT","DMLT",
    "BA LLB","BSc Agriculture",
    "B.Des - Designing","Fashion Designing"
    ],
    fee:"B.Tech: ₹3.2L/yr, BCA: ₹1.8L/yr, B.Pharma: ₹1.6L/yr, MBBS: ₹12L/yr",
    admission:"Amity JEE + CUET + NEET + CLAT",
    approval:"UGC, BCI, PCI, NMC, AICTE",
    placement:"Amazon, Microsoft, Google - Highest 61 LPA, Avg 6 LPA",
    image:"https://assets.kollegeapply.com/images/1751550197843-1742796736phpfgdcnY.jpeg",
    link:"https://amity.edu"
    },

{
    name:"Galgotias University Greater Noida",
    city:"Noida",
    state:"UP",
    type:"Private University",
    courses:[
    "B.Tech","BCA","MCA","BBA","B.Com",
    "B.Pharma","D.Pharma","BDS",
    "B.Optom - Optometry","BSc Nursing",
    "BPT - Physiotherapy","BMLT","BA LLB",
    "B.Des - Designing","BSc Agriculture"
    ],
    fee:"B.Tech CSE: ₹1.6L/yr, BCA: ₹90k/yr, BDS: ₹3.2L/yr",
    admission:"GEEE + CUET + JEE + NEET + CLAT",
    approval:"UGC, BCI, PCI, INC, ICAR",
    placement:"Cognizant, Capgemini, Accenture - Avg 5.2 LPA",
    image:"https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/videos/2023/8/campus2869353384790.jpg",
    link:"https://galgotiasuniversity.edu.in"
    },

{
    name:"Sharda University Greater Noida",
    city:"Noida",
    state:"UP",
    type:"Private University",
    courses:[
    "B.Tech","BCA","MCA","BBA","MBA","B.Com",
    "M.Com","MBBS","BDS","B.Pharma",
    "BSc Nursing","B.Optom - Optometry",
    "BPT - Physiotherapy","DMLT","BMLT",
    "BA LLB","B.Des - Designing","BSc Agriculture"
    ],
    fee:"B.Tech: ₹1.8L/yr, MBBS: ₹12.69L/yr, BDS: ₹3.5L/yr",
    admission:"SUAT + JEE + NEET + CLAT + CNET",
    approval:"UGC, NMC, DCI, PCI, BCI, INC",
    placement:"Fortis, Max Hospital, TCS, Amazon",
    image:"https://www.admissionspao.com/College_Portal/CollegeDetails/COLLEGE-674c08752bb7d-3.jpg",
    link:"https://sharda.ac.in"
    },

{
    name:"ITS Dental College Greater Noida - Dentist",
    city:"Noida",
    state:"UP",
    type:"Private",
    courses:["BDS","MDS"],
    fee:"BDS: ₹3L/yr, MDS: ₹6L/yr",
    admission:"NEET UG for BDS",
    approval:"DCI Approved, CCSU Affiliated",
    placement:"Own ITS Hospital + Private Practice",
    image:"https://image-static.collegedunia.com/public/college_data/images/campusimage/15820214945a22f989-d9d2-44f3-b6e0-f78f8d1137c6.JPG",
    link:"https://itsdentalcollege.edu.in"
    },

{
    name:"NIFT Delhi - Fashion Designing",
    city:"Delhi",
    state:"Delhi",
    type:"Govt - NIFT",
    courses:[
    "B.Des - Designing",
    "Fashion Designing",
    "M.Des"
    ],
    fee:"B.Des Fashion: ₹2.8L/yr",
    admission:"NIFT Entrance",
    approval:"Ministry of Textiles, Govt of India",
    placement:"Myntra, Zara, H&M",
    image:"https://cdn0.careeraddict.com/uploads/article/60092/national-institute-fashion-technology.jpg",
    link:"https://www.nift.ac.in"
    },

{
    name:"AIIMS Delhi",
    city:"Delhi",
    state:"Delhi",
    type:"Govt - AIIMS",
    courses:[
    "MBBS","BDS","BSc Nursing",
    "B.Optom - Optometry",
    "BPT - Physiotherapy",
    "BMLT","DMLT"
    ],
    fee:"MBBS: ₹1,628/yr, BSc Nursing: ₹2k/yr",
    admission:"NEET UG for MBBS",
    approval:"Institute of National Importance, NMC",
    placement:"AIIMS Doctor",
    image:"https://indiaeducation.net/wp-content/uploads/2022/07/AIIMS_Delhi.jpg",
    link:"https://aiims.edu"
    },

{
    name:"DIPSAR Delhi - B.Pharma Govt",
    city:"Delhi",
    state:"Delhi",
    type:"Govt",
    courses:[
    "B.Pharma","D.Pharma","M.Pharma"
    ],
    fee:"B.Pharma: ₹30k/yr",
    admission:"CUET + DIPSAR Entrance",
    approval:"Delhi Govt University, PCI Approved",
    placement:"Sun Pharma, Cipla, Dr Reddys",
    image:"https://image-static.collegedunia.com/public/college_data/images/campusimage/9374_campus.webp",
    link:"https://dpsru.edu.in"
    },

{
    name:"ABES Engineering College Ghaziabad",
    city:"Ghaziabad",
    state:"UP",
    type:"Private",
    courses:[
    "B.Tech","BCA","MCA","BBA","B.Pharma","MBA"
    ],
    fee:"B.Tech CSE: ₹1.35L/yr, BCA: ₹85k/yr",
    admission:"JEE Main Rank + UPTAC Counselling",
    approval:"AKTU Affiliated, AICTE, NAAC",
    placement:"TCS, Infosys, Capgemini - Avg 5 LPA",
    image:"https://images.careerindia.com/college-photos/9201/600x450-5_1542362814.jpg",
    link:"https://abes.ac.in"
    },

{
    name:"Santosh Medical College Ghaziabad",
    city:"Ghaziabad",
    state:"UP",
    type:"Private",
    courses:[
    "MBBS","BDS","BSc Nursing",
    "B.Optom - Optometry","BPT - Physiotherapy",
    "BMLT","DMLT","B.Pharma"
    ],
    fee:"MBBS: ₹11L/yr, BDS: ₹3L/yr, BSc Nursing: ₹90k/yr",
    admission:"NEET UG for MBBS/BDS",
    approval:"NMC/MCI, DCI, INC",
    placement:"Santosh Hospital",
    image:"https://rmgoe.org/universities/India/images/1750842523_685bbc9b515c6.webp",
    link:"https://santosh.ac.in"
    },

{
    name:"SSV College Hapur",
    city:"Hapur",
    state:"UP",
    type:"Private",
    courses:[
    "BCA","BBA","B.Com","M.Com",
    "BA LLB","BSc Agriculture"
    ],
    fee:"BCA: ₹32k/yr, BBA: ₹30k/yr, B.Com: ₹15k/yr",
    admission:"CCSU Merit + CUET",
    approval:"CCSU Meerut Affiliated",
    placement:"Local",
    image:"https://ssvhapur.ac.in/img/gallery/ssvgallery01.jpg",
    link:"https://ssvcollegehapur.edu.in"
    },

{
    name:"CCSU Campus Meerut",
    city:"Meerut",
    state:"UP",
    type:"Govt University",
    courses:[
    "BCA","MCA","B.Tech","BBA","MBA",
    "B.Com","M.Com","B.Pharma",
    "BA LLB","BSc Agriculture"
    ],
    fee:"B.Tech: ₹75k/yr, BCA: ₹36k/yr",
    admission:"CUET UG + JEE Main + University Entrance",
    approval:"State Govt University, UGC, BCI, PCI",
    placement:"Govt + Private",
    image:"https://ccsu-scriet.github.io/international-conference/assest/hero-new2.jpg",
    link:"https://ccsuniversity.ac.in"
    },

{
    name:"Amity Gurgaon Haryana",
    city:"Gurgaon",
    state:"Haryana",
    type:"Private University",
    courses:[
    "B.Tech","BCA","MCA","BBA","MBA","B.Com",
    "BA LLB","B.Pharma","BSc Nursing",
    "B.Optom - Optometry","B.Des - Designing"
    ],
    fee:"B.Tech: ₹1.8L/yr, BCA: ₹1.2L/yr",
    admission:"Amity Test + JEE + CUET",
    approval:"UGC, BCI, PCI, Haryana Govt",
    placement:"Gurgaon corporate",
    image:"https://images.careerindia.com/img/2025/02/amity-university-gurugram-jpg-1739339886544_1739339885482-1200x675.jpg",
    link:"https://amity.edu/gurugram/"
    },

{
    name:"NIT Kurukshetra Haryana",
    city:"Gurgaon",
    state:"Haryana",
    type:"Govt - NIT",
    courses:[
    "B.Tech","M.Tech","MCA"
    ],
    fee:"B.Tech: ₹1.8L/yr",
    admission:"JEE Mains",
    approval:"Institute of National Importance, NIT",
    placement:"Avg 12 LPA",
    image:"https://sunstone.edu.in/blogwp/wp-content/uploads/2021/09/NIT-kurukshetra.jpeg",
    link:"https://nitkkr.ac.in"
    },

{
    name:"SGT University Gurgaon",
    city:"Gurgaon",
    state:"Haryana",
    type:"Private University",
    courses:[
    "MBBS","BDS","B.Pharma","D.Pharma",
    "BSc Nursing","B.Optom - Optometry",
    "BPT - Physiotherapy","BMLT","DMLT",
    "B.Des - Designing"
    ],
    fee:"MBBS: ₹18L/yr, BDS: ₹3.2L/yr",
    admission:"NEET for MBBS/BDS, CUET for others",
    approval:"UGC, NMC, DCI, PCI, INC",
    placement:"SGT Hospital Gurgaon",
    image:"https://image-static.collegedunia.com/public/college_data/images/campusimage/1648105006D-BLOCK-compressed-1-scaled.jpg",
    link:"https://sgtuniversity.ac.in"
    },

{
    name:"Goa University",
    city:"Goa",
    state:"Goa",
    type:"Govt University",
    courses:[
    "BCA","MCA","BBA","MBA","B.Com","M.Com",
    "BA LLB","B.Pharma","BSc Nursing",
    "BSc Agriculture","B.Des - Designing"
    ],
    fee:"BCA: ₹30k/yr, BA LLB: ₹35k/yr",
    admission:"Goa University Entrance + CUET",
    approval:"State Govt University, UGC, BCI, PCI",
    placement:"Goa Tourism + IT Companies",
    image:"https://th.bing.com/th/id/OIP.cmnGQ_EiG5tL99CdBVwgFAHaDZ?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://www.unigoa.ac.in"
    },

{
    name:"Goa Medical College",
    city:"Goa",
    state:"Goa",
    type:"Govt",
    courses:[
    "MBBS","BDS","BSc Nursing",
    "B.Optom - Optometry",
    "BPT - Physiotherapy",
    "BMLT","B.Pharma"
    ],
    fee:"MBBS: ₹1L/yr, BDS: ₹80k/yr",
    admission:"NEET UG + Goa CET",
    approval:"Goa University, NMC, DCI, INC",
    placement:"Goa Medical Hospital",
    image:"https://www.justmbbs.com/img/college/goa/goa-medical-college-panaji-banner.jpg",
    link:"https://www.gmc.goa.gov.in"
    },

{
    name:"BITS Pilani Goa Campus",
    city:"Goa",
    state:"Goa",
    type:"Private University",
    courses:[
    "B.Tech","B.Pharma","B.Des - Designing"
    ],
    fee:"B.Tech: ₹4.5L/yr",
    admission:"BITSAT Entrance",
    approval:"Deemed University, UGC, PCI",
    placement:"Best Private placement",
    image:"https://studyriserr.com/images/cover/1710574663BITS%20Goa%20Cover%20Photo.jpg",
    link:"https://www.bits-pilani.ac.in/goa/"
    },

{
    name:"IIT Bombay",
    city:"Mumbai",
    state:"Maharashtra",
    type:"Govt - IIT",
    courses:[
    "B.Tech","B.Des - Designing"
    ],
    fee:"B.Tech: ₹2.2L/yr",
    admission:"JEE Advanced + UCEED",
    approval:"Institute of National Importance",
    placement:"Top Engineering placement",
    image:"https://wallpaperaccess.com/full/8637655.jpg",
    link:"https://www.iitb.ac.in"
    },

{
    name:"ICT Mumbai - Best Pharmacy",
    city:"Mumbai",
    state:"Maharashtra",
    type:"Govt",
    courses:[
    "B.Pharma","D.Pharma","B.Tech"
    ],
    fee:"B.Pharma: ₹85k/yr",
    admission:"MHT CET",
    approval:"Deemed University, PCI",
    placement:"Pharmacy industry placement",
    image:"https://files.yappe.in/place/full/institute-of-chemical-technology-ict-10529229.webp",
    link:"https://www.ictmumbai.edu.in"
    },

{
    name:"Christ University Bangalore",
    city:"Bangalore",
    state:"Karnataka",
    type:"Private University",
    courses:[
    "BCA","MCA","BBA","MBA","B.Com","M.Com",
    "BA LLB","BSc Nursing","B.Des - Designing",
    "Fashion Designing"
    ],
    fee:"BCA: ₹1.2L/yr, BBA: ₹1.8L/yr",
    admission:"Christ Entrance Test + Interview",
    approval:"Deemed University, NAAC, UGC, BCI",
    placement:"Deloitte, KPMG, Goldman Sachs",
    image:"https://www.eduska.com/assets/user_photo/226d8d3e9075f7f841866c45a501f0de.jpg",
    link:"https://christuniversity.in"
    },

{
    name:"Osmania University Hyderabad",
    city:"Hyderabad",
    state:"Telangana",
    type:"Govt University",
    courses:[
    "BCA","MCA","BBA","MBA","B.Com","M.Com",
    "BA LLB","B.Pharma","BSc Nursing","BSc Agriculture"
    ],
    fee:"BCA: ₹25k/yr, BA LLB: ₹20k/yr",
    admission:"TS EAMCET + LAWCET",
    approval:"State Govt, UGC, BCI, PCI",
    placement:"Average + Govt Jobs",
    image:"https://storage.googleapis.com/education-prod/51e3edd5-7c0c-4ad9-8747-f47a2dd79dc2.jpg",
    link:"https://www.osmania.ac.in"
    },

{
    name:"IIT Delhi",
    city:"New Delhi",
    state:"Delhi",
    type:"Govt - IIT",
    courses:["B.Tech", "M.Tech", "MBA", "MSc"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Advanced / GATE / CAT",
    approval:"Institute of National Importance",
    placement:"Multiple national & global recruiters",
    image:"https://digitallearning.eletsonline.com/wp-content/uploads/2019/07/IIT-Delhi.jpeg",
    link:"https://home.iitd.ac.in"
    },

{
    name:"IIT Madras",
    city:"Chennai",
    state:"Tamil Nadu",
    type:"Govt - IIT",
    courses:["B.Tech", "M.Tech", "MSc", "MBA"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Advanced / GATE / CAT",
    approval:"Institute of National Importance",
    placement:"Strong technology and research recruitment",
    image:"https://iaspoint.com/wp-content/uploads/2026/04/20260408114923-1536x1011.png",
    link:"https://www.iitm.ac.in"
    },

{
    name:"IIT Kharagpur",
    city:"Kharagpur",
    state:"West Bengal",
    type:"Govt - IIT",
    courses:["B.Tech", "M.Tech", "LLB", "MBA", "MSc"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Advanced / GATE / CAT",
    approval:"Institute of National Importance",
    placement:"Major recruiters across engineering and management",
    image:"https://wallpaperaccess.com/full/9316338.jpg",
    link:"https://www.iitkgp.ac.in"
    },

{
    name:"IIT Kanpur",
    city:"Kanpur",
    state:"UP",
    type:"Govt - IIT",
    courses:["B.Tech", "M.Tech", "MSc", "MBA"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Advanced / GATE / CAT",
    approval:"Institute of National Importance",
    placement:"Technology, consulting and core-sector recruiters",
    image:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1200,h_675/https://phodu.club/wp-content/uploads/2025/05/iit-kanpur-1.webp",
    link:"https://www.iitk.ac.in"
    },

{
    name:"IIT Roorkee",
    city:"Roorkee",
    state:"Uttarakhand",
    type:"Govt - IIT",
    courses:["B.Tech", "M.Tech", "MSc", "MBA"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Advanced / GATE / CAT",
    approval:"Institute of National Importance",
    placement:"Engineering, analytics and consulting recruiters",
    image:"https://wallpaperaccess.com/full/9411643.jpg",
    link:"https://www.iitr.ac.in"
    },

{
    name:"NIT Tiruchirappalli",
    city:"Tiruchirappalli",
    state:"Tamil Nadu",
    type:"Govt - NIT",
    courses:["B.Tech", "M.Tech", "MCA", "MBA"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Main / GATE / CAT",
    approval:"Institute of National Importance",
    placement:"Core engineering and IT recruiters",
    image:"https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=85",
    link:"https://www.nitt.edu"
    },

{
    name:"NIT Karnataka Surathkal",
    city:"Mangaluru",
    state:"Karnataka",
    type:"Govt - NIT",
    courses:["B.Tech", "M.Tech", "MCA", "MBA"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Main / GATE / CAT",
    approval:"Institute of National Importance",
    placement:"Engineering and technology recruiters",
    image:"https://img.jagranjosh.com/images/2022/April/1442022/118282133_3209429542466983_2931716677706882742_n.jpg",
    link:"https://www.nitk.ac.in"
    },

{
    name:"NIT Warangal",
    city:"Warangal",
    state:"Telangana",
    type:"Govt - NIT",
    courses:["B.Tech", "M.Tech", "MCA", "MBA"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Main / GATE / CAT",
    approval:"Institute of National Importance",
    placement:"IT, core engineering and consulting recruiters",
    image:"https://media.telanganatoday.com/wp-content/uploads/2025/11/NIT-warangal.jpg",
    link:"https://www.nitw.ac.in"
    },

{
    name:"IIIT Hyderabad",
    city:"Hyderabad",
    state:"Telangana",
    type:"Deemed University - IIIT",
    courses:["B.Tech", "M.Tech", "MS"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Main / UGEE / PGEE routes",
    approval:"Deemed University",
    placement:"Software, AI and research recruiters",
    image:"https://assets.telegraphindia.com/telegraph/2022/Sep/1663402984_iit-hyderabad.jpg",
    link:"https://www.iiit.ac.in"
    },

{
    name:"IIIT Allahabad",
    city:"Prayagraj",
    state:"UP",
    type:"Govt - IIIT",
    courses:["B.Tech", "M.Tech", "MBA", "PhD"],
    fee:"Program-wise; check official fee page",
    admission:"JEE Main / PG admissions",
    approval:"Institute of National Importance",
    placement:"Technology and software recruiters",
    image:"https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/228/2018/2/13/IIIT-Allahabad-(2).jpg",
    link:"https://www.iiita.ac.in"
    },

{
    name:"University of Delhi",
    city:"New Delhi",
    state:"Delhi",
    type:"Central University",
    courses:["BA", "BCom", "BSc", "BBA", "LLB"],
    fee:"Program-wise; check official fee page",
    admission:"CUET and course-specific process",
    approval:"Central University",
    placement:"Varies by constituent college and program",
    image:"https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus-image__rJY2dlIa.webp?tr=w-3840",
    link:"https://www.du.ac.in"
    },

{
    name:"Jawaharlal Nehru University",
    city:"New Delhi",
    state:"Delhi",
    type:"Central University",
    courses:["BA", "MA", "MSc", "MCA", "MBA"],
    fee:"Program-wise; check official fee page",
    admission:"CUET / JNUEE as applicable",
    approval:"Central University",
    placement:"Research, policy and diverse sector opportunities",
    image:"https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=85",
    link:"https://www.jnu.ac.in"
    },

{
    name:"Banaras Hindu University",
    city:"Varanasi",
    state:"UP",
    type:"Central University",
    courses:["BA", "BSc", "BCom", "B.Tech", "LLB", "MBA"],
    fee:"Program-wise; check official fee page",
    admission:"CUET / JEE / course-specific process",
    approval:"Central University",
    placement:"Diverse academic and professional opportunities",
    image:"https://th.bing.com/th/id/R.3c3d5dfc5747c2d63e640eecc412470d?rik=yhTomoCrtJTc7Q&riu=http%3a%2f%2f2.bp.blogspot.com%2f-V9Eqt_I2NLc%2fUEDxfXQPRNI%2fAAAAAAAAAdg%2fnNl_JF_W8BI%2fs1600%2fStudent_Hostel_BHU.JPG&ehk=hDB2SzjUkhwak%2fOS12PUvzMBJgjBF36wwjEzo0MqZRs%3d&risl=&pid=ImgRaw&r=0",
    link:"https://www.bhu.ac.in"
    },

{
    name:"Jamia Millia Islamia",
    city:"New Delhi",
    state:"Delhi",
    type:"Central University",
    courses:["BA", "BSc", "B.Tech", "MBA", "LLB"],
    fee:"Program-wise; check official fee page",
    admission:"CUET / JEE / course-specific process",
    approval:"Central University",
    placement:"Recruitment varies by faculty and program",
    image:"https://images.indianexpress.com/2025/03/Jamia-2col.jpg",
    link:"https://www.jmi.ac.in"
    },

{
    name:"University of Hyderabad",
    city:"Hyderabad",
    state:"Telangana",
    type:"Central University",
    courses:["MA", "MSc", "MCA", "MBA", "PhD"],
    fee:"Program-wise; check official fee page",
    admission:"CUET-PG / program-specific process",
    approval:"Central University",
    placement:"Research and professional opportunities",
    image:"https://studyatuniversity.com/wp-content/uploads/2023/12/University-Of-Hyderabad-In-India.jpg",
    link:"https://uohyd.ac.in"
    },

{
    name:"VIT Vellore",
    city:"Vellore",
    state:"Tamil Nadu",
    type:"Private University",
    courses:["B.Tech", "BCA", "MCA", "BBA", "MBA"],
    fee:"Program-wise; check official fee page",
    admission:"VITEEE / program-specific process",
    approval:"Deemed University",
    placement:"Large campus recruitment ecosystem",
    image:"https://ik.imagekit.io/syustaging/SYU_PREPROD/Vellore-Institute-of-Technology---_VIT-University_-_Vellore-_Tamil-Nadu_5UGuGGGzDd.webp?tr=w-3840",
    link:"https://vit.ac.in"
    },

{
    name:"Manipal Academy of Higher Education",
    city:"Manipal",
    state:"Karnataka",
    type:"Private University",
    courses:["B.Tech", "BBA", "MBA", "BCA", "MCA", "Medical"],
    fee:"Program-wise; check official fee page",
    admission:"MET / NEET / program-specific process",
    approval:"Deemed University",
    placement:"Recruitment varies by school and program",
    image:"https://www.vidyavision.com/CollegeUploads/Photos/2024-15-11-12-11-15_manipalacademy-campus.jpg",
    link:"https://www.manipal.edu"
    },

{
    name:"SRM Institute of Science and Technology",
    city:"Kattankulathur",
    state:"Tamil Nadu",
    type:"Private University",
    courses:["B.Tech", "BBA", "MBA", "BCA", "MCA", "Medical"],
    fee:"Program-wise; check official fee page",
    admission:"SRMJEEE / NEET / program-specific process",
    approval:"Deemed University",
    placement:"Technology and multidisciplinary recruiters",
    image:"https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=85",
    link:"https://www.srmist.edu.in"
    },

{
    name:"Symbiosis International University",
    city:"Pune",
    state:"Maharashtra",
    type:"Private University",
    courses:["BBA", "MBA", "LLB", "BCA", "MCA"],
    fee:"Program-wise; check official fee page",
    admission:"SET / SNAP / program-specific process",
    approval:"Deemed University",
    placement:"Strong management and professional programs",
    image:"https://directmqadmission.com/wp-content/uploads/2021/06/direct-admission-Symbiosis-International-University.png",
    link:"https://www.siu.edu.in"
    },

{
    name:"NMIMS Mumbai",
    city:"Mumbai",
    state:"Maharashtra",
    type:"Private University",
    courses:["BBA", "MBA", "B.Tech", "BCom", "Law"],
    fee:"Program-wise; check official fee page",
    admission:"NPAT / NMAT / program-specific process",
    approval:"Deemed University",
    placement:"Corporate recruitment across schools",
    image:"https://nmims.edu/images/home-slide/m-school-1.jpg",
    link:"https://www.nmims.edu"
    },

{
    name:"Ashoka University",
    city:"Sonipat",
    state:"Haryana",
    type:"Private University",
    courses:["BA", "BSc", "Economics", "Computer Science"],
    fee:"Program-wise; check official fee page",
    admission:"University application process",
    approval:"Private University",
    placement:"Liberal arts, consulting and technology opportunities",
    image:"https://images.thequint.com/thequint%2F2016-10%2F47ea0de5-102c-440c-8cbe-a444d4eea531%2FHero.jpg?rect=0%2C0%2C1820%2C1024&auto=format%2Ccompress&fmt=webp&w=1200",
    link:"https://www.ashoka.edu.in"
    },

{
    name:"O.P. Jindal Global University",
    city:"Sonipat",
    state:"Haryana",
    type:"Private University",
    courses:["BA LLB", "LLB", "BBA", "MBA", "Public Policy"],
    fee:"Program-wise; check official fee page",
    admission:"University / program-specific process",
    approval:"Private University",
    placement:"Law, policy and management opportunities",
    image:"https://www.collegedhundo.com/images/college/vavahaiaueieiie.jpeg",
    link:"https://jgu.edu.in"
    },

{
    name:"National Law School of India University",
    city:"Bengaluru",
    state:"Karnataka",
    type:"Govt - Law University",
    courses:["BA LLB", "LLM", "MSc", "PhD"],
    fee:"Program-wise; check official fee page",
    admission:"CLAT / program-specific process",
    approval:"State Law University",
    placement:"Law firms, judiciary and policy opportunities",
    image:"https://rohininilekaniphilanthropies.org/wp-content/uploads/2025/01/nls.jpg",
    link:"https://www.nls.ac.in"
    },

{
    name:"Christian Medical College Vellore",
    city:"Vellore",
    state:"Tamil Nadu",
    type:"Private Medical College",
    courses:["MBBS", "BSc Nursing", "Allied Health", "PG Medical"],
    fee:"Program-wise; check official fee page",
    admission:"NEET / program-specific process",
    approval:"Medical education institution",
    placement:"Healthcare and research careers",
    image:"https://www.ranipetnews.in/wp-content/uploads/2022/10/cmc-ranipet-1024x768.jpg",
    link:"https://www.cmch-vellore.edu"
    },

{
    name: "Acharya School of Design",
    city: "Bangalore",
    state: "Karnataka",
    nirfRank: null,
    rank: null,
    type: "Higher Education Institute",
    courses: ["UG programs", "PG programs", "Professional / research programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / entrance exam / university-specific process",
    approval: "UGC / AICTE / relevant statutory or affiliating authority as applicable",
    placement: "Placement support and career opportunities vary by program",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/20534/2021/10/13/Campus%20View%20of%20Acharya%20School%20of%20Design%20Bangalore_Campus-View.jpg",
    link: "https://acharya.ac.in"
  },

{
    name: "Acharya Sukumar Sen Mahavidyalaya, Burdwan",
    city: "Burdwan",
    state: "West Bengal",
    nirfRank: null,
    rank: null,
    type: "Higher Education Institute",
    courses: ["UG programs", "PG programs", "Professional / research programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / entrance exam / university-specific process",
    approval: "UGC / AICTE / relevant statutory or affiliating authority as applicable",
    placement: "Placement support and career opportunities vary by program",
    image: "https://sukumarsencollege.ac.in/uploads/IMG20250329105804.jpg",
    link: "http://www.sukumarsencollege.ac.in"
  },

{
    name: "Acharyar NRV School of Architecture, Bangalore",
    city: "Bangalore",
    state: "Karnataka",
    nirfRank: null,
    rank: null,
    type: "Higher Education Institute",
    courses: ["UG programs", "PG programs", "Professional / research programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / entrance exam / university-specific process",
    approval: "UGC / AICTE / relevant statutory or affiliating authority as applicable",
    placement: "Placement support and career opportunities vary by program",
    image: "https://th.bing.com/th/id/OIP.FfkHFg2pB4jplxDvU01ILwHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.acharya.ac.in"
  },

{
    name: "Acharyas Bangalore B School, Bangalore",
    city: "Bangalore",
    state: "Karnataka",
    nirfRank: null,
    rank: null,
    type: "Management / Commerce Institute",
    courses: ["BBA", "B.Com", "MBA", "PG Management programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / university or management entrance as applicable",
    approval: "UGC / AICTE / affiliating university as applicable",
    placement: "Business, finance, banking, consulting and management opportunities",
    image: "https://th.bing.com/th/id/OIP.ATQOYOzgosQ-HDDCn_-zeAHaDt?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.abbs.edu.in"
  },

{
    name: "Achievers College of Commerce and Management Night College",
    city: "Kalyan",
    state: "Maharashtra",
    nirfRank: null,
    rank: null,
    type: "Management / Commerce Institute",
    courses: ["BBA", "B.Com", "MBA", "PG Management programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / university or management entrance as applicable",
    approval: "UGC / AICTE / affiliating university as applicable",
    placement: "Business, finance, banking, consulting and management opportunities",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/29214/2020/6/22/Building%20View%20of%20Achievers%20College%20of%20Science%20Commerce%20and%20Management%20Night%20Kalyan_Campus-view.jpg",
    link: "https://achieversccm.ac.in"
  },

{
    name: "Acropolis Institute of Technology and Research",
    city: "Indore",
    state: "Madhya Pradesh",
    nirfRank: null,
    rank: null,
    type: "Engineering / Technology Institute",
    courses: ["B.Tech", "M.Tech", "Diploma / PG programs"],
    fee: "Program-wise; check official fee structure",
    admission: "JEE Main / state counselling / institute-specific process",
    approval: "AICTE / UGC / affiliating university as applicable",
    placement: "Engineering, IT, software, core-industry and higher-study opportunities",
    image: "https://d12aarmt01l54a.cloudfront.net/cms/images/UserMedia-20210127203437/1224-400.png",
    link: "http://aitr.ac.in"
  },

{
    name: "Adamas University",
    city: "Kolkata",
    state: "West Bengal",
    nirfRank: null,
    rank: null,
    type: "University",
    courses: ["UG programs", "PG programs", "Professional / research programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / entrance exam / university-specific process",
    approval: "UGC / relevant statutory authorities as applicable",
    placement: "Placement support and career opportunities vary by program",
    image: "https://th.bing.com/th/id/OIP.P4epy4_qDSp92lQnSxxyXwHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://adamasuniversity.ac.in"
  },

{
    name: "Adani Institute of Infrastructure Engineering",
    city: "Ahmedabad",
    state: "Gujarat",
    nirfRank: null,
    rank: null,
    type: "Engineering / Technology Institute",
    courses: ["B.Tech", "M.Tech", "Infrastructure Engineering programs"],
    fee: "Program-wise; check official fee structure",
    admission: "JEE Main / state counselling / institute-specific process",
    approval: "AICTE / UGC / affiliating university as applicable",
    placement: "Engineering, infrastructure, IT and core-industry opportunities",
    image: "https://th.bing.com/th/id/OIP.hGPLEcyOA037xESutSZfpgHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "http://www.adaniuni.ac.in"
  },


{
    name: "Adarsh Mahavidyalaya, Vita",
    city: "Sangli",
    state: "Maharashtra",
    nirfRank: null,
    rank: null,
    type: "Higher Education Institute",
    courses: ["UG programs", "PG programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / entrance exam / university-specific process",
    approval: "UGC / relevant affiliating authority as applicable",
    placement: "Placement support and career opportunities vary by program",
    image: "https://website-assets.studocu.com/img/document_thumbnails/0fea6a8023b226bfd4fd76c45299d149/thumb_1200_848.png",
    link: "http://www.acvita.edu.in"
  },

{
    name: "Adarsh Science, Jairamdas Bhagchand Arts & Birla Commerce College, Dhamangaon",
    city: "Amravati",
    state: "Maharashtra",
    nirfRank: null,
    rank: null,
    type: "Arts / Commerce / Science College",
    courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / university-specific admission process",
    approval: "UGC / affiliating university as applicable",
    placement: "Career guidance and placement opportunities vary by program",
    image: "https://th.bing.com/th/id/OIP.4VKgf_KCnDieH6BGi--q5gHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "http://www.adarshamv.org"
  },

{
    name: "Adarsh Shikshan Sanstha`s Kalikadevi Arts, Commerce & Science College",
    city: "Shirur Kasar",
    state: "Maharashtra",
    nirfRank: null,
    rank: null,
    type: "Arts / Commerce / Science College",
    courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / university-specific admission process",
    approval: "UGC / affiliating university as applicable",
    placement: "Career guidance and placement opportunities vary by program",
    image: "https://adarshcollege.avpskulgaon.net/cdn/college/adarshcollege-building-front.png",
    link: "http://www.kalikadevicollegeshirurkasar.org"
  },
{
    name: "Adharsh Vidyalaya College of Arts and Science for Women",
    city: "Bhavani Tk",
    state: "Tamil Nadu",
    nirfRank: null,
    rank: null,
    type: "Arts / Science College",
    courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / university-specific admission process",
    approval: "UGC / affiliating university as applicable",
    placement: "Career guidance and placement opportunities vary by program",
    image: "https://th.bing.com/th/id/OIP.pp0HBB8fZ94UjVBn3enwbAHaEo?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://www.adharshvidhyalaya.com "
  },

{
    name: "Adhiparasakthi College of Arts and Science",
    city: "Raniipet",
    state: "Tamil Nadu",
    nirfRank: null,
    rank: null,
    type: "Arts / Science College",
    courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
    fee: "Program-wise; check official fee structure",
    admission: "Merit / university-specific admission process",
    approval: "UGC / affiliating university as applicable",
    placement: "Career guidance and placement opportunities vary by program",
    image: "https://th.bing.com/th/id/OIP.1LshkijUjYmZzrJfXYlXZgHaE6?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link: "https://apcas.ac.in"
  },

{
  name: "A.P.C. Mahalaxmi College for Women",
  city: "Thoothukkudi",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://media.getmyuni.com/azure/college-image/big/apc-mahalaxmi-college-for-women-apcmcw-thoothukudi.jpg",
  link: "http://apcmcollege.ac.in"
},

{
  name: "A.V.C. College of Engineering",
  city: "Mayiladuthurai",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://assets.collegedunia.com/public/image/avc_main_entrance_d882923b35f0e0ac9c323bc4f85176d0.jpg",
  link: "http://www.avccengg.net"
},

{
  name: "A.V.P. College of Arts and Science",
  city: "Tiruppur",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://www.joonsquare.com/usermanage/image/business/avp-college-of-arts-and-science-tiruvarur-16409/avp-college-of-arts-and-science-tiruvarur-avp-college-of-arts-and-science-2.jpg",
  link: "http://avpcas.org"
},

{
  name: "ABACUS Institute of Engineering and Management",
  city: "Mogra",
  state: "West Bengal",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://www.collegeadmission.in/uploads/college/banner_image/abacus-institute-of-engineering-and-management-aiem-hooghly-1061.jpg",
  link: "http://www.abacusinstitute.org"
},

{
  name: "ABES Institute of Technology, Ghaziabad",
  city: "Ghaziabad",
  state: "Uttar Pradesh",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://images.shiksha.com/mediadata/images/1494926067phpeEODKn_g.jpg",
  link: "https://www.abesit.in"
},

{
  name: "ABM College Jamshedpur",
  city: "JAMSHEDPUR",
  state: "Jharkhand",
  nirfRank: null,
  rank: null,
  type: "Higher Education Institute",
  courses: ["UG programs", "PG programs", "Professional programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / entrance exam / institute-specific process",
  approval: "UGC / affiliating authority as applicable",
  placement: "Placement support and career opportunities vary by program",
  image: "https://admissionnotification.in/uploads/1714461116_6621.png",
  link: "https://www.abmcollege.com"
},

{
  name: "ABSS Institute of Technology, Mawana Road, Meerut",
  city: "MEERUT",
  state: "Uttar Pradesh",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://th.bing.com/th/id/OIP.8LikVCJI0k1nlJlWwMWHtAHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "https://www.abss.edu.in"
},

{
  name: "ACE Engineering college",
  city: "Hyderabad",
  state: "Telangana",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://th.bing.com/th/id/OIP.6ru3s1JaXPSbXenows-ycwHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "http://www.aceec.ac.in"
},

{
  name: "ACROPOLIS FACULTY OF MANAGEMENT & RESEARCH",
  city: "Indore",
  state: "Madhya Pradesh",
  nirfRank: null,
  rank: null,
  type: "Management Institute",
  courses: ["BBA", "MBA", "PG Management programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / management entrance as applicable",
  approval: "UGC / AICTE / affiliating university as applicable",
  placement: "Business, finance, banking, consulting and management opportunities",
  image: "https://www.collegebatch.com/static/clg-gallery/acropolis-faculty-of-management-research-indore-367889.webp",
  link: "http://afmr.ac.in"
},

{
  name: "ACS College of Engineering",
  city: "Bengaluru",
  state: "Karnataka",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://th.bing.com/th/id/OIP.faABHfNaL7ryDrUr1mqRTAHaD0?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "http://www.acsce.edu.in"
},

{
  name: "ACTS Degree College",
  city: "Visakhapatnam",
  state: "Andhra Pradesh",
  nirfRank: null,
  rank: null,
  type: "Higher Education Institute",
  courses: ["UG programs", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://th.bing.com/th/id/OIP.bJIOpHeQ9eXNTuuHWooy4QHaDc?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: ""
},

{
  name: "ADHIPARASAKTHI DENTAL COLLEGE AND HOSPITAL, KANCHEEPURAM",
  city: "Melmaruvathur",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Dental / Healthcare College",
  courses: ["BDS", "MDS", "Dental programs"],
  fee: "Program-wise; check official fee structure",
  admission: "NEET-UG / NEET-PG or program-specific admission",
  approval: "Dental / statutory regulatory authority and affiliating university as applicable",
  placement: "Dental practice, hospitals, clinics, research and higher studies",
  image: "https://mycampusadmission.com/aaamydashboard/html/images/1769073375_697.jpg",
  link: "https://www.apdch.edu.in"
},

{
  name: "AISSMS College of Engineering",
  city: "Pune",
  state: "Maharashtra",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://www.campusoption.com/images/colleges/gallery/23_01_17_070654_college2.jpg",
  link: "http://aissmscoe.com"
},

{
  name: "AJ Institute of Dental Sciences",
  city: "Dakshina Kannada",
  state: "Karnataka",
  nirfRank: null,
  rank: null,
  type: "Dental / Healthcare College",
  courses: ["BDS", "MDS", "Dental programs"],
  fee: "Program-wise; check official fee structure",
  admission: "NEET-UG / NEET-PG or program-specific admission",
  approval: "Dental / statutory regulatory authority and affiliating university as applicable",
  placement: "Dental practice, hospitals, clinics, research and higher studies",
  image: "https://careermudhra.com/wp-content/uploads/aj-institute-of-dental-sciences-mangalore.jpg",
  link: "https://ajids.edu.in"
},

{
  name: "AL BARKAT INSTITUTE OF MANAGEMENT STUDIES, ALIGARH",
  city: "Aligarh",
  state: "Uttar Pradesh",
  nirfRank: null,
  rank: null,
  type: "Management Institute",
  courses: ["BBA", "MBA", "PG Management programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / management entrance as applicable",
  approval: "UGC / AICTE / affiliating university as applicable",
  placement: "Business, finance, banking, consulting and management opportunities",
  image: "https://th.bing.com/th/id/OIP.BDbEpwr2Jg7v6AHCeRxWvgHaC6?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "http://www.abims.ac.in "
},

{
  name: "ALL INDIA INSTITUTE OF MEDICAL SCIENCES, PATNA",
  city: "Patna",
  state: "Bihar",
  nirfRank: null,
  rank: null,
  type: "Medical / Healthcare Institute",
  courses: ["MBBS", "MD/MS", "Super Specialty", "Allied Health"],
  fee: "Program-wise; check official fee structure",
  admission: "NEET-UG / NEET-PG or program-specific admission",
  approval: "NMC / relevant statutory authority",
  placement: "Healthcare, clinical practice, research and higher studies",
  image: "https://th.bing.com/th/id/OIP.__DSaPl3f0th5BJhoOmNBwHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "https://aiimspatna.edu.in"
},

{
  name: "ALL INDIA INSTITUTE OF MEDICAL SCIENCES, RAIPUR",
  city: "Raipur",
  state: "Chhattisgarh",
  nirfRank: null,
  rank: null,
  type: "Medical / Healthcare Institute",
  courses: ["MBBS", "MD/MS", "Super Specialty", "Allied Health"],
  fee: "Program-wise; check official fee structure",
  admission: "NEET-UG / NEET-PG or program-specific admission",
  approval: "NMC / relevant statutory authority",
  placement: "Healthcare, clinical practice, research and higher studies",
  image: "https://www.edufever.com/wp-content/uploads/2020/09/All-India-Institute-of-Medical-Sciences-Raipur.png",
  link: "https://www.aiimsraipur.edu.in/"
},

{
  name: "ALL INDIA INSTITUTE OF MEDICAL SCIENCES, RISHIKESH",
  city: "Rishikesh",
  state: "Uttarakhand",
  nirfRank: null,
  rank: null,
  type: "Medical / Healthcare Institute",
  courses: ["MBBS", "MD/MS", "Super Specialty", "Allied Health"],
  fee: "Program-wise; check official fee structure",
  admission: "NEET-UG / NEET-PG or program-specific admission",
  approval: "NMC / relevant statutory authority",
  placement: "Healthcare, clinical practice, research and higher studies",
  image: "https://img.jagranjosh.com/images/2022/November/23112022/All-India-Institute-of-Medical-Sciences-Rishikesh-Campus-View-3.jpg",
  link: "https://aiimsrishikesh.edu.in/a1_1/"
},

{
  name: "AMALA INSTITUTE OF MEDICAL SCIENCES, THRISSUR",
  city: "Thrissur",
  state: "Kerala",
  nirfRank: null,
  rank: null,
  type: "Medical / Healthcare Institute",
  courses: ["MBBS", "MD/MS", "Allied Health"],
  fee: "Program-wise; check official fee structure",
  admission: "NEET-UG / NEET-PG or program-specific admission",
  approval: "NMC / relevant statutory authority",
  placement: "Healthcare, clinical practice, research and higher studies",
  image: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/140703030331_44842402.webp",
  link: "http://amalaims.org"
},

{
  name: "AMJAD ALI KHAN COLLEGE OF BUSINESS ADMINISTRATION",
  city: "Hyderabad",
  state: "Telangana",
  nirfRank: null,
  rank: null,
  type: "Management / Commerce Institute",
  courses: ["BBA", "B.Com", "MBA", "Management programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university or management entrance as applicable",
  approval: "UGC / AICTE / affiliating university as applicable",
  placement: "Business, finance, banking, consulting and management opportunities",
  image: "https://tse2.mm.bing.net/th/id/OIP.YDaWFWSzjSDjTRSTyuOQmAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "http://amjadalikhancollege.edu.in"
},

{
  name: "ANNADA COLLEGE, HAZARIBAG",
  city: "Hazaribag",
  state: "Jharkhand",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://image-static.collegedunia.com/public/reviewPhotos/259947/8dc253c808b681a81233a44fb881b535106659f1fc564ae252fcad071d8267eb.0.JPG",
  link: "https://annadacollege.ac.in"
},

{
  name: "APEEJAY INSTITUTE OF MANAGEMENT AND ENGINEERING TECHNICAL CAMPUS",
  city: "Jalandhar",
  state: "Punjab",
  nirfRank: null,
  rank: null,
  type: "Engineering / Management Institute",
  courses: ["B.Tech", "MBA", "Management programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / management entrance / merit as applicable",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, management and corporate opportunities",
  image: "https://th.bing.com/th/id/OIP.ox7GM5nd-N9q5WvwvoYJ3AHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "https://aimetc.apeejay.edu"
},

{
  name: "APSPM`S ARTS & SCIENCE COLLEGE, AINPUR",
  city: "AINPUR",
  state: "Maharashtra",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://th.bing.com/th/id/OIP.Dch92ZdItWw-GBOW7igrzwHaE7?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "https://www.ainpurcollege.org"
},

{
  name: "ATME College of Engineering",
  city: "Mysore",
  state: "Karnataka",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://www.campusoption.com/images/colleges/gallery/28_11_16_113438_ATME.JPG",
  link: "https://atme.edu.in"
},

{
  name: "AU College of Engineering (A)",
  city: "Visakhapatnam",
  state: "Andhra Pradesh",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "State entrance / counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://www.vidyavision.com/CollegeUploads/Photos/2016-29-4-12-24-19_au11.jpg",
  link: "http://andhrauniversity.edu.in"
},

{
  name: "AVS College of Arts & Science",
  city: "Salem",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/7447/2020/6/15/Buliding%20of%20AVS%20College%20of%20Arts%20and%20Science%20Salem_Campus-View.jpg",
  link: "https://www.avscollege.ac.in/"
},

{
  name: "AVS College of Technology (Formerly AVS Technical Campus)",
  city: "SALEM",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://th.bing.com/th/id/OIP.TQwRMu0VOVuxrD9oXB5TVQHaEG?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "http://www.avstech.ac.in"
},

{
  name: "Aalim Muhammed Salegh College of Engineering",
  city: "Jharbandh",
  state: "Odisha",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://image-static.collegedunia.com/public/reviewPhotos/1096691/CSE-1.jpg",
  link: "https://www.aalimec.ac.in"
},

{
  name: "Aarupadai Veedu Institute of Technology",
  city: "Chennai",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://media.getmyuni.com/azure/college-images-test/aarupadai-veedu-institute-of-technology-avit-kanchipuram/fb89c06794e347429e62b75a2d0f755c.png",
  link: "https://www.avit.ac.in"
},

{
  name: "Aarupadai Veedu Medical College and Hospital",
  city: "Puducherry",
  state: "Pondicherry",
  nirfRank: null,
  rank: null,
  type: "Medical / Healthcare Institute",
  courses: ["MBBS", "MD/MS", "Allied Health"],
  fee: "Program-wise; check official fee structure",
  admission: "NEET-UG / NEET-PG or program-specific admission",
  approval: "NMC / relevant statutory authority",
  placement: "Healthcare, clinical practice, research and higher studies",
  image: "https://th.bing.com/th/id/OIP.uK7zp-5zApr3QGeFFa8ZaQHaDC?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "https://avmc.edu.in"
},

{
  name: "Abasaheb Garware Institute of Management Studies",
  city: "Sangli",
  state: "Maharashtra",
  nirfRank: null,
  rank: null,
  type: "Management Institute",
  courses: ["BBA", "MBA", "Management programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / management entrance as applicable",
  approval: "UGC / AICTE / affiliating university as applicable",
  placement: "Business, finance, banking, consulting and management opportunities", 
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/8262/2020/9/23/Main%20Campus%20view%20of%20Abasaheb%20Garware%20Institute%20of%20Management%20Studies%20Sangli_Campus-view.png",
  link: "http://agims.org.in"
 },

{
  name: "Abhyayapuri College",
  city: "Bongaigaon",
  state: "Assam",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://th.bing.com/th/id/OIP.x4jZCEMmJv0PCJW2hhiV5gHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "http://abhayapuricollege.ac.in"
},

{
  name: "Academy of Maritime Education and Training",
  city: "Kancheepuram",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Maritime University / Institute",
  courses: ["Marine Engineering", "Nautical Science", "Maritime Management"],
  fee: "Program-wise; check official fee structure",
  admission: "Entrance / merit / institute-specific maritime admission process",
  approval: "Relevant maritime authority / university approval as applicable",
  placement: "Shipping, maritime operations and marine-industry opportunities",
  image: "https://apnaadvantage.com/_next/image?url=https:%2F%2Fcdn.apna.co%2Fapna-learn%2Facademy-of-maritime-education-and-training-online%2Fbanner_20250701_075950&w=3840&q=75",
  link: "https://www.ametuniv.ac.in"
},

{
  name: "Academy of Scientific & Innovative Research",
  city: "Ghaziabad",
  state: "Uttar Pradesh",
  nirfRank: null,
  rank: null,
  type: "Research / Higher Education Institute",
  courses: ["PG programs", "PhD", "Research programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Entrance / academic merit / research-specific process",
  approval: "Relevant statutory / research authority as applicable",
  placement: "Research, scientific, academic and technology careers",
  image: "https://img.jagranjosh.com/images/2023/August/2482023/10710251_887775927907101_6505835871582495056_o.jpg",
  link: "http://acsir.res.in"
},

{
  name: "Academy of Technology",
  city: "Hooghly",
  state: "West Bengal",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://aot.edu.in/wp-content/uploads/2025/05/Screenshot-from-2025-05-08-15-53-33.png",
  link: "http://www.aot.edu.in"
},
{
  name: "Accurate Institute of Architecture & Planning",
  city: "Greater Noida",
  state: "Uttar Pradesh",
  nirfRank: null,
  rank: null,
  type: "Architecture / Planning Institute",
  courses: ["B.Arch", "Architecture", "Planning programs"],
  fee: "Program-wise; check official fee structure",
  admission: "NATA / relevant entrance / university process as applicable",
  approval: "COA / UGC / affiliating authority as applicable",
  placement: "Architecture, planning, design and construction-sector opportunities",
  image: "https://th.bing.com/th/id/OIP.rhpKShvYZ-SdLbz0WShysAHaEB?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "https://architecture.accurate.in"
},

{
  name: "Accurate Institute of Management & Technology",
  city: "Greater Noida",
  state: "Uttar Pradesh",
  nirfRank: null,
  rank: null,
  type: "Management / Technology Institute",
  courses: ["B.Tech", "MBA", "BBA", "Management programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / management entrance / merit as applicable",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, management and corporate opportunities",
  image: "https://th.bing.com/th/id/OIP.u14IlwGgQ0As5a5wqA8cFwHaEN?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "https://www.accurate.in"
},

{
  name: "Acharya Institute of Technology",
  city: "Bengaluru",
  state: "Karnataka",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://campusways.com/wp-content/uploads/2022/03/acharya-14-bg_11zon-1536x890.jpeg",
  link: "https://www.acharya.ac.in"
},

{
  name: "Acharya Instiute Graduate Studies(of Journalism), Chikkabanavara",
  city: "Bengaluru",
  state: "Karnataka",
  nirfRank: null,
  rank: null,
  type: "Journalism / Media Institute",
  courses: ["Journalism", "Mass Communication", "Media Studies"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / institute-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Media, journalism, content, communication and digital-media opportunities",
  image: "https://campusways.com/wp-content/uploads/2024/04/Edited-2.gif",
  link: "https://www.acharya.ac.in"
},

{
  name: "Acharya Narendra Dev College",
  city: "New Delhi",
  state: "Delhi",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.Sc", "B.A.", "B.Com", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "University admission / merit / entrance as applicable",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance, internships and placement opportunities",
  image: "https://www.collegebatch.com/static/clg-gallery/acharya-narendra-dev-college-new-delhi-242470.webp",
  link: "http://andcollege.du.ac.in"
},

{
  name: "Acharya Patashala College of Commerce, N.R. Colony, Bangalore",
  city: "Bangalore",
  state: "Karnataka",
  nirfRank: null,
  rank: null,
  type: "Commerce College",
  courses: ["B.Com", "Commerce programs", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Finance, accounting, banking and corporate opportunities",
  image: "https://image-upload.getmycollege.com/new-uploads/college/gallery/acharya-patashala-evening-college-of-arts-and-commerce-1-gallery-image-957.jpg",
  link: "https://apscommerce.in"
},

{
  name: "Acharya Prafulla Chandra College",
  city: "Kolkata",
  state: "West Bengal",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://www.apcrgc.org/home-icons/photos/webpage-170.jpg",
  link: "http://www.apccollege.ac.in"
},

{
  name: "Adhiparasakthi Engineering College",
  city: "Chengalpat",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/128a2749-c210-4ee1-8893-1e4195328b29/H_Block/w=1920,quality=90,fit=scale-down",
  link: "https://apec.edu.in"
},

{
  name: "Adhiyaman Arts and Science College for Women, Srinivasa Nagar",
  city: "Krishnagiri",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Arts / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlKtnHhkgFQt0n1FVITMwZ8FNgkv0gVnDvd0RvgdfN5f5V5veNCvErkObv6LmZuYuAPPrFc5O6C0HYfwRZWZbC2JLJbGl7cRl4_z_NP7fLADD3uSHOQr82EDLUsNJjTdnkjKCQOGpd8tRz6Ge20PBx_T4Fz7pM-5gdWfbL_j9eC432kmvxS4vMcBlVqjY/s515/Adhiyaman%20Arts%20And%20Science%20College%20for%20Women%20(AASCW).png",
  link: "http://www.adhiyamanwomencollege.in"
},

{
  name: "Adi Shankara Institute of Engineering and Technology",
  city: "Kalady",
  state: "Kerala",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://image-static.collegedunia.com/public/reviewPhotos/850385/Screenshot_2024-08-27-17-19-16-50_40deb401b9ffe8e1df2f1cc5ba480b12.jpg",
  link: "http://www.adishankara.ac.in"
},

{
  name: "Adichunchanagiri Institute of Medical Science",
  city: "Nagamangala",
  state: "Karnataka",
  nirfRank: null,
  rank: null,
  type: "Medical / Healthcare Institute",
  courses: ["MBBS", "MD/MS", "Allied Health"],
  fee: "Program-wise; check official fee structure",
  admission: "NEET-UG / NEET-PG or program-specific admission",
  approval: "NMC / relevant statutory authority",
  placement: "Healthcare, clinical practice, research and higher studies",
  image: "https://admissionkaro.com/wp-content/uploads/2023/02/Admission-In-Adichunchanagiri-Institute-of-Medical-Science-Bellur.jpg",
  link: "https://bgsaims.edu.in/"
},

{
  name: "Adichunchanagiri Institute of Technology",
  city: "Chikmagalur",
  state: "Karnataka",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://www.mymathews.com/media/gallery/Adichunchanagiri_Institute_of_Technology_6.JPG",
  link: "https://aitckm.edu.in"
},

{
  name: "Adina Institute of Science and Technology, Sagar",
  city: "Sagar",
  state: "Madhya Pradesh",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/5073/2019/3/23/Campus%20View%20of%20ADINA%20Institute%20of%20Science%20and%20Technology%20Sagar_Campus-View.jpg",
  link: "https://www.adina.edu.in"
},

{
  name: "Aditanar College of Arts & Science, Virapandianpattinam",
  city: "Thoothukkudi",
  state: "Tamil Nadu",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://image-static.collegedunia.com/public/college_data/images/appImage/105_ACAS_New.jpg",
  link: "http://www.aditanarcollege.com"
},

{
  name: "Aditi Mahavidyalaya",
  city: "Delhi",
  state: "Delhi",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "UG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "University admission / merit / entrance as applicable",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance, internships and placement opportunities",
  image: "https://institute.careerguide.com/wp-content/uploads/2023/08/0d6de6f5-822b-4393-b9d5-e458efc84b0e.jpg",
  link: "https://aditi.du.ac.in/"
},

{
  name: "Aditya College of Engineering",
  city: "Madanapalle",
  state: "Andhra Pradesh",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://th.bing.com/th/id/OIP.jDwW-Jq-DG2OVFknTYTr1QHaEv?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "https://acoe.edu.in/"
},

{
  name: "Aditya College of Engineering & Technology",
  city: "Surampalem",
  state: "Andhra Pradesh",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PhxREx0yOGsRlv_xl9m_0g8XytLAwl6jtnXyMO95ol9FFxYNdMrNCjez&s=10",
  link: "https://acet.ac.in/"
},

{
  name: "Aditya Degree College",
  city: "Vizianagaram",
  state: "Andhra Pradesh",
  nirfRank: null,
  rank: null,
  type: "Degree College",
  courses: ["B.A.", "B.Com", "B.Sc", "UG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/20222/2019/4/22/Campus%20View%20of%20Aditya%20Degree%20College%20Vizianagaram_Campus-View.PNG",
  link: "https://aditya.ac.in/adcvzm/"
},

{
  name: "Aditya Degree College for Women, Kakinada",
  city: "KAKINADA",
  state: "Andhra Pradesh",
  nirfRank: null,
  rank: null,
  type: "Degree College",
  courses: ["B.A.", "B.Com", "B.Sc", "UG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://cdn.universitykart.com/Content/upload/admin/ys5celtb.3tf.jpg",
  link: "https://aditya.ac.in"
},

{
  name: "Aditya Engineering College",
  city: "Surampalem",
  state: "Andhra Pradesh",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://images.shiksha.com/mediadata/images/1491982787phppl6QHp_g.jpg",
  link: "https://www.aec.edu.in/"
},

{
  name: "Aditya Institute of Management Studies and Research",
  city: "Mumbai",
  state: "Maharashtra",
  nirfRank: null,
  rank: null,
  type: "Management Institute",
  courses: ["MBA", "PG Management programs", "Management Studies"],
  fee: "Program-wise; check official fee structure",
  admission: "Management entrance / merit as applicable",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Business, finance, consulting, marketing and management opportunities",
  image: "https://th.bing.com/th/id/OIP.OOAJCwvdknPAYrsze52r0AHaDk?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "http://www.aimsr.edu.in"
},

{
  name: "Aditya Institute of Technology and Management",
  city: "Tekkali",
  state: "Andhra Pradesh",
  nirfRank: null,
  rank: null,
  type: "Engineering / Technology Institute",
  courses: ["B.Tech", "M.Tech", "Engineering programs"],
  fee: "Program-wise; check official fee structure",
  admission: "JEE Main / state counselling / institute-specific process",
  approval: "AICTE / UGC / affiliating university as applicable",
  placement: "Engineering, IT, software and core-industry opportunities",
  image: "https://th.bing.com/th/id/OIP.rtuvwvoTIueakmFYikTmYwHaE_?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  link: "https://www.adityatekkali.edu.in/"
},

{
  name: "Adusumilli Gopalakrishnaiah & Sugarcane Growers Siddhartha Degree College of Arts & Science",
  city: "Vuyyuru",
  state: "Andhra Pradesh",
  nirfRank: null,
  rank: null,
  type: "Arts / Commerce / Science College",
  courses: ["B.A.", "B.Com", "B.Sc", "PG programs"],
  fee: "Program-wise; check official fee structure",
  admission: "Merit / university-specific admission process",
  approval: "UGC / affiliating university as applicable",
  placement: "Career guidance and placement opportunities vary by program",
  image: "https://media.getmyuni.com/azure/college-images-test/adusumilli-gopalakrishnaiah-and-sugarcane-growers-siddhartha-degree-college-of-arts-and-science-krishna/08bfcc79f7f840a29f8c663af72d7edc.jpeg",
  link: "https://www.agsgsc.edu.in/"
},

    {
    name:"University of Lucknow",
    city:"Lucknow",
    state:"UP",
    type:"Government University",
    courses:[
    "BCA","BBA","B.Com","BA LLB","MBA","MCA"
    ],
    fee:"UG: ₹20k-₹60k/yr",
    admission:"University Admission / CUET",
    approval:"UGC Approved, NAAC",
    placement:"IT, Banking, Education, Government",
    image:"https://image-static.collegedunia.com/public/dashboard_upload/1770043620_MainBuilding(1).jpg",
    link:"https://www.lkouniv.ac.in"
    },

    {
    name:"Integral University Lucknow",
    city:"Lucknow",
    state:"UP",
    type:"Private University",
    courses:[
    "B.Tech","BCA","MCA","BBA","MBA","B.Pharma","BDS","BSc Nursing"
    ],
    fee:"B.Tech: ₹1.6L/yr, BCA: ₹90k/yr",
    admission:"IUET / CUET / NEET",
    approval:"UGC, AICTE, PCI, BCI",
    placement:"TCS, Infosys, Wipro, Hospitals",
    image:"https://ik.imagekit.io/syustaging/SYU_PREPROD/image_1734687079878_JVmjNqZvz.webp?tr=w-3840",
    link:"https://www.iul.ac.in"
    },

    {
    name:"Babu Banarasi Das University Lucknow",
    city:"Lucknow",
    state:"UP",
    type:"Private University",
    courses:[
    "B.Tech","BCA","MCA","BBA","MBA","B.Com","B.Pharma","B.Des"
    ],
    fee:"B.Tech: ₹1.2L/yr, BCA: ₹75k/yr",
    admission:"Entrance / Merit Based",
    approval:"UGC Approved, AICTE",
    placement:"TCS, Infosys, Wipro, Accenture",
    image:"https://ik.imagekit.io/syustaging/SYU_PREPROD/Babu-Banarasi-Das-University---_BBDU__-Lucknow_-Uttar-Pradesh_XQUHXJiZL.webp?tr=w-3840",
    link:"https://bbdu.ac.in"
    },

    {
    name:"Dr. A.P.J. Abdul Kalam Technical University Lucknow",
    city:"Lucknow",
    state:"UP",
    type:"State University",
    courses:[
    "B.Tech","B.Pharm","B.Arch","MBA","MCA","M.Tech"
    ],
    fee:"Program dependent",
    admission:"UPTAC / CUET / Entrance",
    approval:"State Govt University, UGC",
    placement:"Affiliated-college placement support",
    image:"https://th.bing.com/th/id/OIP.Sc3hSmYzu_BZKY2zTrfqtQHaDt?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://aktu.ac.in"
    },

    {
    name:"Institute of Engineering and Technology Lucknow",
    city:"Lucknow",
    state:"UP",
    type:"Government",
    courses:[
    "B.Tech","M.Tech","MCA"
    ],
    fee:"B.Tech: ₹90k/yr approx.",
    admission:"JEE Main + UPTAC",
    approval:"AKTU Affiliated, AICTE",
    placement:"TCS, Infosys, Wipro, Tech Mahindra",
    image:"https://th.bing.com/th/id/OLC.Zv3cAhXDN63SPg480x360?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://www.ietlucknow.ac.in"
    },

    {
    name:"King George's Medical University Lucknow",
    city:"Lucknow",
    state:"UP",
    type:"Government",
    courses:[
    "MBBS","BDS","BSc Nursing","B.Pharma","MDS","MD/MS"
    ],
    fee:"Course dependent",
    admission:"NEET / NEET PG",
    approval:"NMC, DCI, UGC",
    placement:"KGMU Hospital, Medical Sector",
    image:"https://th.bing.com/th/id/OIP.97tldQOqwWav0Y5pNebydgHaDX?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://www.kgmu.org"
    },

    {
    name:"Sanjay Gandhi Postgraduate Institute of Medical Sciences Lucknow",
    city:"Lucknow",
    state:"UP",
    type:"Government",
    courses:[
    "BSc Nursing","DM","MCh","MD","MS"
    ],
    fee:"Course dependent",
    admission:"Entrance / NEET PG",
    approval:"Institute of National Importance",
    placement:"SGPGIMS Hospital, Medical Sector",
    image:"https://www.shikshababa.com/images/colleges/featured_images/sanjay-gandhi-postgraduate-institute-of-medical-sciences.webp",
    link:"https://sgpgims.org.in"
    },
    {
    name:"IIT (BHU) Varanasi",
    city:"Varanasi",
    state:"UP",
    type:"Government Institute",
    courses:[
    "B.Tech","M.Tech","MSc","MBA","PhD"
    ],
    fee:"B.Tech: ₹2L/yr approx.",
    admission:"JEE Advanced / GATE / JAM",
    approval:"Institute of National Importance, AICTE",
    placement:"Google, Microsoft, Amazon, Tata, Core Companies",
    image:"https://th.bing.com/th/id/OIP.9ByID6XYqlIUOqyiae1AjwHaC9?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://iitbhu.ac.in"
    },

    {
    name:"Aligarh Muslim University Aligarh",
    city:"Aligarh",
    state:"UP",
    type:"Central University",
    courses:[
    "B.Tech","BCA","BBA","B.Com","BA LLB","MBBS","BDS","BSc Nursing"
    ],
    fee:"Course dependent",
    admission:"CUET / NEET / University Entrance",
    approval:"UGC, NMC, BCI",
    placement:"Research, Government, IT, Healthcare",
    image:"https://www.learningroutes.in/_next/image?url=https:%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FCentre-for-Distance-and-Online-Education-Aligarh-Muslim-University%2Fhero-image%2Fbanner.webp&w=3840&q=75",
    link:"https://www.amu.ac.in"
    },

    {
    name:"Dr. Bhim Rao Ambedkar University Agra",
    city:"Agra",
    state:"UP",
    type:"State University",
    courses:[
    "BCA","BBA","B.Com","MBA","MCA","BA LLB"
    ],
    fee:"Course dependent",
    admission:"CUET / Merit / University Admission",
    approval:"UGC, State Govt University",
    placement:"Education, Banking, IT, Government",
    image:"https://ik.imagekit.io/syustaging/SYU_PREPROD/Cover-Image_UI0xHIHdFV.webp?tr=w-3840",
    link:"https://dbrau.ac.in"
    },

    {
    name:"Madan Mohan Malaviya University of Technology Gorakhpur",
    city:"Gorakhpur",
    state:"UP",
    type:"Government University",
    courses:[
    "B.Tech","M.Tech","MCA","MBA","BBA"
    ],
    fee:"B.Tech: ₹1L/yr approx.",
    admission:"JEE Main / CUET / University Process",
    approval:"UGC, AICTE, NAAC",
    placement:"TCS, Infosys, Wipro, Core Companies",
    image:"https://th.bing.com/th/id/OIP.JRyZOKw7cB_wBUSlyo4WzQHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://www.mmmut.ac.in"
    },

    {
    name:"Harcourt Butler Technical University Kanpur",
    city:"Kanpur",
    state:"UP",
    type:"State University",
    courses:[
    "B.Tech","M.Tech","MCA","MBA","PhD"
    ],
    fee:"B.Tech: ₹1L/yr approx.",
    admission:"JEE Main / UPTAC",
    approval:"UGC, AICTE",
    placement:"TCS, Infosys, Accenture, Core Companies",
    image:"https://th.bing.com/th/id/OIP.kd7SSI_C8nK6FjLy6kxKywHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://hbtu.ac.in"
    },

    {
    name:"Chhatrapati Shahu Ji Maharaj University Kanpur",
    city:"Kanpur",
    state:"UP",
    type:"State University",
    courses:[
    "BCA","BBA","B.Com","B.Tech","MBA","MCA","B.Pharma"
    ],
    fee:"Course dependent",
    admission:"CUET / UPTAC / Merit",
    approval:"UGC, AICTE, PCI",
    placement:"IT, Banking, Healthcare, Corporate",
    image:"https://img.studyclap.com/img/institute/university/original/6163/csjmu-kanpur-25a0b4b50a.jpg",
    link:"https://csjmu.ac.in"
    },

    {
    name:"MNNIT Allahabad Prayagraj",
    city:"Prayagraj",
    state:"UP",
    type:"Government Institute",
    courses:[
    "B.Tech","M.Tech","MCA","MBA","MSc"
    ],
    fee:"B.Tech: ₹2L/yr approx.",
    admission:"JEE Main / GATE / NIMCET",
    approval:"Institute of National Importance, AICTE",
    placement:"Google, Amazon, Microsoft, Adobe, Core Companies",
    image:"https://th.bing.com/th/id/OIP.UwcMZwOfF4HSeqOMyVDSZgHaC9?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://www.mnnit.ac.in"
    },

    {
    name:"KIET Group of Institutions Ghaziabad",
    city:"Ghaziabad",
    state:"UP",
    type:"Private",
    courses:[
    "B.Tech","MCA","MBA","B.Pharma","BBA"
    ],
    fee:"B.Tech: ₹1.5L/yr approx.",
    admission:"JEE Main / UPTAC / Merit",
    approval:"AKTU Affiliated, AICTE, NAAC",
    placement:"TCS, Infosys, Wipro, Accenture",
    image:"https://th.bing.com/th/id/OIP.eo6M0nPyjr-B8Ou3-CCB5wHaFH?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://www.kiet.edu"
    },

    {
    name:"Ajay Kumar Garg Engineering College Ghaziabad",
    city:"Ghaziabad",
    state:"UP",
    type:"Private",
    courses:[
    "B.Tech","M.Tech","MCA","MBA"
    ],
    fee:"B.Tech: ₹1.4L/yr approx.",
    admission:"JEE Main + UPTAC",
    approval:"AKTU Affiliated, AICTE, NAAC",
    placement:"TCS, Infosys, Wipro, Capgemini",
    image:"https://www.collegedhundo.com/images/college/images%20(5).jpeg",
    link:"https://www.akgec.ac.in"
    },

    {
    name:"Galgotias College of Engineering and Technology Greater Noida",
    city:"Greater Noida",
    state:"UP",
    type:"Private",
    courses:[
    "B.Tech","M.Tech","MBA","MCA"
    ],
    fee:"B.Tech: ₹1.2L/yr approx.",
    admission:"JEE Main + UPTAC",
    approval:"AKTU Affiliated, AICTE, NAAC",
    placement:"TCS, Infosys, Accenture, Capgemini",
    image:"https://www.galgotiasuniversity.edu.in/public/uploads/media/8W2FioDxUDCy6SY4TYzOFN28JlRJD6Ru4WGOKM8G.jpg",
    link:"https://galgotiacollege.edu"
    },

    {
    name:"Jaypee Institute of Information Technology Noida",
    city:"Noida",
    state:"UP",
    type:"Private University",
    courses:[
    "B.Tech","M.Tech","MCA","MBA","BSc"
    ],
    fee:"B.Tech: ₹2L/yr approx.",
    admission:"JEE Main / University Admission",
    approval:"UGC, AICTE",
    placement:"TCS, Amazon, Microsoft, Infosys, Adobe",
    image:"https://th.bing.com/th/id/OIP.j0HEwFdqmD2elqPhy2UkjwHaD9?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://www.jiit.ac.in"
    },

    {
    name:"Bennett University Greater Noida",
    city:"Greater Noida",
    state:"UP",
    type:"Private University",
    courses:[
    "B.Tech","BCA","BBA","MBA","BA LLB","B.Des"
    ],
    fee:"B.Tech: ₹3L/yr approx.",
    admission:"JEE Main / CUET / University Admission",
    approval:"UGC, AICTE, BCI",
    placement:"Google, Deloitte, TCS, Infosys, Corporate Sector",
    image:"https://th.bing.com/th/id/OIP.0J6eaK6A2oV5lCHdWHd3YAHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    link:"https://www.bennett.edu.in"
    },

  
  {
    name: "Government Polytechnic Bulandshahr",
    city: "Bulandshahr",
    state: "Uttar Pradesh",
    type: "Government Polytechnic",
    courses: ["Diploma in Engineering", "Computer Science", "Electrical Engineering"],
    fee: "Low",
    admission: "Entrance/Merit",
    approval: "AICTE",
    placement: "Placement Assistance",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/27866/2019/12/20/Campus%20view%20of%20Government%20Polytechnic%20Debai%20Bulandshahar_Campus-view.jpg",
    link: "https://bteup.ac.in"
  },
  
  
  {
    name: "S.D. College of Management Studies",
    city: "Bulandshahr",
    state: "Uttar Pradesh",
    type: "Private College",
    courses: ["BBA", "BCA", "MBA"],
    fee: "Moderate",
    admission: "Merit/Entrance",
    approval: "UGC/University Affiliation",
    placement: "Placement Assistance",
    image: "https://content.jdmagicbox.com/comp/muzaffarnagar/g1/9999px131.x131.181113222257.l8g1/catalogue/s-d-college-of-management-studies-bhopa-road-muzaffarnagar-colleges-p7b38mhqdq.jpg",
    link: "https://ccsuniversity.ac.in"
  },
  {
    name: "Maharaja Agrasen College",
    city: "Sikandrabad",
    state: "Uttar Pradesh",
    type: "Private College",
    courses: ["BA", "BCom", "BSc"],
    fee: "Moderate",
    admission: "Merit Based",
    approval: "UGC",
    placement: "Placement Support",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    link: "https://ccsuniversity.ac.in"
  },
  
 
    ];
    
    // Safe campus images used whenever a college image is missing or fails.
    const realCampusImages = [
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=85"
    ];

    function getSafeCollegeImage(college, index=0){
      const image = college && typeof college.image === "string"
        ? college.image.trim()
        : "";
      // Ignore empty values and obvious webpage URLs accidentally stored as images.
      const looksLikeWebPage = /universitydetails|college\/college-details|\/university\/[^/?]+$/i.test(image);
      return image && !looksLikeWebPage
        ? image
        : realCampusImages[index % realCampusImages.length];
    }

    function inferDirectoryCourses(name){
      const n=name.toLowerCase();
      if(/medical|medicine|mbbs|dental|pharma|nursing|ayur|homeo|hospital|health/.test(n)){
        return ["MBBS","BDS","B.Pharma","Nursing"];
      }
      if(/law|legal|llb|judicial/.test(n)){
        return ["BA LLB","LLB","LLM"];
      }
      if(/engineering|technology|institute of tech|iit|nit|iiit|polytechnic/.test(n)){
        return ["B.Tech","M.Tech","Diploma"];
      }
      if(/management|business|commerce|b-school|finance|account/.test(n)){
        return ["BBA","MBA","B.Com"];
      }
      if(/agri|agriculture|veterinary|fisher|horticulture|forestry/.test(n)){
        return ["BSc Agriculture","B.Tech Agriculture"];
      }
      if(/design|fashion|fine art|architecture/.test(n)){
        return ["B.Des - Designing","Architecture"];
      }
      return ["BCA","BBA","B.Com","B.A.","B.Sc."];
    }

    function directoryType(name){
      const n=name.toLowerCase();
      if(/government|govt|national|iit|nit|iiit|aiims|central university|state university/.test(n)){
        return "Govt / Public";
      }
      return "Private / Affiliated";
    }

    function directoryWebsite(name){
      return "https://www.google.com/search?q="+encodeURIComponent(name+" official website India");
    }

    function normaliseDirectoryRow(row, index){
      const name=(row[0]||"").replace(/\s+/g," ").trim();
      const city=(row[1]||"Unknown").replace(/\s+/g," ").trim();
      const state=(row[2]||"India").replace(/\s+/g," ").trim();
      if(!name || name.toLowerCase()==="college name") return null;
      return {
        name,
        city:city==="nan"?"Unknown":city,
        state:state==="nan"?"India":state,
        type:directoryType(name),
        courses:inferDirectoryCourses(name),
        fee:"Fee varies by course — check official website",
        admission:"Admission route varies by course and state",
        approval:"Listed in the public India college directory",
        placement:"Placement details vary by college and course",
        image:getSafeCollegeImage(null,index),
        link:directoryWebsite(name),
        directoryRecord:true
      };
    }

    async function loadAdditionalColleges(){
      const info=document.getElementById("resultsInfo");
      if(info) info.innerText="Loading 500 additional colleges from the India directory…";
      for(const source of additionalDirectorySources){
        try{
          const response=await fetch(source);
          if(!response.ok) continue;
          const csv=await response.text();
          const rows=parseCsvRows(csv);
          const imported=[];
          const seen=new Set(colleges.map(c=>c.name.toLowerCase()));
          for(let i=1;i<rows.length && imported.length<500;i++){
            const item=normaliseDirectoryRow(rows[i],i);
            if(!item || seen.has(item.name.toLowerCase())) continue;
            seen.add(item.name.toLowerCase());
            imported.push(item);
          }
          if(imported.length>=500){
            colleges=colleges.concat(imported.slice(0,500));
            buildAdvancedOptions();
            applyCollegeFilters();
            return;
          }
        }catch(error){
          console.warn("College directory could not be loaded",error);
        }
      }
      if(info) info.innerText="Showing existing colleges. Directory is temporarily unavailable — try refreshing once.";
      renderColleges(colleges);
    }
    function directoryWebsite(name){
  return "https://www.google.com/search?q=" +
    encodeURIComponent(name + " official website India");
}

function normaliseDirectoryRow(row, index){
  const name = (row[0] || "").replace(/\s+/g," ").trim();
  const city = (row[1] || "Unknown").replace(/\s+/g," ").trim();
  const state = (row[2] || "India").replace(/\s+/g," ").trim();

  if(!name || name.toLowerCase() === "college name") return null;

  return {
    name,
    city: city === "nan" ? "Unknown" : city,
    state: state === "nan" ? "India" : state,
    type: directoryType(name),
    courses: inferDirectoryCourses(name),
    fee: "Fee varies by course — check official website",
    admission: "Admission route varies by course and state",
    approval: "Listed in the public India college directory",
    placement: "Placement details vary by college and course",
    image: getSafeCollegeImage(null,index),
    link: directoryWebsite(name),
    directoryRecord: true
  };
}

// ✅ ADD THIS
const additionalDirectorySources = []; // Add CSV/API URLs here when an external directory is available.

async function loadAdditionalColleges(){
  const info = document.getElementById("resultsInfo");

  if(info)
    info.innerText = "Loading 500 additional colleges from the India directory…";

  for(const source of additionalDirectorySources){
    try{
      const response = await fetch(source);

      if(!response.ok) continue;

      const csv = await response.text();
      const rows = parseCsvRows(csv);

      const imported = [];
      const seen = new Set(
        colleges.map(c => c.name.toLowerCase())
      );

      for(let i = 1; i < rows.length && imported.length < 500; i++){
        const item = normaliseDirectoryRow(rows[i], i);

        if(!item || seen.has(item.name.toLowerCase()))
          continue;

        seen.add(item.name.toLowerCase());
        imported.push(item);
      }

      if(imported.length >= 500){
        colleges = colleges.concat(imported.slice(0, 500));

        buildAdvancedOptions();
        applyCollegeFilters();
        return;
      }

    }catch(error){
      console.warn(
        "College directory could not be loaded",
        error
      );
    }
  }

  if(info)
    info.innerText =
      "Showing existing colleges. Directory is temporarily unavailable — try refreshing once.";

  renderColleges(colleges);
}


    /* =====================================================
       GOVERNMENT JOB DETAILS
    ===================================================== */

    const govtJobsDetail={

    "SSC GD Constable":{
    eligibility:"10th Pass, Age 18-23",
    exam:"CBT 80 Questions + PET",
    prep:"Daily Maths, GK, Reasoning and Physical Practice",
    skills:"Hindi, Maths, Reasoning, GK, Physical Fitness",
    promotion:"Constable → Head Constable → ASI → SI → Inspector",
    salary:"₹25,400 - ₹40,000 + Allowances"
    },

    "Railway Group D":{
    eligibility:"10th Pass + ITI",
    exam:"CBT + PET + Medical",
    prep:"Maths, Science, GK and Reasoning",
    skills:"Maths, Science, GK, Reasoning",
    promotion:"Group D → Technician → JE",
    salary:"₹25,000 - ₹45,000"
    },

    "SSC CHSL":{
    eligibility:"12th Pass",
    exam:"Tier-1 + Tier-2 + Typing",
    prep:"English, Maths, Reasoning and GK",
    skills:"Maths, Reasoning, English, GK, Computer",
    promotion:"LDC → UDC → Assistant",
    salary:"₹30,000 - ₹60,000"
    },

    "SSC CGL":{
    eligibility:"Graduation any stream",
    exam:"Tier-1 + Tier-2",
    prep:"Maths, Reasoning, English, GK and Mock Tests",
    skills:"Maths, Reasoning, English, GK, Computer",
    promotion:"Assistant → Section Officer → Higher Posts",
    salary:"₹45,000 - ₹85,000"
    },

    "Bank Clerk (IBPS/SBI)":{
    eligibility:"Graduation",
    exam:"Prelims + Mains",
    prep:"Quant, Reasoning, English and Banking Awareness",
    skills:"Quantitative Aptitude, Reasoning, English",
    promotion:"Clerk → Senior Clerk → Assistant Manager",
    salary:"₹32,000 - ₹50,000"
    },

    "Bank PO":{
    eligibility:"Graduation",
    exam:"Prelims + Mains + Interview",
    prep:"Quant, Reasoning, English, Banking Awareness",
    skills:"Quant, Reasoning, English, Banking",
    promotion:"PO → Manager → Senior Manager → AGM",
    salary:"₹52,000 - ₹85,000"
    },

    "NDA":{
    eligibility:"12th with Physics & Maths",
    exam:"Maths + GAT + SSB",
    prep:"Maths, English, GK, Physical Fitness and SSB",
    skills:"Maths, English, GK, Leadership",
    promotion:"Lieutenant → Captain → Major → Higher Ranks",
    salary:"₹56,100 onwards + Facilities"
    },

    "UPSC IAS / IPS / IFS":{
    eligibility:"Graduation",
    exam:"Prelims + Mains + Interview",
    prep:"NCERT + Current Affairs + Answer Writing",
    skills:"History, Geography, Polity, Economy, Current Affairs",
    promotion:"IAS/IPS → Senior Administrative Posts",
    salary:"₹56,100 - ₹2,50,000 + Government Facilities"
    }

    };


    /* =====================================================
       COURSE DATA
    ===================================================== */

    const data={

    it:{
    title:"IT & Technology - Courses",
    courses:[
    {name:"BCA",dur:"3 Years",fee:"₹36k/yr",sal:"₹3-8 LPA"},
    {name:"B.Tech CSE",dur:"4 Years",fee:"₹1.1-2.3L/yr",sal:"₹4-25 LPA"},
    {name:"MCA",dur:"2 Years",fee:"₹70k-1.8L/yr",sal:"₹4-12 LPA"},
    {name:"BSc IT",dur:"3 Years",fee:"₹30k-80k/yr",sal:"₹2.5-6 LPA"},
    {name:"BSc CS",dur:"3 Years",fee:"₹30k-70k/yr",sal:"₹2.5-6 LPA"},
    {name:"BSc Data Science",dur:"3 Years",fee:"₹60k-1.2L/yr",sal:"₹5-12 LPA"},
    {name:"BCA Data Science",dur:"3 Years",fee:"₹80k-1.2L/yr",sal:"₹5-10 LPA"},
    {name:"Diploma Web Dev",dur:"1 Year",fee:"₹30k-60k",sal:"₹2-5 LPA"},
    {name:"Diploma Full Stack",dur:"1 Year",fee:"₹40k-80k",sal:"₹3-6 LPA"},
    {name:"AI/ML",dur:"1 Year",fee:"₹70k-1.2L",sal:"₹5-15 LPA"},
    {name:"Cyber Security",dur:"6-12 Months",fee:"₹50k-90k",sal:"₹3.5-9 LPA"},
    {name:"Cloud Computing",dur:"6 Months",fee:"₹40k-70k",sal:"₹4-10 LPA"},
    {name:"UI/UX Design",dur:"6-12 Months",fee:"₹35k-75k",sal:"₹3-7 LPA"},
    {name:"MCA AI & ML",dur:"2 Years",fee:"₹1-2L/yr",sal:"₹6-14 LPA"}
    ]
    },

    engineering:{
    title:"Engineering - Degree & Diploma",
    courses:[
    {name:"B.Tech Computer Science",dur:"4 Years",fee:"₹1-2.5L/yr",sal:"₹4-25 LPA"},
    {name:"B.Tech Mechanical",dur:"4 Years",fee:"₹80k-2L/yr",sal:"₹3-10 LPA"},
    {name:"B.Tech Civil",dur:"4 Years",fee:"₹80k-2L/yr",sal:"₹3-9 LPA"},
    {name:"B.Tech Electrical",dur:"4 Years",fee:"₹80k-2L/yr",sal:"₹3-10 LPA"},
    {name:"B.Tech ECE",dur:"4 Years",fee:"₹1-2.5L/yr",sal:"₹4-15 LPA"},
    {name:"B.Tech AI & ML",dur:"4 Years",fee:"₹1-2.5L/yr",sal:"₹5-20 LPA"},
    {name:"B.Tech Data Science",dur:"4 Years",fee:"₹1-2.5L/yr",sal:"₹5-18 LPA"},
    {name:"B.Tech Automobile",dur:"4 Years",fee:"₹80k-2L/yr",sal:"₹3-10 LPA"},
    {name:"M.Tech",dur:"2 Years",fee:"₹60k-2L/yr",sal:"₹5-15 LPA"},
    {name:"Diploma Civil Engineering",dur:"3 Years",fee:"₹20k-80k/yr",sal:"₹2-5 LPA"},
    {name:"Diploma Mechanical Engineering",dur:"3 Years",fee:"₹20k-80k/yr",sal:"₹2-5 LPA"},
    {name:"Diploma Electrical Engineering",dur:"3 Years",fee:"₹20k-80k/yr",sal:"₹2-5 LPA"}
    ]
    },

    medical:{
    title:"Medical - Courses",
    courses:[
    {name:"MBBS",dur:"5.5 Years",fee:"Govt/Private",sal:"₹8-20 LPA"},
    {name:"BDS",dur:"5 Years",fee:"₹2.5-3.5L/yr",sal:"₹4-10 LPA"},
    {name:"B.Pharma",dur:"4 Years",fee:"₹90k-1.3L/yr",sal:"₹3-7 LPA"},
    {name:"D.Pharma",dur:"2 Years",fee:"₹70k-1L/yr",sal:"₹2-4 LPA"},
    {name:"M.Pharma",dur:"2 Years",fee:"₹1-1.8L/yr",sal:"₹4-8 LPA"},
    {name:"BSc Nursing",dur:"4 Years",fee:"₹80k-1.3L/yr",sal:"₹3-6 LPA"},
    {name:"GNM",dur:"3 Years",fee:"₹60k-1L/yr",sal:"₹2-4 LPA"},
    {name:"ANM",dur:"2 Years",fee:"₹40k-80k/yr",sal:"₹1.8-3.5 LPA"},
    {name:"DMLT",dur:"2 Years",fee:"₹40k-70k/yr",sal:"₹2-4.5 LPA"},
    {name:"BMLT",dur:"3 Years",fee:"₹50k-90k/yr",sal:"₹2.5-5 LPA"},
    {name:"BAMS",dur:"5.5 Years",fee:"₹1.8-2.8L/yr",sal:"₹4-9 LPA"},
    {name:"BHMS",dur:"5.5 Years",fee:"₹1.2-2L/yr",sal:"₹3-7 LPA"},
    {name:"BPT - Physiotherapy",dur:"4.5 Years",fee:"₹80k-1.5L/yr",sal:"₹3-6 LPA"},
    {name:"B.Optom - Optometry",dur:"4 Years",fee:"₹60k-1.2L/yr",sal:"₹2.5-5 LPA"},
    {name:"Radiology",dur:"3 Years",fee:"₹60k-1L/yr",sal:"₹3-6 LPA"},
    {name:"OT Technician",dur:"2 Years",fee:"₹40k-70k/yr",sal:"₹2-4 LPA"}
    ]
    },

    banking:{
    title:"Banking & Finance",
    courses:[
    {name:"B.Com",dur:"3 Years",fee:"₹30k/yr",sal:"₹2-5 LPA"},
    {name:"B.Com Hons",dur:"3 Years",fee:"₹35k/yr",sal:"₹2.5-5.5 LPA"},
    {name:"BBA Finance",dur:"3 Years",fee:"₹36k-90k/yr",sal:"₹3-6 LPA"},
    {name:"BBA General",dur:"3 Years",fee:"₹36k-90k/yr",sal:"₹3-6 LPA"},
    {name:"CA",dur:"5 Years",fee:"₹60k-1L total",sal:"₹7-25 LPA"},
    {name:"CS",dur:"3 Years",fee:"₹50k-80k",sal:"₹5-12 LPA"},
    {name:"MBA Finance",dur:"2 Years",fee:"₹1-2L/yr",sal:"₹5-15 LPA"},
    {name:"M.Com",dur:"2 Years",fee:"₹25k-40k/yr",sal:"₹3-6 LPA"},
    {name:"Diploma in Banking",dur:"1 Year",fee:"₹25k-55k",sal:"₹2-4.5 LPA"},
    {name:"CFA",dur:"2-3 Years",fee:"₹1-2L",sal:"₹8-20 LPA"}
    ]
    },

    govt:{
    title:"Government Jobs",
    courses:[
    {name:"SSC GD Constable",dur:"10th + Physical",fee:"₹5k-10k",sal:"₹3-5 LPA"},
    {name:"Railway Group D",dur:"10th + ITI",fee:"₹5k-15k",sal:"₹3-5.5 LPA"},
    {name:"SSC CHSL",dur:"12th",fee:"₹5k-12k",sal:"₹3-5 LPA"},
    {name:"SSC CGL",dur:"Graduation",fee:"₹5k-15k",sal:"₹4-8 LPA"},
    {name:"Bank Clerk (IBPS/SBI)",dur:"Graduation",fee:"₹10k-25k",sal:"₹3-5 LPA"},
    {name:"Bank PO",dur:"Graduation",fee:"₹15k-35k",sal:"₹4-9 LPA"},
    {name:"NDA",dur:"12th PCM",fee:"₹50k-1L",sal:"₹8-16 LPA"},
    {name:"UPSC IAS / IPS / IFS",dur:"Graduation",fee:"₹1-2L",sal:"₹8-20 LPA"}
    ]
    },

    law:{
    title:"Law",
    courses:[
    {name:"BA LLB",dur:"5 Years",fee:"₹50k-1.8L/yr",sal:"₹4-12 LPA"},
    {name:"BBA LLB",dur:"5 Years",fee:"₹60k-1L/yr",sal:"₹4-12 LPA"},
    {name:"B.Com LLB",dur:"5 Years",fee:"₹55k-1L/yr",sal:"₹4-10 LPA"},
    {name:"LLB",dur:"3 Years",fee:"₹35k-65k/yr",sal:"₹3-8 LPA"},
    {name:"LLM",dur:"2 Years",fee:"₹45k-75k/yr",sal:"₹6-15 LPA"},
    {name:"Cyber Law",dur:"1 Year",fee:"₹30k-60k",sal:"₹3-7 LPA"},
    {name:"Diploma in Criminal Law",dur:"1 Year",fee:"₹25k-50k",sal:"₹3-6 LPA"},
    {name:"Judiciary - PCS J",dur:"LLB + Prep",fee:"₹50k-1L",sal:"₹12-20 LPA"}
    ]
    },

    agri:{
    title:"Agriculture",
    courses:[
    {name:"BSc Agriculture",dur:"4 Years",fee:"₹50k/yr Govt",sal:"₹3-7 LPA"},
    {name:"B.Tech Agriculture",dur:"4 Years",fee:"₹70k-1L/yr",sal:"₹4-8 LPA"},
    {name:"MSc Agriculture",dur:"2 Years",fee:"₹50k-85k/yr",sal:"₹5-10 LPA"},
    {name:"Horticulture",dur:"2-4 Years",fee:"₹35k-65k/yr",sal:"₹2.5-5 LPA"},
    {name:"BSc Forestry",dur:"4 Years",fee:"₹45k-75k/yr",sal:"₹3-7 LPA"},
    {name:"MBA Agribusiness",dur:"2 Years",fee:"₹90k-1.5L/yr",sal:"₹6-14 LPA"},
    {name:"BSc Dairy Technology",dur:"4 Years",fee:"₹40k-70k/yr",sal:"₹3-6 LPA"},
    {name:"B.F.Sc Fisheries",dur:"4 Years",fee:"₹40k-60k/yr",sal:"₹3-6 LPA"},
    {name:"Diploma in Agriculture",dur:"2 Years",fee:"₹30k-50k/yr",sal:"₹2-4 LPA"},
    {name:"Food Technology",dur:"4 Years",fee:"₹60k-1L/yr",sal:"₹3-7 LPA"}
    ]
    }

    };


    /* =====================================================
       USE THE SAME REAL IMAGES FROM THE COLLEGE DATABASE
       ===================================================== */

    function getRealCollegeImage(collegeName, fallbackImg=""){
      const wanted = String(collegeName || "").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();

      const aliases = {
        "ccsu meerut campus": ["ccsu campus meerut", "ccsu meerut campus"],
        "rajkiya degree college bulandshahr": ["rajkiya degree college bulandshahr"],
        "ip college campus 2 bulandshahr": ["ip college campus 2 bulandshahr"],
        "jaypee university anoopshahr": ["jaypee university anoopshahr"],
        "galgotias university greater noida": ["galgotias university greater noida"]
      };

      let record = null;

      // First try an exact/alias match against the real college database.
      for(const [key,names] of Object.entries(aliases)){
        if(wanted === key || names.includes(wanted)){
          record = colleges.find(c => {
            const n = String(c.name || "").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
            return names.includes(n) || n === key;
          });
          if(record) break;
        }
      }

      // Then try a normal exact match.
      if(!record){
        record = colleges.find(c => {
          const n = String(c.name || "").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
          return n === wanted;
        });
      }

      // Return the SAME image already stored in the college database.
      if(record && typeof record.image === "string" && record.image.trim()){
        return record.image.trim();
      }

      // Only use the old value if a database record does not exist.
      return fallbackImg;
    }

    /* =====================================================
       COLLEGE CARD
    ===================================================== */

    function card(img,name,type,fee,entrance,link,text){

    return `
    <div class="college-item">

    <img src="${img}" onerror="this.onerror=null;this.style.display='none';">

    <div>

    <div style="display:flex;gap:6px;align-items:center">

    <b style="font-size:12px">
    ${name}
    </b>

    <span class="badge ${type.includes('Govt')?'govt':'pvt'}">
    ${type}
    </span>

    </div>

    <div style="font-size:11px;color:#94a3b8">
    ${fee}
    </div>

    <div class="entrance">
    Entrance: ${entrance}
    </div>

    <br>

    <a href="${link}"
    target="_blank"
    class="college-link">
    ${text} →
    </a>

    </div>

    </div>
    `;

    }


    /* =====================================================
       COURSE DETAILS
    ===================================================== */

    function cdNorm(value){
      return String(value||"").toLowerCase().replace(/[^a-z0-9]+/g,"");
    }

    /*
      Har family me:
      c   -> course card ke naam par test hota hai
      m   -> college.courses ki har entry par test hota hai (main match)
      alt -> agar main match se 0 college mile to ye use hota hai
      Order important hai - upar wali family pehle match hogi.
    */
    const cdCourseFamilies=[
      {id:"govtjob", c:/^(sscgd|ssc|railway|bank|nda|upsc|ias|ips|ifs|constable|clerk|po)/, m:null},

      {id:"law",     c:/llb|llm|law|judiciary|pcsj|advocate/,
                     m:/llb|llm|^law|legal/},

      {id:"agri",    c:/agricultur|horticultur|forestry|dairy|fisher|foodtech|agribusiness|agri/,
                     m:/agri|horticultur|forestry|dairy|fisher|foodtech|veterinar/},

      {id:"mbbs",    c:/mbbs/,
                     m:/mbbs|^medical|medicine/},

      {id:"bds",     c:/^bds|dental/,
                     m:/^bds|dental/},

      {id:"ayush",   c:/bams|bhms|bums|ayurved|homeo|unani|siddha/,
                     m:/bams|bhms|bums|ayurved|homeo|unani|ayush/,
                     alt:/mbbs|^medical|medicine|pharma/},

      {id:"pharma",  c:/pharma/,
                     m:/pharma/},

      {id:"nursing", c:/nursing|^gnm|^anm/,
                     m:/nursing|^gnm|^anm/},

      {id:"physio",  c:/^bpt|^mpt|physio/,
                     m:/^bpt|^mpt|physio/,
                     alt:/nursing|mbbs|^medical|paramed/},

      {id:"optom",   c:/optom/,
                     m:/optom|ophthal/,
                     alt:/nursing|mbbs|^medical|paramed/},

      {id:"paramed", c:/dmlt|bmlt|radiolog|ottechnician|paramed|mlt/,
                     m:/dmlt|bmlt|radiolog|paramed|mlt|alliedhealth/,
                     alt:/nursing|mbbs|^medical|pharma/},

      {id:"mca",     c:/^mca/,
                     m:/^mca/,
                     alt:/^bca|computerapplication/},

      {id:"bca",     c:/^bca/,
                     m:/^bca|computerapplication/},

      {id:"mtech",   c:/^mtech/,
                     m:/^mtech/,
                     alt:/^btech|engineering/},

      {id:"dipengg", c:/^diploma(civil|mechanical|electrical|electronics|computer|automobile)?engineering|polytechnic/,
                     m:/^diploma|polytechnic|^iti|^btech|engineering/},

      {id:"btech",   c:/btech|^be$|engineering/,
                     m:/^btech|^be$|engineering/,
                     alt:/^mtech|polytechnic|^diploma/},

      {id:"design",  c:/^bdes|^mdes|design|fashion|interior|animation|architect/,
                     m:/^bdes|^mdes|design|fashion|interior|architect|animation/,
                     alt:/^bfa|arts|^ba$/},

      {id:"it",      c:/aiml|artificialintelligence|machinelearning|datascience|cyber|cloud|webdev|fullstack|software|bscit|bsccs|computer/,
                     m:/^bca|^mca|^bscit|^bsccs|^bsccomputer|^bscdatascience|computerapplication|computerscience|informationtechnology/,
                     alt:/^btech|engineering/},

      {id:"mba",     c:/^mba|^pgdm|management/,
                     m:/^mba|^pgdm|management/,
                     alt:/^bba|^bcom|commerce/},

      {id:"bba",     c:/^bba|^bms|^bbm/,
                     m:/^bba|^bms$|^bbm$|businessadministration/,
                     alt:/management|^bcom|commerce/},

      {id:"mcom",    c:/^mcom/,
                     m:/^mcom/,
                     alt:/^bcom|commerce/},

      {id:"bcom",    c:/^bcom/,
                     m:/^bcom|commerce/},

      {id:"finance", c:/^ca$|^cs$|^cfa|banking|finance|account/,
                     m:/^bcom|^mcom|commerce|^bba|^mba/},

      {id:"msc",     c:/^msc/,
                     m:/^msc/,
                     alt:/^bsc|science/},

      {id:"bsc",     c:/^bsc/,
                     m:/^bsc|science/},

      {id:"ma",      c:/^ma$|^mahons/,
                     m:/^ma$|^mahons/,
                     alt:/^ba$|arts/},

      {id:"ba",      c:/^ba|arts|humanit|journalis|masscomm|psycholog|sociolog|politic|histor|english/,
                     m:/^ba$|^bahons|^baprogram|arts|humanit|journalis|masscomm/}
    ];

    function cdFamilyFor(courseName){
      const key=cdNorm(courseName);
      for(const fam of cdCourseFamilies){
        if(fam.c.test(key)) return fam;
      }
      return null;
    }

    /* College govt hai ya private - type + name dono se check */
    function cdIsGovt(c){
      const type=((c && c.type)||"");
      const text=type+" "+((c && c.name)||"");
      if(/private|pvt|deemed|self\s*financ/i.test(type)) return false;
      return /govt|government|public|central|state univ|rajkiya|iit|nit|iiit|aiims|jipmer|nlu/i.test(text);
    }

    /* Ek pass - diye gaye regex se colleges collect karo */
    function cdCollect(courseName, regex, loose){
      const key=cdNorm(courseName);
      const seen=new Set();
      const out=[];

      colleges.forEach((c,i)=>{
        if(!c || !c.name) return;
        const list=Array.isArray(c.courses)?c.courses:[];
        if(!list.length) return;

        let hit=false;
        for(const entry of list){
          const e=cdNorm(entry);
          if(!e) continue;
          if(e===key){ hit=true; break; }
          if(regex && regex.test(e)){ hit=true; break; }
          if(loose && e.length>=3 && key.length>=3 && (e.includes(key)||key.includes(e))){ hit=true; break; }
        }
        if(!hit) return;

        const dedupe=cdNorm(c.name)+"|"+cdNorm(c.city);
        if(seen.has(dedupe)) return;
        seen.add(dedupe);
        out.push({ data:c, index:i });
      });

      return out;
    }

    /* Course ke hisaab se poore database se colleges */
    function cdCollegesForCourse(courseName){
      const fam=cdFamilyFor(courseName);
      if(fam && fam.id==="govtjob") return [];

      let out=[];

      if(fam && fam.m) out=cdCollect(courseName, fam.m, false);
      if(!out.length && fam && fam.alt) out=cdCollect(courseName, fam.alt, false);
      if(!out.length) out=cdCollect(courseName, null, true);

      /* Govt pehle, phir naam ke hisaab se */
      out.sort((a,b)=>{
        const ga=cdIsGovt(a.data)?0:1;
        const gb=cdIsGovt(b.data)?0:1;
        if(ga!==gb) return ga-gb;
        return String(a.data.name).localeCompare(String(b.data.name));
      });

      return out;
    }

    /* College ki fee string me se sirf isi course ki fee nikaalo */
    function cdPickFee(college, courseName){
      const raw=String((college && college.fee)||"").trim();
      if(!raw) return "Fee: college se confirm karein";
      const key=cdNorm(courseName);

      const parts=raw.split(",");
      for(const part of parts){
        const idx=part.indexOf(":");
        if(idx<0) continue;
        const label=cdNorm(part.slice(0,idx));
        if(!label) continue;
        if(label.includes(key)||(key.length>=3 && key.includes(label))) return part.trim();
      }
      return raw.length>78 ? raw.slice(0,78)+"..." : raw;
    }

    /* Modal ke andar dikhne wala single college card */
    function cdCollegeCard(item, courseName){
      const c=item.data;
      const i=item.index;
      const govt=cdIsGovt(c);
      const fallback=realCampusImages[i%realCampusImages.length];
      const img=getSafeCollegeImage(c,i);
      const name=escapeHtml(c.name);
      const loc=escapeHtml([c.city,c.state].filter(Boolean).join(", ")||"India");
      const type=escapeHtml(c.type||(govt?"Government":"Private"));
      const fee=escapeHtml(cdPickFee(c,courseName));
      const adm=escapeHtml(c.admission||"Merit / Entrance Based");
      const link=escapeHtml(c.link||"#");
      const safeName=String(c.name).replace(/\\/g,"\\\\").replace(/'/g,"\\'");

      return `
      <div class="college-item" title="${name}" onclick="openCollegeByName('${safeName}')">
        <img src="${img}" alt="${name}" loading="lazy"
             onerror="this.onerror=null;this.src='${fallback}'">
        <div class="ci-body">
          <div class="ci-head">
            <span class="ci-name">${name}</span>
            <span class="badge ${govt?"govt":"pvt"}">${govt?"Govt":"Private"}</span>
          </div>
          <div class="ci-loc">${loc} &middot; ${type}</div>
          <div class="ci-fee">${fee}</div>
          <div class="ci-tags"><span class="entrance">Entrance: ${adm}</span></div>
          <div class="ci-foot">
            <a href="${link}" target="_blank" rel="noopener"
               class="college-link" onclick="event.stopPropagation()">Website &rarr;</a>
            <span class="ci-more">Full Details &rarr;</span>
          </div>
        </div>
      </div>`;
    }

    /* Govt / Private section ka poora HTML */
    function cdRenderSection(list, courseName, label, emptyMsg){
      if(!list.length){
        return `<div class="info cd-empty">${emptyMsg}</div>`;
      }

      const cards=list.map(item=>cdCollegeCard(item,courseName)).join("");

      return `
      <div class="cd-sec-top">
        <span class="cd-count">${list.length} ${escapeHtml(label)}</span>
        <span class="cd-hint">Click on any card to see full details</span>
      </div>
      <div class="cd-scroll">
        <div class="college-grid">${cards}</div>
      </div>`;
    }

    /* Course ka meta (duration / fee / package) category data se */
    function cdFindCourseMeta(name){
      for(const key in data){
        const found=(data[key].courses||[]).find(c=>c.name===name);
        if(found) return { meta:found, category:data[key].title };
      }
      return null;
    }

    function cdRecruiters(famId){
      const map={
        it:"TCS, Infosys, Wipro, HCL, Accenture, Cognizant, Tech Mahindra",
        bca:"TCS, Infosys, Wipro, HCL, Capgemini, Cognizant",
        mca:"TCS, Infosys, Accenture, IBM, Oracle, Deloitte",
        btech:"TCS, L&T, Bosch, Maruti Suzuki, Infosys, Amazon",
        mtech:"L&T, Siemens, ISRO / DRDO, Bosch, Qualcomm, Amazon",
        dipengg:"L&T, Tata Motors, Maruti Suzuki, BHEL, NTPC, Local Industries",
        mba:"Deloitte, KPMG, ICICI Bank, HDFC Bank, Amazon, Reliance",
        bba:"HDFC Bank, Axis Bank, Zomato, Flipkart, Startups",
        bcom:"Big 4 Audit Firms, Banks, NBFCs, CA Firms",
        mcom:"Banks, Audit Firms, Colleges, Finance Companies",
        finance:"ICICI, HDFC, Axis Bank, Deloitte, EY, PwC, KPMG",
        mbbs:"AIIMS, Apollo, Fortis, Max Healthcare, Govt Hospitals",
        bds:"Dental Clinics, Apollo White, Clove Dental, Govt Hospitals",
        ayush:"Ayush Hospitals, Patanjali, Dabur, Govt Dispensaries",
        pharma:"Sun Pharma, Cipla, Dr. Reddy's, Mankind, Apollo Pharmacy",
        nursing:"AIIMS, Apollo, Fortis, Medanta, Govt Health Dept",
        physio:"Apollo, Fortis, Sports Academies, Private Clinics",
        optom:"Lenskart, Titan Eye+, Dr. Agarwal's Eye Hospital",
        paramed:"Dr. Lal PathLabs, SRL Diagnostics, Apollo, Metropolis",
        law:"Khaitan & Co, Trilegal, AZB & Partners, Corporate Legal Teams",
        agri:"IFFCO, ITC Agri, Mahindra Agri, NABARD, Godrej Agrovet",
        design:"Lenskart, Nykaa, Zomato, Design Studios, Ad Agencies",
        bsc:"Labs, Research Institutes, Teaching, Pharma Companies",
        msc:"Research Labs, DRDO, Colleges, Pharma & Chemical Firms",
        ba:"Media Houses, Schools, NGOs, Govt Departments, BPOs"
      };
      return map[famId]||"TCS, Infosys, HCL, Wipro, Banks, Govt Departments";
    }

    function cdCareerInfo(name, total, govtCount, pvtCount){
      const found=cdFindCourseMeta(name);
      const fam=cdFamilyFor(name);
      const rows=[];

      if(found){
        rows.push("<b>Category:</b> "+escapeHtml(found.category));
        rows.push("<b>Duration:</b> "+escapeHtml(found.meta.dur));
        rows.push("<b>Average Fee:</b> "+escapeHtml(found.meta.fee));
        rows.push("<b>Expected Package:</b> "+escapeHtml(found.meta.sal));
      }

      rows.push("<b>Colleges Available:</b> "+total+" ("+govtCount+" Govt + "+pvtCount+" Private)");
      rows.push("<b>Top Recruiters:</b> "+cdRecruiters(fam?fam.id:""));

      return rows.join("<br>");
    }

    /* =====================================================
       COURSE DETAILS - ab poora college database use hota hai
    ===================================================== */

    function getDetail(name){

      const matched=cdCollegesForCourse(name);
      const govtList=matched.filter(item=>cdIsGovt(item.data));
      const pvtList=matched.filter(item=>!cdIsGovt(item.data));

      const g=cdRenderSection(
        govtList,
        name,
        "Government Colleges",
        "Is course ke liye abhi koi government college database me listed nahi hai. Neeche private colleges dekhein ya College Finder me search karein."
      );

      const p=cdRenderSection(
        pvtList,
        name,
        "Private Colleges",
        "Is course ke liye abhi koi private college database me listed nahi hai. Upar government colleges check karein."
      );

      return{
        govt:g,
        pvt:p,
        career:cdCareerInfo(name,matched.length,govtList.length,pvtList.length)
      };

    }


    /* =====================================================
       COLLEGE FINDER
    ===================================================== */

    let currentCity="all";
    let currentState="all";
    let currentType="all";
    let currentCourseFilter="all";
    let currentSearchQuery="";
    let currentSort="relevance";
    let currentPage=1;
    let pageSize=24;
    let showOnlyFavorites=false;
    let favorites=new Set();
    let compareIndexes=[];

    // Favorites ab account ke saath server par save hote hain.
    // Page khulne par server se load karke list dobara draw hoti hai.
    let isMounted=true;

    api.get("/favorites").then(data=>{
      if(!isMounted) return;
      favorites=new Set(data.favorites||[]);
      applyCollegeFilters();
    }).catch(()=>{
      // login nahi hai / server band hai: favorites khaali se shuru
    });

    function escapeHtml(value){
      return String(value??"").replace(/[&<>"']/g,char=>({
        "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
      }[char]));
    }

    function collegeKey(c){
      return c.name+"|"+c.city+"|"+c.state;
    }

    // Requests ek ke baad ek jaati hain, taaki tez clicks me bhi last state hi save ho.
    let favoritesSaving=Promise.resolve();

    function saveFavorites(){
      const snapshot=Array.from(favorites);
      favoritesSaving=favoritesSaving
        .then(()=>api.put("/favorites",{favorites:snapshot}))
        .catch(()=>{});
    }

    function isFavorite(c){
      return favorites.has(collegeKey(c));
    }


    // Search aliases make terms like BCA, B.Tech, MBBS, etc. easy to find.

    const searchAliases={

    "bca":["bca","bachelor of computer applications"],

    "mca":["mca","master of computer applications"],

    "b.tech":["b.tech","btech","b tech","engineering","engineer"],

    "engineering":["engineering","engineer","b.tech","btech","be","m.tech"],

    "bba":["bba","business administration"],

    "mba":["mba","management","business administration"],

    "b.com":["b.com","bcom","commerce"],

    "m.com":["m.com","mcom","commerce"],

    "mbbs":["mbbs","medical","medicine","doctor"],

    "bds":["bds","dental","dentist"],

    "b.pharma":["b.pharma","bpharma","pharmacy","pharma","d.pharma","dpharma"],

    "nursing":["nursing","bsc nursing","gnm","anm"],

    "b.optom":["b.optom","optometry","optom","eye"],

    "bpt":["bpt","physiotherapy","physio"],

    "law":["law","llb","ba llb","bba llb","lawyer","legal"],

    "b.des":["b.des","bdes","design","designing","fashion","interior"],

    "agriculture":["agriculture","agri","horticulture","forestry"],

    "diploma":["diploma","polytechnic","iti"]

    };


    // City aliases support names like Delhi/New Delhi and Gurgaon/Gurugram.

    const cityAliases={

    "Bulandshahr":["bulandshahr","buland shahr"],

    "Noida":["noida","greater noida"],

    "Ghaziabad":["ghaziabad"],

    "Hapur":["hapur"],

    "Meerut":["meerut"],

    "Delhi":["delhi","new delhi"],

    "Gurgaon":["gurgaon","gurugram","haryana"],

    "Lucknow":["lucknow"],

    "Prayagraj":["prayagraj","allahabad"],

    "Mumbai":["mumbai","bombay"],

    "Pune":["pune"],

    "Bangalore":["bangalore","bengaluru"],

    "Hyderabad":["hyderabad"],

    "Kolkata":["kolkata","calcutta"],

    "Patna":["patna"],

    "Goa":["goa"]

    };


    /* QUICK SEARCH */

    function quickSearch(value){

    const input=document.getElementById("searchInput");

    input.value=value;

    doCollegeSearch();

    }


    /* FIND COURSE FROM SEARCH */

    function detectCourse(q){

    q=q.toLowerCase();

    for(const course in searchAliases){

    const words=searchAliases[course];

    for(const word of words){

    if(q.includes(word)){
    return course;
    }

    }

    }

    return null;

    }


    /* FIND CITY FROM SEARCH */

    function detectCity(q){

    q=q.toLowerCase();

    for(const city in cityAliases){

    for(const word of cityAliases[city]){

    if(q.includes(word)){
    return city;
    }

    }

    }

    return null;

    }


    /* TEXT OF COLLEGE */

    function collegeText(c){

    return(
    c.name+" "+
    c.city+" "+
    c.state+" "+
    c.type+" "+
    c.courses.join(" ")
    ).toLowerCase();

    }


    /* COURSE MATCH */

    function courseMatches(c,course){

    if(!course){
    return true;
    }

    const text=collegeText(c);
    if(!searchAliases[course]){
      return text.includes(course.toLowerCase());
    }

    for(const word of searchAliases[course]){

    if(text.includes(word)){
    return true;
    }

    }

    return false;

    }


    /* CITY MATCH */

    function cityMatches(c,city){

    if(!city){
    return true;
    }

    if(!cityAliases[city]){
    return c.city===city || c.state===city;
    }

    if(city==="Gurgaon"){
    return c.city==="Gurgaon" ||
    c.state==="Haryana";
    }

    if(city==="Mumbai"){
    return c.city==="Mumbai" ||
    c.state==="Maharashtra";
    }

    for(const word of cityAliases[city]){

    if(
    c.city.toLowerCase().includes(word) ||
    c.state.toLowerCase().includes(word)
    ){
    return true;
    }

    }

    return false;

    }


    // ============================================================
    // COLLEGE LIST RENDERING
    // ============================================================

    function sortCollegeList(list){
      const sorted=[...list];
      if(currentSort==="name"){
        return sorted.sort((a,b)=>a.name.localeCompare(b.name));
      }
      if(currentSort==="state"){
        return sorted.sort((a,b)=>
          (a.state+" "+a.name).localeCompare(b.state+" "+b.name)
        );
      }
      if(currentSort==="city"){
        return sorted.sort((a,b)=>
          (a.city+" "+a.name).localeCompare(b.city+" "+b.name)
        );
      }
      return sorted.sort((a,b)=>{
        const score=c=>{
          const n=c.name.toLowerCase();
          let value=0;
          if(currentSearchQuery && n.includes(currentSearchQuery)) value+=18;
          if(n.includes("iit")) value+=12;
          if(n.includes("nit") || n.includes("iiit")) value+=10;
          if(c.type.toLowerCase().includes("govt") ||
             c.type.toLowerCase().includes("public")) value+=5;
          if(c.type.toLowerCase().includes("university")) value+=2;
          if(currentSearchQuery && collegeText(c).includes(currentSearchQuery)) value+=3;
          return value;
        };
        return score(b)-score(a);
      });
    }

    function renderPagination(total){
      const pagination=document.getElementById("collegePagination");
      if(!pagination) return;
      const totalPages=Math.max(1,Math.ceil(total/pageSize));
      currentPage=Math.min(currentPage,totalPages);
      if(totalPages<=1){
        pagination.innerHTML="";
        return;
      }
      const buttons=[];
      const start=Math.max(1,currentPage-2);
      const end=Math.min(totalPages,start+4);
      if(currentPage>1){
        buttons.push(`<button class="finder-page-btn" onclick="goToCollegePage(${currentPage-1})">‹</button>`);
      }
      for(let page=start;page<=end;page++){
        buttons.push(`<button class="finder-page-btn ${page===currentPage?"active":""}" onclick="goToCollegePage(${page})">${page}</button>`);
      }
      if(currentPage<totalPages){
        buttons.push(`<button class="finder-page-btn" onclick="goToCollegePage(${currentPage+1})">›</button>`);
      }
      pagination.innerHTML=buttons.join("");
    }

    function renderComparePanel(){
      const panel=document.getElementById("comparePanel");
      if(!panel) return;
      const selected=compareIndexes.map(index=>colleges[index]).filter(Boolean);
      if(!selected.length){
        panel.className="compare-panel";
        panel.innerHTML="";
        return;
      }
      const headings=selected.map((c,index)=>
        `<th>${escapeHtml(c.name)} <button class="compare-remove" onclick="removeCompare(${compareIndexes[index]})">×</button></th>`
      ).join("");
      const row=(label,field)=>`<tr><td>${label}</td>${selected.map(c=>`<td>${escapeHtml(c[field])}</td>`).join("")}</tr>`;
      panel.className="compare-panel visible";
      panel.innerHTML=`
        <b style="color:#38bdf8">⚖️ College comparison (${selected.length}/3)</b>
        ${selected.length<2
          ?"<span style='margin-left:8px;color:#94a3b8'>Choose one more college to compare.</span>"
          :`<table><thead><tr><th>Feature</th>${headings}</tr></thead><tbody>
              ${row("Location","city")}
              ${row("Type","type")}
              ${row("Fee","fee")}
              ${row("Admission","admission")}
              ${row("Approval","approval")}
              ${row("Placement","placement")}
            </tbody></table>`}
      `;
    }

    /*
     * This declaration intentionally comes after the legacy renderer above.
     * Function declarations are hoisted; the advanced renderer is the one
     * used by the finder below, while the original card behaviour stays intact.
     */
    function renderColleges(list){
      const grid=document.getElementById("collegeGrid");
      if(!grid) return;
      const sorted=sortCollegeList(list);
      const totalPages=Math.max(1,Math.ceil(sorted.length/pageSize));
      currentPage=Math.min(currentPage,totalPages);
      const visible=sorted.slice((currentPage-1)*pageSize,currentPage*pageSize);
      const info=document.getElementById("resultsInfo");
      if(info) info.innerText=`Showing ${sorted.length} matching colleges • page ${currentPage}/${totalPages}`;
      grid.innerHTML="";
      renderPagination(sorted.length);
      renderComparePanel();

      if(!sorted.length){
        grid.innerHTML=`<div style="grid-column:1/-1;text-align:center;padding:40px;color:#94a3b8">
          <h3 style="color:#38bdf8">😕 No matching college found</h3>
          <p>Try another course, city, state or college name.</p>
        </div>`;
        return;
      }

      visible.forEach(c=>{
        const index=colleges.indexOf(c);
        const favorite=isFavorite(c);
        const typeClass=c.type.toLowerCase().includes("govt") ||
          c.type.toLowerCase().includes("public") ? "govt" : "pvt";
        const feeText=String(c.fee||"Fee details unavailable");
        const website=c.link||directoryWebsite(c.name);
        grid.innerHTML+=`
          <div class="college-card-main" onclick="openCollegeModalByIndex(${index})">
            <div class="college-card-tools">
              <button class="college-card-tool ${favorite?"active":""}" title="Save college"
                onclick="event.stopPropagation();toggleFavorite(${index})">${favorite?"♥":"♡"}</button>
              <button class="college-card-tool ${compareIndexes.includes(index)?"active":""}" title="Add to compare"
                onclick="event.stopPropagation();toggleCompare(${index})">⚖️</button>
            </div>
            <div class="college-image-wrap">
              <img src="${escapeHtml(getSafeCollegeImage(c,index))}" alt="${escapeHtml(c.name)}"
                onerror="this.onerror=null;this.src='${realCampusImages[0]}';">
              <span class="college-type-overlay ${typeClass}">${escapeHtml(c.type)}</span>
            </div>
            <div class="college-body">
              <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px">
                <span class="city-tag">📍 ${escapeHtml(c.city)}, ${escapeHtml(c.state)}</span>
                ${c.directoryRecord?"<span class='city-tag'>Public directory</span>":""}
              </div>
              <b style="font-size:13px">${escapeHtml(c.name)}</b>
              <div style="margin:6px 0">
                ${c.courses.slice(0,5).map(co=>`<span class="course-tag">${escapeHtml(co)}</span>`).join("")}
                ${c.courses.length>5?`<span class="course-tag">+${c.courses.length-5} more</span>`:""}
              </div>
              <div style="font-size:11px;color:#94a3b8;margin-top:6px">
                💰 ${escapeHtml(feeText.substring(0,90))}${feeText.length>90?"…":""}
              </div>
              <a class="college-website-btn" href="${escapeHtml(website)}" target="_blank"
                rel="noopener noreferrer" onclick="event.stopPropagation()">
                ${c.directoryRecord?"🔎 Find official site →":"🔗 Visit College Website →"}
              </a>
            </div>
          </div>`;
      });
    }

    // ============================================================
    // ADVANCED FILTERS, FAVORITES AND COLLEGE COMPARISON
    // ============================================================

    function buildAdvancedOptions(){
      const selectOptions=(id,values,allLabel)=>{
        const select=document.getElementById(id);
        if(!select) return;
        const current=select.value;
        select.innerHTML=`<option value="all">${allLabel}</option>`+
          values.map(value=>`<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
        select.value=values.includes(current)?current:"all";
      };
      const states=[...new Set(colleges.map(c=>c.state).filter(Boolean))]
        .sort((a,b)=>a.localeCompare(b));
      const cities=[...new Set(colleges.map(c=>c.city).filter(Boolean))]
        .sort((a,b)=>a.localeCompare(b));
      const types=[...new Set(colleges.map(c=>c.type).filter(Boolean))]
        .sort((a,b)=>a.localeCompare(b));
      selectOptions("stateSelect",states,"All India");
      selectOptions("citySelect",cities,"All cities");
      selectOptions("typeSelect",types,"All types");
    }

    function setAdvancedFilter(kind,value){
      if(kind==="state") currentState=value;
      if(kind==="city") currentCity=value;
      if(kind==="type") currentType=value;
      if(kind==="sort") currentSort=value;
      currentPage=1;
      applyCollegeFilters();
    }

    function toggleFavoritesOnly(){
      showOnlyFavorites=!showOnlyFavorites;
      const button=document.getElementById("favoritesToggle");
      if(button){
        button.classList.toggle("active",showOnlyFavorites);
        button.innerText=showOnlyFavorites?"♥ Showing favorites":"♡ Favorites only";
      }
      currentPage=1;
      applyCollegeFilters();
    }

    function toggleFavorite(index){
      const c=colleges[index];
      if(!c) return;
      const key=collegeKey(c);
      if(favorites.has(key)) favorites.delete(key);
      else favorites.add(key);
      saveFavorites();
      applyCollegeFilters();
    }

    function toggleCompare(index){
      if(compareIndexes.includes(index)){
        compareIndexes=compareIndexes.filter(item=>item!==index);
      }else if(compareIndexes.length<3){
        compareIndexes.push(index);
      }else{
        window.alert("You can compare up to 3 colleges at a time.");
      }
      renderComparePanel();
      applyCollegeFilters();
    }

    function removeCompare(index){
      compareIndexes=compareIndexes.filter(item=>item!==index);
      renderComparePanel();
      applyCollegeFilters();
    }

    function goToCollegePage(page){
      currentPage=Math.max(1,Number(page)||1);
      applyCollegeFilters();
      const finder=document.querySelector(".college-finder-section");
      if(finder) finder.scrollIntoView({behavior:"smooth",block:"start"});
    }

    function changePageSize(value){
      pageSize=Number(value)||24;
      currentPage=1;
      applyCollegeFilters();
    }

    function clearAdvancedFilters(){
      currentCity="all";
      currentState="all";
      currentType="all";
      currentCourseFilter="all";
      currentSearchQuery="";
      currentSort="relevance";
      currentPage=1;
      showOnlyFavorites=false;
      const input=document.getElementById("searchInput");
      if(input) input.value="";
      ["stateSelect","citySelect","typeSelect","sortSelect"].forEach(id=>{
        const element=document.getElementById(id);
        if(element) element.value=id==="sortSelect"?"relevance":"all";
      });
      const button=document.getElementById("favoritesToggle");
      if(button){
        button.classList.remove("active");
        button.innerText="♡ Favorites only";
      }
      document.querySelectorAll(".filters .filter").forEach(filter=>{
        if(filter.innerText.includes("All India") ||
           filter.innerText.includes("All Courses")){
          filter.classList.add("active");
        }else{
          filter.classList.remove("active");
        }
      });
      applyCollegeFilters();
    }

    /*
     * Advanced search replaces the legacy search result pass while retaining
     * its aliases (BCA, MBBS, B.Tech, city names, etc.).
     */
    function doCollegeSearch(){
      currentSearchQuery=document.getElementById("searchInput").value.trim().toLowerCase();
      currentPage=1;
      applyCollegeFilters();
    }

    function setCity(city,el){
      currentCity=city;
      currentPage=1;
      el.parentElement.querySelectorAll(".filter").forEach(f=>f.classList.remove("active"));
      el.classList.add("active");
      const citySelect=document.getElementById("citySelect");
      if(citySelect && [...citySelect.options].some(option=>option.value===city)){
        citySelect.value=city;
      }
      applyCollegeFilters();
    }

    function setCourseFilter(course,el){
      currentCourseFilter=course;
      currentPage=1;
      el.parentElement.querySelectorAll(".filter").forEach(f=>f.classList.remove("active"));
      el.classList.add("active");
      applyCollegeFilters();
    }

    function applyCollegeFilters(){
      let list=[...colleges];
      const query=currentSearchQuery;
      if(currentState!=="all"){
        list=list.filter(c=>c.state===currentState);
      }
      if(currentCity!=="all"){
        list=list.filter(c=>cityMatches(c,currentCity));
      }
      if(currentType!=="all"){
        list=list.filter(c=>c.type===currentType);
      }
      if(currentCourseFilter!=="all"){
        list=list.filter(c=>courseMatches(c,currentCourseFilter.toLowerCase()));
      }
      if(showOnlyFavorites){
        list=list.filter(c=>isFavorite(c));
      }
      if(query){
        const detectedCourse=detectCourse(query);
        const detectedCity=detectCity(query);
        const ignored=["top","best","college","colleges","university","universities",
          "in","for","near","the","of","course","courses","any","good"];
        const words=query.replace(/b\.?\s*tech/gi,"btech")
          .replace(/b\.?\s*com/gi,"bcom")
          .replace(/b\.?\s*pharma/gi,"bpharma")
          .split(/\s+/).filter(word=>word.length>1&&!ignored.includes(word));
        list=list.filter(c=>{
          const text=collegeText(c);
          const courseOK=detectedCourse?courseMatches(c,detectedCourse):true;
          const cityOK=detectedCity?cityMatches(c,detectedCity):true;
          if(detectedCourse||detectedCity) return courseOK&&cityOK;
          return words.some(word=>text.includes(word));
        });
      }
      renderColleges(list);
    }

    // ============================================================
    // COLLEGE DETAILS MODAL
    // ============================================================

    function openCollegeModal(name){

    const c=
    typeof name==="number"
    ?colleges[name]
    :colleges.find(x=>x.name===name);

    if(!c) return;

    const modalImg=document.getElementById("collegeModalImg");
    modalImg.onerror=()=>{ modalImg.onerror=null; modalImg.src=realCampusImages[0]; };
    modalImg.src=getSafeCollegeImage(c, colleges.indexOf(c));

    document.getElementById("collegeModalName").innerText=c.name;

    document.getElementById("collegeModalCity").innerText=
    "📍 "+c.city+", "+c.state+
    " | "+c.type;

    document.getElementById("collegeModalCourses").innerHTML=
    c.courses
    .map(co=>`<span class="course-tag">${co}</span>`)
    .join("");

    document.getElementById("collegeModalFee").innerText=c.fee;

    document.getElementById("collegeModalAdmission").innerText=c.admission;

    document.getElementById("collegeModalApproval").innerText=c.approval;

    document.getElementById("collegeModalPlacement").innerText=c.placement;

    document.getElementById("collegeModalLink").href=c.link;

    document.getElementById("collegeModal").style.display="block";

    }

    function openCollegeModalByIndex(index){
      openCollegeModal(Number(index));
    }


    function closeCollegeModal(){

    document.getElementById("collegeModal").style.display="none";

    }


    // ============================================================
    // COURSE CATEGORY
    // ============================================================

    function showCourses(cat,el){

    document
    .querySelectorAll(".cat-card")
    .forEach(c=>c.classList.remove("active"));

    el.classList.add("active");

    document.getElementById("catTitle").innerText=
    data[cat].title;

    document.getElementById("courseSection").style.display="block";

    const list=
    document.getElementById("courseList");

    list.innerHTML="";


    data[cat].courses.forEach(c=>{

    list.innerHTML+=`

    <div class="course-card">

    <h4>
    ${c.name}
    </h4>

    <div class="course-tags">
      <span class="tag">⏱️ ${c.dur}</span>
      <span class="tag">💰 ${c.fee}</span>
      <span class="tag">💼 ${c.sal}</span>
    </div>

    <button
    class="btn"
    onclick="openDetails('${c.name.replace(/'/g,"\\'")}')">
    View Details →
    </button>

    </div>

    `;

    });


    const section=document.getElementById("courseSection");
    setTimeout(()=>{
      const y=section.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({top:y,behavior:"smooth"});
    },50);

    }


    function backToCategories(){

    document.getElementById("courseSection")
    .style.display="none";

    window.scrollTo({
    top:0,
    behavior:"smooth"
    });

    }


    // ============================================================
    // COURSE DETAILS MODAL
    // ============================================================

    function openDetails(name){

    const d=getDetail(name);

    document.getElementById("mTitle").innerText=name;


    /*
    Government job
    */

    if(govtJobsDetail[name]){

    const g=govtJobsDetail[name];

    document.getElementById("normalSections")
    .style.display="none";

    document.getElementById("govtJobSections")
    .style.display="block";

    document.getElementById("mFull")
    .innerHTML=
    "<b>"+name+"</b> - Government Job Details";

    document.getElementById("gElig")
    .innerHTML=g.eligibility;

    document.getElementById("gExam")
    .innerHTML=g.exam;

    document.getElementById("gPrep")
    .innerHTML=g.prep;

    document.getElementById("gSkills")
    .innerHTML=g.skills;

    document.getElementById("gPromo")
    .innerHTML=g.promotion;

    document.getElementById("gSal")
    .innerHTML=g.salary;

    }


    /*
    Normal course
    */

    else{

    document.getElementById("normalSections")
    .style.display="block";

    document.getElementById("govtJobSections")
    .style.display="none";

    const cdMeta=cdFindCourseMeta(name);
    const cdTotal=cdCollegesForCourse(name).length;

    document.getElementById("mFull")
    .innerHTML=
    `<div class="cd-head-wrap">
       <span class="cd-chip primary">${escapeHtml(name)}</span>
       ${cdMeta?`<span class="cd-chip">${escapeHtml(cdMeta.meta.dur)}</span>`:""}
       ${cdMeta?`<span class="cd-chip">${escapeHtml(cdMeta.meta.fee)}</span>`:""}
       ${cdMeta?`<span class="cd-chip">${escapeHtml(cdMeta.meta.sal)}</span>`:""}
       <span class="cd-chip good">${cdTotal} Colleges Found</span>
     </div>`;

    document.getElementById("mGovt")
    .innerHTML=d.govt;

    document.getElementById("mPvt")
    .innerHTML=d.pvt;

    document.getElementById("mCareer")
    .innerHTML=d.career;

    }


    document.getElementById("courseModal")
    .style.display="block";

    }


    function closeModal(){

    document.getElementById("courseModal")
    .style.display="none";

    }


    // ============================================================
    // INITIAL LOAD
    // ============================================================

    buildAdvancedOptions();
    renderColleges(colleges);
    loadAdditionalColleges();

    /* ===== PREMIUM SCROLL + STAGGER ANIMATION ENGINE ===== */
    function setupMotion(){
      const selectors = [
        "header", ".hero", ".section", "#collegeSection",
        "#courseSection", ".college-search", ".category-grid"
      ];
      document.querySelectorAll(selectors.join(",")).forEach((el)=>{
        el.classList.add("motion-reveal");
      });

      const cardSelector = ".cat-card, .college-card, .course-card";
      document.querySelectorAll(cardSelector).forEach((el,i)=>{
        el.classList.add("motion-card");
        el.style.transitionDelay = `${Math.min((i % 8) * 70, 490)}ms`;
      });

      const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },{threshold:.12,rootMargin:"0px 0px -35px 0px"});

      document.querySelectorAll(".motion-reveal,.motion-card").forEach(el=>observer.observe(el));

      /* animate newly rendered college/course cards */
      const refreshCards=()=>{
        document.querySelectorAll(cardSelector).forEach((el,i)=>{
          if(!el.classList.contains("motion-card")){
            el.classList.add("motion-card");
            el.style.transitionDelay=`${Math.min((i%8)*70,490)}ms`;
            observer.observe(el);
          }
        });
      };
      const renderObserver=new MutationObserver(()=>refreshCards());
      ["collegeList","courseList"].forEach(id=>{
        const node=document.getElementById(id);
        if(node) renderObserver.observe(node,{childList:true,subtree:true});
      });
    }
    setupMotion();

    // The HTML uses onclick="...". Put these functions on window
    // so the existing buttons continue to work.
    window.backToCategories = backToCategories;
    window.closeCollegeModal = closeCollegeModal;
    window.closeModal = closeModal;
    window.doCollegeSearch = doCollegeSearch;
    window.quickSearch = quickSearch;
    window.setCity = setCity;
    window.setCourseFilter = setCourseFilter;
    window.setAdvancedFilter = setAdvancedFilter;
    window.clearAdvancedFilters = clearAdvancedFilters;
    window.toggleFavoritesOnly = toggleFavoritesOnly;
    window.toggleFavorite = toggleFavorite;
    window.toggleCompare = toggleCompare;
    window.removeCompare = removeCompare;
    window.goToCollegePage = goToCollegePage;
    window.changePageSize = changePageSize;
    window.openCollegeModalByIndex = openCollegeModalByIndex;
    window.openCollegeByName = openCollegeModal;
    window.showCourses = showCourses;
    window.openDetails = openDetails;

    return () => {
      isMounted=false;
    };
  }, []);

  // ============================================================
  // FINAL UI
  // Yahan CSS + HTML markup browser me render hota hai.
  // ============================================================
  return (
    <>
      <style>{styles}</style>
      <Navbar />
      <div
        className="careerdetails-page"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
    </>
  );
}

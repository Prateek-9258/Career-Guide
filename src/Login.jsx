// useState: changing data ko store/update karne ke liye.
// useEffect: component load hone ke baad koi extra kaam karne ke liye.
import { useState, useEffect } from "react";

// useNavigate: React Router ke through doosre page par jaane ke liye.
import { useNavigate } from "react-router-dom";

// Backend (MongoDB) se baat karne ke liye.
import { api } from "./api.js";

// Is string me poore login page ka CSS store hai.
// Baad me <style>{styles}</style> ke through page par apply hota hai.
const styles = `

* {
  box-sizing: border-box;
  }

.login-page {
min-height: 100vh;
width: 100%;
font-family: "Segoe UI", Arial, sans-serif;
display: flex;
align-items: center;
justify-content: center;
padding: 35px 20px;
overflow: hidden;
position: relative;
background:
radial-gradient(circle at 15% 20%, rgba(80, 140, 255, 0.18), transparent 35%),
radial-gradient(circle at 85% 80%, rgba(40, 100, 220, 0.15), transparent 38%),
linear-gradient(135deg, #020615, #061535, #020718);
perspective: 1200px;
}

/* ================= 3D BACKGROUND ================= */

.scene-3d {
position: absolute;
inset: 0;
overflow: hidden;
pointer-events: none;
z-index: 1;
}

.grid-floor {
position: absolute;
left: 50%;
bottom: -12%;
width: 220%;
height: 65%;
transform: translateX(-50%) rotateX(72deg);
transform-origin: center bottom;

background-image:
linear-gradient(rgba(90, 150, 255, 0.22) 1px, transparent 1px),
linear-gradient(90deg, rgba(90, 150, 255, 0.22) 1px, transparent 1px);

background-size: 55px 55px;
animation: gridMove 2.6s linear infinite;

mask-image: linear-gradient(
to top,
rgba(0, 0, 0, 0.9),
transparent 85%
);

-webkit-mask-image: linear-gradient(
to top,
rgba(0, 0, 0, 0.9),
transparent 85%
);
}

@keyframes gridMove {
from {
background-position: 0 0;
}

to {
background-position: 0 55px;
}
}

/* ================= FLOATING ORBS ================= */

.orb {
position: absolute;
border-radius: 50%;
filter: blur(45px);
animation: orbFloat 9s ease-in-out infinite;
}

.orb-1 {
width: 240px;
height: 240px;
background: rgba(50, 110, 255, 0.32);
top: -70px;
left: -60px;
}

.orb-2 {
width: 300px;
height: 300px;
background: rgba(90, 60, 240, 0.22);
bottom: -110px;
right: -70px;
animation-delay: 2.5s;
}

.orb-3 {
width: 130px;
height: 130px;
background: rgba(0, 200, 255, 0.18);
top: 42%;
left: 38%;
animation-delay: 4.5s;
}

@keyframes orbFloat {
0%,
100% {
transform: translateY(0) scale(1);
}

50% {
transform: translateY(-35px) scale(1.08);
}
}

/* ================= 3D CUBE ================= */

.cube-wrap {
position: absolute;
top: 12%;
left: 8%;
width: 90px;
height: 90px;
perspective: 700px;
}

.cube {
width: 100%;
height: 100%;
position: relative;
transform-style: preserve-3d;
animation: cubeSpin 14s linear infinite;
}

.cube .face {
position: absolute;
inset: 0;
border: 1px solid rgba(120, 170, 255, 0.45);
background: rgba(70, 120, 240, 0.07);
backdrop-filter: blur(2px);

box-shadow:
inset 0 0 25px rgba(90, 140, 255, 0.12),
0 0 15px rgba(80, 140, 255, 0.15);
}

.cube .f1 {
transform: rotateY(0deg) translateZ(45px);
}

.cube .f2 {
transform: rotateY(90deg) translateZ(45px);
}

.cube .f3 {
transform: rotateY(180deg) translateZ(45px);
}

.cube .f4 {
transform: rotateY(-90deg) translateZ(45px);
}

.cube .f5 {
transform: rotateX(90deg) translateZ(45px);
}

.cube .f6 {
transform: rotateX(-90deg) translateZ(45px);
}

@keyframes cubeSpin {
0% {
transform: rotateX(-20deg) rotateY(0deg);
}

100% {
transform: rotateX(-20deg) rotateY(360deg);
}
}

/* ================= RINGS ================= */

.ring {
position: absolute;
border-radius: 50%;
border: 1px solid rgba(110, 165, 255, 0.28);
transform-style: preserve-3d;
}

.ring-1 {
width: 320px;
height: 320px;
top: 55%;
right: 4%;
animation: ringOrbit 16s linear infinite;
}

.ring-2 {
width: 210px;
height: 210px;
top: 60%;
right: 9.5%;
border-color: rgba(110, 165, 255, 0.18);
animation: ringOrbit 16s linear infinite reverse;
}

.ring-3 {
width: 480px;
height: 480px;
top: 45%;
right: -6%;
border-style: dashed;
border-color: rgba(110, 165, 255, 0.12);
animation: ringOrbit 26s linear infinite;
}

@keyframes ringOrbit {
0% {
transform: rotateX(68deg) rotateZ(0deg);
}

100% {
transform: rotateX(68deg) rotateZ(360deg);
}
}

/* ================= PARTICLES ================= */

.particle {
position: absolute;
border-radius: 50%;
background: rgba(150, 195, 255, 0.7);

box-shadow:
0 0 10px rgba(120, 170, 255, 0.9),
0 0 20px rgba(80, 140, 255, 0.5);

animation: particleRise linear infinite;
}

@keyframes particleRise {
0% {
transform: translateY(0);
opacity: 0;
}

12% {
opacity: 1;
}

88% {
opacity: 1;
}

100% {
transform: translateY(-88vh);
opacity: 0;
}
}

/* ================= MAIN CARD ================= */

.login-container {
width: min(1000px, 100%);
min-height: 610px;
position: relative;
z-index: 2;

display: grid;
grid-template-columns: 1.15fr 0.85fr;

border-radius: 28px;
overflow: hidden;

background: rgba(10, 22, 52, 0.55);
border: 1px solid rgba(120, 170, 255, 0.18);

backdrop-filter: blur(22px);
-webkit-backdrop-filter: blur(22px);

box-shadow:
0 30px 100px rgba(0, 0, 0, 0.6),
inset 0 1px 0 rgba(160, 200, 255, 0.15),
0 0 60px rgba(60, 120, 255, 0.12);

animation: pageIn 0.7s ease;
}

.login-container::before {
content: "";
position: absolute;
width: 200%;
height: 80px;
top: -100px;
left: -50%;

background: linear-gradient(
90deg,
transparent,
rgba(120, 180, 255, 0.18),
transparent
);

transform: rotate(-20deg);
animation: shineMove 7s linear infinite;

pointer-events: none;
z-index: 10;
}

@keyframes shineMove {
0% {
top: -100px;
}

100% {
top: 750px;
}
}

@keyframes pageIn {
from {
opacity: 0;
transform: translateY(25px) scale(0.97);
}

to {
opacity: 1;
transform: translateY(0) scale(1);
}
}

/* ================= LEFT ================= */

.login-left {
display: flex;
align-items: center;
justify-content: center;
padding: 50px;
position: relative;
z-index: 5;
overflow: hidden;
}

.form-wrapper {
width: 100%;
max-width: 345px;
position: relative;
min-height: 500px;
}

/* ================= LOGO ================= */

.login-logo {
display: flex;
align-items: center;
gap: 10px;

font-size: 20px;
font-weight: 800;
color: #eaf1ff;

margin-bottom: 38px;
animation: logoFloat 4s ease-in-out infinite;
}

@keyframes logoFloat {
0%,
100% {
transform: translateY(0);
}

50% {
transform: translateY(-4px);
}
}

.logo-icon {
width: 36px;
height: 36px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 11px;
color: white;
font-size: 17px;

background: linear-gradient(135deg, #3a6fe0, #16306b);

box-shadow:
0 8px 22px rgba(50, 110, 240, 0.45),
0 0 25px rgba(80, 140, 255, 0.35);
}

.logo-accent {
color: #6ea3ff;
}

/* ================= FORM SLIDE ================= */

.form-stage {
position: relative;
width: 100%;
overflow: hidden;
}

.form-track {
display: flex;
width: 200%;
transition: transform 0.65s cubic-bezier(.77, 0, .18, 1);
}

.form-track.signup-active {
transform: translateX(-50%);
}

.auth-form {
width: 50%;
flex-shrink: 0;
padding-right: 2px;
}

.auth-form.login-form {
padding-right: 28px;
}

.auth-form.signup-form {
padding-left: 28px;
}

.form-title {
font-size: 31px;
color: #f2f6ff;
margin: 0 0 8px;
font-weight: 700;
letter-spacing: 0.3px;
}

.form-subtitle {
font-size: 13px;
color: #8fa0c0;
margin-bottom: 26px;
}

/* ================= FORM ================= */

.form-group {
margin-bottom: 15px;
}

.form-group label {
display: block;
font-size: 11px;
font-weight: 600;
letter-spacing: 0.4px;
color: #a9b8d6;
margin-bottom: 7px;
}

.input-box {
position: relative;
}

.input-box::before {
content: "";
position: absolute;
inset: -2px;
border-radius: 15px;

background: linear-gradient(
90deg,
#3568df,
#6da5ff,
#7a5cff,
#3568df
);

background-size: 300% 100%;
opacity: 0;
filter: blur(8px);
transition: opacity 0.3s ease;
pointer-events: none;
}

.input-box:focus-within::before {
opacity: 0.75;
animation: inputGlowMove 2.5s linear infinite;
}

@keyframes inputGlowMove {
0% {
background-position: 0% 50%;
}

100% {
background-position: 300% 50%;
}
}

.input-box input {
width: 100%;
height: 47px;

border-radius: 13px;
border: 1px solid rgba(120, 165, 255, 0.22);

padding: 0 45px 0 15px;

font-size: 13px;
outline: none;

color: #eaf1ff;
background: rgba(255, 255, 255, 0.05);

position: relative;
z-index: 1;

transition:
border-color 0.25s,
background 0.25s,
box-shadow 0.25s,
transform 0.25s;
}

.input-box input::placeholder {
color: #5f709a;
}

.input-box input:focus {
border-color: #6ea3ff;

background: rgba(255, 255, 255, 0.09);

transform: translateY(-1px);

box-shadow:
0 0 0 4px rgba(77, 132, 232, 0.15),
0 0 22px rgba(77, 132, 232, 0.32),
inset 0 0 15px rgba(90, 145, 255, 0.05);
}

/* USER TYPING / FILLED FIELD GLOW */

.input-box input:not(:placeholder-shown) {
border-color: rgba(100, 160, 255, 0.6);

box-shadow:
0 0 14px rgba(77, 132, 232, 0.16),
inset 0 0 12px rgba(90, 145, 255, 0.03);
}

.input-box input.error {
border-color: #e65353;
animation: shake 0.3s;
}

@keyframes shake {
0%,
100% {
transform: translateX(0);
}

25% {
transform: translateX(-5px);
}

75% {
transform: translateX(5px);
}
}

.field-error {
display: flex;
align-items: center;
gap: 5px;

font-size: 11px;
color: #ff7b7b;
margin-top: 6px;

animation: fadeIn 0.25s ease;
}

@keyframes fadeIn {
from {
opacity: 0;
transform: translateY(-4px);
}

to {
opacity: 1;
transform: translateY(0);
}
}

.password-toggle {
position: absolute;
right: 14px;
top: 50%;

transform: translateY(-50%);

border: none;
background: transparent;

cursor: pointer;
color: #7f92bb;

font-size: 16px;
z-index: 2;

transition: 0.2s;
}

.password-toggle:hover {
color: #b9c9ec;
transform: translateY(-50%) scale(1.1);
}

/* ================= OPTIONS ================= */

.options-row {
display: flex;
align-items: center;
justify-content: space-between;
margin: 4px 0 16px;
}

.remember-me {
display: flex;
align-items: center;
gap: 7px;

font-size: 12px;
color: #8fa0c0;

cursor: pointer;
user-select: none;
}

.remember-me input {
accent-color: #4d84e8;
width: 15px;
height: 15px;
cursor: pointer;
}

.forgot-btn {
border: none;
background: transparent;

color: #6ea3ff;
font-weight: 700;
font-size: 11px;

cursor: pointer;
transition: 0.2s;
}

.forgot-btn:hover {
color: #9cc0ff;
transform: translateX(2px);
}

/* ================= MAIN BUTTON ANIMATION ================= */

.main-btn {
width: 100%;
height: 48px;

border: none;
border-radius: 13px;

cursor: pointer;

font-size: 13px;
font-weight: 700;
letter-spacing: 0.4px;

color: white;

background: linear-gradient(
90deg,
#16306b,
#3a6fe0,
#7a5cff,
#3a6fe0,
#16306b
);

background-size: 300% 100%;
animation: buttonGradient 5s linear infinite;

box-shadow:
0 12px 28px rgba(50, 110, 240, 0.35),
0 0 0 rgba(100, 150, 255, 0);

transition:
transform 0.25s,
box-shadow 0.25s;

display: flex;
align-items: center;
justify-content: center;
gap: 8px;

position: relative;
overflow: hidden;
}

@keyframes buttonGradient {
0% {
background-position: 0% 50%;
}

100% {
background-position: 300% 50%;
}
}

.main-btn::before {
content: "";

position: absolute;
top: 0;
left: -100%;

width: 60%;
height: 100%;

background: linear-gradient(
90deg,
transparent,
rgba(255, 255, 255, 0.35),
transparent
);

transform: skewX(-25deg);
}

.main-btn:hover::before {
animation: buttonShine 0.75s ease forwards;
}

@keyframes buttonShine {
from {
left: -100%;
}

to {
left: 160%;
}
}

.main-btn:hover:not(:disabled) {
transform: translateY(-3px) scale(1.01);

box-shadow:
0 18px 40px rgba(50, 110, 240, 0.5),
0 0 35px rgba(90, 145, 255, 0.28);
}

.main-btn:active:not(:disabled) {
transform: scale(0.98);
}

.main-btn:disabled {
opacity: 0.75;
cursor: not-allowed;
}

.spinner {
width: 17px;
height: 17px;

border: 2.5px solid rgba(255, 255, 255, 0.35);
border-top-color: #fff;

border-radius: 50%;
animation: spin 0.7s linear infinite;
}

@keyframes spin {
to {
transform: rotate(360deg);
}
}

/* ================= PASSWORD STRENGTH ================= */

.strength-meter {
margin-top: 10px;
animation: fadeIn 0.25s ease;
}

.strength-bars {
display: flex;
gap: 5px;
margin-bottom: 7px;
}

.strength-bars span {
flex: 1;
height: 5px;
border-radius: 4px;
background: rgba(255, 255, 255, 0.12);
transition: 0.3s;
}

.strength-bars span.weak {
background: linear-gradient(90deg, #e65353, #ff7b7b);
}

.strength-bars span.fair {
background: linear-gradient(90deg, #ffb347, #ffcf7d);
}

.strength-bars span.good {
background: linear-gradient(90deg, #f5d90a, #f8e95c);
}

.strength-bars span.strong {
background: linear-gradient(90deg, #3ddc84, #7cf2b2);
}

.strength-line {
display: flex;
align-items: center;
justify-content: space-between;
font-size: 11px;
margin-bottom: 8px;
}

.strength-text {
color: #8fa0c0;
}

.strength-badge {
padding: 3px 12px;
border-radius: 20px;

font-size: 10.5px;
font-weight: 800;

letter-spacing: 0.5px;
text-transform: uppercase;
}

.strength-badge.weak {
color: #ff8a8a;
}

.strength-badge.fair {
color: #ffcf7d;
}

.strength-badge.good {
color: #f5e95c;
}

.strength-badge.strong {
color: #6cf0ad;
}

.strength-tips {
display: flex;
flex-direction: column;
gap: 4px;

font-size: 10.5px;
color: #68799e;
}

.strength-tips span.ok {
color: #6cf0ad;
}

/* ================= DIVIDER ================= */

.divider {
display: flex;
align-items: center;
gap: 10px;

margin: 22px 0 16px;

color: #68799e;
font-size: 11px;
}

.divider::before,
.divider::after {
content: "";
flex: 1;
height: 1px;
background: rgba(120, 165, 255, 0.15);
}

/* ================= SOCIAL ================= */

.social-buttons {
display: flex;
justify-content: center;
gap: 12px;
}

.social-btn {
width: 48px;
height: 43px;

border-radius: 12px;

border: 1px solid rgba(120, 165, 255, 0.22);
background: rgba(255, 255, 255, 0.05);

cursor: pointer;

display: flex;
align-items: center;
justify-content: center;

transition: 0.25s;
}

.social-btn:hover {
transform: translateY(-3px) rotate(2deg);

background: rgba(255, 255, 255, 0.1);

box-shadow:
0 8px 22px rgba(50, 110, 240, 0.2);
}

.social-btn svg {
width: 19px;
height: 19px;
}

/* ================= BOTTOM TEXT ================= */

.bottom-text {
text-align: center;
margin-top: 22px;

color: #8fa0c0;
font-size: 12px;
}

.bottom-text button {
border: none;
background: transparent;

color: #6ea3ff;
font-weight: 700;

cursor: pointer;
transition: 0.2s;
}

.bottom-text button:hover {
color: #9cc0ff;

text-shadow:
0 0 12px rgba(100, 160, 255, 0.7);

transform: translateY(-1px);
}

/* ================= RIGHT SIDE ================= */

.login-right {
position: relative;
overflow: hidden;

background:
radial-gradient(
circle at center,
rgba(25, 75, 180, 0.4),
transparent 65%
),
linear-gradient(
135deg,
rgba(6, 21, 53, 0.6),
rgba(2, 7, 24, 0.7)
);

border-left: 1px solid rgba(120, 165, 255, 0.12);
}

.art-layer {
position: absolute;
border-radius: 50%;
filter: blur(1px);
}

.layer-one {
width: 430px;
height: 430px;

right: -230px;
top: -20px;

background: linear-gradient(
135deg,
rgba(120, 170, 255, 0.3),
rgba(20, 50, 130, 0.05)
);

border: 1px solid rgba(150, 190, 255, 0.18);

animation: layerRotate 15s linear infinite;
}

.layer-two {
width: 360px;
height: 600px;

left: -230px;
top: 70px;

border-radius: 45%;

background: linear-gradient(
160deg,
rgba(130, 170, 255, 0.25),
rgba(5, 15, 50, 0.9)
);

transform: rotate(18deg);

animation: layerFloat 9s ease-in-out infinite;
}

.layer-three {
width: 420px;
height: 240px;

right: -100px;
bottom: -70px;

background: rgba(100, 150, 255, 0.15);

transform: rotate(-25deg);
}

@keyframes layerRotate {
100% {
transform: rotate(360deg);
}
}

@keyframes layerFloat {
0%,
100% {
transform: rotate(18deg) translateY(0);
}

50% {
transform: rotate(25deg) translateY(-25px);
}
}

/* ================= CAREERVISION GLOW ================= */

.art-center {
position: absolute;
inset: 0;

display: flex;
align-items: center;
justify-content: center;
}

.art-circle {
width: 250px;
height: 250px;

border-radius: 50%;
position: relative;

background:
radial-gradient(
circle,
rgba(100, 155, 255, 0.25),
rgba(15, 40, 100, 0.08) 55%,
transparent 70%
);

border: 1px solid rgba(130, 180, 255, 0.35);

animation:
floatCircle 6s ease-in-out infinite,
circleGlow 3s ease-in-out infinite;
}

.art-circle::before {
content: "";
position: absolute;
inset: -25px;

border-radius: 50%;

border: 2px solid rgba(90, 150, 255, 0.45);

box-shadow:
0 0 25px rgba(70, 140, 255, 0.55),
0 0 55px rgba(70, 140, 255, 0.35),
inset 0 0 30px rgba(100, 160, 255, 0.25);

animation: glowPulse 2.8s ease-in-out infinite;
}

.art-circle::after {
content: "";
position: absolute;
inset: -45px;

border-radius: 50%;
border: 1px dashed rgba(120, 180, 255, 0.5);

animation: rotateGlowRing 12s linear infinite;
}

@keyframes floatCircle {
0%,
100% {
transform: translateY(0);
}

50% {
transform: translateY(-15px);
}
}

@keyframes circleGlow {
0%,
100% {
box-shadow:
0 0 25px rgba(70, 130, 255, 0.3),
0 0 60px rgba(70, 130, 255, 0.18);
}

50% {
box-shadow:
0 0 40px rgba(80, 150, 255, 0.65),
0 0 100px rgba(70, 130, 255, 0.45),
0 0 150px rgba(40, 100, 255, 0.2);
}
}

@keyframes glowPulse {
0%,
100% {
transform: scale(0.95);
opacity: 0.5;
}

50% {
transform: scale(1.08);
opacity: 1;
}
}

@keyframes rotateGlowRing {
from {
transform: rotate(0deg);
}

to {
transform: rotate(360deg);
}
}

/* ================= ART CONTENT ================= */

.art-content {
position: absolute;
text-align: center;
color: white;
z-index: 5;

animation: contentFloat 5s ease-in-out infinite;
}

@keyframes contentFloat {
0%,
100% {
transform: translateY(0);
}

50% {
transform: translateY(-7px);
}
}

.art-content h2 {
font-size: 33px;
margin-bottom: 12px;

text-shadow:
0 0 15px rgba(100, 160, 255, 0.5);
}

.art-content p {
max-width: 235px;
font-size: 13px;
line-height: 1.7;
color: rgba(210, 228, 255, 0.65);
}

.art-icon {
width: 65px;
height: 65px;

margin: 0 auto 22px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 20px;
font-size: 30px;

background: rgba(255, 255, 255, 0.08);
border: 1px solid rgba(150, 190, 255, 0.25);

backdrop-filter: blur(10px);

box-shadow:
0 15px 40px rgba(0, 0, 0, 0.3),
0 0 30px rgba(80, 140, 255, 0.35);

animation: iconPulse 2.5s ease-in-out infinite;
}

@keyframes iconPulse {
0%,
100% {
transform: scale(1);
}

50% {
transform: scale(1.08);
}
}

/* ================= FLOATING ICONS ================= */

.floating {
position: absolute;

width: 45px;
height: 45px;

display: flex;
align-items: center;
justify-content: center;

border-radius: 14px;

background: rgba(255, 255, 255, 0.07);
border: 1px solid rgba(140, 180, 255, 0.2);

backdrop-filter: blur(8px);

animation: floating 5s ease-in-out infinite;
}

.float-one {
top: 18%;
left: 17%;
}

.float-two {
bottom: 20%;
right: 16%;
animation-delay: 1s;
}

.float-three {
top: 60%;
left: 14%;
animation-delay: 2s;
}

@keyframes floating {
0%,
100% {
transform: translateY(0) rotate(0deg);
}

50% {
transform: translateY(-12px) rotate(5deg);
}
}

/* ================= TOAST ================= */

.toast {
position: fixed;

bottom: 25px;
left: 50%;

transform: translateX(-50%) translateY(100px);

padding: 13px 22px;

border-radius: 30px;

color: white;
font-size: 13px;

background: rgba(8, 18, 45, 0.95);
border: 1px solid rgba(120, 170, 255, 0.35);

box-shadow:
0 15px 40px rgba(0, 0, 0, 0.45);

opacity: 0;

transition: 0.3s;

z-index: 100;

display: flex;
align-items: center;
gap: 8px;
}

.toast.show {
opacity: 1;
transform: translateX(-50%) translateY(0);
}

.toast.success {
border-color: rgba(61, 220, 132, 0.5);
}

.toast.error {
border-color: rgba(230, 83, 83, 0.5);
}

/* ================= RESPONSIVE ================= */

@media (max-width: 800px) {
.login-container {
grid-template-columns: 1fr;
max-width: 500px;
}

.login-right {
min-height: 230px;
order: -1;


border-left: none;
border-bottom: 1px solid rgba(120, 165, 255, 0.12);


}

.login-left {
padding: 35px 25px 45px;
}

.login-logo {
margin-bottom: 25px;
}

.form-wrapper {
min-height: auto;
}

.art-circle {
width: 190px;
height: 190px;
}

.art-content h2 {
font-size: 25px;
}

.art-content p {
font-size: 11px;
}

.cube-wrap {
top: 6%;
left: 5%;
transform: scale(0.7);
}

.ring-1,
.ring-2,
.ring-3 {
display: none;
}
}

@media (max-width: 480px) {
.login-page {
padding: 15px;
}

.login-container {
border-radius: 22px;
}

.login-left {
padding: 28px 20px 35px;
}

.form-title {
font-size: 26px;
}

.auth-form.login-form {
padding-right: 16px;
}

.auth-form.signup-form {
padding-left: 16px;
}
}
`;

// Background me dikhne wale particles ki position aur animation values.
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
left: `${(i * 6.3 + 4) % 100}%`,
bottom: `${-5 - (i % 4) * 3}%`,
duration: `${7 + (i % 5) * 2.5}s`,
delay: `${i * 0.9}s`,
size: `${2.5 + (i % 3)}px`,
}));

// Password strength ke display labels.
const PASSWORD_STRENGTHS = [
"Weak",
"Fair",
"Good",
"Strong",
];

// Har password strength ke corresponding CSS class names.
const PASSWORD_CLASSES = [
"weak",
"fair",
"good",
"strong",
];

// Password ki strength calculate karke 0 se 3 ka score return karta hai.
function getPasswordStrength(password) {
if (!password) return -1;

let score = 0;

// Password ki length ke basis par score add hota hai.
if (password.length >= 6) score++;
if (password.length >= 10) score++;

// Uppercase aur lowercase dono hone par score add hota hai.
if (
/[A-Z]/.test(password) &&
/[a-z]/.test(password)
) {
score++;
}

// Number ya special character hone par score add hota hai.
if (
/\d/.test(password) ||
/[^A-Za-z0-9]/.test(password)
) {
score++;
}

// Score ko maximum 3 tak limit kar rahe hain.
return Math.min(score - 1, 3);
}

// Login page ka main component.
export default function Login() {
// Successful login ke baad doosre route par jaane ke liye.
const navigate = useNavigate();

// Login aur signup form ke beech switch karne ke liye.
const [isSignup, setIsSignup] = useState(false);

// Form submit hone ke time loading state.
const [loading, setLoading] = useState(false);

// Login form ke input values.
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");

// User ne Remember me checkbox select kiya hai ya nahi.
const [rememberMe, setRememberMe] =
useState(false);

// Password type karte waqt Caps Lock on hai ya nahi.
const [capsLockOn, setCapsLockOn] =
useState(false);

// Signup form ke input values.
const [signupName, setSignupName] =
useState("");

const [signupEmail, setSignupEmail] =
useState("");

const [signupPassword, setSignupPassword] =
useState("");

const [confirmPassword, setConfirmPassword] =
useState("");

// Password ko text ya dots ke form me show karne ke liye.
const [
showLoginPassword,
setShowLoginPassword,
] = useState(false);

const [
showSignupPassword,
setShowSignupPassword,
] = useState(false);

const [
showConfirmPassword,
setShowConfirmPassword,
] = useState(false);

// Validation errors ko field name ke saath store karte hain.
const [errors, setErrors] = useState({});

// User ko success/error message dikhane ke liye toast state.
const [toast, setToast] = useState({
message: "",
type: "",
});

// Toast message show karta hai aur 2.5 seconds baad hide kar deta hai.
const showToast = (
message,
type = ""
) => {
setToast({
message,
type,
});


setTimeout(() => {
  setToast({
    message: "",
    type: "",
  });
}, 2500);

};

// Component load hone par remembered email localStorage se read hota hai.
useEffect(() => {
const savedEmail =
localStorage.getItem(
"cv_remember_email"
);


if (savedEmail) {
  setLoginEmail(savedEmail);
  setRememberMe(true);
}


}, []);

// Agar user pehle se logged in hai (server par valid login cookie hai),
// to login/signup form dikhane ki zaroorat nahi — seedha app ke
// andar bhej do. Logout karne par cookie hat jaati hai.
useEffect(() => {
let cancelled = false;

api
  .get("/auth/me")
  .then(() => {
    if (!cancelled) {
      navigate("/career-vision", { replace: true });
    }
  })
  .catch(() => {
    // Login nahi hai (ya server band hai) - form dikhta rahega.
  });

return () => {
  cancelled = true;
};
}, [navigate]);

// Basic email format validate karta hai.
const isValidEmail = (email) =>
  // Yeh check karta hai ki email me '@' aur '.' sahi jagah par hain ya nahi
/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(
email
);

// Keyboard event se Caps Lock ki current condition check karta hai.
const checkCapsLock = (e) => {
if (e.getModifierState) {
setCapsLockOn(
e.getModifierState("CapsLock")
);
}
};

// Kisi ek field ka error set karta hai.
const setFieldError = (
field,
message
) => {
setErrors((prev) => ({
...prev,
[field]: message,
}));
};

// Kisi field ka old error remove karta hai.
const clearError = (field) => {
setErrors((prev) => {
if (!prev[field]) return prev;


  const updated = { ...prev };

  delete updated[field];

  return updated;
});


};

// Signup form show karta hai aur purane errors clear karta hai.
const switchToSignup = () => {
setErrors({});
setCapsLockOn(false);
setIsSignup(true);
};

// Login form show karta hai aur purane errors clear karta hai.
const switchToLogin = () => {
setErrors({});
setCapsLockOn(false);
setIsSignup(false);
};

// Server ke validation errors ko form ke fields me dikhata hai.
// Field-wise error na ho (server band, bahut zyada attempts, etc.) to sirf toast dikhta hai.
const showServerError = (error, fieldMap) => {
const fieldErrors = Object.entries(
  error.errors || {}
).filter(([field]) => fieldMap[field]);

fieldErrors.forEach(([field, message]) => {
  setFieldError(fieldMap[field], message);
});

showToast(
  fieldErrors.length > 0
    ? fieldErrors[0][1]
    : error.message,
  "error"
);
};

// Login/signup successful hone ke baad common kaam.
const finishAuth = (
user,
message
) => {
setLoading(false);


showToast(
  message,
  "success"
);

if (rememberMe) {
  localStorage.setItem(
    "cv_remember_email",
    user.email
  );
} else {
  localStorage.removeItem(
    "cv_remember_email"
  );
}

setTimeout(() => {
  navigate("/career-vision");
}, 900);


};

// Login form submit hone par validation aur user check karta hai.
const handleLogin = (e) => {
e.preventDefault();

// Email ke extra spaces remove karke lowercase me convert kar rahe hain.
const email =
  loginEmail
    .trim()
    .toLowerCase();

const newErrors = {};

// Login email validate kar rahe hain.
if (!email) {
  newErrors.loginEmail =
    "Email is required.";
} else if (!isValidEmail(email)) {
  newErrors.loginEmail =
    "Please enter a valid email address.";
}

// Password empty hai ya nahi, check kar rahe hain.
if (!loginPassword) {
  newErrors.loginPassword =
    "Password is required.";
}

setErrors(newErrors);

if (
  Object.keys(newErrors).length > 0
) {
  return;
}

// Button par loading state show karte hain.
setLoading(true);

// Backend se email + password check karwa ke login karte hain.
api
  .post("/auth/login", {
    email,
    password: loginPassword,
  })
  .then((data) => {
    // Login successful hone par common success flow call hota hai.
    finishAuth(data.user, data.message);
  })
  .catch((error) => {
    setLoading(false);

    if (error.status === 401) {
      // Email ya password galat ho to password field me error show hoga.
      setFieldError(
        "loginPassword",
        "Invalid email or password."
      );

      showToast(
        "Invalid email or password.",
        "error"
      );

      return;
    }

    showServerError(error, {
      email: "loginEmail",
      password: "loginPassword",
    });
  });


};

// Signup form submit hone par new account create karta hai.
const handleSignup = (e) => {
e.preventDefault();

// Form values ko clean format me la rahe hain.
const name =
  signupName.trim();

const email =
  signupEmail
    .trim()
    .toLowerCase();

const newErrors = {};

// Name required hai.
if (!name) {
  newErrors.signupName =
    "Please enter your full name.";
}

// Email required aur valid format me hona chahiye.
if (!email) {
  newErrors.signupEmail =
    "Email is required.";
} else if (!isValidEmail(email)) {
  newErrors.signupEmail =
    "Please enter a valid email address.";
}

// Password minimum 6 characters ka hona chahiye.
if (
  signupPassword.length < 6
) {
  newErrors.signupPassword =
    "Password must be at least 6 characters.";
}

// Confirm password original password ke same hona chahiye.
if (
  signupPassword !== confirmPassword
) {
  newErrors.confirmPassword =
    "Passwords do not match.";
}

setErrors(newErrors);

if (
  Object.keys(newErrors).length > 0
) {
  return;
}

setLoading(true);

// Backend par new account create karte hain.
api
  .post("/auth/register", {
    name,
    email,
    password: signupPassword,
    confirmPassword,
  })
  .then((data) => {
    // Signup successful hone par common success flow call hota hai.
    finishAuth(data.user, data.message);
  })
  .catch((error) => {
    setLoading(false);

    if (error.status === 409) {
      // Same email pehle se registered ho to signup stop karte hain.
      setFieldError(
        "signupEmail",
        "Email already registered. Please login."
      );

      showToast(
        "Email already registered.",
        "error"
      );

      return;
    }

    showServerError(error, {
      name: "signupName",
      email: "signupEmail",
      password: "signupPassword",
      confirmPassword: "confirmPassword",
    });
  });


};

// Social login abhi demo message show karta hai.
const socialLogin = (provider) => {
showToast(
`${provider} login coming soon.`
);
};

// Forgot password abhi demo message show karta hai.
const forgotPassword = () => {
showToast(
"Forgot password feature coming soon."
);
};

// Signup password ki current strength calculate kar rahe hain.
const strength =
getPasswordStrength(
signupPassword
);

return (
<> <style>{styles}</style>
  <div className="login-page">

    {/* 3D BACKGROUND */}

    <div className="scene-3d">

      <div className="grid-floor" />

      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="cube-wrap">
        <div className="cube">
          <div className="face f1" />
          <div className="face f2" />
          <div className="face f3" />
          <div className="face f4" />
          <div className="face f5" />
          <div className="face f6" />
        </div>
      </div>

      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="ring ring-3" />

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>

    {/* MAIN CARD */}

    <div className="login-container">

      {/* LEFT FORM */}

      <div className="login-left">

        <div className="form-wrapper">

          <div className="login-logo">
            <div className="logo-icon">
              ✦
            </div>

            Career
            <span className="logo-accent">
              Vision
            </span>
          </div>

          {/* SLIDING LOGIN + SIGNUP */}

          <div className="form-stage">

            <div
              className={`form-track ${
                isSignup
                  ? "signup-active"
                  : ""
              }`}
            >

              {/* LOGIN FORM */}

              <form
                className="auth-form login-form"
                onSubmit={handleLogin}
                noValidate
              >

                <h1 className="form-title">
                  Log in
                </h1>

                <p className="form-subtitle">
                  Welcome back! Continue your
                  career journey.
                </p>

                <div className="form-group">

                  <label>
                    Email address
                  </label>

                  <div className="input-box">

                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => {
                        setLoginEmail(
                          e.target.value
                        );

                        clearError(
                          "loginEmail"
                        );
                      }}
                      placeholder="Enter your email"
                      className={
                        errors.loginEmail
                          ? "error"
                          : ""
                      }
                    />

                  </div>

                  {errors.loginEmail && (
                    <div className="field-error">
                      ⚠ {errors.loginEmail}
                    </div>
                  )}

                </div>

                <div className="form-group">

                  <label>
                    Password
                  </label>

                  <div className="input-box">

                    <input
                      type={
                        showLoginPassword
                          ? "text"
                          : "password"
                      }
                      value={loginPassword}
                      onChange={(e) => {
                        setLoginPassword(
                          e.target.value
                        );

                        clearError(
                          "loginPassword"
                        );
                      }}
                      onKeyUp={checkCapsLock}
                      onKeyDown={checkCapsLock}
                      placeholder="Enter your password"
                      className={
                        errors.loginPassword
                          ? "error"
                          : ""
                      }
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowLoginPassword(
                          !showLoginPassword
                        )
                      }
                    >
                      {showLoginPassword
                        ? "🙈"
                        : "👁"}
                    </button>

                  </div>

                  {capsLockOn && (
                    <div className="field-error">
                      ⇪ Caps Lock is ON
                    </div>
                  )}

                  {errors.loginPassword && (
                    <div className="field-error">
                      ⚠ {errors.loginPassword}
                    </div>
                  )}

                </div>

                <div className="options-row">

                  <label className="remember-me">

                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) =>
                        setRememberMe(
                          e.target.checked
                        )
                      }
                    />

                    Remember me

                  </label>

                  <button
                    type="button"
                    className="forgot-btn"
                    onClick={forgotPassword}
                  >
                    Forgot password?
                  </button>

                </div>

                <button
                  type="submit"
                  className="main-btn"
                  disabled={loading}
                >

                  {loading ? (
                    <>
                      <span className="spinner" />
                      Logging in...
                    </>
                  ) : (
                    "Log in"
                  )}

                </button>

                <div className="divider">
                  or log in with
                </div>

                <div className="social-buttons">

                  <button
                    type="button"
                    className="social-btn"
                    title="Google"
                    onClick={() =>
                      socialLogin("Google")
                    }
                  >

                    <svg viewBox="0 0 24 24">

                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
                      />

                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
                      />

                      <path
                        fill="#FBBC05"
                        d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"
                      />

                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
                      />

                    </svg>

                  </button>

                  <button
                    type="button"
                    className="social-btn"
                    title="Microsoft"
                    onClick={() =>
                      socialLogin("Microsoft")
                    }
                  >

                    <svg viewBox="0 0 24 24">

                      <rect
                        x="1"
                        y="1"
                        width="10"
                        height="10"
                        fill="#F25022"
                      />

                      <rect
                        x="13"
                        y="1"
                        width="10"
                        height="10"
                        fill="#7FBA00"
                      />

                      <rect
                        x="1"
                        y="13"
                        width="10"
                        height="10"
                        fill="#00A4EF"
                      />

                      <rect
                        x="13"
                        y="13"
                        width="10"
                        height="10"
                        fill="#FFB900"
                      />

                    </svg>

                  </button>

                </div>

                <div className="bottom-text">

                  New here?{" "}

                  <button
                    type="button"
                    onClick={switchToSignup}
                  >
                    Create account
                  </button>

                </div>

              </form>

              {/* SIGNUP FORM */}

              <form
                className="auth-form signup-form"
                onSubmit={handleSignup}
                noValidate
              >

                <h1 className="form-title">
                  Create Account
                </h1>

                <p className="form-subtitle">
                  Start your CareerVision journey today.
                </p>

                <div className="form-group">

                  <label>
                    Full name
                  </label>

                  <div className="input-box">

                    <input
                      type="text"
                      value={signupName}
                      onChange={(e) => {
                        setSignupName(
                          e.target.value
                        );

                        clearError(
                          "signupName"
                        );
                      }}
                      placeholder="Enter your full name"
                      className={
                        errors.signupName
                          ? "error"
                          : ""
                      }
                    />

                  </div>

                  {errors.signupName && (
                    <div className="field-error">
                      ⚠ {errors.signupName}
                    </div>
                  )}

                </div>

                <div className="form-group">

                  <label>
                    Email address
                  </label>

                  <div className="input-box">

                    <input
                      type="email"
                      value={signupEmail}
                      onChange={(e) => {
                        setSignupEmail(
                          e.target.value
                        );

                        clearError(
                          "signupEmail"
                        );
                      }}
                      placeholder="Enter your email"
                      className={
                        errors.signupEmail
                          ? "error"
                          : ""
                      }
                    />

                  </div>

                  {errors.signupEmail && (
                    <div className="field-error">
                      ⚠ {errors.signupEmail}
                    </div>
                  )}

                </div>

                <div className="form-group">

                  <label>
                    Password
                  </label>

                  <div className="input-box">

                    <input
                      type={
                        showSignupPassword
                          ? "text"
                          : "password"
                      }
                      value={signupPassword}
                      onChange={(e) => {
                        setSignupPassword(
                          e.target.value
                        );

                        clearError(
                          "signupPassword"
                        );
                      }}
                      onKeyUp={checkCapsLock}
                      onKeyDown={checkCapsLock}
                      placeholder="Minimum 6 characters"
                      className={
                        errors.signupPassword
                          ? "error"
                          : ""
                      }
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowSignupPassword(
                          !showSignupPassword
                        )
                      }
                    >
                      {showSignupPassword
                        ? "🙈"
                        : "👁"}
                    </button>

                  </div>

                  {signupPassword && (

                    <div className="strength-meter">

                      <div className="strength-bars">

                        {[0, 1, 2, 3].map(
                          (i) => (
                            <span
                              key={i}
                              className={
                                strength >= i &&
                                strength !== -1
                                  ? PASSWORD_CLASSES[
                                      strength
                                    ]
                                  : ""
                              }
                            />
                          )
                        )}

                      </div>

                      <div className="strength-line">

                        <span className="strength-text">
                          Password strength
                        </span>

                        <span
                          className={`strength-badge ${
                            strength === -1
                              ? "none"
                              : PASSWORD_CLASSES[
                                  strength
                                ]
                          }`}
                        >
                          {strength === -1
                            ? "Empty"
                            : PASSWORD_STRENGTHS[
                                strength
                              ]}
                        </span>

                      </div>

                      <div className="strength-tips">

                        <span
                          className={
                            signupPassword.length >= 6
                              ? "ok"
                              : ""
                          }
                        >
                          At least 6 characters
                        </span>

                        <span
                          className={
                            signupPassword.length >= 10
                              ? "ok"
                              : ""
                          }
                        >
                          10+ characters for extra strength
                        </span>

                        <span
                          className={
                            /[A-Z]/.test(
                              signupPassword
                            ) &&
                            /[a-z]/.test(
                              signupPassword
                            )
                              ? "ok"
                              : ""
                          }
                        >
                          Mix uppercase & lowercase
                        </span>

                        <span
                          className={
                            /\d/.test(
                              signupPassword
                            ) ||
                            /[^A-Za-z0-9]/.test(
                              signupPassword
                            )
                              ? "ok"
                              : ""
                          }
                        >
                          At least one number or symbol
                        </span>

                      </div>

                    </div>

                  )}

                  {errors.signupPassword && (
                    <div className="field-error">
                      ⚠ {errors.signupPassword}
                    </div>
                  )}

                </div>

                <div className="form-group">

                  <label>
                    Confirm password
                  </label>

                  <div className="input-box">

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(
                          e.target.value
                        );

                        clearError(
                          "confirmPassword"
                        );
                      }}
                      placeholder="Confirm password"
                      className={
                        errors.confirmPassword
                          ? "error"
                          : ""
                      }
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword
                        ? "🙈"
                        : "👁"}
                    </button>

                  </div>

                  {errors.confirmPassword && (
                    <div className="field-error">
                      ⚠ {errors.confirmPassword}
                    </div>
                  )}

                </div>

                <button
                  type="submit"
                  className="main-btn"
                  disabled={loading}
                >

                  {loading ? (
                    <>
                      <span className="spinner" />
                      Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}

                </button>

                <div className="bottom-text">

                  Already have an account?{" "}

                  <button
                    type="button"
                    onClick={switchToLogin}
                  >
                    Log in
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT DESIGN */}

      <div className="login-right">

        <div className="art-layer layer-one" />
        <div className="art-layer layer-two" />
        <div className="art-layer layer-three" />

        <div className="floating float-one">
          🚀
        </div>

        <div className="floating float-two">
          💡
        </div>

        <div className="floating float-three">
          🎯
        </div>

        <div className="art-center">

          <div className="art-circle" />

          <div className="art-content">

            <div className="art-icon">
              ✦
            </div>

            <h2>
              CareerVision
            </h2>

            <p>
              Discover your path, build your
              skills, and create your future.
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* TOAST */}

    {toast.message && (

      <div
        className={`toast show ${toast.type}`}
      >

        {toast.type === "success"
          ? "✅"
          
          : toast.type === "error"
          ? "❌"
          : "ℹ️"}

        {toast.message}

      </div>

    )}

  </div>
</>
)}
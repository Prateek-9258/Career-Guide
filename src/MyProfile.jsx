import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyProfile.css";
import Navbar from "./Navbar.jsx";
export default function MyProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    className: "",
    stream: "",
    percentage: "",
    interest: "",
  });

  const [photo, setPhoto] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);

  const [form, setForm] = useState(profile);

  const [password, setPassword] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const fileRef = useRef(null);

  // ==============================
  // LOAD DATA
  // ==============================

  useEffect(() => {
  const savedProfile = localStorage.getItem("careerVisionProfile");
  const savedPhoto = localStorage.getItem("careerVisionProfilePhoto");
  const loggedInUser = localStorage.getItem("loggedInUser");

  let userName = "";

  if (loggedInUser) {
    try {
      const user = JSON.parse(loggedInUser);
      userName = user.name || "";
    } catch {
      userName = loggedInUser;
    }
  }

  if (savedProfile) {
    const data = JSON.parse(savedProfile);

    const updatedProfile = {
      ...data,
      name: data.name || userName,
    };

    setProfile(updatedProfile);
    setForm(updatedProfile);
  } else {
    const newProfile = {
      name: userName,
      className: "",
      stream: "",
      percentage: "",
      interest: "",
    };

    setProfile(newProfile);
    setForm(newProfile);
  }

  if (savedPhoto) {
    setPhoto(savedPhoto);
  }

  return () => stopCamera();
}, []);
  

  // ==============================
  // PROFILE
  // ==============================

  const openEdit = () => {
    setForm(profile);
    setEditOpen(true);
  };

  const saveProfile = () => {
    if (!form.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (
      form.percentage !== "" &&
      (Number(form.percentage) < 0 || Number(form.percentage) > 100)
    ) {
      alert("Percentage must be between 0 and 100.");
      return;
    }

    localStorage.setItem(
      "careerVisionProfile",
      JSON.stringify(form)
    );

    setProfile(form);
    setEditOpen(false);

    alert("Profile updated successfully! 🎉");
  };

  // ==============================
  // PHOTO
  // ==============================

  const openGallery = () => {
    fileRef.current?.click();
  };

  const gallerySelected = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      savePhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const savePhoto = (photoData) => {
    localStorage.setItem(
      "careerVisionProfilePhoto",
      photoData
    );

    setPhoto(photoData);
    setPhotoOpen(false);

    stopCamera();

    alert("Profile picture updated! 📸");
  };

  // ==============================
  // CAMERA
  // ==============================

  const openCamera = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

      streamRef.current = stream;
      setCameraOpen(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (error) {
      alert(
        "Camera access nahi mil pa raha. Browser settings mein camera permission allow karo."
      );
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;

    if (!video) return;

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const image = canvas.toDataURL(
      "image/jpeg",
      0.9
    );

    savePhoto(image);
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current
        .getTracks()
        .forEach((track) => track.stop());

      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraOpen(false);
  };

  const closePhotoModal = () => {
    stopCamera();
    setPhotoOpen(false);
  };

  // ==============================
  // PASSWORD
  // ==============================

  const changePassword = () => {
    if (
      !password.current ||
      !password.newPass ||
      !password.confirm
    ) {
      alert("Please fill all password fields.");
      return;
    }

    if (password.newPass.length < 6) {
      alert(
        "New password must be at least 6 characters."
      );
      return;
    }

    if (password.newPass !== password.confirm) {
      alert("New passwords do not match.");
      return;
    }

    const savedPassword =
      localStorage.getItem("careerVisionPassword");

    if (
      savedPassword &&
      password.current !== savedPassword
    ) {
      alert("Current password is incorrect.");
      return;
    }

    localStorage.setItem(
      "careerVisionPassword",
      password.newPass
    );

    setPassword({
      current: "",
      newPass: "",
      confirm: "",
    });

    setPasswordOpen(false);

    alert("Password changed successfully! 🔐");
  };

  // ==============================
  // LOGOUT
  // ==============================

  const logoutUser = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("isLoggedIn");

    alert("You have been logged out. 👋");

    navigate("/");
  };

  // ==============================
  // HELPERS
  // ==============================

  const firstLetter =
    (profile.name || "S")
      .trim()
      .charAt(0)
      .toUpperCase();

  const isComplete =
    profile.name &&
    profile.className &&
    profile.stream &&
    profile.percentage &&
    profile.interest;

  return (
    <div className="profile-page">

      {/* BACKGROUND */}
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <div className="bg-orb orb-three" />

      {/* ================= NAVBAR ================= */}

      <Navbar />

      {/* ================= MAIN ================= */}

      <main className="profile-container">

        {/* PAGE HEADING */}

        <section className="page-heading">

          <div>
            <span className="eyebrow">
              MY ACCOUNT
            </span>

            <h1>
              My Profile
              <span> 👋</span>
            </h1>

            <p>
              Your personal career journey,
              all in one place.
            </p>
          </div>

          <div className="heading-badge">
            <span>✦</span>
            Career Explorer
          </div>

        </section>

        {/* ================= PROFILE HERO ================= */}

        <section className="profile-hero glass-card">

          <div className="hero-glow" />

          <div className="profile-identity">

            <div className="avatar-area">

              <div className="avatar">

                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                  />
                ) : (
                  <span>{firstLetter}</span>
                )}

              </div>

              <button
                className="camera-button"
                onClick={() => setPhotoOpen(true)}
              >
                📷
              </button>

              <div className="online-dot" />

            </div>

            <div className="identity-info">

              <h2>
                {profile.name || "Student"}
              </h2>

              <p>
                {profile.className
                  ? `${profile.className} • CareerVision`
                  : "Student • CareerVision"}
              </p>

              <div className="identity-tags">
                <span>🎓 Career Explorer</span>
                <span className="verified">
                  ✓ Verified Profile
                </span>
              </div>

            </div>

          </div>

          <button
            className="primary-button"
            onClick={openEdit}
          >
            ✏️ Edit Profile
          </button>

        </section>

        {/* ================= CONTENT GRID ================= */}

        <div className="content-grid">

          {/* PERSONAL DETAILS */}

          <section className="glass-card details-card">

            <div className="section-header">

              <div>
                <span className="section-icon">
                  👤
                </span>

                <div>
                  <h3>Personal & Education</h3>
                  <p>Your basic information</p>
                </div>
              </div>

              <span className="header-icon">
                📚
              </span>

            </div>

            <div className="details-grid">

              <Detail
                label="FULL NAME"
                value={profile.name}
                icon="👤"
              />

              <Detail
                label="CLASS"
                value={profile.className}
                icon="🎓"
              />

              <Detail
                label="STREAM"
                value={profile.stream}
                icon="📖"
              />

              <Detail
                label="PERCENTAGE"
                value={
                  profile.percentage
                    ? `${profile.percentage}%`
                    : ""
                }
                icon="📊"
              />

              <Detail
                label="INTEREST"
                value={profile.interest}
                icon="💡"
              />

              <div className="detail-item">

                <div className="detail-icon">
                  ✓
                </div>

                <div>
                  <small>PROFILE STATUS</small>

                  <strong
                    className={
                      isComplete
                        ? "success"
                        : "warning"
                    }
                  >
                    {isComplete
                      ? "✓ Complete"
                      : "⚠ Incomplete"}
                  </strong>
                </div>

              </div>

            </div>

          </section>

          {/* CAREER */}

          <section className="glass-card career-card">

            <div className="section-header">

              <div>
                <span className="section-icon">
                  🎯
                </span>

                <div>
                  <h3>My Career</h3>
                  <p>Your career direction</p>
                </div>
              </div>

              <span className="header-icon">
                🚀
              </span>

            </div>

            <div className="career-box">

              <div className="career-icon">
                💻
              </div>

              <div className="career-content">

                <span className="mini-label">
                  RECOMMENDED PATH
                </span>

                <h3>
                  Explore Your Career
                </h3>

                <p>
                  Complete the CareerVision quiz
                  to discover a career path
                  personalized for you.
                </p>

              </div>

              <button
                onClick={() => navigate("/quiz")}
                className="small-arrow"
              >
                →
              </button>

            </div>

            <div className="career-tags">

              <span>🎯 Personalized</span>
              <span>📈 Future Ready</span>
              <span>🚀 Growth</span>

            </div>

          </section>

          {/* QUIZ RESULT */}

          <section className="glass-card">

            <div className="section-header">

              <div>
                <span className="section-icon">
                  🧠
                </span>

                <div>
                  <h3>Career Quiz Result</h3>
                  <p>Your latest assessment</p>
                </div>
              </div>

              <span className="header-icon">
                🏆
              </span>

            </div>

            <div className="quiz-result">

              <div className="score-circle">

                <div className="score-inner">
                  <strong>0%</strong>
                  <small>MATCH</small>
                </div>

              </div>

              <div className="quiz-info">

                <span className="mini-label">
                  STATUS
                </span>

                <h4>
                  Quiz Not Completed
                </h4>

                <p>
                  Take the career quiz to
                  discover your personalized
                  career match.
                </p>

                <button
                  onClick={() => navigate("/quiz")}
                  className="text-button"
                >
                  Take Quiz →
                </button>

              </div>

            </div>

          </section>

          {/* SAVED CAREERS */}

          <section className="glass-card">

            <div className="section-header">

              <div>
                <span className="section-icon">
                  ❤️
                </span>

                <div>
                  <h3>Saved Careers</h3>
                  <p>Your favorite career paths</p>
                </div>
              </div>

              <span className="header-icon">
                🔖
              </span>

            </div>

            <div className="saved-careers">

              <CareerItem
                icon="💻"
                title="Software Engineer"
                category="IT & Technology"
              />

              <CareerItem
                icon="🤖"
                title="AI Engineer"
                category="Artificial Intelligence"
              />

              <CareerItem
                icon="✈️"
                title="Commercial Pilot"
                category="Aviation"
              />

              <CareerItem
                icon="🪖"
                title="NDA Officer"
                category="Defence"
              />

            </div>

          </section>

        </div>

        {/* ================= ROADMAP ================= */}

        <section className="glass-card roadmap-card">

          <div className="roadmap-top">

            <div className="section-header no-margin">

              <div>
                <span className="section-icon">
                  🛤️
                </span>

                <div>
                  <h3>My Career Roadmap</h3>
                  <p>
                    Track your progress toward
                    your career goal
                  </p>
                </div>
              </div>

            </div>

            <div className="progress-number">
              65%
              <small>Progress</small>
            </div>

          </div>

          <div className="progress-bar">
            <span />
          </div>

          <div className="roadmap-steps">

            <RoadmapStep
              number="✓"
              title="Profile"
              completed
            />

            <RoadmapStep
              number="✓"
              title="Choose Course"
              completed
            />

            <RoadmapStep
              number="3"
              title="Build Skills"
            />

            <RoadmapStep
              number="4"
              title="Get Job"
              pending
            />

          </div>

          <button
            className="roadmap-button"
            onClick={() => navigate("/roadmap")}
          >
            View Full Roadmap →
          </button>

        </section>

        {/* ================= QUICK ACTIONS ================= */}

        <section className="quick-section">

          <div className="quick-heading">
            <span>QUICK ACTIONS</span>
            <h2>Keep Moving Forward</h2>
          </div>

          <div className="actions-grid">

            <Action
              icon="🧭"
              title="Explore Careers"
              text="Find your ideal career"
              onClick={() => navigate("/career-details")}
            />

            <Action
              icon="🛤️"
              title="View Roadmap"
              text="Track your progress"
              onClick={() => navigate("/roadmap")}
            />

            <Action
              icon="🧠"
              title="Retake Quiz"
              text="Discover your match"
              onClick={() => navigate("/quiz")}
            />

          </div>

        </section>

        {/* ================= ACCOUNT ================= */}

        <section className="glass-card account-card">

          <div className="section-header">

            <div>
              <span className="section-icon">
                ⚙️
              </span>

              <div>
                <h3>Account Settings</h3>
                <p>Manage your account</p>
              </div>
            </div>

            <span className="header-icon">
              🔐
            </span>

          </div>

          <div className="account-actions">

            <button
              onClick={() => setPasswordOpen(true)}
              className="account-button"
            >
              <span>🔑</span>

              <div>
                <strong>Change Password</strong>
                <small>Update your account password</small>
              </div>

              <b>→</b>
            </button>

            <button
              onClick={logoutUser}
              className="account-button logout"
            >
              <span>🚪</span>

              <div>
                <strong>Logout</strong>
                <small>Sign out of CareerVision</small>
              </div>

              <b>→</b>
            </button>

          </div>

        </section>

        <footer className="profile-footer">
          <div className="footer-logo">
            ✦ Career<span>Vision</span>
          </div>

          <p>
            Build your future. One step at a time.
          </p>
        </footer>

      </main>

      {/* ================= EDIT MODAL ================= */}

      {editOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget)
              setEditOpen(false);
          }}
        >

          <div className="modal-box">

            <div className="modal-header">
              <div>
                <span>✏️</span>
                <h2>Edit Profile</h2>
                <p>Update your personal information</p>
              </div>

              <button
                onClick={() => setEditOpen(false)}
              >
                ×
              </button>
            </div>

            <Input
              label="FULL NAME"
              value={form.name}
              placeholder="Enter your name"
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <div className="form-row">

              <Select
                label="CLASS"
                value={form.className}
                onChange={(e) =>
                  setForm({
                    ...form,
                    className: e.target.value,
                  })
                }
              >
                <option value="">
                  Select Class
                </option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
                <option value="Graduation">
                  Graduation
                </option>
                <option value="College Student">
                  College Student
                </option>
              </Select>

              <Select
                label="STREAM"
                value={form.stream}
                onChange={(e) =>
                  setForm({
                    ...form,
                    stream: e.target.value,
                  })
                }
              >
                <option value="">
                  Select Stream
                </option>
                <option value="PCM">PCM</option>
                <option value="PCB">PCB</option>
                <option value="Commerce">
                  Commerce
                </option>
                <option value="Arts">Arts</option>
                <option value="Other">Other</option>
              </Select>

            </div>

            <Input
              label="PERCENTAGE"
              type="number"
              min="0"
              max="100"
              value={form.percentage}
              placeholder="Enter percentage"
              onChange={(e) =>
                setForm({
                  ...form,
                  percentage: e.target.value,
                })
              }
            />

            <Input
              label="INTEREST"
              value={form.interest}
              placeholder="Example: Technology"
              onChange={(e) =>
                setForm({
                  ...form,
                  interest: e.target.value,
                })
              }
            />

            <div className="modal-buttons">

              <button
                className="secondary-button"
                onClick={() => setEditOpen(false)}
              >
                Cancel
              </button>

              <button
                className="primary-button"
                onClick={saveProfile}
              >
                Save Changes
              </button>

            </div>

          </div>

        </div>
      )}

      {/* ================= PHOTO MODAL ================= */}

      {photoOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget)
              closePhotoModal();
          }}
        >

          <div className="modal-box photo-modal">

            <div className="modal-header">
              <div>
                <span>📸</span>
                <h2>Profile Picture</h2>
                <p>
                  Choose an image or use your camera
                </p>
              </div>

              <button onClick={closePhotoModal}>
                ×
              </button>
            </div>

            {!cameraOpen ? (
              <div className="photo-options">

                <button
                  onClick={openGallery}
                  className="photo-option"
                >
                  <span>🖼️</span>
                  <strong>Gallery</strong>
                  <small>
                    Choose an image
                  </small>
                </button>

                <button
                  onClick={openCamera}
                  className="photo-option"
                >
                  <span>📷</span>
                  <strong>Camera</strong>
                  <small>
                    Take a new photo
                  </small>
                </button>

              </div>
            ) : (
              <div className="camera-container">

                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                />

                <div className="camera-actions">

                  <button
                    className="primary-button"
                    onClick={capturePhoto}
                  >
                    📸 Capture
                  </button>

                  <button
                    className="secondary-button"
                    onClick={stopCamera}
                  >
                    Cancel
                  </button>

                </div>

              </div>
            )}

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={gallerySelected}
            />

          </div>

        </div>
      )}

      {/* ================= PASSWORD MODAL ================= */}

      {passwordOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget)
              setPasswordOpen(false);
          }}
        >

          <div className="modal-box">

            <div className="modal-header">
              <div>
                <span>🔐</span>
                <h2>Change Password</h2>
                <p>
                  Keep your account secure
                </p>
              </div>

              <button
                onClick={() => setPasswordOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="security-note">
              🛡️ Your password should contain at
              least 6 characters.
            </div>

            <Input
              label="CURRENT PASSWORD"
              type="password"
              value={password.current}
              placeholder="Current password"
              onChange={(e) =>
                setPassword({
                  ...password,
                  current: e.target.value,
                })
              }
            />

            <Input
              label="NEW PASSWORD"
              type="password"
              value={password.newPass}
              placeholder="New password"
              onChange={(e) =>
                setPassword({
                  ...password,
                  newPass: e.target.value,
                })
              }
            />

            <Input
              label="CONFIRM NEW PASSWORD"
              type="password"
              value={password.confirm}
              placeholder="Confirm new password"
              onChange={(e) =>
                setPassword({
                  ...password,
                  confirm: e.target.value,
                })
              }
            />

            <div className="modal-buttons">

              <button
                className="secondary-button"
                onClick={() =>
                  setPasswordOpen(false)
                }
              >
                Cancel
              </button>

              <button
                className="primary-button"
                onClick={changePassword}
              >
                Change Password
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

/* =========================================
   COMPONENTS
========================================= */

function Detail({ label, value, icon }) {
  return (
    <div className="detail-item">

      <div className="detail-icon">
        {icon}
      </div>

      <div>
        <small>{label}</small>

        <strong>
          {value || "Not Added"}
        </strong>
      </div>

    </div>
  );
}

function CareerItem({ icon, title, category }) {
  return (
    <div className="saved-career">

      <div className="saved-icon">
        {icon}
      </div>

      <div>
        <h4>{title}</h4>
        <p>{category}</p>
      </div>

      <span>♡</span>

    </div>
  );
}

function RoadmapStep({
  number,
  title,
  completed,
  pending,
}) {
  return (
    <div
      className={`roadmap-step ${
        completed ? "completed" : ""
      } ${pending ? "pending" : ""}`}
    >

      <div className="step-circle">
        {number}
      </div>

      <strong>{title}</strong>

    </div>
  );
}

function Action({
  icon,
  title,
  text,
  onClick,
}) {
  return (
    <button
      className="action-card"
      onClick={onClick}
    >
      <span className="action-icon">
        {icon}
      </span>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <span className="action-arrow">
        →
      </span>
    </button>
  );
}

function Input({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  min,
  max,
}) {
  return (
    <div className="form-group">

      <label>{label}</label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        min={min}
        max={max}
      />

    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  children,
}) {
  return (
    <div className="form-group">

      <label>{label}</label>

      <select
        value={value}
        onChange={onChange}
      >
        {children}
      </select>

    </div>
  );
}


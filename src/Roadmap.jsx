import React, { useMemo, useState } from "react";
import Navbar from "./Navbar.jsx";

export default function Roadmap() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [activeStream, setActiveStream] = useState("PCM");
  const [selectedCareer, setSelectedCareer] = useState(null);

  // =========================
  // CAREER DATA
  // =========================
  const careers = [
    // TECHNOLOGY
    {
      title: "Software Developer",
      category: "Technology",
      icon: "💻",
      description: "Build software applications and digital solutions.",
      skills: ["Programming", "Problem Solving", "Git"],
    },
    {
      title: "Web Developer",
      category: "Technology",
      icon: "🌐",
      description: "Create and maintain modern websites and web applications.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Frontend Developer",
      category: "Technology",
      icon: "🎨",
      description: "Build the visual and interactive part of websites.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend Developer",
      category: "Technology",
      icon: "⚙️",
      description: "Develop servers, APIs and databases for applications.",
      skills: ["Node.js", "Python", "SQL", "APIs"],
    },
    {
      title: "Full Stack Developer",
      category: "Technology",
      icon: "🧩",
      description: "Work on both frontend and backend development.",
      skills: ["React", "Node.js", "Database", "APIs"],
    },
    {
      title: "Data Scientist",
      category: "Technology",
      icon: "📊",
      description: "Use data, statistics and programming to solve problems.",
      skills: ["Python", "Statistics", "Machine Learning"],
    },
    {
      title: "Data Analyst",
      category: "Technology",
      icon: "📈",
      description: "Analyze data and turn it into useful business insights.",
      skills: ["Excel", "SQL", "Python", "Power BI"],
    },
    {
      title: "AI Engineer",
      category: "Technology",
      icon: "🤖",
      description: "Build intelligent systems using artificial intelligence.",
      skills: ["Python", "AI", "Machine Learning"],
    },
    {
      title: "Cloud Engineer",
      category: "Technology",
      icon: "☁️",
      description: "Design and manage cloud-based infrastructure.",
      skills: ["AWS", "Azure", "Networking"],
    },
    {
      title: "Cyber Security Analyst",
      category: "Technology",
      icon: "🔐",
      description: "Protect systems, networks and information from threats.",
      skills: ["Networking", "Security", "Linux"],
    },
    {
      title: "DevOps Engineer",
      category: "Technology",
      icon: "🚀",
      description: "Automate software development and deployment processes.",
      skills: ["Docker", "CI/CD", "Linux"],
    },
    {
      title: "Mobile App Developer",
      category: "Technology",
      icon: "📱",
      description: "Create applications for Android and iOS devices.",
      skills: ["Flutter", "React Native", "Java"],
    },
    {
      title: "Game Developer",
      category: "Technology",
      icon: "🎮",
      description: "Design and develop interactive video games.",
      skills: ["Unity", "C#", "Game Design"],
    },
    {
      title: "Blockchain Developer",
      category: "Technology",
      icon: "⛓️",
      description: "Develop applications using blockchain technology.",
      skills: ["Blockchain", "Solidity", "Web3"],
    },
    {
      title: "Machine Learning Engineer",
      category: "Technology",
      icon: "🧠",
      description: "Create systems that learn from data.",
      skills: ["Python", "ML", "TensorFlow"],
    },

    // ENGINEERING
    {
      title: "Civil Engineer",
      category: "Engineering",
      icon: "🏗️",
      description: "Design and build roads, bridges and infrastructure.",
      skills: ["AutoCAD", "Construction", "Design"],
    },
    {
      title: "Mechanical Engineer",
      category: "Engineering",
      icon: "⚙️",
      description: "Design and develop machines and mechanical systems.",
      skills: ["CAD", "Mechanics", "Design"],
    },
    {
      title: "Electrical Engineer",
      category: "Engineering",
      icon: "⚡",
      description: "Work with electrical systems, power and electronics.",
      skills: ["Circuits", "Power Systems", "Electronics"],
    },
    {
      title: "Electronics Engineer",
      category: "Engineering",
      icon: "🔌",
      description: "Design electronic devices and control systems.",
      skills: ["Electronics", "Circuits", "Embedded Systems"],
    },
    {
      title: "Aerospace Engineer",
      category: "Engineering",
      icon: "✈️",
      description: "Design aircraft, spacecraft and aerospace systems.",
      skills: ["Physics", "Mathematics", "CAD"],
    },
    {
      title: "Biomedical Engineer",
      category: "Engineering",
      icon: "🩺",
      description: "Combine engineering and medicine to develop healthcare technology.",
      skills: ["Biology", "Engineering", "Medical Technology"],
    },
    {
      title: "Chemical Engineer",
      category: "Engineering",
      icon: "🧪",
      description: "Design industrial processes involving chemicals and materials.",
      skills: ["Chemistry", "Process Design", "Mathematics"],
    },
    {
      title: "Environmental Engineer",
      category: "Engineering",
      icon: "🌱",
      description: "Develop solutions for environmental protection.",
      skills: ["Environment", "Engineering", "Research"],
    },
    {
      title: "Marine Engineer",
      category: "Engineering",
      icon: "🚢",
      description: "Work with ship engines and marine systems.",
      skills: ["Mechanics", "Marine Systems", "Engineering"],
    },
    {
      title: "Robotics Engineer",
      category: "Engineering",
      icon: "🦾",
      description: "Design and build robots and automated systems.",
      skills: ["Robotics", "Python", "Electronics"],
    },

    // MEDICAL & HEALTHCARE
    {
      title: "Doctor",
      category: "Medical & Healthcare",
      icon: "👨‍⚕️",
      description: "Diagnose and treat patients and help maintain health.",
      skills: ["Biology", "Medical Science", "Communication"],
    },
    {
      title: "Dentist",
      category: "Medical & Healthcare",
      icon: "🦷",
      description: "Diagnose and treat problems related to teeth and oral health.",
      skills: ["Biology", "Dental Science", "Patient Care"],
    },
    {
      title: "Pharmacist",
      category: "Medical & Healthcare",
      icon: "💊",
      description: "Work with medicines and provide healthcare guidance.",
      skills: ["Pharmacy", "Chemistry", "Biology"],
    },
    {
      title: "Physiotherapist",
      category: "Medical & Healthcare",
      icon: "🏃",
      description: "Help patients improve movement and physical health.",
      skills: ["Anatomy", "Exercise", "Patient Care"],
    },
    {
      title: "Occupational Therapist",
      category: "Medical & Healthcare",
      icon: "🧑‍🦽",
      description: "Help people improve their ability to perform daily activities.",
      skills: ["Therapy", "Rehabilitation", "Communication"],
    },
    {
      title: "Optometrist",
      category: "Medical & Healthcare",
      icon: "👓",
      description: "Examine vision and provide eye-care services.",
      skills: ["Optometry", "Eye Care", "Biology"],
    },
    {
      title: "Speech Therapist",
      category: "Medical & Healthcare",
      icon: "🗣️",
      description: "Help people improve speech and communication abilities.",
      skills: ["Speech Science", "Communication", "Therapy"],
    },
    {
      title: "Radiologist",
      category: "Medical & Healthcare",
      icon: "🩻",
      description: "Use medical imaging to help diagnose health conditions.",
      skills: ["Medical Imaging", "Medicine", "Technology"],
    },
    {
      title: "Radiology Technician",
      category: "Medical & Healthcare",
      icon: "🔬",
      description: "Operate imaging equipment and assist with diagnostic scans.",
      skills: ["X-Ray", "Imaging", "Patient Care"],
    },
    {
      title: "Cardiologist",
      category: "Medical & Healthcare",
      icon: "❤️",
      description: "Specialize in diseases and conditions of the heart.",
      skills: ["Medicine", "Cardiology", "Diagnosis"],
    },
    {
      title: "Dermatologist",
      category: "Medical & Healthcare",
      icon: "🧑‍⚕️",
      description: "Specialize in skin, hair and nail health.",
      skills: ["Medicine", "Dermatology", "Diagnosis"],
    },
    {
      title: "Medical Laboratory Technician",
      category: "Medical & Healthcare",
      icon: "🧫",
      description: "Perform laboratory tests that support medical diagnosis.",
      skills: ["Biology", "Laboratory", "Testing"],
    },
    {
      title: "Public Health Officer",
      category: "Medical & Healthcare",
      icon: "🏥",
      description: "Work on programs that improve community health.",
      skills: ["Public Health", "Research", "Communication"],
    },

    // BUSINESS & FINANCE
    {
      title: "Chartered Accountant",
      category: "Business & Finance",
      icon: "🧾",
      description: "Work in accounting, taxation, auditing and finance.",
      skills: ["Accounting", "Taxation", "Finance"],
    },
    {
      title: "Chartered Accountant Auditor",
      category: "Business & Finance",
      icon: "📋",
      description: "Review financial records and ensure accuracy and compliance.",
      skills: ["Auditing", "Accounting", "Finance"],
    },
    {
      title: "Financial Advisor",
      category: "Business & Finance",
      icon: "💰",
      description: "Help individuals and businesses plan their finances.",
      skills: ["Finance", "Investment", "Communication"],
    },
    {
      title: "Stock Market Analyst",
      category: "Business & Finance",
      icon: "📉",
      description: "Study market data and company performance.",
      skills: ["Finance", "Research", "Analysis"],
    },
    {
      title: "Actuary",
      category: "Business & Finance",
      icon: "📐",
      description: "Use mathematics and statistics to assess financial risk.",
      skills: ["Mathematics", "Statistics", "Finance"],
    },
    {
      title: "Economist",
      category: "Business & Finance",
      icon: "📊",
      description: "Study markets, economies and financial trends.",
      skills: ["Economics", "Research", "Statistics"],
    },
    {
      title: "Statistician",
      category: "Business & Finance",
      icon: "📈",
      description: "Collect, analyze and interpret numerical data.",
      skills: ["Statistics", "Mathematics", "Data Analysis"],
    },

    // SCIENCE & RESEARCH
    {
      title: "Geologist",
      category: "Science & Research",
      icon: "🌍",
      description: "Study Earth, rocks, minerals and geological processes.",
      skills: ["Geology", "Research", "Earth Science"],
    },
    {
      title: "Physicist",
      category: "Science & Research",
      icon: "⚛️",
      description: "Study matter, energy, motion and the laws of nature.",
      skills: ["Physics", "Mathematics", "Research"],
    },
    {
      title: "Chemist",
      category: "Science & Research",
      icon: "⚗️",
      description: "Study chemicals, materials and chemical reactions.",
      skills: ["Chemistry", "Laboratory", "Research"],
    },
    {
      title: "Biotechnologist",
      category: "Science & Research",
      icon: "🧬",
      description: "Use biological science to develop useful products and solutions.",
      skills: ["Biology", "Biotechnology", "Research"],
    },
    {
      title: "Microbiologist",
      category: "Science & Research",
      icon: "🦠",
      description: "Study microorganisms such as bacteria and fungi.",
      skills: ["Microbiology", "Biology", "Laboratory"],
    },
    {
      title: "Biochemist",
      category: "Science & Research",
      icon: "🧪",
      description: "Study chemical processes inside living organisms.",
      skills: ["Biology", "Chemistry", "Research"],
    },
    {
      title: "Forensic Scientist",
      category: "Science & Research",
      icon: "🔎",
      description: "Use science and laboratory methods to support investigations.",
      skills: ["Science", "Laboratory", "Analysis"],
    },

    // EDUCATION
    {
      title: "Teacher",
      category: "Education",
      icon: "👨‍🏫",
      description: "Teach students and help them develop knowledge and skills.",
      skills: ["Teaching", "Communication", "Subject Knowledge"],
    },
    {
      title: "School Principal",
      category: "Education",
      icon: "🏫",
      description: "Lead school operations and support students and teachers.",
      skills: ["Leadership", "Management", "Communication"],
    },
    {
      title: "School Counselor",
      category: "Education",
      icon: "🧑‍💼",
      description: "Guide students with education and career-related decisions.",
      skills: ["Counseling", "Communication", "Guidance"],
    },
    {
      title: "Librarian",
      category: "Education",
      icon: "📚",
      description: "Manage library resources and help people find information.",
      skills: ["Organization", "Research", "Communication"],
    },
    {
      title: "Professor",
      category: "Education",
      icon: "🎓",
      description: "Teach advanced subjects and conduct academic research.",
      skills: ["Research", "Teaching", "Communication"],
    },

    // LAW & GOVERNMENT
    {
      title: "Lawyer",
      category: "Law & Government",
      icon: "⚖️",
      description: "Provide legal advice and represent clients in legal matters.",
      skills: ["Law", "Research", "Communication"],
    },
    {
      title: "Professor of Law",
      category: "Law & Government",
      icon: "📖",
      description: "Teach law and conduct legal research.",
      skills: ["Law", "Research", "Teaching"],
    },
    {
      title: "Civil Judge",
      category: "Law & Government",
      icon: "🏛️",
      description: "Work within the judicial system to decide legal cases.",
      skills: ["Law", "Judgment", "Legal Research"],
    },
    {
      title: "Legal Advisor",
      category: "Law & Government",
      icon: "📜",
      description: "Provide legal guidance to people and organizations.",
      skills: ["Law", "Research", "Communication"],
    },
    {
      title: "Company Lawyer",
      category: "Law & Government",
      icon: "🏢",
      description: "Handle legal matters for companies and businesses.",
      skills: ["Corporate Law", "Contracts", "Legal Research"],
    },

    // MANAGEMENT
    {
      title: "Human Resources Manager",
      category: "Management",
      icon: "👥",
      description: "Manage recruitment, employees and workplace processes.",
      skills: ["HR", "Communication", "Leadership"],
    },
    {
      title: "Marketing Manager",
      category: "Management",
      icon: "📣",
      description: "Plan marketing strategies and promote products or services.",
      skills: ["Marketing", "Communication", "Strategy"],
    },
    {
      title: "Project Manager",
      category: "Management",
      icon: "📌",
      description: "Plan and manage projects from start to completion.",
      skills: ["Planning", "Leadership", "Management"],
    },
    {
      title: "Operations Manager",
      category: "Management",
      icon: "⚙️",
      description: "Manage daily business operations and processes.",
      skills: ["Operations", "Leadership", "Planning"],
    },
    {
      title: "Supply Chain Manager",
      category: "Management",
      icon: "🚚",
      description: "Manage movement of products and resources.",
      skills: ["Logistics", "Planning", "Management"],
    },
    {
      title: "Product Manager",
      category: "Management",
      icon: "📦",
      description: "Plan and manage the development of products.",
      skills: ["Product Strategy", "Research", "Leadership"],
    },

    // MEDIA & CREATIVE
    {
      title: "Commercial Photographer",
      category: "Media & Creative",
      icon: "📷",
      description: "Create professional photographs for brands and businesses.",
      skills: ["Photography", "Editing", "Creativity"],
    },
    {
      title: "Animator",
      category: "Media & Creative",
      icon: "🎬",
      description: "Create animated visuals for films, games and media.",
      skills: ["Animation", "Design", "Creativity"],
    },
    {
      title: "Copywriter",
      category: "Media & Creative",
      icon: "✍️",
      description: "Write engaging content for advertisements and brands.",
      skills: ["Writing", "Creativity", "Marketing"],
    },

    // DIGITAL MARKETING
    {
      title: "Social Media Manager",
      category: "Digital Marketing",
      icon: "📱",
      description: "Manage social media content and online communities.",
      skills: ["Social Media", "Content", "Marketing"],
    },
    {
      title: "SEO Specialist",
      category: "Digital Marketing",
      icon: "🔍",
      description: "Improve website visibility in search engines.",
      skills: ["SEO", "Analytics", "Content"],
    },

    // HOSPITALITY
    {
      title: "Hotel Chef",
      category: "Hospitality & Travel",
      icon: "👨‍🍳",
      description: "Prepare food and manage kitchen operations.",
      skills: ["Cooking", "Creativity", "Management"],
    },
    {
      title: "Event Manager",
      category: "Hospitality & Travel",
      icon: "🎉",
      description: "Plan and manage events and special occasions.",
      skills: ["Planning", "Communication", "Management"],
    },

    // AVIATION
    {
      title: "Air Traffic Controller",
      category: "Aviation",
      icon: "🛫",
      description: "Manage aircraft movement and maintain safe air traffic.",
      skills: ["Communication", "Focus", "Aviation"],
    },
    {
      title: "Airport Ground Staff",
      category: "Aviation",
      icon: "🛄",
      description: "Support passengers and airport operations on the ground.",
      skills: ["Communication", "Customer Service", "Airport Operations"],
    },
    // GOVERNMENT & PUBLIC SERVICE
{
  title: "IAS Officer",
  category: "Government & Public Service",
  icon: "🏛️",
  description: "Work in public administration and help implement government policies.",
  skills: ["Administration", "Leadership", "General Studies"],
},
{
  title: "IPS Officer",
  category: "Government & Public Service",
  icon: "👮",
  description: "Serve in police administration and maintain public safety.",
  skills: ["Leadership", "Law", "General Studies"],
},
{
  title: "IFS Officer",
  category: "Government & Public Service",
  icon: "🌍",
  description: "Represent India in foreign affairs and diplomatic services.",
  skills: ["International Relations", "Communication", "General Studies"],
},
{
  title: "Indian Revenue Service Officer",
  category: "Government & Public Service",
  icon: "💼",
  description: "Work in India's taxation and revenue administration.",
  skills: ["Taxation", "Finance", "Law"],
},
{
  title: "Government Teacher",
  category: "Government & Public Service",
  icon: "👨‍🏫",
  description: "Teach students in government schools and educational institutions.",
  skills: ["Teaching", "Communication", "Subject Knowledge"],
},
{
  title: "Government Doctor",
  category: "Government & Public Service",
  icon: "🩺",
  description: "Provide medical services through government hospitals and health programs.",
  skills: ["Medicine", "Patient Care", "Communication"],
},
{
  title: "Indian Forest Service Officer",
  category: "Government & Public Service",
  icon: "🌳",
  description: "Work for forest management, wildlife protection and conservation.",
  skills: ["Environment", "Biology", "Administration"],
},
{
  title: "Defence Officer",
  category: "Government & Public Service",
  icon: "🎖️",
  description: "Serve the country through India's armed forces.",
  skills: ["Leadership", "Discipline", "Physical Fitness"],
},
{
  title: "Government Lawyer",
  category: "Government & Public Service",
  icon: "⚖️",
  description: "Handle legal matters and provide legal representation for government bodies.",
  skills: ["Law", "Legal Research", "Communication"],
},
{
  title: "Railway Officer",
  category: "Government & Public Service",
  icon: "🚆",
  description: "Work in administration, operations and management within Indian Railways.",
  skills: ["Management", "Administration", "Technical Skills"],
},
{
  title: "Banking Officer",
  category: "Government & Public Service",
  icon: "🏦",
  description: "Work in public sector banking and financial services.",
  skills: ["Banking", "Finance", "Communication"],
},
{
  title: "Government Scientist",
  category: "Government & Public Service",
  icon: "🔬",
  description: "Conduct scientific research in government research organizations.",
  skills: ["Research", "Science", "Problem Solving"],
},
{
  title: "Public Sector Engineer",
  category: "Government & Public Service",
  icon: "👷",
  description: "Work as an engineer in public sector organizations and government projects.",
  skills: ["Engineering", "Technical Skills", "Project Management"],
},
{
  title: "Government Accountant",
  category: "Government & Public Service",
  icon: "🧾",
  description: "Manage financial records, accounts and government expenditure.",
  skills: ["Accounting", "Finance", "Excel"],
},
{
  title: "Municipal Officer",
  category: "Government & Public Service",
  icon: "🏙️",
  description: "Help manage civic services and local government administration.",
  skills: ["Administration", "Management", "Public Service"],
},
  ];

  const categories = [
    "All",
    "Technology",
    "Engineering",
    "Medical & Healthcare",
    "Business & Finance",
    "Science & Research",
    "Education",
    "Law & Government",
    "Management",
    "Media & Creative",
    "Digital Marketing",
    "Hospitality & Travel",
    "Aviation",
    "Government & Public Service",
  ];

  const streams = {
    PCM: {
      name: "Science - PCM",
      subtitle: "Physics • Chemistry • Mathematics",
      icon: "🔬",
      careers: [
        "Software Developer",
        "Web Developer",
        "Data Scientist",
        "Data Analyst",
        "AI Engineer",
        "Civil Engineer",
        "Mechanical Engineer",
        "Electrical Engineer",
        "Electronics Engineer",
        "Aerospace Engineer",
        "Robotics Engineer",
        "Physicist",
        "Chemist",
        "Geologist",
      ],
    },

    PCB: {
      name: "Science - PCB",
      subtitle: "Physics • Chemistry • Biology",
      icon: "🧬",
      careers: [
        "Doctor",
        "Dentist",
        "Pharmacist",
        "Physiotherapist",
        "Radiologist",
        "Cardiologist",
        "Dermatologist",
        "Biotechnologist",
        "Microbiologist",
        "Biochemist",
        "Forensic Scientist",
        "Public Health Officer",
        
      ],
    },

    Commerce: {
      name: "Commerce",
      subtitle: "Accounts • Business • Economics",
      icon: "💼",
      careers: [
        "Chartered Accountant",
        "Chartered Accountant Auditor",
        "Financial Advisor",
        "Stock Market Analyst",
        "Actuary",
        "Economist",
        "Statistician",
        "Human Resources Manager",
        "Marketing Manager",
        "Project Manager",
        "Operations Manager",
        "Supply Chain Manager",
        "Product Manager",
      ],
    },

    Arts: {
      name: "Arts / Humanities",
      subtitle: "Languages • Society • Creativity",
      icon: "🎨",
      careers: [
        "Teacher",
        "School Principal",
        "School Counselor",
        "Librarian",
        "Professor",
        "Lawyer",
        "Civil Judge",
        "Legal Advisor",
        "Company Lawyer",
        "Commercial Photographer",
        "Animator",
        "Copywriter",
        
      ],
    },
  };

  const filteredCareers = useMemo(() => {
    const search = query.toLowerCase().trim();

    return careers.filter((career) => {
      const matchesCategory =
        category === "All" || career.category === category;

      const matchesSearch =
        !search ||
        career.title.toLowerCase().includes(search) ||
        career.category.toLowerCase().includes(search) ||
        career.description.toLowerCase().includes(search) ||
        career.skills.some((skill) =>
          skill.toLowerCase().includes(search)
        );

      return matchesCategory && matchesSearch;
    });
  }, [query, category]);

  const getCareer = (name) =>
    careers.find((career) => career.title === name);
  // =========================
  // DETAILED ROADMAP GENERATOR
  // =========================
  const getCareerRoadmap = (career) => {
    if (!career) return [];

    const title = career.title.toLowerCase();
    const category = career.category;

    let roadmap = [
      {
        number: "01",
        icon: "🧭",
        title: "Explore & Understand",
        goal: `Understand what a ${career.title} does and whether this career matches your interests.`,
        learn: `Learn about the daily responsibilities, work environment, career scope and important subjects related to ${career.title}.`,
        action: "Research the career and identify your strengths.",
      },
      {
        number: "02",
        icon: "🎓",
        title: "Choose Your Education",
        goal: "Build the right academic foundation.",
        learn: `Focus on subjects and courses that support a career in ${career.category}.`,
        action: "Choose the appropriate stream, degree or professional course.",
      },
      {
        number: "03",
        icon: "📚",
        title: "Build Core Knowledge",
        goal: "Develop strong fundamentals before moving to advanced topics.",
        learn: `Build knowledge related to ${career.title} and strengthen the core skills needed for this field.`,
        action: "Study consistently and make your own notes.",
      },
      {
        number: "04",
        icon: "🛠️",
        title: "Develop Practical Skills",
        goal: "Convert theoretical knowledge into practical ability.",
        learn: `Practice ${career.skills.join(", ")} through exercises, projects, assignments and real-world problems.`,
        action: "Create small projects and practice regularly.",
      },
      {
        number: "05",
        icon: "🚀",
        title: "Gain Experience",
        goal: "Build evidence that you can apply your knowledge.",
        learn: "Work on projects, competitions, internships, volunteering or practical activities.",
        action: "Create a portfolio and keep improving your work.",
      },
      {
        number: "06",
        icon: "💼",
        title: "Start Your Career",
        goal: `Move towards professional opportunities as a ${career.title}.`,
        learn: "Prepare your resume, communication skills, interview skills and professional profile.",
        action: "Apply for suitable opportunities and continue learning.",
      },
    ];

    // More specific roadmap information for major fields
    if (
      title.includes("developer") ||
      title.includes("programmer") ||
      title.includes("software") ||
      title.includes("web") ||
      title.includes("ai engineer") ||
      title.includes("machine learning") ||
      title.includes("data scientist") ||
      title.includes("data analyst")
    ) {
      roadmap[2].learn =
        "Learn programming, data structures, databases, APIs, development tools and software engineering fundamentals.";

      roadmap[3].learn =
        `Practice ${career.skills.join(", ")} by building websites, applications, dashboards, automation tools or AI/data projects.`;

      roadmap[4].action =
        "Build 3–5 strong projects and publish your work in a portfolio or Git repository.";
    }

    if (
      category === "Engineering" ||
      title.includes("engineer")
    ) {
      roadmap[2].learn =
        "Strengthen mathematics, physics, engineering fundamentals, technical drawing and problem-solving.";

      roadmap[3].learn =
        `Develop practical ability in ${career.skills.join(", ")} using simulations, laboratory work, CAD, projects and technical practice.`;

      roadmap[4].action =
        "Complete technical projects, internships and practical training related to your engineering field.";
    }

    if (
      category === "Medical & Healthcare" ||
      title.includes("doctor") ||
      title.includes("dentist") ||
      title.includes("pharmacist") ||
      title.includes("therapist") ||
      title.includes("radiologist") ||
      title.includes("cardiologist") ||
      title.includes("dermatologist")
    ) {
      roadmap[1].learn =
        "Build a strong foundation in biology, chemistry and other relevant science subjects before choosing professional healthcare education.";

      roadmap[2].learn =
        "Develop knowledge of anatomy, physiology, medical science, diagnosis, patient care and the subjects specific to your chosen profession.";

      roadmap[4].action =
        "Gain supervised practical exposure, clinical training or laboratory experience according to your course.";
    }

    if (
      category === "Business & Finance" ||
      category === "Management"
    ) {
      roadmap[2].learn =
        "Build knowledge of accounting, economics, finance, business communication, management and decision-making.";

      roadmap[3].learn =
        `Practice ${career.skills.join(", ")} through case studies, business projects, presentations and analysis.`;

      roadmap[4].action =
        "Gain experience through internships, business projects, competitions or practical finance/management work.";
    }

    if (
      category === "Science & Research"
    ) {
      roadmap[2].learn =
        "Build strong scientific fundamentals, mathematics, laboratory knowledge, research methods and analytical thinking.";

      roadmap[3].learn =
        `Practice ${career.skills.join(", ")} through experiments, laboratory work, scientific projects and research activities.`;

      roadmap[4].action =
        "Participate in research projects, laboratory work, science competitions or academic projects.";
    }

    if (
      category === "Education"
    ) {
      roadmap[2].learn =
        "Develop subject expertise, teaching methods, classroom management and communication skills.";

      roadmap[3].learn =
        `Practice ${career.skills.join(", ")} through presentations, teaching activities, lesson planning and educational projects.`;

      roadmap[4].action =
        "Gain teaching exposure through internships, tutoring, school activities or supervised teaching practice.";
    }

    if (
      category === "Law & Government"
    ) {
      roadmap[2].learn =
        "Build knowledge of legal concepts, constitutional principles, legal procedures, research and current affairs.";

      roadmap[3].learn =
        `Develop ${career.skills.join(", ")} through case studies, legal research, writing and speaking practice.`;

      roadmap[4].action =
        "Participate in legal internships, moot courts, debates, research and practical legal activities.";
    }

    if (
      category === "Digital Marketing" ||
      category === "Media & Creative"
    ) {
      roadmap[2].learn =
        "Study communication, creativity, audience behavior, digital platforms and the tools used in your selected field.";

      roadmap[3].learn =
        `Practice ${career.skills.join(", ")} by creating real content, campaigns, designs, videos or creative projects.`;

      roadmap[4].action =
        "Build a portfolio showing your best creative and practical work.";
    }

    if (
      category === "Aviation"
    ) {
      roadmap[2].learn =
        "Build aviation knowledge, communication, safety awareness, procedures and professional discipline.";

      roadmap[3].learn =
        `Develop ${career.skills.join(", ")} through appropriate aviation training and practical learning.`;

      roadmap[4].action =
        "Complete the required training, certifications and practical experience for your chosen aviation role.";
    }

    if (
      category === "Government & Public Service"
    ) {
      roadmap[2].learn =
        "Build knowledge of general studies, current affairs, reasoning, communication and subjects relevant to the selected government career.";

      roadmap[3].learn =
        `Develop ${career.skills.join(", ")} through structured preparation, mock tests, writing practice and practical learning.`;

      roadmap[4].action =
        "Prepare for the relevant examination, selection process, training and professional responsibilities.";
    }

    return roadmap;
  };

  return (
    <section className="career-roadmap" id="career-roadmap">
        <Navbar />
      <div className="cr-glow cr-glow-one"></div>
      <div className="cr-glow cr-glow-two"></div>

      <div className="cr-container">

        {/* HEADER */}
        <div className="cr-header">
          <div className="cr-badge">
            <span className="cr-badge-dot"></span>
            CAREER PLANNER
          </div>

          <h1>
            Explore Your{" "}
            <span className="cr-gradient-text">Career Roadmap</span>
          </h1>

          <p>
            Discover career options, required skills and the right stream
            for your future.
          </p>
        </div>

        {/* SEARCH */}
        <div className="cr-search-wrapper">
          <span className="cr-search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search careers, skills or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {query && (
            <button
              className="cr-clear"
              onClick={() => setQuery("")}
            >
              ×
            </button>
          )}
        </div>

        {/* CATEGORY FILTER */}
        <div className="cr-filter-scroll">
          <div className="cr-filters">
            {categories.map((item) => (
              <button
                key={item}
                className={`cr-filter ${
                  category === item ? "active" : ""
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* RESULT INFO */}
        <div className="cr-result-row">
          <div>
            <span className="cr-result-number">
              {filteredCareers.length}
            </span>{" "}
            career options found
          </div>

          {(query || category !== "All") && (
            <button
              className="cr-reset"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Reset filters
            </button>
          )}
        </div>

        {/* CAREER GRID */}
        <div className="cr-career-grid">
          {filteredCareers.map((career, index) => (
            <article
              className="cr-career-card"
              key={career.title}
              style={{ "--delay": `${index * 0.025}s` }}
              onClick={() => setSelectedCareer(career)}
            >
              <div className="cr-card-top">
                <div className="cr-career-icon">
                  {career.icon}
                </div>

                <span className="cr-arrow">↗</span>
              </div>

              <div className="cr-card-category">
                {career.category}
              </div>

              <h3>{career.title}</h3>

              <p>{career.description}</p>

              <div className="cr-skills">
                {career.skills.slice(0, 3).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="cr-explore">
                Explore roadmap
                <span>→</span>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredCareers.length === 0 && (
          <div className="cr-empty">
            <div className="cr-empty-icon">🔎</div>
            <h3>No career found</h3>
            <p>
              Try another career name, skill or category.
            </p>

            <button
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Show all careers
            </button>
          </div>
        )}

        {/* STREAM SECTION */}
        <div className="cr-stream-section">
          <div className="cr-section-heading">
            <div className="cr-mini-badge">STREAM GUIDE</div>

            <h2>
              Choose Your{" "}
              <span className="cr-gradient-text">
                Study Stream
              </span>
            </h2>

            <p>
              Select a stream to explore suitable career directions.
            </p>
          </div>

          <div className="cr-stream-tabs">
            {Object.entries(streams).map(([key, stream]) => (
              <button
                key={key}
                className={`cr-stream-tab ${
                  activeStream === key ? "active" : ""
                }`}
                onClick={() => setActiveStream(key)}
              >
                <span>{stream.icon}</span>
                <div>
                  <strong>{stream.name}</strong>
                  <small>{stream.subtitle}</small>
                </div>
              </button>
            ))}
          </div>

          <div className="cr-stream-panel">
            <div className="cr-stream-heading">
              <span className="cr-big-stream-icon">
                {streams[activeStream].icon}
              </span>

              <div>
                <h3>{streams[activeStream].name}</h3>
                <p>{streams[activeStream].subtitle}</p>
              </div>
            </div>

            <div className="cr-stream-careers">
              {streams[activeStream].careers.map((careerName) => {
                const career = getCareer(careerName);

                return (
                  <button
                    className="cr-stream-career"
                    key={careerName}
                    onClick={() => career && setSelectedCareer(career)}
                  >
                    <span>
                      {career?.icon || "✨"}
                    </span>
                    {careerName}
                    <b>→</b>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ROADMAP STEPS */}
        <div className="cr-process">
          <div className="cr-section-heading">
            <div className="cr-mini-badge">YOUR JOURNEY</div>

            <h2>
              Simple{" "}
              <span className="cr-gradient-text">
                Career Roadmap
              </span>
            </h2>

            <p>
              Follow these steps to move from student to professional.
            </p>
          </div>

          <div className="cr-timeline">
            {[
              {
                number: "01",
                title: "Explore",
                text: "Understand your interests, strengths and career choices.",
                icon: "🧭",
              },
              {
                number: "02",
                title: "Choose",
                text: "Select the right stream, course and learning direction.",
                icon: "🎯",
              },
              {
                number: "03",
                title: "Learn",
                text: "Build strong subject knowledge and practical skills.",
                icon: "📚",
              },
              {
                number: "04",
                title: "Practice",
                text: "Work on projects, activities and real-world problems.",
                icon: "🛠️",
              },
              {
                number: "05",
                title: "Grow",
                text: "Build experience and continue improving your skills.",
                icon: "🚀",
              },
            ].map((step) => (
              <div className="cr-timeline-item" key={step.number}>
                <div className="cr-timeline-number">
                  {step.number}
                </div>

                <div className="cr-timeline-icon">
                  {step.icon}
                </div>

                <div className="cr-timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {/* =========================
    3D CAREER ROADMAP
========================= */}

{selectedCareer && (
  <div
    className="cr-roadmap-overlay"
    onClick={() => setSelectedCareer(null)}
  >
    <div
      className="cr-3d-roadmap"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE */}
      <button
        className="cr-3d-close"
        onClick={() => setSelectedCareer(null)}
        aria-label="Close roadmap"
      >
        ×
      </button>

      {/* DECORATIVE ORBS */}
      <div className="cr-orb cr-orb-one"></div>
      <div className="cr-orb cr-orb-two"></div>
      <div className="cr-orb cr-orb-three"></div>

      {/* HEADER */}
      <div className="cr-3d-header">

        <div className="cr-3d-icon-wrap">
          <div className="cr-3d-icon">
            {selectedCareer.icon}
          </div>
        </div>

        <div className="cr-3d-category">
          {selectedCareer.category}
        </div>

        <h2>{selectedCareer.title}</h2>

        <p>
          {selectedCareer.description}
        </p>

        <div className="cr-roadmap-status">
          <span className="cr-status-dot"></span>
          CAREER ROADMAP
        </div>
      </div>

      {/* SKILLS */}
      <div className="cr-detail-section">

        <div className="cr-detail-heading">
          <span>🧠</span>
          <div>
            <small>CORE REQUIREMENTS</small>
            <h3>Important Skills</h3>
          </div>
        </div>

        <div className="cr-detail-skills">
          {selectedCareer.skills.map((skill, index) => (
            <div
              className="cr-detail-skill"
              key={skill}
              style={{
                animationDelay: `${index * 0.08}s`,
              }}
            >
              <span>✓</span>
              {skill}
            </div>
          ))}
        </div>

      </div>

      {/* 3D ROADMAP */}
      <div className="cr-detail-section">

        <div className="cr-detail-heading">
          <span>🗺️</span>

          <div>
            <small>STEP BY STEP</small>
            <h3>Your Career Journey</h3>
          </div>
        </div>

        <div className="cr-3d-road">

          <div className="cr-road-line">
            <div className="cr-road-line-fill"></div>
          </div>

          {getCareerRoadmap(selectedCareer).map(
            (step, index) => (
              <div
                className="cr-3d-step"
                key={step.number}
                style={{
                  "--step-delay": `${index * 0.12}s`,
                }}
              >

                {/* NODE */}
                <div className="cr-3d-node-area">

                  <div className="cr-3d-node-shadow"></div>

                  <div className="cr-3d-node">
                    <span>{step.icon}</span>
                    <small>{step.number}</small>
                  </div>

                </div>

                {/* CARD */}
                <div className="cr-step-card">

                  <div className="cr-step-top">

                    <div>
                      <span className="cr-step-number">
                        STEP {step.number}
                      </span>

                      <h4>
                        {step.title}
                      </h4>
                    </div>

                    <span className="cr-step-arrow">
                      ↗
                    </span>

                  </div>

                  <div className="cr-step-info">
                    <span>🎯</span>

                    <div>
                      <b>Goal</b>
                      <p>{step.goal}</p>
                    </div>
                  </div>

                  <div className="cr-step-info">
                    <span>📖</span>

                    <div>
                      <b>What to learn</b>
                      <p>{step.learn}</p>
                    </div>
                  </div>

                  <div className="cr-step-info action">
                    <span>⚡</span>

                    <div>
                      <b>Action</b>
                      <p>{step.action}</p>
                    </div>
                  </div>

                </div>
              </div>
            )
          )}

        </div>
      </div>

      {/* CAREER GROWTH */}
      <div className="cr-growth-card">

        <div className="cr-growth-icon">
          🚀
        </div>

        <div>
          <span>FUTURE GROWTH</span>

          <h3>
            Keep Learning & Keep Growing
          </h3>

          <p>
            Your journey does not stop after getting a degree
            or first job. Continue improving your skills,
            building experience and learning new technologies
            or methods related to {selectedCareer.title}.
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="cr-roadmap-footer">

        <div>
          <span className="cr-footer-icon">
            🎓
          </span>

          <div>
            <small>YOUR NEXT MOVE</small>
            <strong>
              Start with Step 01
            </strong>
          </div>
        </div>

        <button
          onClick={() => setSelectedCareer(null)}
        >
          Start Journey
          <span>→</span>
        </button>

      </div>

    </div>
  </div>
)}
      {/* =========================
          SCOPED CSS
      ========================= */}
      <style>{`
        .career-roadmap {
          position: relative;
          width: 100%;
          overflow: hidden;
          isolation: isolate;
          color: #f8fafc;
          padding: 40px 20px;
          background: transparent;
        }

        .career-roadmap *,
        .career-roadmap *::before,
        .career-roadmap *::after {
          box-sizing: border-box;
        }

        .cr-container {
          position: relative;
          z-index: 2;
          width: min(1250px, 100%);
          margin: 0 auto;
        }

        /* GLOW */

        .cr-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          z-index: 0;
        }

        .cr-glow-one {
          width: 360px;
          height: 360px;
          top: 100px;
          left: -180px;
          background: #7c3aed;
        }

        .cr-glow-two {
          width: 320px;
          height: 320px;
          right: -160px;
          top: 600px;
          background: #2563eb;
        }
        /* HEADER */

        .cr-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 42px;
          animation: crFadeUp 0.7s ease both;
        }

        .cr-badge,
        .cr-mini-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 13px;
          border: 1px solid rgba(139, 92, 246, 0.28);
          border-radius: 999px;
          background: rgba(124, 58, 237, 0.08);
          color: #c4b5fd;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .cr-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 12px #8b5cf6;
          animation: crPulse 2s infinite;
        }

        .cr-header h1 {
          margin: 20px 0 12px;
          font-size: clamp(36px, 6vw, 64px);
          line-height: 1.05;
          letter-spacing: -2.5px;
          font-weight: 900;
        }

        .cr-gradient-text {
          background: linear-gradient(
            100deg,
            #c4b5fd,
            #8b5cf6,
            #60a5fa
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cr-header p,
        .cr-section-heading p {
          margin: 0;
          color: #94a3b8;
          font-size: 15px;
          line-height: 1.7;
        }

        /* SEARCH */

        .cr-search-wrapper {
          width: min(720px, 100%);
          margin: 0 auto 25px;
          height: 60px;
          display: flex;
          align-items: center;
          position: relative;
          border: 1px solid rgba(148, 163, 184, 0.14);
          border-radius: 16px;
          background: rgba(15, 23, 42, 0.72);
          backdrop-filter: blur(18px);
          box-shadow:
            0 18px 60px rgba(0, 0, 0, 0.2),
            inset 0 1px rgba(255, 255, 255, 0.04);
          transition: 0.3s ease;
        }

        .cr-search-wrapper:focus-within {
          border-color: rgba(139, 92, 246, 0.55);
          box-shadow:
            0 0 0 4px rgba(124, 58, 237, 0.08),
            0 20px 70px rgba(0, 0, 0, 0.28);
        }

        .cr-search-icon {
          padding-left: 20px;
          color: #a78bfa;
          font-size: 28px;
          transform: rotate(-15deg);
        }

        .cr-search-wrapper input {
          flex: 1;
          height: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #f8fafc;
          padding: 0 14px;
          font-size: 14px;
        }

        .cr-search-wrapper input::placeholder {
          color: #64748b;
        }

        .cr-clear {
          margin-right: 10px;
          width: 34px;
          height: 34px;
          border: 0;
          border-radius: 10px;
          background: rgba(148, 163, 184, 0.1);
          color: #94a3b8;
          cursor: pointer;
          font-size: 20px;
        }

        /* FILTERS */

        .cr-filter-scroll {
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 5px;
        }

        .cr-filter-scroll::-webkit-scrollbar {
          display: none;
        }

        .cr-filters {
          display: flex;
          justify-content: center;
          gap: 9px;
          flex-wrap: wrap;
          min-width: max-content;
        }

        .cr-filter {
          border: 1px solid rgba(148, 163, 184, 0.13);
          border-radius: 999px;
          padding: 9px 15px;
          background: rgba(15, 23, 42, 0.55);
          color: #94a3b8;
          cursor: pointer;
          font-size: 12px;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .cr-filter:hover {
          color: #ddd6fe;
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
        }

        .cr-filter.active {
          color: #fff;
          border-color: rgba(139, 92, 246, 0.65);
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.3),
            rgba(79, 70, 229, 0.18)
          );
          box-shadow: 0 0 25px rgba(124, 58, 237, 0.13);
        }

        /* RESULTS */

        .cr-result-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 32px 2px 18px;
          color: #64748b;
          font-size: 13px;
        }

        .cr-result-number {
          color: #c4b5fd;
          font-weight: 800;
        }

        .cr-reset {
          border: 0;
          background: transparent;
          color: #a78bfa;
          cursor: pointer;
          font-weight: 700;
        }

        /* CAREER GRID */

        .cr-career-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .cr-career-card {
          position: relative;
          min-height: 265px;
          padding: 21px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(148, 163, 184, 0.12);
          border-radius: 20px;
          background:
            linear-gradient(
              145deg,
              rgba(30, 41, 59, 0.76),
              rgba(15, 23, 42, 0.78)
            );
          backdrop-filter: blur(14px);
          box-shadow:
            0 15px 40px rgba(0, 0, 0, 0.16),
            inset 0 1px rgba(255, 255, 255, 0.035);
          animation: crCardIn 0.55s ease both;
          animation-delay: var(--delay);
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .cr-career-card::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          top: -90px;
          right: -70px;
          border-radius: 50%;
          background: #7c3aed;
          filter: blur(60px);
          opacity: 0;
          transition: 0.35s ease;
        }

        .cr-career-card:hover {
          transform: translateY(-7px);
          border-color: rgba(139, 92, 246, 0.38);
          box-shadow:
            0 24px 55px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(124, 58, 237, 0.08);
        }

        .cr-career-card:hover::before {
          opacity: 0.22;
        }

        .cr-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cr-career-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(124, 58, 237, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.18);
          font-size: 23px;
          transition: 0.3s ease;
        }

        .cr-career-card:hover .cr-career-icon {
          transform: scale(1.08) rotate(-3deg);
          background: rgba(124, 58, 237, 0.2);
        }

        .cr-arrow {
          color: #64748b;
          font-size: 20px;
          transition: 0.3s ease;
        }

        .cr-career-card:hover .cr-arrow {
          color: #c4b5fd;
          transform: translate(3px, -3px);
        }

        .cr-card-category {
          margin-top: 19px;
          color: #8b5cf6;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cr-career-card h3 {
          margin: 7px 0 9px;
          color: #f8fafc;
          font-size: 17px;
          line-height: 1.3;
        }

        .cr-career-card p {
          min-height: 48px;
          margin: 0;
          color: #94a3b8;
          font-size: 12px;
          line-height: 1.65;
        }

        .cr-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 15px;
        }

        .cr-skills span {
          padding: 5px 8px;
          border-radius: 7px;
          background: rgba(148, 163, 184, 0.07);
          border: 1px solid rgba(148, 163, 184, 0.09);
          color: #94a3b8;
          font-size: 9px;
        }

        .cr-explore {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 17px;
          padding-top: 13px;
          border-top: 1px solid rgba(148, 163, 184, 0.08);
          color: #a78bfa;
          font-size: 11px;
          font-weight: 800;
        }

        .cr-explore span {
          font-size: 17px;
          transition: 0.3s ease;
        }

        .cr-career-card:hover .cr-explore span {
          transform: translateX(5px);
        }

        /* EMPTY */

        .cr-empty {
          text-align: center;
          padding: 70px 20px;
          border: 1px dashed rgba(139, 92, 246, 0.2);
          border-radius: 22px;
          background: rgba(15, 23, 42, 0.4);
        }

        .cr-empty-icon {
          font-size: 40px;
        }

        .cr-empty h3 {
          margin: 15px 0 5px;
        }

        .cr-empty p {
          color: #64748b;
        }

        .cr-empty button {
          margin-top: 10px;
          padding: 10px 16px;
          border: 1px solid rgba(139, 92, 246, 0.35);
          border-radius: 10px;
          background: rgba(124, 58, 237, 0.12);
          color: #c4b5fd;
          cursor: pointer;
        }

        /* SECTION HEADING */

        .cr-stream-section,
        .cr-process {
          margin-top: 110px;
        }

        .cr-section-heading {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 35px;
        }

        .cr-section-heading h2 {
          margin: 14px 0 9px;
          font-size: clamp(30px, 5vw, 46px);
          letter-spacing: -1.5px;
        }

        /* STREAM TABS */

        .cr-stream-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .cr-stream-tab {
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
          padding: 15px;
          border-radius: 16px;
          border: 1px solid rgba(148, 163, 184, 0.11);
          background: rgba(15, 23, 42, 0.58);
          color: #94a3b8;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .cr-stream-tab > span {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border-radius: 11px;
          background: rgba(124, 58, 237, 0.1);
          font-size: 20px;
        }

        .cr-stream-tab strong {
          display: block;
          color: #cbd5e1;
          font-size: 12px;
        }

        .cr-stream-tab small {
          display: block;
          margin-top: 3px;
          color: #64748b;
          font-size: 9px;
        }

        .cr-stream-tab:hover,
        .cr-stream-tab.active {
          transform: translateY(-3px);
          border-color: rgba(139, 92, 246, 0.42);
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.17),
            rgba(30, 41, 59, 0.65)
          );
        }

        .cr-stream-tab.active strong {
          color: #fff;
        }

        /* STREAM PANEL */

        .cr-stream-panel {
          margin-top: 16px;
          padding: 25px;
          border-radius: 22px;
          border: 1px solid rgba(139, 92, 246, 0.16);
          background: rgba(15, 23, 42, 0.65);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .cr-stream-heading {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 22px;
        }

        .cr-big-stream-icon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          background: rgba(124, 58, 237, 0.14);
          border: 1px solid rgba(139, 92, 246, 0.2);
          font-size: 25px;
        }

        .cr-stream-heading h3 {
          margin: 0 0 5px;
          color: #f8fafc;
          font-size: 20px;
        }

        .cr-stream-heading p {
          margin: 0;
          color: #64748b;
          font-size: 12px;
        }

        .cr-stream-careers {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 9px;
        }

        .cr-stream-career {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 11px 12px;
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 11px;
          background: rgba(30, 41, 59, 0.42);
          color: #cbd5e1;
          text-align: left;
          cursor: pointer;
          font-size: 11px;
          transition: 0.25s ease;
        }

        .cr-stream-career span {
          font-size: 16px;
        }

        .cr-stream-career b {
          margin-left: auto;
          color: #64748b;
        }

        .cr-stream-career:hover {
          border-color: rgba(139, 92, 246, 0.3);
          color: #fff;
          background: rgba(124, 58, 237, 0.1);
          transform: translateX(3px);
        }

        .cr-stream-career:hover b {
          color: #a78bfa;
        }

        /* TIMELINE */

        .cr-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 15px;
        }

        .cr-timeline::before {
          content: "";
          position: absolute;
          top: 34px;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 92, 246, 0.45),
            transparent
          );
        }

        .cr-timeline-item {
          position: relative;
          z-index: 1;
          padding: 20px;
          text-align: center;
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 18px;
          background: rgba(15, 23, 42, 0.58);
          transition: 0.3s ease;
        }

        .cr-timeline-item:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.3);
        }

        .cr-timeline-number {
          position: absolute;
          top: 9px;
          right: 11px;
          color: #475569;
          font-size: 9px;
          font-weight: 800;
        }

        .cr-timeline-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin: 0 auto 17px;
          border-radius: 14px;
          background: rgba(124, 58, 237, 0.12);
          border: 1px solid rgba(139, 92, 246, 0.16);
          font-size: 20px;
        }

        .cr-timeline-content h3 {
          margin: 0 0 7px;
          color: #f8fafc;
          font-size: 15px;
        }

        .cr-timeline-content p {
          margin: 0;
          color: #64748b;
          font-size: 11px;
          line-height: 1.6;
        }

        /* MODAL */

        .cr-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(2, 6, 23, 0.78);
          backdrop-filter: blur(10px);
          animation: crFade 0.2s ease both;
        }

        .cr-modal {
          position: relative;
          width: min(580px, 100%);
          max-height: 90vh;
          overflow-y: auto;
          padding: 30px;
          border: 1px solid rgba(139, 92, 246, 0.25);
          border-radius: 24px;
          background:
            linear-gradient(
              145deg,
              rgba(30, 41, 59, 0.97),
              rgba(15, 23, 42, 0.98)
            );
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.55),
            0 0 50px rgba(124, 58, 237, 0.08);
          animation: crModalIn 0.3s ease both;
        }

        .cr-modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(148, 163, 184, 0.12);
          border-radius: 10px;
          background: rgba(148, 163, 184, 0.06);
          color: #94a3b8;
          cursor: pointer;
          font-size: 22px;
        }

        .cr-modal-icon {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          background: rgba(124, 58, 237, 0.14);
          border: 1px solid rgba(139, 92, 246, 0.22);
          font-size: 30px;
        }

        .cr-modal-category {
          margin-top: 18px;
          color: #a78bfa;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .cr-modal h2 {
          margin: 7px 0 10px;
          color: #fff;
          font-size: 29px;
        }

        .cr-modal-description {
          color: #94a3b8;
          font-size: 13px;
          line-height: 1.7;
        }

        .cr-modal-block {
          margin-top: 25px;
        }

        .cr-modal-block h4 {
          margin: 0 0 11px;
          color: #cbd5e1;
          font-size: 12px;
        }

        .cr-modal-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .cr-modal-skills span {
          padding: 8px 11px;
          border: 1px solid rgba(139, 92, 246, 0.16);
          border-radius: 9px;
          background: rgba(124, 58, 237, 0.08);
          color: #c4b5fd;
          font-size: 11px;
        }

        .cr-modal-path {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 9px;
        }

        .cr-modal-path div {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 12px;
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 11px;
          background: rgba(30, 41, 59, 0.4);
          color: #94a3b8;
          font-size: 11px;
        }

        .cr-modal-path b {
          color: #8b5cf6;
        }

        /* ANIMATIONS */

        @keyframes crFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes crCardIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes crFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes crModalIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(15px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes crPulse {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        /* TABLET */

        @media (max-width: 1050px) {
          .cr-career-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .cr-timeline {
            grid-template-columns: repeat(3, 1fr);
          }

          .cr-timeline::before {
            display: none;
          }
        }

        /* MOBILE */

        @media (max-width: 760px) {
          .career-roadmap {
            padding: 55px 14px;
          }

          .cr-header h1 {
            letter-spacing: -1.5px;
          }

          .cr-filters {
            justify-content: flex-start;
          }

          .cr-career-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .cr-career-card {
            min-height: 255px;
            padding: 16px;
            border-radius: 16px;
          }

          .cr-career-card h3 {
            font-size: 14px;
          }

          .cr-career-card p {
            font-size: 10px;
          }

          .cr-stream-tabs {
            grid-template-columns: repeat(2, 1fr);
          }

          .cr-stream-careers {
            grid-template-columns: repeat(2, 1fr);
          }

          .cr-timeline {
            grid-template-columns: repeat(2, 1fr);
          }

          .cr-modal {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .cr-career-grid {
            grid-template-columns: 1fr;
          }

          .cr-career-card {
            min-height: auto;
          }

          .cr-stream-tabs,
          .cr-stream-careers,
          .cr-timeline {
            grid-template-columns: 1fr;
          }

          .cr-result-row {
            align-items: flex-start;
            gap: 10px;
          }

          .cr-modal-path {
            grid-template-columns: 1fr;
          }
        }
          /* =========================
   CIRCULAR OPEN MODAL
========================= */

.cr-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: grid;
  place-items: center;

  padding: 20px;

  background: rgba(2, 6, 23, 0.78);
  backdrop-filter: blur(10px);

  animation: crOverlayFade 0.3s ease both;
}

.cr-modal {
  position: relative;

  width: min(580px, 100%);
  max-height: 90vh;
  overflow-y: auto;

  padding: 30px;

  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 24px;

  background:
    radial-gradient(
      circle at 50% 20%,
      rgba(124, 58, 237, 0.16),
      transparent 45%
    ),
    linear-gradient(
      145deg,
      rgba(30, 41, 59, 0.98),
      rgba(15, 23, 42, 0.99)
    );

  box-shadow:
    0 40px 100px rgba(0, 0, 0, 0.55),
    0 0 70px rgba(124, 58, 237, 0.12);

  /*
    Main circular opening animation
  */
  animation: crCircularModalOpen 0.65s
    cubic-bezier(0.16, 1, 0.3, 1) both;
}


/* =========================
   CLOSE BUTTON
========================= */

.cr-modal-close {
  position: absolute;
  top: 15px;
  right: 15px;

  width: 36px;
  height: 36px;

  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 50%;

  background: rgba(148, 163, 184, 0.06);

  color: #94a3b8;

  cursor: pointer;
  font-size: 22px;

  transition: 0.3s ease;
}

.cr-modal-close:hover {
  color: #fff;

  background: rgba(124, 58, 237, 0.2);

  transform: rotate(90deg) scale(1.08);
}


/* =========================
   CAREER ICON
========================= */

.cr-modal-icon {
  width: 65px;
  height: 65px;

  display: grid;
  place-items: center;

  margin-bottom: 5px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(139, 92, 246, 0.25),
      rgba(124, 58, 237, 0.08)
    );

  border: 1px solid rgba(139, 92, 246, 0.25);

  font-size: 30px;

  box-shadow:
    0 0 25px rgba(124, 58, 237, 0.2),
    inset 0 0 20px rgba(124, 58, 237, 0.1);

  animation: crIconSpin 0.7s
    cubic-bezier(0.16, 1, 0.3, 1) both;
}


/* =========================
   MODAL CONTENT ANIMATION
========================= */

.cr-modal-category,
.cr-modal h2,
.cr-modal-description,
.cr-modal-block {
  animation: crContentReveal 0.5s 0.18s ease both;
}


/* =========================
   ANIMATIONS
========================= */

@keyframes crOverlayFade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


/*
  Modal starts as a circle,
  grows and opens into the normal modal.
*/

@keyframes crCircularModalOpen {

  0% {
    opacity: 0;

    transform:
      scale(0.05)
      rotate(-25deg);

    border-radius: 50%;
  }

  35% {
    opacity: 1;

    transform:
      scale(0.55)
      rotate(-10deg);

    border-radius: 50%;
  }

  65% {
    transform:
      scale(1.04)
      rotate(3deg);

    border-radius: 35%;
  }

  82% {
    transform:
      scale(0.98)
      rotate(-1deg);

    border-radius: 27px;
  }

  100% {
    opacity: 1;

    transform:
      scale(1)
      rotate(0deg);

    border-radius: 24px;
  }
}


/* Icon spinning from center */

@keyframes crIconSpin {

  0% {
    opacity: 0;

    transform:
      scale(0)
      rotate(-360deg);
  }

  60% {
    opacity: 1;

    transform:
      scale(1.15)
      rotate(15deg);
  }

  100% {
    opacity: 1;

    transform:
      scale(1)
      rotate(0deg);
  }
}


/* Content comes after circular opening */

@keyframes crContentReveal {

  from {
    opacity: 0;

    transform:
      translateY(15px)
      scale(0.96);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}
  /* =========================================
   3D CAREER ROADMAP
========================================= */

.cr-roadmap-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 25px;

  overflow-y: auto;

  background:
    radial-gradient(
      circle at 50% 50%,
      rgba(124, 58, 237, 0.15),
      transparent 45%
    ),
    rgba(2, 6, 23, 0.88);

  backdrop-filter: blur(18px);

  perspective: 1600px;

  animation: roadmapOverlayIn 0.35s ease both;
}


/* =========================================
   MAIN 3D CONTAINER
========================================= */

.cr-3d-roadmap {
  position: relative;

  width: min(920px, 100%);
  max-height: 92vh;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 42px;

  border-radius: 32px;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(139, 92, 246, 0.18),
      transparent 38%
    ),
    linear-gradient(
      145deg,
      rgba(20, 28, 50, 0.99),
      rgba(8, 15, 31, 0.99)
    );

  box-shadow:
    0 60px 150px rgba(0, 0, 0, 0.7),
    0 0 100px rgba(124, 58, 237, 0.15),
    inset 0 1px rgba(255, 255, 255, 0.06);

  transform-style: preserve-3d;

  animation:
    roadmap3DOpen
    0.8s
    cubic-bezier(0.16, 1, 0.3, 1)
    both;

  scrollbar-width: thin;
  scrollbar-color: rgba(139, 92, 246, 0.4) transparent;
}

.cr-3d-roadmap::-webkit-scrollbar {
  width: 5px;
}

.cr-3d-roadmap::-webkit-scrollbar-track {
  background: transparent;
}

.cr-3d-roadmap::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.4);
  border-radius: 999px;
}


/* =========================================
   CLOSE
========================================= */

.cr-3d-close {
  position: sticky;
  top: 0;
  float: right;

  z-index: 20;

  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border: 0;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.06);

  color: #94a3b8;

  cursor: pointer;

  font-size: 25px;

  transition: 0.35s ease;

  box-shadow:
    0 5px 20px rgba(0, 0, 0, 0.25);
}

.cr-3d-close:hover {
  color: white;

  background: rgba(139, 92, 246, 0.25);

  transform:
    rotate(90deg)
    scale(1.12);

  box-shadow:
    0 0 25px rgba(139, 92, 246, 0.3);
}


/* =========================================
   DECORATIVE ORBS
========================================= */

.cr-orb {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(45px);

  opacity: 0.16;

  animation:
    roadmapOrbFloat
    6s
    ease-in-out
    infinite;
}

.cr-orb-one {
  width: 180px;
  height: 180px;

  top: 120px;
  right: -80px;

  background: #8b5cf6;
}

.cr-orb-two {
  width: 150px;
  height: 150px;

  bottom: 200px;
  left: -70px;

  background: #2563eb;

  animation-delay: -2s;
}

.cr-orb-three {
  width: 100px;
  height: 100px;

  top: 55%;
  right: 25%;

  background: #06b6d4;

  animation-delay: -4s;
}


/* =========================================
   HEADER
========================================= */

.cr-3d-header {
  position: relative;

  z-index: 2;

  text-align: center;

  max-width: 700px;

  margin: 0 auto 42px;
}

.cr-3d-icon-wrap {
  width: 110px;
  height: 110px;

  margin: 0 auto 20px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(139, 92, 246, 0.25),
      transparent 70%
    );

  box-shadow:
    0 0 70px rgba(124, 58, 237, 0.2);
}

.cr-3d-icon {
  width: 78px;
  height: 78px;

  display: grid;
  place-items: center;

  border-radius: 24px;

  background:
    linear-gradient(
      145deg,
      rgba(139, 92, 246, 0.3),
      rgba(37, 99, 235, 0.15)
    );

  font-size: 39px;

  box-shadow:
    0 18px 35px rgba(0, 0, 0, 0.35),
    inset 0 1px rgba(255, 255, 255, 0.1);

  transform-style: preserve-3d;

  animation:
    icon3DSpin
    1.2s
    cubic-bezier(0.16, 1, 0.3, 1)
    both;
}

.cr-3d-category {
  color: #a78bfa;

  font-size: 10px;

  font-weight: 900;

  letter-spacing: 2px;

  text-transform: uppercase;
}

.cr-3d-header h2 {
  margin: 8px 0 12px;

  color: #fff;

  font-size: clamp(30px, 5vw, 48px);

  line-height: 1.05;

  letter-spacing: -1.8px;
}

.cr-3d-header p {
  max-width: 650px;

  margin: 0 auto;

  color: #94a3b8;

  font-size: 14px;

  line-height: 1.8;
}

.cr-roadmap-status {
  width: fit-content;

  margin: 20px auto 0;

  padding: 8px 13px;

  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 999px;

  background: rgba(124, 58, 237, 0.09);

  color: #c4b5fd;

  font-size: 9px;

  font-weight: 900;

  letter-spacing: 1.4px;
}

.cr-status-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #8b5cf6;

  box-shadow:
    0 0 15px #8b5cf6;

  animation:
    statusPulse
    1.5s
    infinite;
}


/* =========================================
   DETAIL SECTION
========================================= */

.cr-detail-section {
  position: relative;

  z-index: 2;

  margin-top: 35px;

  padding: 25px;

  border-radius: 24px;

  background:
    linear-gradient(
      145deg,
      rgba(30, 41, 59, 0.55),
      rgba(15, 23, 42, 0.4)
    );

  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.035);
}

.cr-detail-heading {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 22px;
}

.cr-detail-heading > span {
  width: 45px;
  height: 45px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  border-radius: 14px;

  background: rgba(124, 58, 237, 0.13);

  font-size: 20px;
}

.cr-detail-heading small {
  color: #8b5cf6;

  font-size: 8px;

  font-weight: 900;

  letter-spacing: 1.5px;
}

.cr-detail-heading h3 {
  margin: 3px 0 0;

  color: #f8fafc;

  font-size: 19px;
}


/* =========================================
   SKILLS
========================================= */

.cr-detail-skills {
  display: flex;

  flex-wrap: wrap;

  gap: 9px;
}

.cr-detail-skill {
  display: flex;
  align-items: center;
  gap: 7px;

  padding: 10px 13px;

  border-radius: 11px;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.14),
      rgba(59, 130, 246, 0.07)
    );

  color: #c4b5fd;

  font-size: 11px;

  font-weight: 700;

  animation:
    skillIn
    0.5s
    ease
    both;
}

.cr-detail-skill span {
  color: #8b5cf6;

  font-weight: 900;
}


/* =========================================
   3D ROAD
========================================= */

.cr-3d-road {
  position: relative;

  padding: 5px 0 10px;
}

.cr-road-line {
  position: absolute;

  left: 31px;

  top: 35px;
  bottom: 35px;

  width: 3px;

  border-radius: 999px;

  background:
    rgba(139, 92, 246, 0.12);

  overflow: hidden;
}

.cr-road-line-fill {
  width: 100%;
  height: 100%;

  background:
    linear-gradient(
      180deg,
      #8b5cf6,
      #6366f1,
      #3b82f6,
      #06b6d4
    );

  transform-origin: top;

  animation:
    roadLineGrow
    1.8s
    cubic-bezier(0.16, 1, 0.3, 1)
    both;
}


/* =========================================
   ROAD STEP
========================================= */

.cr-3d-step {
  position: relative;

  display: grid;

  grid-template-columns: 64px 1fr;

  gap: 20px;

  margin-bottom: 22px;

  opacity: 0;

  animation:
    roadmapStepIn
    0.65s
    cubic-bezier(0.16, 1, 0.3, 1)
    forwards;

  animation-delay: var(--step-delay);
}


/* =========================================
   3D NODE
========================================= */

.cr-3d-node-area {
  position: relative;

  z-index: 5;

  display: flex;

  justify-content: center;
}

.cr-3d-node-shadow {
  position: absolute;

  width: 50px;
  height: 50px;

  top: 9px;

  border-radius: 50%;

  background: #8b5cf6;

  filter: blur(18px);

  opacity: 0.25;
}

.cr-3d-node {
  position: relative;

  width: 58px;
  height: 58px;

  display: grid;
  place-items: center;

  border-radius: 18px;

  background:
    linear-gradient(
      145deg,
      #312e81,
      #4c1d95
    );

  box-shadow:
    0 12px 25px rgba(0, 0, 0, 0.35),
    0 0 25px rgba(139, 92, 246, 0.18),
    inset 0 2px rgba(255, 255, 255, 0.12),
    inset 0 -5px rgba(0, 0, 0, 0.15);

  transform-style: preserve-3d;

  transition: 0.35s ease;
}

.cr-3d-node span {
  font-size: 22px;

  transform: translateZ(15px);
}

.cr-3d-node small {
  position: absolute;

  right: -7px;
  bottom: -7px;

  width: 22px;
  height: 22px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: #0f172a;

  color: #a78bfa;

  font-size: 7px;

  font-weight: 900;
}

.cr-3d-step:hover .cr-3d-node {
  transform:
    translateY(-5px)
    rotateY(12deg)
    rotateX(-8deg)
    scale(1.08);

  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(139, 92, 246, 0.3);
}


/* =========================================
   STEP CARD
========================================= */

.cr-step-card {
  position: relative;

  padding: 22px;

  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      rgba(30, 41, 59, 0.78),
      rgba(15, 23, 42, 0.7)
    );

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.16),
    inset 0 1px rgba(255, 255, 255, 0.04);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  transform-style: preserve-3d;
}

.cr-step-card::before {
  content: "";

  position: absolute;

  inset: 0;

  border-radius: inherit;

  padding: 1px;

  background:
    linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.35),
      transparent 45%,
      rgba(59, 130, 246, 0.18)
    );

  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);

  -webkit-mask-composite: xor;

  mask-composite: exclude;

  pointer-events: none;
}

.cr-step-card:hover {
  transform:
    translateX(6px)
    translateY(-3px)
    rotateX(1deg);

  box-shadow:
    0 25px 55px rgba(0, 0, 0, 0.28),
    0 0 35px rgba(124, 58, 237, 0.08);
}

.cr-step-top {
  display: flex;

  justify-content: space-between;

  gap: 15px;

  margin-bottom: 18px;
}

.cr-step-number {
  color: #8b5cf6;

  font-size: 8px;

  font-weight: 900;

  letter-spacing: 1.5px;
}

.cr-step-card h4 {
  margin: 4px 0 0;

  color: #fff;

  font-size: 18px;
}

.cr-step-arrow {
  color: #475569;

  font-size: 22px;

  transition: 0.3s ease;
}

.cr-step-card:hover .cr-step-arrow {
  color: #a78bfa;

  transform:
    translate(4px, -4px);
}


/* =========================================
   STEP INFORMATION
========================================= */

.cr-step-info {
  display: grid;

  grid-template-columns: 30px 1fr;

  gap: 9px;

  margin-top: 13px;

  padding-top: 13px;

  border-top: 1px solid rgba(148, 163, 184, 0.07);
}

.cr-step-info > span {
  width: 27px;
  height: 27px;

  display: grid;
  place-items: center;

  border-radius: 8px;

  background: rgba(124, 58, 237, 0.1);

  font-size: 13px;
}

.cr-step-info b {
  display: block;

  margin-bottom: 3px;

  color: #cbd5e1;

  font-size: 10px;
}

.cr-step-info p {
  margin: 0;

  color: #64748b;

  font-size: 11px;

  line-height: 1.65;
}

.cr-step-info.action b {
  color: #a78bfa;
}


/* =========================================
   GROWTH CARD
========================================= */

.cr-growth-card {
  position: relative;

  z-index: 2;

  display: flex;

  align-items: flex-start;

  gap: 17px;

  margin-top: 25px;

  padding: 23px;

  border-radius: 21px;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.15),
      rgba(37, 99, 235, 0.08)
    );

  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.04);
}

.cr-growth-icon {
  width: 48px;
  height: 48px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  border-radius: 14px;

  background:
    rgba(139, 92, 246, 0.16);

  font-size: 22px;

  animation:
    growthFloat
    2.5s
    ease-in-out
    infinite;
}

.cr-growth-card span {
  color: #8b5cf6;

  font-size: 8px;

  font-weight: 900;

  letter-spacing: 1.5px;
}

.cr-growth-card h3 {
  margin: 4px 0 7px;

  color: #fff;

  font-size: 17px;
}

.cr-growth-card p {
  margin: 0;

  color: #64748b;

  font-size: 11px;

  line-height: 1.7;
}


/* =========================================
   FOOTER
========================================= */

.cr-roadmap-footer {
  position: relative;

  z-index: 2;

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  margin-top: 25px;

  padding-top: 22px;

  border-top: 1px solid rgba(148, 163, 184, 0.08);
}

.cr-roadmap-footer > div {
  display: flex;

  align-items: center;

  gap: 11px;
}

.cr-footer-icon {
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border-radius: 12px;

  background: rgba(124, 58, 237, 0.12);

  font-size: 18px;
}

.cr-roadmap-footer small {
  display: block;

  color: #64748b;

  font-size: 7px;

  font-weight: 900;

  letter-spacing: 1.3px;
}

.cr-roadmap-footer strong {
  display: block;

  margin-top: 3px;

  color: #cbd5e1;

  font-size: 12px;
}

.cr-roadmap-footer button {
  display: flex;

  align-items: center;

  gap: 10px;

  padding: 12px 18px;

  border: 0;

  border-radius: 12px;

  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #4f46e5
    );

  color: #fff;

  cursor: pointer;

  font-size: 11px;

  font-weight: 800;

  box-shadow:
    0 10px 25px rgba(79, 70, 229, 0.25);

  transition: 0.3s ease;
}

.cr-roadmap-footer button:hover {
  transform:
    translateY(-3px)
    scale(1.03);

  box-shadow:
    0 15px 35px rgba(79, 70, 229, 0.35);
}

.cr-roadmap-footer button span {
  font-size: 17px;

  transition: 0.3s ease;
}

.cr-roadmap-footer button:hover span {
  transform: translateX(4px);
}


/* =========================================
   3D ANIMATIONS
========================================= */

@keyframes roadmapOverlayIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes roadmap3DOpen {
  0% {
    opacity: 0;

    transform:
      translateY(100px)
      scale(0.2)
      rotateX(55deg)
      rotateY(-25deg);

    border-radius: 50%;
  }

  35% {
    opacity: 1;

    transform:
      translateY(20px)
      scale(0.65)
      rotateX(25deg)
      rotateY(12deg);

    border-radius: 45%;
  }

  65% {
    transform:
      translateY(-5px)
      scale(1.03)
      rotateX(-5deg)
      rotateY(-4deg);

    border-radius: 30px;
  }

  100% {
    opacity: 1;

    transform:
      translateY(0)
      scale(1)
      rotateX(0)
      rotateY(0);

    border-radius: 32px;
  }
}

@keyframes icon3DSpin {
  0% {
    opacity: 0;

    transform:
      scale(0)
      rotateX(180deg)
      rotateY(-360deg);
  }

  60% {
    opacity: 1;

    transform:
      scale(1.15)
      rotateX(-10deg)
      rotateY(20deg);
  }

  100% {
    transform:
      scale(1)
      rotateX(0)
      rotateY(0);
  }
}

@keyframes roadLineGrow {
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
}

@keyframes roadmapStepIn {
  from {
    opacity: 0;

    transform:
      translateX(80px)
      translateZ(-100px)
      rotateY(-18deg)
      scale(0.9);
  }

  to {
    opacity: 1;

    transform:
      translateX(0)
      translateZ(0)
      rotateY(0)
      scale(1);
  }
}

@keyframes skillIn {
  from {
    opacity: 0;

    transform:
      translateY(10px)
      scale(0.8);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}

@keyframes roadmapOrbFloat {
  0%,
  100% {
    transform:
      translate3d(0, 0, 0)
      scale(1);
  }

  50% {
    transform:
      translate3d(20px, -25px, 0)
      scale(1.1);
  }
}

@keyframes growthFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

@keyframes statusPulse {
  0%,
  100% {
    opacity: 0.45;
    transform: scale(0.8);
  }

  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 760px) {

  .cr-roadmap-overlay {
    padding: 12px;
    align-items: center;
  }

  .cr-3d-roadmap {
    padding: 25px 18px;

    max-height: 94vh;

    border-radius: 25px;
  }

  .cr-3d-header {
    padding-top: 10px;
  }

  .cr-3d-icon-wrap {
    width: 90px;
    height: 90px;
  }

  .cr-3d-icon {
    width: 65px;
    height: 65px;

    font-size: 30px;
  }

  .cr-detail-section {
    padding: 18px;

    border-radius: 18px;
  }

  .cr-3d-step {
    grid-template-columns: 48px 1fr;

    gap: 10px;
  }

  .cr-road-line {
    left: 22px;
  }

  .cr-3d-node {
    width: 44px;
    height: 44px;

    border-radius: 14px;
  }

  .cr-3d-node span {
    font-size: 17px;
  }

  .cr-step-card {
    padding: 16px;
  }

  .cr-step-card h4 {
    font-size: 15px;
  }

  .cr-step-info p {
    font-size: 10px;
  }
}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 480px) {

  .cr-3d-roadmap {
    padding: 22px 12px;
  }

  .cr-3d-header h2 {
    font-size: 28px;
  }

  .cr-3d-header p {
    font-size: 12px;
  }

  .cr-detail-section {
    margin-top: 22px;

    padding: 14px;
  }

  .cr-detail-heading h3 {
    font-size: 16px;
  }

  .cr-3d-step {
    grid-template-columns: 38px 1fr;

    gap: 8px;
  }

  .cr-road-line {
    left: 18px;
  }

  .cr-3d-node {
    width: 36px;
    height: 36px;

    border-radius: 11px;
  }

  .cr-3d-node span {
    font-size: 14px;
  }

  .cr-3d-node small {
    width: 17px;
    height: 17px;

    right: -5px;
    bottom: -5px;

    font-size: 6px;
  }

  .cr-step-card {
    padding: 13px;
  }

  .cr-step-card h4 {
    font-size: 14px;
  }

  .cr-step-info {
    grid-template-columns: 25px 1fr;

    gap: 6px;
  }

  .cr-step-info > span {
    width: 23px;
    height: 23px;
  }

  .cr-step-info p {
    font-size: 9px;
  }

  .cr-growth-card {
    padding: 16px;

    gap: 10px;
  }

  .cr-roadmap-footer {
    flex-direction: column;

    align-items: stretch;
  }

  .cr-roadmap-footer button {
    justify-content: center;
  }
}
      `}</style>
    </section>
  );
}
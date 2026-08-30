// src/data/careers.js

export const careerStreams = [
  {
    id: 'science',
    name: 'Science (PCM / PCB)',
    icon: '🔬',
    color: '#3b82f6',
    description:
      'Science stream offers opportunities in Engineering, Medical, Architecture, Research, Technology and many other fields.',

    paths: [
      {
        id: 'engineering',
        title: 'Engineering',
        icon: '⚙️',
        description:
          'Interested in technology, machines and innovation? Engineering offers a wide range of technical career opportunities.',
        duration: '4 Years (B.Tech/B.E)',
        avgSalary: '₹4–12 LPA (Indicative)',
        topColleges: [
          {
            name: 'IIT Bombay',
            location: 'Mumbai, Maharashtra',
            ranking: 'Top Institute',
            established: '1958',
            website: 'https://www.iitb.ac.in',
            image: '/images/colleges/iit-bombay.png'
          },
          {
            name: 'IIT Delhi',
            location: 'New Delhi',
            ranking: 'Top Institute',
            established: '1961',
            website: 'https://home.iitd.ac.in',
            image: '/images/colleges/iit-delhi.png'
          },
          {
            name: 'NIT Trichy',
            location: 'Tiruchirappalli, Tamil Nadu',
            ranking: 'Top Institute',
            established: '1964',
            website: 'https://www.nitt.edu',
            image: '/images/colleges/nit-trichy.png'
          },
          {
            name: 'BITS Pilani',
            location: 'Pilani, Rajasthan',
            ranking: 'Top Institute',
            established: '1964',
            website: 'https://www.bits-pilani.ac.in',
            image: '/images/colleges/bits-pilani.png'
          },
          {
            name: 'VIT Vellore',
            location: 'Vellore, Tamil Nadu',
            ranking: 'Popular Private Institute',
            established: '1984',
            website: 'https://vit.ac.in',
            image: '/images/colleges/vit-vellore.png'
          }
        ],
        entranceExams: [
          'JEE Main',
          'JEE Advanced',
          'BITSAT',
          'State Engineering Entrance Exams'
        ],
        specializations: [
          'Computer Science',
          'Mechanical',
          'Electrical',
          'Civil',
          'Aerospace',
          'Biotechnology'
        ],
        skills: [
          'Mathematics',
          'Problem Solving',
          'Logical Thinking',
          'Technical Knowledge'
        ],
        scope:
          'IT Companies, Manufacturing, Construction, R&D, Government PSUs, Startups',
        pros: [
          'High career flexibility',
          'Many job roles',
          'Global opportunities'
        ],
        cons: [
          'Competitive entrance exams',
          'Rigorous academic workload',
          'Initial job competition'
        ]
      },

      {
        id: 'medical',
        title: 'Medical (MBBS/BDS)',
        icon: '🩺',
        description:
          'Interested in healthcare and helping people? Explore careers in medicine and healthcare.',
        duration: '5.5 Years (MBBS) / 4 Years (BDS)',
        avgSalary: 'Varies by role and experience',
        topColleges: [
          {
            name: 'AIIMS New Delhi',
            location: 'New Delhi',
            ranking: 'Top Medical Institute',
            established: '1956',
            website: 'https://www.aiims.edu',
            image: '/images/colleges/aiims-delhi.png'
          },
          {
            name: 'CMC Vellore',
            location: 'Vellore, Tamil Nadu',
            ranking: 'Top Medical Institute',
            established: '1900',
            website: 'https://www.cmch-vellore.edu',
            image: '/images/colleges/cmc-vellore.png'
          },
          {
            name: 'AFMC Pune',
            location: 'Pune, Maharashtra',
            ranking: 'Top Medical Institute',
            established: '1948',
            website: 'https://afmc.nic.in',
            image: '/images/colleges/aiims-delhi.png'
          },
          {
            name: 'Maulana Azad Medical College',
            location: 'New Delhi',
            ranking: 'Top Medical Institute',
            established: '1958',
            website: 'https://mamc.delhi.gov.in',
            image: '/images/colleges/aiims-delhi.png'
          },
          {
            name: 'KGMU Lucknow',
            location: 'Lucknow, Uttar Pradesh',
            ranking: 'Top Medical Institute',
            established: '1905',
            website: 'https://www.kgmu.org',
            image: '/images/colleges/cmc-vellore.png'
          }
        ],
        entranceExams: ['NEET-UG'],
        specializations: [
          'General Medicine',
          'Surgery',
          'Pediatrics',
          'Cardiology',
          'Dermatology',
          'Orthopedics'
        ],
        skills: [
          'Biology',
          'Patience',
          'Communication',
          'Empathy',
          'Scientific Temperament'
        ],
        scope:
          'Hospitals, Private Practice, Research, Pharmaceuticals, Government Health Services',
        pros: [
          'Meaningful profession',
          'Wide career options',
          'Healthcare demand'
        ],
        cons: [
          'Long study duration',
          'High competition',
          'Demanding work environment'
        ]
      },

      {
        id: 'architecture',
        title: 'Architecture (B.Arch)',
        icon: '🏗️',
        description:
          'Passionate about design, creativity and buildings? Architecture can be a strong career path.',
        duration: '5 Years',
        avgSalary: '₹3–8 LPA (Indicative)',
        topColleges: [
          {
            name: 'IIT Kharagpur',
            location: 'Kharagpur, West Bengal',
            ranking: 'Top Institute',
            established: '1951',
            website: 'https://www.iitkgp.ac.in',
            image: '/images/colleges/iit-bombay.png'
          },
          {
            name: 'School of Planning and Architecture Delhi',
            location: 'New Delhi',
            ranking: 'Top Institute',
            established: '1941',
            website: 'https://spa.ac.in',
            image: '/images/colleges/iit-delhi.png'
          },
          {
            name: 'IIT Roorkee',
            location: 'Roorkee, Uttarakhand',
            ranking: 'Top Institute',
            established: '1847',
            website: 'https://www.iitr.ac.in',
            image: '/images/colleges/iit-roorkee.png'
          },
          {
            name: 'NIT Calicut',
            location: 'Kozhikode, Kerala',
            ranking: 'Top Institute',
            established: '1961',
            website: 'https://nitc.ac.in',
            image: '/images/colleges/nit-trichy.png'
          },
          {
            name: 'Sir JJ College of Architecture',
            location: 'Mumbai, Maharashtra',
            ranking: 'Established Institute',
            established: '1857',
            website: 'https://www.sirjjuniv.in',
            image: '/images/colleges/iit-bombay.png'
          }
        ],
        entranceExams: ['NATA', 'JEE Main Paper 2'],
        specializations: [
          'Architecture',
          'Urban Planning',
          'Landscape Architecture',
          'Interior Design',
          'Sustainable Architecture'
        ],
        skills: [
          'Drawing',
          'Creativity',
          'Mathematics',
          'Visualization',
          'Technical Knowledge'
        ],
        scope:
          'Architecture Firms, Real Estate, Urban Planning, Government Departments, Freelancing',
        pros: [
          'Creative career',
          'Freelance opportunities',
          'Project-based work'
        ],
        cons: [
          'Long working hours',
          'Project deadlines',
          'Initial competition'
        ]
      },

      {
        id: 'pure-science',
        title: 'Pure Sciences (B.Sc)',
        icon: '🧪',
        description:
          'Interested in research, experiments and discovery? Explore Physics, Chemistry, Mathematics, Biology and other sciences.',
        duration: '3 Years (B.Sc) / 5 Years (Integrated M.Sc)',
        avgSalary: '₹3–7 LPA (Indicative)',
        topColleges: [
          {
            name: 'IISc Bangalore',
            location: 'Bangalore, Karnataka',
            ranking: 'Top Research Institute',
            established: '1909',
            website: 'https://iisc.ac.in',
            image: '/images/colleges/iisc-bangalore.png'
          },
          {
            name: 'IIT Bombay',
            location: 'Mumbai, Maharashtra',
            ranking: 'Top Institute',
            established: '1958',
            website: 'https://www.iitb.ac.in',
            image: '/images/colleges/iit-bombay.png'
          },
          {
            name: 'University of Delhi',
            location: 'New Delhi',
            ranking: 'Leading University',
            established: '1922',
            website: 'https://www.du.ac.in',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'BHU Varanasi',
            location: 'Varanasi, Uttar Pradesh',
            ranking: 'Leading University',
            established: '1916',
            website: 'https://www.bhu.ac.in',
            image: '/images/colleges/bhu-varanasi.png'
          },
          {
            name: 'University of Hyderabad',
            location: 'Hyderabad, Telangana',
            ranking: 'Leading University',
            established: '1974',
            website: 'https://uohyd.ac.in',
            image: '/images/colleges/iisc-bangalore.png'
          }
        ],
        entranceExams: [
          'IAT',
          'CUET-UG',
          'University-specific admissions'
        ],
        specializations: [
          'Physics',
          'Chemistry',
          'Mathematics',
          'Biology',
          'Statistics',
          'Geology'
        ],
        skills: [
          'Research Mindset',
          'Analytical Skills',
          'Lab Work',
          'Data Analysis'
        ],
        scope:
          'Research Labs, Teaching, Data Science, Pharmaceuticals, Space Research, Higher Education',
        pros: [
          'Research opportunities',
          'Teaching career',
          'PhD opportunities'
        ],
        cons: [
          'Higher studies may be required',
          'Initial salary can be moderate',
          'Academic path can be long'
        ]
      },

      {
        id: 'pharmacy',
        title: 'Pharmacy (B.Pharm)',
        icon: '💊',
        description:
          'Interested in medicines, healthcare and pharmaceutical science? Explore Pharmacy.',
        duration: '4 Years',
        avgSalary: '₹3–7 LPA (Indicative)',
        topColleges: [
          {
            name: 'NIPER Mohali',
            location: 'Mohali, Punjab',
            ranking: 'Top Institute',
            established: '1998',
            website: 'https://www.niper.ac.in',
            image: '/images/colleges/bits-pilani.png'
          },
          {
            name: 'BITS Pilani',
            location: 'Pilani, Rajasthan',
            ranking: 'Top Institute',
            established: '1964',
            website: 'https://www.bits-pilani.ac.in',
            image: '/images/colleges/bits-pilani.png'
          },
          {
            name: 'Manipal College of Pharmaceutical Sciences',
            location: 'Manipal, Karnataka',
            ranking: 'Established Institute',
            established: '1963',
            website: 'https://www.manipal.edu',
            image: '/images/colleges/cmc-vellore.png'
          },
          {
            name: 'Jamia Hamdard',
            location: 'New Delhi',
            ranking: 'Established Institute',
            established: '1989',
            website: 'https://www.jamiahamdard.edu',
            image: '/images/colleges/aiims-delhi.png'
          },
          {
            name: 'ICT Mumbai',
            location: 'Mumbai, Maharashtra',
            ranking: 'Top Institute',
            established: '1933',
            website: 'https://www.ictmumbai.edu.in',
            image: '/images/colleges/iit-bombay.png'
          }
        ],
        entranceExams: [
          'State Pharmacy Entrance Exams',
          'University-specific admissions'
        ],
        specializations: [
          'Pharmaceutics',
          'Pharmacology',
          'Clinical Pharmacy',
          'Industrial Pharmacy'
        ],
        skills: [
          'Chemistry',
          'Biology',
          'Attention to Detail',
          'Communication'
        ],
        scope:
          'Pharma Companies, Hospitals, Retail Pharmacy, Regulatory Affairs, Research',
        pros: [
          'Growing healthcare industry',
          'Multiple career paths',
          'Entrepreneurship opportunities'
        ],
        cons: [
          'Regulatory requirements',
          'Entry-level competition',
          'Some roles involve shift work'
        ]
      },

      {
        id: 'aviation',
        title: 'Aviation & Pilot',
        icon: '✈️',
        description:
          'Dream of flying? Explore commercial aviation and pilot training.',
        duration: 'Approximately 2–3 Years for CPL training',
        avgSalary: 'Varies significantly by airline and experience',
        topColleges: [
          {
            name: 'Indira Gandhi Institute of Aeronautics / IGRUA',
            location: 'Raebareli, Uttar Pradesh',
            ranking: 'Established Training Institute',
            established: '1985',
            website: 'https://igrua.gov.in',
            image: '/images/colleges/nda-khadakwasla.png'
          },
          {
            name: 'CAE Aviation Academy',
            location: 'India',
            ranking: 'Professional Training Provider',
            established: 'Global',
            website: 'https://www.cae.com',
            image: '/images/colleges/nda-khadakwasla.png'
          },
          {
            name: 'Chimes Aviation Academy',
            location: 'Hisar, Haryana',
            ranking: 'Flight Training Provider',
            established: '2007',
            website: 'https://www.chimesaviation.com',
            image: '/images/colleges/ima-dehradun.png'
          },
          {
            name: 'NFTI',
            location: 'Gondia, Maharashtra',
            ranking: 'Flight Training Provider',
            established: '2006',
            website: 'https://www.nfti.ac.in',
            image: '/images/colleges/nda-khadakwasla.png'
          }
        ],
        entranceExams: [
          'DGCA CPL Requirements',
          'DGCA Medical Requirements',
          'Airline Selection Tests'
        ],
        specializations: [
          'Commercial Pilot',
          'Aircraft Maintenance',
          'Air Traffic Control',
          'Aeronautical Engineering'
        ],
        skills: [
          'Spatial Awareness',
          'Decision Making',
          'Communication',
          'Discipline'
        ],
        scope:
          'Airlines, Cargo Services, Charter Services, Government Aviation',
        pros: [
          'Specialized career',
          'Travel opportunities',
          'Strong career growth with experience'
        ],
        cons: [
          'Training can be expensive',
          'Medical requirements',
          'Irregular working hours'
        ]
      }
    ]
  },

  // =========================================================
  // COMMERCE
  // =========================================================

  {
    id: 'commerce',
    name: 'Commerce',
    icon: '💼',
    color: '#10b981',
    description:
      'Interested in business, finance, accounting, economics and management? Explore Commerce careers.',

    paths: [
      {
        id: 'ca',
        title: 'Chartered Accountant (CA)',
        icon: '📊',
        description:
          'Interested in accounting, taxation, auditing and finance? CA is a professional career in financial management.',
        duration: 'Varies depending on completion of stages',
        avgSalary: '₹6–25 LPA (Indicative)',
        topColleges: [
          {
            name: 'ICAI',
            location: 'New Delhi',
            ranking: 'Professional Body',
            established: '1949',
            website: 'https://www.icai.org',
            image: '/images/colleges/iim-ahmedabad.png'
          },
          {
            name: 'ICAI Regional Offices',
            location: 'Multiple Cities',
            ranking: 'Professional Education',
            established: '1949',
            website: 'https://www.icai.org',
            image: '/images/colleges/xlri-jamshedpur.png'
          }
        ],
        entranceExams: ['CA Foundation'],
        stages: [
          'CA Foundation',
          'CA Intermediate',
          'Articleship / Practical Training',
          'CA Final'
        ],
        specializations: [
          'Audit',
          'Taxation',
          'Financial Management',
          'Corporate Law'
        ],
        skills: [
          'Accounting',
          'Analytical Skills',
          'Attention to Detail',
          'Ethics'
        ],
        scope:
          'Audit Firms, Corporates, Banks, Tax Consulting, Financial Services, Own Practice',
        pros: [
          'Professional qualification',
          'Multiple career paths',
          'Own practice possible'
        ],
        cons: [
          'Difficult examinations',
          'Requires sustained preparation',
          'Competitive qualification process'
        ]
      },

      {
        id: 'mba',
        title: 'MBA / BBA',
        icon: '📈',
        description:
          'Interested in business management, leadership and strategy? Explore BBA and MBA pathways.',
        duration: '3 Years (BBA) / Usually 2 Years (MBA)',
        avgSalary: '₹6–35 LPA (Highly variable)',
        topColleges: [
          {
            name: 'IIM Ahmedabad',
            location: 'Ahmedabad, Gujarat',
            ranking: 'Top Management Institute',
            established: '1961',
            website: 'https://www.iima.ac.in',
            image: '/images/colleges/iim-ahmedabad.png'
          },
          {
            name: 'IIM Bangalore',
            location: 'Bangalore, Karnataka',
            ranking: 'Top Management Institute',
            established: '1973',
            website: 'https://www.iimb.ac.in',
            image: '/images/colleges/iim-bangalore.png'
          },
          {
            name: 'IIM Calcutta',
            location: 'Kolkata, West Bengal',
            ranking: 'Top Management Institute',
            established: '1961',
            website: 'https://www.iimcal.ac.in',
            image: '/images/colleges/iim-calcutta.png'
          },
          {
            name: 'XLRI Jamshedpur',
            location: 'Jamshedpur, Jharkhand',
            ranking: 'Top Management Institute',
            established: '1949',
            website: 'https://xlri.ac.in',
            image: '/images/colleges/xlri-jamshedpur.png'
          },
          {
            name: 'FMS Delhi',
            location: 'New Delhi',
            ranking: 'Leading Management School',
            established: '1954',
            website: 'https://fms.edu',
            image: '/images/colleges/du-delhi.png'
          }
        ],
        entranceExams: [
          'CAT',
          'XAT',
          'CMAT',
          'MAT',
          'SNAP',
          'NMAT'
        ],
        specializations: [
          'Finance',
          'Marketing',
          'HR',
          'Operations',
          'Consulting',
          'Business Analytics'
        ],
        skills: [
          'Leadership',
          'Communication',
          'Strategic Thinking',
          'Teamwork'
        ],
        scope:
          'MNCs, Startups, Consulting Firms, Banks, E-commerce, Technology Companies',
        pros: [
          'Many management roles',
          'Networking opportunities',
          'Career flexibility'
        ],
        cons: [
          'Top colleges are competitive',
          'MBA fees can be high',
          'Work pressure can be significant'
        ]
      },

      {
        id: 'cs',
        title: 'Company Secretary (CS)',
        icon: '📋',
        description:
          'Interested in corporate law, governance and compliance? Explore the Company Secretary profession.',
        duration: 'Varies by entry route and completion',
        avgSalary: '₹5–16 LPA (Indicative)',
        topColleges: [
          {
            name: 'ICSI',
            location: 'New Delhi',
            ranking: 'Professional Body',
            established: '1968',
            website: 'https://www.icsi.edu',
            image: '/images/colleges/nlsiu-bangalore.png'
          }
        ],
        entranceExams: ['CSEET'],
        stages: [
          'CSEET',
          'CS Executive',
          'Practical Training',
          'CS Professional'
        ],
        specializations: [
          'Corporate Governance',
          'Company Law',
          'Securities Law',
          'Compliance'
        ],
        skills: [
          'Law',
          'Communication',
          'Compliance Knowledge',
          'Analytical Skills'
        ],
        scope:
          'Corporates, Law Firms, Banks, Regulatory Bodies, Consultancy',
        pros: [
          'Corporate career options',
          'Professional qualification',
          'Growing compliance requirements'
        ],
        cons: [
          'Examinations are demanding',
          'Long qualification journey',
          'Requires strong legal understanding'
        ]
      },

      {
        id: 'cma',
        title: 'Cost & Management Accountant (CMA)',
        icon: '💰',
        description:
          'Interested in cost management, budgeting and financial planning? CMA can be a good professional pathway.',
        duration: 'Varies by completion of stages',
        avgSalary: '₹5–12 LPA (Indicative)',
        topColleges: [
          {
            name: 'ICMAI',
            location: 'Kolkata, West Bengal',
            ranking: 'Professional Body',
            established: '1959',
            website: 'https://www.icmai.in',
            image: '/images/colleges/iim-calcutta.png'
          },
          {
            name: 'ICMAI Delhi',
            location: 'New Delhi',
            ranking: 'Professional Education',
            established: '1959',
            website: 'https://www.icmai.in',
            image: '/images/colleges/du-delhi.png'
          }
        ],
        entranceExams: ['CMA Foundation'],
        stages: [
          'CMA Foundation',
          'CMA Intermediate',
          'Practical Training',
          'CMA Final'
        ],
        specializations: [
          'Cost Accounting',
          'Management Accounting',
          'Budgeting',
          'Strategic Management'
        ],
        skills: [
          'Cost Analysis',
          'Budgeting',
          'Financial Planning',
          'Excel'
        ],
        scope:
          'Manufacturing, IT, Consulting, Banks, Government, Financial Management',
        pros: [
          'Industry applications',
          'Multiple roles',
          'Professional qualification'
        ],
        cons: [
          'Demanding examinations',
          'Long qualification process',
          'Requires consistent preparation'
        ]
      },

      {
        id: 'banking',
        title: 'Banking & Finance',
        icon: '🏦',
        description:
          'Interested in banking, investment, finance and financial services? Explore this career path.',
        duration: '3 Years degree + optional postgraduate/professional qualification',
        avgSalary: '₹4–10 LPA (Indicative)',
        topColleges: [
          {
            name: 'University of Delhi',
            location: 'New Delhi',
            ranking: 'Leading University',
            established: '1922',
            website: 'https://www.du.ac.in',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: "St. Xavier's College Mumbai",
            location: 'Mumbai, Maharashtra',
            ranking: 'Established College',
            established: '1869',
            website: 'https://xaviers.ac',
            image: '/images/colleges/iit-bombay.png'
          },
          {
            name: 'Christ University',
            location: 'Bangalore, Karnataka',
            ranking: 'Established University',
            established: '1969',
            website: 'https://christuniversity.in',
            image: '/images/colleges/iisc-bangalore.png'
          },
          {
            name: 'Symbiosis',
            location: 'Pune, Maharashtra',
            ranking: 'Established Institution',
            established: '1971',
            website: 'https://www.symbiosis.ac.in',
            image: '/images/colleges/nlsiu-bangalore.png'
          }
        ],
        entranceExams: [
          'IBPS PO',
          'SBI PO',
          'RBI Grade B',
          'CAT',
          'University Admissions'
        ],
        specializations: [
          'Investment Banking',
          'Retail Banking',
          'Risk Management',
          'Wealth Management'
        ],
        skills: [
          'Financial Analysis',
          'Customer Service',
          'Risk Assessment',
          'Communication'
        ],
        scope:
          'Public Banks, Private Banks, NBFCs, Insurance, Investment Firms',
        pros: [
          'Multiple career paths',
          'Professional growth',
          'Financial sector opportunities'
        ],
        cons: [
          'Target pressure in some roles',
          'Customer-facing stress',
          'Transfers in some government roles'
        ]
      },

      {
        id: 'economics',
        title: 'Economics (B.A/B.Sc Economics)',
        icon: '📉',
        description:
          'Interested in markets, economic policy and data analysis? Study Economics.',
        duration: '3 Years (Bachelor) / 2 Years (Master)',
        avgSalary: '₹4–10 LPA (Indicative)',
        topColleges: [
          {
            name: 'Delhi School of Economics',
            location: 'New Delhi',
            ranking: 'Leading Economics Institution',
            established: '1949',
            website: 'https://econdse.org',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'JNU Delhi',
            location: 'New Delhi',
            ranking: 'Leading University',
            established: '1969',
            website: 'https://www.jnu.ac.in',
            image: '/images/colleges/jnu-delhi.png'
          },
          {
            name: "St. Stephen's College",
            location: 'New Delhi',
            ranking: 'Established College',
            established: '1881',
            website: 'https://www.ststephens.edu',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'Loyola College',
            location: 'Chennai, Tamil Nadu',
            ranking: 'Established College',
            established: '1925',
            website: 'https://www.loyolacollege.edu',
            image: '/images/colleges/nit-trichy.png'
          }
        ],
        entranceExams: [
          'CUET-UG',
          'University-specific admissions'
        ],
        specializations: [
          'Development Economics',
          'Financial Economics',
          'Econometrics',
          'Policy Analysis'
        ],
        skills: [
          'Data Analysis',
          'Research',
          'Statistics',
          'Critical Thinking'
        ],
        scope:
          'Research Institutes, Banks, Government, NGOs, Consulting, Policy',
        pros: [
          'Research opportunities',
          'Policy-related careers',
          'Diverse career options'
        ],
        cons: [
          'Higher studies can improve opportunities',
          'Strong quantitative skills may be required',
          'Competitive roles'
        ]
      }
    ]
  },

  // =========================================================
  // ARTS / HUMANITIES
  // =========================================================

  {
    id: 'arts',
    name: 'Arts / Humanities',
    icon: '🎨',
    color: '#f59e0b',
    description:
      'Explore careers in Law, Design, Psychology, Journalism, Civil Services, Social Sciences and Humanities.',

    paths: [
      {
        id: 'law',
        title: 'Law',
        icon: '⚖️',
        description:
          'Interested in justice, legal systems and argumentation? Explore a career in Law.',
        duration: '5 Years (Integrated Law) / 3 Years LLB after graduation',
        avgSalary: '₹4–20+ LPA (Highly variable)',
        topColleges: [
          {
            name: 'NLU Delhi',
            location: 'New Delhi',
            ranking: 'Top Law University',
            established: '2008',
            website: 'https://nludelhi.ac.in',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'NLSIU Bangalore',
            location: 'Bangalore, Karnataka',
            ranking: 'Top Law University',
            established: '1986',
            website: 'https://www.nls.ac.in',
            image: '/images/colleges/nlsiu-bangalore.png'
          },
          {
            name: 'NALSAR Hyderabad',
            location: 'Hyderabad, Telangana',
            ranking: 'Top Law University',
            established: '1998',
            website: 'https://nalsar.ac.in',
            image: '/images/colleges/nlsiu-bangalore.png'
          },
          {
            name: 'NUJS Kolkata',
            location: 'Kolkata, West Bengal',
            ranking: 'Top Law University',
            established: '1999',
            website: 'https://www.nujs.edu',
            image: '/images/colleges/iim-calcutta.png'
          },
          {
            name: 'Symbiosis Law School',
            location: 'Pune, Maharashtra',
            ranking: 'Established Law School',
            established: '1977',
            website: 'https://www.sls.pune.edu.in',
            image: '/images/colleges/nlsiu-bangalore.png'
          }
        ],
        entranceExams: [
          'CLAT',
          'AILET',
          'University-specific Law Entrance Exams'
        ],
        specializations: [
          'Corporate Law',
          'Criminal Law',
          'Civil Law',
          'Intellectual Property Law',
          'Constitutional Law'
        ],
        skills: [
          'Argumentation',
          'Research',
          'Communication',
          'Logical Reasoning'
        ],
        scope:
          'Law Firms, Courts, Corporates, NGOs, Government, Legal Consultancy',
        pros: [
          'Wide career options',
          'Strong communication skills',
          'Potential for high growth'
        ],
        cons: [
          'Competitive field',
          'Initial career may take time to establish',
          'Requires strong research skills'
        ]
      },

      {
        id: 'journalism',
        title: 'Journalism & Mass Communication',
        icon: '📰',
        description:
          'Interested in news, media, communication and storytelling? Explore Journalism and Mass Communication.',
        duration: '3 Years (Bachelor) / 2 Years (Master)',
        avgSalary: '₹3–8 LPA (Indicative)',
        topColleges: [
          {
            name: 'Indian Institute of Mass Communication',
            location: 'New Delhi',
            ranking: 'Leading Media Institute',
            established: '1965',
            website: 'https://iimc.gov.in',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'Xavier Institute of Communications',
            location: 'Mumbai, Maharashtra',
            ranking: 'Established Media Institute',
            established: '1969',
            website: 'https://xaviercomm.org',
            image: '/images/colleges/iit-bombay.png'
          },
          {
            name: 'Symbiosis Institute of Media',
            location: 'Pune, Maharashtra',
            ranking: 'Established Institute',
            established: '1971',
            website: 'https://www.symbiosis.ac.in',
            image: '/images/colleges/nlsiu-bangalore.png'
          },
          {
            name: 'Jamia Millia Islamia',
            location: 'New Delhi',
            ranking: 'Leading University',
            established: '1920',
            website: 'https://www.jmi.ac.in',
            image: '/images/colleges/jnu-delhi.png'
          },
          {
            name: 'Lady Shri Ram College',
            location: 'New Delhi',
            ranking: 'Established College',
            established: '1956',
            website: 'https://lsr.edu.in',
            image: '/images/colleges/du-delhi.png'
          }
        ],
        entranceExams: [
          'CUET-UG',
          'Institute-specific admissions'
        ],
        specializations: [
          'Print Media',
          'Electronic Media',
          'Digital Media',
          'Public Relations',
          'Advertising'
        ],
        skills: [
          'Writing',
          'Communication',
          'Research',
          'Creativity',
          'Current Affairs'
        ],
        scope:
          'News Channels, Newspapers, Digital Media, PR Agencies, Corporate Communications',
        pros: [
          'Dynamic industry',
          'Creative opportunities',
          'Multiple media formats'
        ],
        cons: [
          'Irregular working hours',
          'Entry-level competition',
          'Income varies significantly by role'
        ]
      },

      {
        id: 'design',
        title: 'Design (Fashion / Graphic / Interior)',
        icon: '🎭',
        description:
          'Love visual creativity? Explore fashion, graphic, product, interior and UX/UI design.',
        duration: '3–4 Years',
        avgSalary: '₹3–8 LPA (Indicative)',
        topColleges: [
          {
            name: 'NID Ahmedabad',
            location: 'Ahmedabad, Gujarat',
            ranking: 'Leading Design Institute',
            established: '1961',
            website: 'https://www.nid.edu',
            image: '/images/colleges/nid-ahmedabad.png'
          },
          {
            name: 'NIFT Delhi',
            location: 'New Delhi',
            ranking: 'Leading Fashion Institute',
            established: '1986',
            website: 'https://www.nift.ac.in',
            image: '/images/colleges/nift-delhi.png'
          },
          {
            name: 'Pearl Academy',
            location: 'New Delhi',
            ranking: 'Private Design Institute',
            established: '1993',
            website: 'https://www.pearlacademy.com',
            image: '/images/colleges/nift-delhi.png'
          },
          {
            name: 'Srishti Manipal Institute',
            location: 'Bangalore, Karnataka',
            ranking: 'Design Institute',
            established: '1996',
            website: 'https://srishtimanipalinstitute.in',
            image: '/images/colleges/iisc-bangalore.png'
          },
          {
            name: 'IIT Bombay IDC',
            location: 'Mumbai, Maharashtra',
            ranking: 'Leading Design Department',
            established: '1958',
            website: 'https://www.idc.iitb.ac.in',
            image: '/images/colleges/iit-bombay.png'
          }
        ],
        entranceExams: [
          'NID DAT',
          'NIFT Entrance',
          'UCEED',
          'Institute-specific exams'
        ],
        specializations: [
          'Graphic Design',
          'Fashion Design',
          'Interior Design',
          'Product Design',
          'UX/UI Design'
        ],
        skills: [
          'Creativity',
          'Design Software',
          'Visualization',
          'Trend Awareness',
          'Portfolio Building'
        ],
        scope:
          'Design Studios, Fashion Houses, IT Companies, Advertising, Product Companies, Freelance',
        pros: [
          'Creative freedom',
          'Freelance opportunities',
          'Growing digital design demand'
        ],
        cons: [
          'Portfolio competition',
          'Continuous learning',
          'Income varies by experience'
        ]
      },

      {
        id: 'hotel-management',
        title: 'Hotel Management',
        icon: '🏨',
        description:
          'Interested in hospitality, travel, food and service? Explore Hotel Management.',
        duration: '3–4 Years',
        avgSalary: '₹3–7 LPA (Indicative)',
        topColleges: [
          {
            name: 'IHM Pusa Delhi',
            location: 'New Delhi',
            ranking: 'Leading Hospitality Institute',
            established: '1962',
            website: 'https://ihmpusa.net',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'IHM Mumbai',
            location: 'Mumbai, Maharashtra',
            ranking: 'Established Hospitality Institute',
            established: '1954',
            website: 'https://www.ihmctan.edu',
            image: '/images/colleges/iit-bombay.png'
          },
          {
            name: 'Welcomgroup Graduate School',
            location: 'Manipal, Karnataka',
            ranking: 'Hospitality Institute',
            established: '1991',
            website: 'https://www.manipal.edu',
            image: '/images/colleges/cmc-vellore.png'
          },
          {
            name: 'Oberoi Centre of Learning',
            location: 'New Delhi',
            ranking: 'Hospitality Training',
            established: '1966',
            website: 'https://www.oberoihotels.com',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'Christ University',
            location: 'Bangalore, Karnataka',
            ranking: 'Established University',
            established: '1969',
            website: 'https://christuniversity.in',
            image: '/images/colleges/iisc-bangalore.png'
          }
        ],
        entranceExams: [
          'NCHM JEE',
          'Institute-specific admissions'
        ],
        specializations: [
          'Food & Beverage',
          'Front Office',
          'Housekeeping',
          'Event Management',
          'Culinary Arts'
        ],
        skills: [
          'Communication',
          'Customer Service',
          'Multitasking',
          'Teamwork'
        ],
        scope:
          'Hotels, Resorts, Airlines, Cruise Lines, Event Management, Restaurants',
        pros: [
          'Global opportunities',
          'Hospitality industry exposure',
          'Travel opportunities'
        ],
        cons: [
          'Long working hours',
          'Weekend/holiday work',
          'Customer-facing pressure'
        ]
      },

      {
        id: 'psychology',
        title: 'Psychology',
        icon: '🧠',
        description:
          'Interested in human behaviour, mental processes and research? Explore Psychology.',
        duration: '3 Years Bachelor / 2 Years Master',
        avgSalary: '₹3–8 LPA (Indicative)',
        topColleges: [
          {
            name: 'University of Delhi',
            location: 'New Delhi',
            ranking: 'Leading University',
            established: '1922',
            website: 'https://www.du.ac.in',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'Christ University',
            location: 'Bangalore, Karnataka',
            ranking: 'Established University',
            established: '1969',
            website: 'https://christuniversity.in',
            image: '/images/colleges/iisc-bangalore.png'
          },
          {
            name: 'Tata Institute of Social Sciences',
            location: 'Mumbai, Maharashtra',
            ranking: 'Leading Social Sciences Institute',
            established: '1936',
            website: 'https://tiss.edu',
            image: '/images/colleges/iit-bombay.png'
          },
          {
            name: 'Ambedkar University Delhi',
            location: 'New Delhi',
            ranking: 'Public University',
            established: '2008',
            website: 'https://aud.delhi.gov.in',
            image: '/images/colleges/jnu-delhi.png'
          },
          {
            name: 'Ashoka University',
            location: 'Sonepat, Haryana',
            ranking: 'Private University',
            established: '2014',
            website: 'https://www.ashoka.edu.in',
            image: '/images/colleges/du-delhi.png'
          }
        ],
        entranceExams: [
          'CUET-UG',
          'University-specific admissions'
        ],
        specializations: [
          'Clinical Psychology',
          'Counselling',
          'Organizational Psychology',
          'Child Psychology'
        ],
        skills: [
          'Empathy',
          'Listening',
          'Research',
          'Communication',
          'Patience'
        ],
        scope:
          'Hospitals, Schools, Corporates, NGOs, Research, Counselling Services',
        pros: [
          'People-focused career',
          'Multiple specializations',
          'Growing awareness of psychology'
        ],
        cons: [
          'Higher studies may be required',
          'Career path varies by specialization',
          'Emotionally demanding roles'
        ]
      },

      {
        id: 'civil-services',
        title: 'Civil Services (IAS / IPS / IFS)',
        icon: '🏛️',
        description:
          'Interested in public administration and serving society? Explore Civil Services.',
        duration: 'Graduation + UPSC preparation',
        avgSalary: 'Government pay scale; varies by post and level',
        topColleges: [
          {
            name: 'Vajiram & Ravi',
            location: 'New Delhi',
            ranking: 'Civil Services Coaching',
            established: '1976',
            website: 'https://vajiramandravi.com',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'Vision IAS',
            location: 'New Delhi',
            ranking: 'Civil Services Coaching',
            established: '2005',
            website: 'https://visionias.in',
            image: '/images/colleges/jnu-delhi.png'
          },
          {
            name: 'Drishti IAS',
            location: 'New Delhi',
            ranking: 'Civil Services Coaching',
            established: '1999',
            website: 'https://www.drishtiias.com',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: "Rau's IAS",
            location: 'New Delhi',
            ranking: 'Civil Services Coaching',
            established: '1953',
            website: 'https://www.rauias.com',
            image: '/images/colleges/du-delhi.png'
          },
          {
            name: 'Shankar IAS Academy',
            location: 'Chennai, Tamil Nadu',
            ranking: 'Civil Services Coaching',
            established: '2004',
            website: 'https://www.shankarias.com',
            image: '/images/colleges/nit-trichy.png'
          }
        ],
        entranceExams: [
          'UPSC Civil Services Examination'
        ],
        specializations: [
          'IAS',
          'IPS',
          'IFS',
          'IRS',
          'Other Allied Services'
        ],
        skills: [
          'General Awareness',
          'Analytical Skills',
          'Writing',
          'Leadership',
          'Decision Making'
        ],
        scope:
          'Government Administration, Diplomacy, Law Enforcement, Policy Making',
        pros: [
          'Public service',
          'Structured career progression',
          'Government benefits'
        ],
        cons: [
          'Highly competitive',
          'Long preparation',
          'Transfer/posting requirements'
        ]
      }
    ]
  },

  // =========================================================
  // VOCATIONAL & OTHER
  // =========================================================

  {
    id: 'vocational',
    name: 'Vocational & Others',
    icon: '🛠️',
    color: '#8b5cf6',
    description:
      'Explore practical, technology-focused, creative and skill-based career options.',

    paths: [
      {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        icon: '📱',
        description:
          'Interested in online marketing, social media, SEO and content? Explore Digital Marketing.',
        duration: '6 Months – 2 Years',
        avgSalary: '₹3–8 LPA (Indicative)',
        topColleges: [
          {
            name: 'Google Skillshop',
            location: 'Online',
            ranking: 'Online Learning Platform',
            established: 'Google',
            website: 'https://skillshop.withgoogle.com',
            image: '/images/colleges/iisc-bangalore.png'
          },
          {
            name: 'HubSpot Academy',
            location: 'Online',
            ranking: 'Online Learning Platform',
            established: '2006',
            website: 'https://academy.hubspot.com',
            image: '/images/colleges/iim-bangalore.png'
          },
          {
            name: 'Simplilearn',
            location: 'Online',
            ranking: 'Online Learning Platform',
            established: '2010',
            website: 'https://www.simplilearn.com',
            image: '/images/colleges/iit-madras.png'
          },
          {
            name: 'upGrad',
            location: 'Online / India',
            ranking: 'Online Learning Platform',
            established: '2015',
            website: 'https://www.upgrad.com',
            image: '/images/colleges/iit-bombay.png'
          }
        ],
        entranceExams: [
          'No universal entrance exam',
          'Skills, portfolio and certifications can help'
        ],
        specializations: [
          'SEO',
          'Social Media Marketing',
          'Content Marketing',
          'PPC',
          'Email Marketing'
        ],
        skills: [
          'Creativity',
          'Analytics',
          'Content Creation',
          'Communication',
          'Trend Awareness'
        ],
        scope:
          'Digital Agencies, E-commerce, Startups, Freelancing, Corporates',
        pros: [
          'Growing digital industry',
          'Freelance opportunities',
          'Remote work possible'
        ],
        cons: [
          'Constant learning',
          'Performance pressure',
          'Platforms and algorithms change'
        ]
      },

      {
        id: 'data-science',
        title: 'Data Science & AI',
        icon: '🤖',
        description:
          'Interested in data, programming, statistics and artificial intelligence? Explore Data Science and AI.',
        duration: '3–4 Years Degree / 6–12 Months Skill Programs',
        avgSalary: '₹5–20 LPA (Highly variable)',
        topColleges: [
          {
            name: 'IIT Madras',
            location: 'Chennai, Tamil Nadu',
            ranking: 'Top Institute',
            established: '1959',
            website: 'https://www.iitm.ac.in',
            image: '/images/colleges/iit-madras.png'
          },
          {
            name: 'BITS Pilani',
            location: 'Pilani, Rajasthan',
            ranking: 'Top Institute',
            established: '1964',
            website: 'https://www.bits-pilani.ac.in',
            image: '/images/colleges/bits-pilani.png'
          },
          {
            name: 'IIIT Hyderabad',
            location: 'Hyderabad, Telangana',
            ranking: 'Leading Technology Institute',
            established: '1998',
            website: 'https://www.iiit.ac.in',
            image: '/images/colleges/nlsiu-bangalore.png'
          },
          {
            name: 'Indian Statistical Institute',
            location: 'Kolkata, West Bengal',
            ranking: 'Leading Research Institute',
            established: '1931',
            website: 'https://www.isical.ac.in',
            image: '/images/colleges/iim-calcutta.png'
          },
          {
            name: 'IIT / University Data Programs',
            location: 'India',
            ranking: 'Various',
            established: 'Various',
            website: 'https://www.iitm.ac.in',
            image: '/images/colleges/iisc-bangalore.png'
          }
        ],
        entranceExams: [
          'JEE / University-specific admission',
          'Program-specific requirements'
        ],
        specializations: [
          'Machine Learning',
          'Deep Learning',
          'Data Analytics',
          'NLP',
          'Computer Vision'
        ],
        skills: [
          'Python',
          'Statistics',
          'Mathematics',
          'SQL',
          'Problem Solving'
        ],
        scope:
          'Technology Companies, Startups, Banks, Healthcare, E-commerce, Research',
        pros: [
          'Growing technology field',
          'Global opportunities',
          'Many specialization options'
        ],
        cons: [
          'Continuous learning required',
          'Mathematics and programming can be demanding',
          'Competitive field'
        ]
      },

      {
        id: 'defence',
        title: 'Defence Services',
        icon: '🎖️',
        description:
          'Want to serve the nation? Explore defence career opportunities through NDA and other routes.',
        duration: 'Training duration varies by entry',
        avgSalary: 'Government pay scale; varies by rank',
        topColleges: [
          {
            name: 'National Defence Academy',
            location: 'Khadakwasla, Pune',
            ranking: 'Premier Defence Academy',
            established: '1954',
            website: 'https://nda.nic.in',
            image: '/images/colleges/nda-khadakwasla.png'
          },
          {
            name: 'Indian Military Academy',
            location: 'Dehradun, Uttarakhand',
            ranking: 'Premier Military Academy',
            established: '1932',
            website: 'https://indianarmy.nic.in',
            image: '/images/colleges/ima-dehradun.png'
          },
          {
            name: 'Officers Training Academy',
            location: 'Chennai, Tamil Nadu',
            ranking: 'Military Training Academy',
            established: '1963',
            website: 'https://indianarmy.nic.in',
            image: '/images/colleges/nit-trichy.png'
          },
          {
            name: 'Air Force Academy',
            location: 'Hyderabad, Telangana',
            ranking: 'Premier Air Force Academy',
            established: '1969',
            website: 'https://indianairforce.nic.in',
            image: '/images/colleges/nda-khadakwasla.png'
          },
          {
            name: 'Indian Naval Academy',
            location: 'Ezhimala, Kerala',
            ranking: 'Premier Naval Academy',
            established: '2009',
            website: 'https://www.joinindiannavy.gov.in',
            image: '/images/colleges/ima-dehradun.png'
          }
        ],
        entranceExams: [
          'NDA',
          'CDS',
          'AFCAT',
          'Other service-specific entries'
        ],
        specializations: [
          'Army',
          'Navy',
          'Air Force',
          'Technical Branches',
          'Other Defence Roles'
        ],
        skills: [
          'Physical Fitness',
          'Leadership',
          'Discipline',
          'Teamwork',
          'Decision Making'
        ],
        scope:
          'Indian Armed Forces, Defence Organizations and Related Government Services',
        pros: [
          'Public service',
          'Structured career',
          'Leadership opportunities'
        ],
        cons: [
          'Strict discipline',
          'Physical demands',
          'Transfers/postings',
          'Service-related risks'
        ]
      },

      {
        id: 'animation',
        title: 'Animation & VFX',
        icon: '🎬',
        description:
          'Love movies, games and visual storytelling? Explore Animation, VFX and Motion Graphics.',
        duration: '3–4 Years',
        avgSalary: '₹3–8 LPA (Indicative)',
        topColleges: [
          {
            name: 'NID Ahmedabad',
            location: 'Ahmedabad, Gujarat',
            ranking: 'Leading Design Institute',
            established: '1961',
            website: 'https://www.nid.edu',
            image: '/images/colleges/nid-ahmedabad.png'
          },
          {
            name: 'FTII Pune',
            location: 'Pune, Maharashtra',
            ranking: 'Leading Film Institute',
            established: '1960',
            website: 'https://ftii.ac.in',
            image: '/images/colleges/nda-khadakwasla.png'
          },
          {
            name: 'Whistling Woods International',
            location: 'Mumbai, Maharashtra',
            ranking: 'Film & Media Institute',
            established: '2006',
            website: 'https://www.whistlingwoods.net',
            image: '/images/colleges/iit-bombay.png'
          },
          {
            name: 'Arena Animation',
            location: 'Multiple Cities',
            ranking: 'Training Provider',
            established: '1996',
            website: 'https://www.arena-multimedia.com',
            image: '/images/colleges/nid-ahmedabad.png'
          },
          {
            name: 'MAAC',
            location: 'Multiple Cities',
            ranking: 'Training Provider',
            established: '2001',
            website: 'https://www.maacindia.com',
            image: '/images/colleges/nift-delhi.png'
          }
        ],
        entranceExams: [
          'Institute-specific admission',
          'Portfolio / aptitude requirements vary'
        ],
        specializations: [
          '2D Animation',
          '3D Animation',
          'VFX',
          'Game Design',
          'Motion Graphics'
        ],
        skills: [
          'Creativity',
          '3D / 2D Software',
          'Storytelling',
          'Patience',
          'Visual Communication'
        ],
        scope:
          'Film Industry, Gaming, Advertising, EdTech, OTT Platforms, Freelancing',
        pros: [
          'Creative career',
          'Growing digital content industry',
          'Freelance opportunities'
        ],
        cons: [
          'Deadline pressure',
          'Long project hours',
          'Continuous software learning'
        ]
      }
    ]
  }
];


// =========================================================
// EXAM CALENDAR
// =========================================================

export const examCalendar = [
  {
    name: 'JEE Main',
    typicalPeriod: 'Usually multiple sessions during the year',
    stream: 'Science'
  },
  {
    name: 'NEET-UG',
    typicalPeriod: 'Usually once a year',
    stream: 'Science'
  },
  {
    name: 'CLAT',
    typicalPeriod: 'Usually annual cycle',
    stream: 'All'
  },
  {
    name: 'CAT',
    typicalPeriod: 'Usually November',
    stream: 'All'
  },
  {
    name: 'NATA',
    typicalPeriod: 'Multiple sessions',
    stream: 'Science'
  },
  {
    name: 'NIFT Entrance',
    typicalPeriod: 'Usually early in the year',
    stream: 'All'
  },
  {
    name: 'NID DAT',
    typicalPeriod: 'Usually early in the year',
    stream: 'All'
  },
  {
    name: 'UPSC CSE',
    typicalPeriod: 'Annual examination cycle',
    stream: 'All'
  },
  {
    name: 'NDA',
    typicalPeriod: 'Multiple sessions',
    stream: 'Science'
  },
  {
    name: 'CA Foundation',
    typicalPeriod: 'Multiple sessions',
    stream: 'Commerce'
  },
  {
    name: 'CUET-UG',
    typicalPeriod: 'Usually May–June',
    stream: 'All'
  },
  {
    name: 'BITSAT',
    typicalPeriod: 'Usually multiple sessions',
    stream: 'Science'
  }
];


// =========================================================
// CAREER QUIZ
// =========================================================

export const quizQuestions = [
  {
    question: 'What interests you the most?',
    options: [
      {
        text: 'Machines, Technology and Science',
        stream: 'science'
      },
      {
        text: 'Business, Money and Finance',
        stream: 'commerce'
      },
      {
        text: 'Creative Arts, Writing and Design',
        stream: 'arts'
      },
      {
        text: 'Practical Skills and Technology',
        stream: 'vocational'
      }
    ]
  },

  {
    question: 'Which subjects do you enjoy most?',
    options: [
      {
        text: 'Physics / Chemistry / Maths / Biology',
        stream: 'science'
      },
      {
        text: 'Accounts / Economics / Business Studies',
        stream: 'commerce'
      },
      {
        text: 'History / Political Science / Literature',
        stream: 'arts'
      },
      {
        text: 'Computer / Practical / Skill-based Subjects',
        stream: 'vocational'
      }
    ]
  },

  {
    question: 'How do you imagine your future?',
    options: [
      {
        text: 'Engineer / Doctor / Scientist',
        stream: 'science'
      },
      {
        text: 'CA / Banker / Business Manager',
        stream: 'commerce'
      },
      {
        text: 'Writer / Designer / Lawyer / Psychologist',
        stream: 'arts'
      },
      {
        text: 'Developer / Digital Marketer / Defence Professional',
        stream: 'vocational'
      }
    ]
  },

  {
    question: 'What is your strongest skill?',
    options: [
      {
        text: 'Problem Solving and Logical Thinking',
        stream: 'science'
      },
      {
        text: 'Numbers and Financial Analysis',
        stream: 'commerce'
      },
      {
        text: 'Communication and Creativity',
        stream: 'arts'
      },
      {
        text: 'Practical Skills and Technology',
        stream: 'vocational'
      }
    ]
  },

  {
    question: 'What kind of work do you prefer?',
    options: [
      {
        text: 'Research, Technology or Healthcare',
        stream: 'science'
      },
      {
        text: 'Finance, Business or Management',
        stream: 'commerce'
      },
      {
        text: 'People, Media, Law or Creativity',
        stream: 'arts'
      },
      {
        text: 'Technology, Practical Work or Skill-based Careers',
        stream: 'vocational'
      }
    ]
  },

  {
    question: 'How do you prefer to learn?',
    options: [
      {
        text: 'Theory + Experiments',
        stream: 'science'
      },
      {
        text: 'Numbers + Case Studies',
        stream: 'commerce'
      },
      {
        text: 'Reading + Discussion + Creativity',
        stream: 'arts'
      },
      {
        text: 'Projects + Hands-on Practice',
        stream: 'vocational'
      }
    ]
  }
];


// =========================================================
// HELPER FUNCTIONS
// =========================================================

export const getCareerById = (careerId) => {
  for (const stream of careerStreams) {
    const career = stream.paths.find(
      (path) => path.id === careerId
    );

    if (career) {
      return {
        ...career,
        stream: stream.name,
        streamId: stream.id,
        streamColor: stream.color
      };
    }
  }

  return null;
};


export const getStreamById = (streamId) => {
  return careerStreams.find(
    (stream) => stream.id === streamId
  );
};


export const getAllCareers = () => {
  return careerStreams.flatMap((stream) =>
    stream.paths.map((career) => ({
      ...career,
      stream: stream.name,
      streamId: stream.id,
      streamColor: stream.color
    }))
  );
};


export const searchCareers = (searchTerm = '') => {
  const term = searchTerm.trim().toLowerCase();

  if (!term) {
    return getAllCareers();
  }

  return getAllCareers().filter((career) => {
    const searchableText = [
      career.title,
      career.description,
      career.scope,
      career.duration,
      career.stream,
      ...(career.specializations || []),
      ...(career.skills || [])
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(term);
  });
};
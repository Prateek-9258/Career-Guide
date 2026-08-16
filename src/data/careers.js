export const careerStreams = [
  {
    id: 'science',
    name: 'Science (PCM / PCB)',
    icon: '🔬',
    color: '#3b82f6',
    description: 'Science stream offers unlimited opportunities — from Engineering to Medical, and beyond.',
    paths: [
      {
        id: 'engineering',
        title: 'Engineering',
        icon: '⚙️',
        description: 'Interested in technology and innovation? Engineering is one of the best career options.',
        duration: '4 Years (B.Tech/B.E)',
        avgSalary: '$5K - $15K/year (Starting)',
        topColleges: [
          { name: 'IIT Bombay', location: 'Mumbai, Maharashtra', ranking: '#1', established: '1958', website: 'www.iitb.ac.in', image: '/images/colleges/iit-bombay.png' },
          { name: 'IIT Delhi', location: 'New Delhi', ranking: '#2', established: '1961', website: 'www.iitd.ac.in', image: '/images/colleges/iit-delhi.png' },
          { name: 'NIT Trichy', location: 'Tiruchirappalli, Tamil Nadu', ranking: '#8', established: '1964', website: 'www.nitt.edu', image: '/images/colleges/nit-trichy.png' },
          { name: 'BITS Pilani', location: 'Pilani, Rajasthan', ranking: '#15', established: '1964', website: 'www.bits-pilani.ac.in', image: '/images/colleges/bits-pilani.png' },
          { name: 'VIT Vellore', location: 'Vellore, Tamil Nadu', ranking: '#18', established: '1984', website: 'www.vit.ac.in', image: '/images/colleges/vit-vellore.png' }
        ],
        entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'WBJEE', 'MHT CET'],
        specializations: ['Computer Science', 'Mechanical', 'Electrical', 'Civil', 'Aerospace', 'Biotechnology'],
        skills: ['Mathematics', 'Problem Solving', 'Logical Thinking', 'Technical Knowledge'],
        scope: 'IT Companies, Manufacturing, Construction, R&D, Government PSUs',
        pros: ['High salary potential', 'Diverse job roles', 'Global opportunities'],
        cons: ['Competitive entrance exams', '4 years rigorous study', 'Initial job pressure']
      },
      {
        id: 'medical',
        title: 'Medical (MBBS/BDS)',
        icon: '🩺',
        description: 'Love helping people? Build a career in the medical field.',
        duration: '5.5 Years (MBBS) / 4 Years (BDS)',
        avgSalary: '$7K - $20K/year (Starting)',
        topColleges: [
          { name: 'AIIMS Delhi', location: 'New Delhi', ranking: '#1', established: '1956', website: 'www.aiims.edu', image: '/images/colleges/aiims-delhi.png' },
          { name: 'CMC Vellore', location: 'Vellore, Tamil Nadu', ranking: '#2', established: '1900', website: 'www.cmch-vellore.edu', image: '/images/colleges/cmc-vellore.png' },
          { name: 'AFMC Pune', location: 'Pune, Maharashtra', ranking: '#5', established: '1948', website: 'www.afmc.nic.in', image: '/images/colleges/aiims-delhi.png' },
          { name: 'Maulana Azad Medical College', location: 'New Delhi', ranking: '#6', established: '1958', website: 'www.mamc.ac.in', image: '/images/colleges/aiims-delhi.png' },
          { name: 'KGMU Lucknow', location: 'Lucknow, Uttar Pradesh', ranking: '#10', established: '1905', website: 'www.kgmu.org', image: '/images/colleges/cmc-vellore.png' }
        ],
        entranceExams: ['NEET UG', 'AIIMS Entrance', 'JIPMER', 'State PMTs'],
        specializations: ['General Medicine', 'Surgery', 'Pediatrics', 'Cardiology', 'Dermatology', 'Orthopedics'],
        skills: ['Biology', 'Patience', 'Communication', 'Empathy', 'Scientific Temperament'],
        scope: 'Hospitals, Private Practice, Research, Pharmaceuticals, Government Health Services',
        pros: ['Noble profession', 'Job security', 'Respect in society'],
        cons: ['Long study duration', 'High competition', 'Stressful work environment']
      },
      {
        id: 'architecture',
        title: 'Architecture (B.Arch)',
        icon: '🏗️',
        description: 'Passionate about design and creativity? Design buildings and structures!',
        duration: '5 Years',
        avgSalary: '$4K - $10K/year (Starting)',
        topColleges: [
          { name: 'IIT Kharagpur', location: 'Kharagpur, West Bengal', ranking: '#1', established: '1951', website: 'www.iitkgp.ac.in', image: '/images/colleges/iit-bombay.png' },
          { name: 'SPA Delhi', location: 'New Delhi', ranking: '#2', established: '1941', website: 'www.spa.ac.in', image: '/images/colleges/iit-delhi.png' },
          { name: 'IIT Roorkee', location: 'Roorkee, Uttarakhand', ranking: '#3', established: '1847', website: 'www.iitr.ac.in', image: '/images/colleges/iit-roorkee.png' },
          { name: 'NIT Calicut', location: 'Kozhikode, Kerala', ranking: '#12', established: '1961', website: 'www.nitc.ac.in', image: '/images/colleges/nit-trichy.png' },
          { name: 'Sir JJ College Mumbai', location: 'Mumbai, Maharashtra', ranking: '#20', established: '1857', website: 'www.sirjjcollegeofarchitecture.in', image: '/images/colleges/iit-bombay.png' }
        ],
        entranceExams: ['NATA', 'JEE Main Paper 2', 'AAT (IITs)'],
        specializations: ['Urban Planning', 'Landscape', 'Interior Design', 'Sustainable Architecture'],
        skills: ['Drawing', 'Creativity', 'Math', 'Visualization', 'Technical Knowledge'],
        scope: 'Architecture Firms, Real Estate, Urban Planning, Government PWD',
        pros: ['Creative satisfaction', 'Freelance opportunities', 'Travel opportunities'],
        cons: ['Long working hours', 'Project deadlines', 'Initial lower pay']
      },
      {
        id: 'pure-science',
        title: 'Pure Sciences (B.Sc)',
        icon: '🧪',
        description: 'Interested in research and discovery? Explore Pure Sciences.',
        duration: '3 Years (B.Sc) / 5 Years (Integrated M.Sc)',
        avgSalary: '$4K - $9K/year (Starting)',
        topColleges: [
          { name: 'IISc Bangalore', location: 'Bangalore, Karnataka', ranking: '#1', established: '1909', website: 'www.iisc.ac.in', image: '/images/colleges/iisc-bangalore.png' },
          { name: 'IIT Bombay', location: 'Mumbai, Maharashtra', ranking: '#2', established: '1958', website: 'www.iitb.ac.in', image: '/images/colleges/iit-bombay.png' },
          { name: 'Delhi University', location: 'New Delhi', ranking: '#5', established: '1922', website: 'www.du.ac.in', image: '/images/colleges/du-delhi.png' },
          { name: 'BHU Varanasi', location: 'Varanasi, Uttar Pradesh', ranking: '#8', established: '1916', website: 'www.bhu.ac.in', image: '/images/colleges/bhu-varanasi.png' },
          { name: 'University of Hyderabad', location: 'Hyderabad, Telangana', ranking: '#12', established: '1974', website: 'www.uohyd.ac.in', image: '/images/colleges/iisc-bangalore.png' }
        ],
        entranceExams: ['IISc Entrance', 'IIT JAM', 'CUET', 'University-specific exams'],
        specializations: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Statistics', 'Geology'],
        skills: ['Research Mindset', 'Analytical Skills', 'Lab Work', 'Data Analysis'],
        scope: 'Research Labs, Teaching, Data Science, Pharmaceuticals, Space Research',
        pros: ['Research opportunities', 'Teaching career', 'PhD possibilities'],
        cons: ['Lower initial salary', 'Long academic path', 'Limited corporate jobs']
      },
      {
        id: 'pharmacy',
        title: 'Pharmacy (B.Pharm)',
        icon: '💊',
        description: 'Interested in medicines and formulations? Choose Pharmacy.',
        duration: '4 Years',
        avgSalary: '$4K - $8K/year (Starting)',
        topColleges: [
          { name: 'NIPER Mohali', location: 'Mohali, Punjab', ranking: '#1', established: '1998', website: 'www.niper.gov.in', image: '/images/colleges/bits-pilani.png' },
          { name: 'BITS Pilani', location: 'Pilani, Rajasthan', ranking: '#3', established: '1964', website: 'www.bits-pilani.ac.in', image: '/images/colleges/bits-pilani.png' },
          { name: 'Manipal College', location: 'Manipal, Karnataka', ranking: '#5', established: '1963', website: 'www.manipal.edu', image: '/images/colleges/cmc-vellore.png' },
          { name: 'Jamia Hamdard', location: 'New Delhi', ranking: '#8', established: '1989', website: 'www.jamiahamdard.edu', image: '/images/colleges/aiims-delhi.png' },
          { name: 'ICT Mumbai', location: 'Mumbai, Maharashtra', ranking: '#10', established: '1933', website: 'www.ictmumbai.edu.in', image: '/images/colleges/iit-bombay.png' }
        ],
        entranceExams: ['GPAT', 'State Pharmacy Entrance Exams', 'University-specific exams'],
        specializations: ['Pharmaceutics', 'Pharmacology', 'Clinical Pharmacy', 'Industrial Pharmacy'],
        skills: ['Chemistry', 'Biology', 'Attention to Detail', 'Communication'],
        scope: 'Pharma Companies, Hospitals, Retail Pharmacy, Regulatory Affairs',
        pros: ['Growing industry', 'Multiple career paths', 'Entrepreneurship'],
        cons: ['Regulatory challenges', 'Initial lower pay', 'Shift work']
      },
      {
        id: 'aviation',
        title: 'Aviation & Pilot',
        icon: '✈️',
        description: 'Dream of flying in the sky? Become a Commercial Pilot!',
        duration: '2-3 Years (CPL Training)',
        avgSalary: '$10K - $25K/year (Starting)',
        topColleges: [
          { name: 'Indira Gandhi Institute (IGRUA)', location: 'Raebareli, Uttar Pradesh', ranking: '#1', established: '1985', website: 'www.igrua.gov.in', image: '/images/colleges/nda-khadakwasla.png' },
          { name: 'CAE Oxford', location: 'Gondia, Maharashtra', ranking: '#2', established: '2007', website: 'www.cae.com', image: '/images/colleges/nda-khadakwasla.png' },
          { name: 'Chimes Aviation', location: 'Hisar, Haryana', ranking: '#5', established: '2007', website: 'www.chimesaviation.com', image: '/images/colleges/ima-dehradun.png' },
          { name: 'NFTI', location: 'Gondia, Maharashtra', ranking: '#8', established: '2006', website: 'www.nfti.ac.in', image: '/images/colleges/nda-khadakwasla.png' }
        ],
        entranceExams: ['CPL Written Exam', 'DGCA Medical', 'Airline Entrance Tests'],
        specializations: ['Commercial Pilot', 'Aircraft Maintenance', 'Air Traffic Control', 'Aeronautical Engineering'],
        skills: ['Spatial Awareness', 'Quick Decision Making', 'Physical Fitness', 'Communication'],
        scope: 'Airlines, Cargo Services, Charter Services, Government Aviation',
        pros: ['High salary', 'Travel opportunities', 'Prestigious career'],
        cons: ['Expensive training', 'Strict medical standards', 'Irregular hours']
      }
    ]
  },
  {
    id: 'commerce',
    name: 'Commerce',
    icon: '💼',
    color: '#10b981',
    description: 'Interested in business, finance, and accounting? Commerce is the best stream.',
    paths: [
      {
        id: 'ca',
        title: 'Chartered Accountant (CA)',
        icon: '📊',
        description: 'Want to become an expert in numbers and finance? Become a CA!',
        duration: '4.5 Years (including articleship)',
        avgSalary: '$8K - $30K/year (Starting)',
        topColleges: [
          { name: 'ICAI Delhi', location: 'New Delhi', ranking: '#1', established: '1949', website: 'www.icai.org', image: '/images/colleges/iim-ahmedabad.png' },
          { name: 'Aldine CA', location: 'Jaipur, Rajasthan', ranking: 'Top', established: '1995', website: 'www.aldine.co.in', image: '/images/colleges/xlri-jamshedpur.png' },
          { name: 'VSI Jaipur', location: 'Jaipur, Rajasthan', ranking: 'Top', established: '1998', website: 'www.vsijaipur.com', image: '/images/colleges/bits-pilani.png' },
          { name: 'Nahata CA', location: 'Indore, MP', ranking: 'Top', established: '1990', website: 'www.nahataca.com', image: '/images/colleges/iim-calcutta.png' }
        ],
        entranceExams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
        specializations: ['Audit', 'Taxation', 'Financial Management', 'Corporate Law'],
        skills: ['Accounting', 'Analytical Skills', 'Attention to Detail', 'Ethics'],
        scope: 'Big 4 Firms, Corporates, Banks, Tax Consulting, Own Practice',
        pros: ['High earning potential', 'Prestigious designation', 'Own practice possible'],
        cons: ['Very tough exams', 'Long duration', 'High rejection rate']
      },
      {
        id: 'mba',
        title: 'MBA / BBA',
        icon: '📈',
        description: 'Interested in business management and leadership? Head towards MBA.',
        duration: '2 Years (MBA) / 3 Years (BBA)',
        avgSalary: '$10K - $40K/year (Starting from top colleges)',
        topColleges: [
          { name: 'IIM Ahmedabad', location: 'Ahmedabad, Gujarat', ranking: '#1', established: '1961', website: 'www.iima.ac.in', image: '/images/colleges/iim-ahmedabad.png' },
          { name: 'IIM Bangalore', location: 'Bangalore, Karnataka', ranking: '#2', established: '1973', website: 'www.iimb.ac.in', image: '/images/colleges/iim-bangalore.png' },
          { name: 'IIM Calcutta', location: 'Kolkata, West Bengal', ranking: '#3', established: '1961', website: 'www.iimcal.ac.in', image: '/images/colleges/iim-calcutta.png' },
          { name: 'XLRI Jamshedpur', location: 'Jamshedpur, Jharkhand', ranking: '#5', established: '1949', website: 'www.xlri.ac.in', image: '/images/colleges/xlri-jamshedpur.png' },
          { name: 'FMS Delhi', location: 'New Delhi', ranking: '#8', established: '1954', website: 'www.fms.edu', image: '/images/colleges/du-delhi.png' }
        ],
        entranceExams: ['CAT', 'XAT', 'MAT', 'SNAP', 'NMAT', 'CMAT'],
        specializations: ['Finance', 'Marketing', 'HR', 'Operations', 'Consulting', 'IT'],
        skills: ['Leadership', 'Communication', 'Strategic Thinking', 'Teamwork'],
        scope: 'MNCs, Startups, Consulting Firms, Banks, E-commerce',
        pros: ['High salary potential', 'Leadership roles', 'Networking opportunities'],
        cons: ['Expensive fees', 'Competitive entrance', 'Work pressure']
      },
      {
        id: 'cs',
        title: 'Company Secretary (CS)',
        icon: '📋',
        description: 'Interested in corporate law and governance? Become a CS.',
        duration: '3-4 Years',
        avgSalary: '$6K - $20K/year (Starting)',
        topColleges: [
          { name: 'ICSI Delhi', location: 'New Delhi', ranking: '#1', established: '1968', website: 'www.icsi.edu', image: '/images/colleges/nlsiu-bangalore.png' },
          { name: 'Aldine CS', location: 'Jaipur, Rajasthan', ranking: 'Top', established: '1995', website: 'www.aldine.co.in', image: '/images/colleges/xlri-jamshedpur.png' }
        ],
        entranceExams: ['CSEET', 'CS Executive', 'CS Professional'],
        specializations: ['Corporate Governance', 'Company Law', 'Securities Law', 'M&A'],
        skills: ['Law', 'Communication', 'Compliance Knowledge', 'Analytical Skills'],
        scope: 'Corporates, Law Firms, Banks, Regulatory Bodies, Consultancy',
        pros: ['Growing demand', 'Corporate roles', 'Good work-life balance'],
        cons: ['Lesser known than CA', 'Long study period', 'Limited awareness']
      },
      {
        id: 'cma',
        title: 'Cost & Management Accountant (CMA)',
        icon: '💰',
        description: 'Interested in cost management and financial planning? Choose CMA.',
        duration: '3-4 Years',
        avgSalary: '$6K - $15K/year (Starting)',
        topColleges: [
          { name: 'ICMAI Kolkata', location: 'Kolkata, West Bengal', ranking: '#1', established: '1959', website: 'www.icmai.in', image: '/images/colleges/iim-calcutta.png' },
          { name: 'ICMAI Delhi', location: 'New Delhi', ranking: '#2', established: '1959', website: 'www.icmai.in', image: '/images/colleges/du-delhi.png' }
        ],
        entranceExams: ['CMA Foundation', 'CMA Intermediate', 'CMA Final'],
        specializations: ['Cost Accounting', 'Management Accounting', 'Strategic Management'],
        skills: ['Cost Analysis', 'Budgeting', 'Financial Planning', 'Excel'],
        scope: 'Manufacturing, IT, Consulting, Banks, Government',
        pros: ['Industry demand', 'Global recognition', 'Diverse roles'],
        cons: ['Tough exams', 'Long duration', 'Limited public awareness']
      },
      {
        id: 'banking',
        title: 'Banking & Finance',
        icon: '🏦',
        description: 'Want to build a career in the banking sector? Explore this path.',
        duration: '3 Years (B.Com/BBA) + PG',
        avgSalary: '$5K - $12K/year (Starting)',
        topColleges: [
          { name: 'Delhi University', location: 'New Delhi', ranking: '#1', established: '1922', website: 'www.du.ac.in', image: '/images/colleges/du-delhi.png' },
          { name: "St. Xavier's Mumbai", location: 'Mumbai, Maharashtra', ranking: '#3', established: '1869', website: 'www.xaviers.edu', image: '/images/colleges/iit-bombay.png' },
          { name: 'Christ University', location: 'Bangalore, Karnataka', ranking: '#5', established: '1969', website: 'www.christuniversity.in', image: '/images/colleges/iisc-bangalore.png' },
          { name: 'Symbiosis Pune', location: 'Pune, Maharashtra', ranking: '#8', established: '1971', website: 'www.symbiosis.ac.in', image: '/images/colleges/nlsiu-bangalore.png' }
        ],
        entranceExams: ['IBPS PO', 'SBI PO', 'RBI Grade B', 'CAT', 'NMAT'],
        specializations: ['Investment Banking', 'Retail Banking', 'Risk Management', 'Wealth Management'],
        skills: ['Financial Analysis', 'Customer Service', 'Risk Assessment', 'Sales'],
        scope: 'Public/Private Banks, NBFCs, Insurance, Investment Firms',
        pros: ['Job security', 'Good benefits', 'Growth opportunities'],
        cons: ['Targets pressure', 'Customer handling stress', 'Transfer policy']
      },
      {
        id: 'economics',
        title: 'Economics (B.A/B.Sc Eco)',
        icon: '📉',
        description: 'Interested in economic policies and market analysis? Study Economics.',
        duration: '3 Years (B.A/B.Sc) / 2 Years (M.A)',
        avgSalary: '$5K - $12K/year (Starting)',
        topColleges: [
          { name: 'Delhi School of Economics', location: 'New Delhi', ranking: '#1', established: '1949', website: 'www.econdse.org', image: '/images/colleges/du-delhi.png' },
          { name: 'JNU Delhi', location: 'New Delhi', ranking: '#2', established: '1969', website: 'www.jnu.ac.in', image: '/images/colleges/jnu-delhi.png' },
          { name: "St. Stephen's Delhi", location: 'New Delhi', ranking: '#4', established: '1881', website: 'www.ststephens.edu', image: '/images/colleges/du-delhi.png' },
          { name: 'Loyola College', location: 'Chennai, Tamil Nadu', ranking: '#6', established: '1925', website: 'www.loyolacollege.edu', image: '/images/colleges/nit-trichy.png' }
        ],
        entranceExams: ['CUET', 'University-specific exams', 'GRE (for abroad)'],
        specializations: ['Development Economics', 'Financial Economics', 'Econometrics', 'Policy Analysis'],
        skills: ['Data Analysis', 'Research', 'Statistics', 'Critical Thinking'],
        scope: 'Research Institutes, Banks, Government, NGOs, Consulting',
        pros: ['Research opportunities', 'Policy making', 'Diverse career paths'],
        cons: ['Requires higher studies', 'Initial lower pay', 'Academic focus']
      }
    ]
  },
  {
    id: 'arts',
    name: 'Arts / Humanities',
    icon: '🎨',
    color: '#f59e0b',
    description: 'Interested in creativity, social work, and liberal arts? Explore the Arts stream.',
    paths: [
      {
        id: 'law',
        title: 'Law (LLB)',
        icon: '⚖️',
        description: 'Interested in justice and the legal system? Become a Lawyer!',
        duration: '5 Years (Integrated) / 3 Years (LLB)',
        avgSalary: '$5K - $25K/year (Starting)',
        topColleges: [
          { name: 'NLU Delhi', location: 'New Delhi', ranking: '#1', established: '2008', website: 'www.nludelhi.ac.in', image: '/images/colleges/du-delhi.png' },
          { name: 'NLSIU Bangalore', location: 'Bangalore, Karnataka', ranking: '#2', established: '1986', website: 'www.nls.ac.in', image: '/images/colleges/nlsiu-bangalore.png' },
          { name: 'NALSAR Hyderabad', location: 'Hyderabad, Telangana', ranking: '#3', established: '1998', website: 'www.nalsar.ac.in', image: '/images/colleges/nlsiu-bangalore.png' },
          { name: 'NUJS Kolkata', location: 'Kolkata, West Bengal', ranking: '#4', established: '1999', website: 'www.nujs.edu', image: '/images/colleges/iim-calcutta.png' },
          { name: 'Symbiosis Law School', location: 'Pune, Maharashtra', ranking: '#7', established: '1977', website: 'www.sls.pune.edu.in', image: '/images/colleges/nlsiu-bangalore.png' }
        ],
        entranceExams: ['CLAT', 'AILET', 'LSAT India', 'State Law Entrance Exams'],
        specializations: ['Corporate Law', 'Criminal Law', 'Civil Law', 'IPR', 'Constitutional Law'],
        skills: ['Argumentation', 'Research', 'Communication', 'Logical Reasoning'],
        scope: 'Law Firms, Courts, Corporates, NGOs, Government',
        pros: ['Prestigious career', 'High earning potential', 'Social impact'],
        cons: ['Long study period', 'Initial struggle', 'Competitive field']
      },
      {
        id: 'journalism',
        title: 'Journalism & Mass Communication',
        icon: '📰',
        description: 'Interested in news, media, and storytelling? Become a Journalist.',
        duration: '3 Years (BA) / 2 Years (MA)',
        avgSalary: '$4K - $10K/year (Starting)',
        topColleges: [
          { name: 'IIMC Delhi', location: 'New Delhi', ranking: '#1', established: '1965', website: 'www.iimc.gov.in', image: '/images/colleges/du-delhi.png' },
          { name: 'XIC Mumbai', location: 'Mumbai, Maharashtra', ranking: '#2', established: '1969', website: 'www.xaviercomm.org', image: '/images/colleges/iit-bombay.png' },
          { name: 'Symbiosis Pune', location: 'Pune, Maharashtra', ranking: '#4', established: '1971', website: 'www.symbiosis.ac.in', image: '/images/colleges/nlsiu-bangalore.png' },
          { name: 'Jamia Millia', location: 'New Delhi', ranking: '#5', established: '1920', website: 'www.jmi.ac.in', image: '/images/colleges/jnu-delhi.png' },
          { name: 'Lady Shri Ram College', location: 'New Delhi', ranking: '#6', established: '1956', website: 'www.lsr.edu.in', image: '/images/colleges/du-delhi.png' }
        ],
        entranceExams: ['IIMC Entrance', 'XIC OET', 'Symbiosis SET', 'CUET'],
        specializations: ['Print Media', 'Electronic Media', 'Digital Media', 'Public Relations', 'Advertising'],
        skills: ['Writing', 'Communication', 'Research', 'Creativity', 'Current Affairs'],
        scope: 'News Channels, Newspapers, Digital Media, PR Agencies, Corporate Communications',
        pros: ['Dynamic field', 'Creative satisfaction', 'Public influence'],
        cons: ['Irregular hours', 'Starting salary low', 'Job insecurity initially']
      },
      {
        id: 'design',
        title: 'Design (Fashion/Graphic/Interior)',
        icon: '🎭',
        description: 'Love visual creativity? Enter the Design field.',
        duration: '3-4 Years',
        avgSalary: '$4K - $10K/year (Starting)',
        topColleges: [
          { name: 'NID Ahmedabad', location: 'Ahmedabad, Gujarat', ranking: '#1', established: '1961', website: 'www.nid.edu', image: '/images/colleges/nid-ahmedabad.png' },
          { name: 'NIFT Delhi', location: 'New Delhi', ranking: '#2', established: '1986', website: 'www.nift.ac.in', image: '/images/colleges/nift-delhi.png' },
          { name: 'Pearl Academy', location: 'New Delhi', ranking: '#5', established: '1993', website: 'www.pearlacademy.com', image: '/images/colleges/nift-delhi.png' },
          { name: 'Srishti Bangalore', location: 'Bangalore, Karnataka', ranking: '#8', established: '1996', website: 'www.srishti.ac.in', image: '/images/colleges/iisc-bangalore.png' },
          { name: 'IIT Bombay (IDC)', location: 'Mumbai, Maharashtra', ranking: '#10', established: '1958', website: 'www.idc.iitb.ac.in', image: '/images/colleges/iit-bombay.png' }
        ],
        entranceExams: ['NID DAT', 'NIFT Entrance', 'UCEED', 'CEED', 'Pearl Academy Entrance'],
        specializations: ['Graphic Design', 'Fashion Design', 'Interior Design', 'Product Design', 'UX/UI Design'],
        skills: ['Creativity', 'Software Skills', 'Visualization', 'Trend Awareness'],
        scope: 'Design Studios, Fashion Houses, IT Companies, Advertising, Freelance',
        pros: ['Creative freedom', 'Freelance opportunities', 'Growing demand'],
        cons: ['Competitive', 'Portfolio required', 'Initial lower pay']
      },
      {
        id: 'hotel-management',
        title: 'Hotel Management',
        icon: '🏨',
        description: 'Interested in hospitality and service industry? Explore Hotel Management.',
        duration: '3-4 Years (BHM)',
        avgSalary: '$4K - $10K/year (Starting)',
        topColleges: [
          { name: 'IHM Pusa Delhi', location: 'New Delhi', ranking: '#1', established: '1962', website: 'www.ihmpusa.net', image: '/images/colleges/du-delhi.png' },
          { name: 'IHM Mumbai', location: 'Mumbai, Maharashtra', ranking: '#2', established: '1954', website: 'www.ihmctan.edu', image: '/images/colleges/iit-bombay.png' },
          { name: 'Welcomgroup Manipal', location: 'Manipal, Karnataka', ranking: '#3', established: '1991', website: 'www.welcomgroup.org', image: '/images/colleges/cmc-vellore.png' },
          { name: 'Oberoi Centre', location: 'New Delhi', ranking: '#4', established: '1966', website: 'www.oberoihotels.com', image: '/images/colleges/du-delhi.png' },
          { name: 'Christ University', location: 'Bangalore, Karnataka', ranking: '#6', established: '1969', website: 'www.christuniversity.in', image: '/images/colleges/iisc-bangalore.png' }
        ],
        entranceExams: ['NCHMCT JEE', 'IHM Entrance', 'Oberoi STEP', 'University-specific exams'],
        specializations: ['Food & Beverage', 'Front Office', 'Housekeeping', 'Event Management', 'Culinary Arts'],
        skills: ['Communication', 'Customer Service', 'Multitasking', 'Teamwork'],
        scope: 'Hotels, Resorts, Airlines, Cruise Lines, Event Management Companies',
        pros: ['Global opportunities', 'Tips & perks', 'Meeting new people'],
        cons: ['Long working hours', 'Weekend/holiday work', 'Physical demands']
      },
      {
        id: 'psychology',
        title: 'Psychology',
        icon: '🧠',
        description: 'Love understanding the human mind and behavior? Study Psychology.',
        duration: '3 Years (BA/B.Sc) / 2 Years (M.A/M.Sc)',
        avgSalary: '$4K - $10K/year (Starting)',
        topColleges: [
          { name: 'Delhi University', location: 'New Delhi', ranking: '#1', established: '1922', website: 'www.du.ac.in', image: '/images/colleges/du-delhi.png' },
          { name: 'Christ University', location: 'Bangalore, Karnataka', ranking: '#3', established: '1969', website: 'www.christuniversity.in', image: '/images/colleges/iisc-bangalore.png' },
          { name: 'Tata Institute (TISS)', location: 'Mumbai, Maharashtra', ranking: '#4', established: '1936', website: 'www.tiss.edu', image: '/images/colleges/iit-bombay.png' },
          { name: 'Ambedkar University', location: 'New Delhi', ranking: '#7', established: '2008', website: 'www.aud.ac.in', image: '/images/colleges/jnu-delhi.png' },
          { name: 'Ashoka University', location: 'Sonepat, Haryana', ranking: '#10', established: '2014', website: 'www.ashoka.edu.in', image: '/images/colleges/du-delhi.png' }
        ],
        entranceExams: ['CUET', 'University-specific exams', 'TISS NET'],
        specializations: ['Clinical Psychology', 'Counseling', 'Organizational Psychology', 'Child Psychology'],
        skills: ['Empathy', 'Listening', 'Research', 'Communication', 'Patience'],
        scope: 'Hospitals, Schools, Corporates, NGOs, Private Practice',
        pros: ['Helping profession', 'Growing awareness', 'Diverse specializations'],
        cons: ["Requires Master's/PhD", 'Initial lower pay', 'Emotionally draining']
      },
      {
        id: 'civil-services',
        title: 'Civil Services (IAS/IPS/IFS)',
        icon: '🏛️',
        description: 'Want to serve the nation? Prepare for Civil Services.',
        duration: 'Preparation: 1-3 Years',
        avgSalary: '$700 - $3K/month (7th Pay Commission)',
        topColleges: [
          { name: 'Vajiram & Ravi', location: 'New Delhi', ranking: '#1', established: '1976', website: 'www.vajiramandravi.com', image: '/images/colleges/du-delhi.png' },
          { name: 'Vision IAS', location: 'New Delhi', ranking: '#2', established: '2005', website: 'www.visionias.in', image: '/images/colleges/jnu-delhi.png' },
          { name: 'Drishti IAS', location: 'New Delhi', ranking: '#3', established: '1999', website: 'www.drishtiias.com', image: '/images/colleges/du-delhi.png' },
          { name: "Rau's IAS", location: 'New Delhi', ranking: '#4', established: '1953', website: 'www.rauias.com', image: '/images/colleges/du-delhi.png' },
          { name: 'Shankar IAS', location: 'Chennai, Tamil Nadu', ranking: '#5', established: '2004', website: 'www.shankarias.com', image: '/images/colleges/nit-trichy.png' }
        ],
        entranceExams: ['UPSC CSE (Prelims, Mains, Interview)'],
        specializations: ['IAS', 'IPS', 'IFS', 'IRS', 'IES', 'Various Allied Services'],
        skills: ['General Awareness', 'Analytical Skills', 'Writing', 'Leadership', 'Decision Making'],
        scope: 'Government Administration, Diplomacy, Law Enforcement, Policy Making',
        pros: ['Job security', 'Power & prestige', 'Pension & benefits', 'Social impact'],
        cons: ['Very tough exam', 'Long preparation', 'Low success rate', 'Rural postings']
      }
    ]
  },
  {
    id: 'vocational',
    name: 'Vocational & Others',
    icon: '🛠️',
    color: '#8b5cf6',
    description: 'Interested in practical skills and hands-on work? Explore vocational courses.',
    paths: [
      {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        icon: '📱',
        description: 'Interested in social media and online marketing? Learn Digital Marketing.',
        duration: '6 months - 2 Years',
        avgSalary: '$4K - $10K/year (Starting)',
        topColleges: [
          { name: 'Google Digital Garage', location: 'Online', ranking: 'Global', established: '2015', website: 'learndigital.withgoogle.com', image: '/images/colleges/iisc-bangalore.png' },
          { name: 'HubSpot Academy', location: 'Online', ranking: 'Global', established: '2006', website: 'academy.hubspot.com', image: '/images/colleges/iim-bangalore.png' },
          { name: 'Simplilearn', location: 'Online / Bangalore', ranking: 'Top', established: '2010', website: 'www.simplilearn.com', image: '/images/colleges/iit-madras.png' },
          { name: 'UpGrad', location: 'Online / Mumbai', ranking: 'Top', established: '2015', website: 'www.upgrad.com', image: '/images/colleges/iit-bombay.png' }
        ],
        entranceExams: ['No specific entrance', 'Portfolio & Certifications matter'],
        specializations: ['SEO', 'Social Media Marketing', 'Content Marketing', 'PPC', 'Email Marketing'],
        skills: ['Creativity', 'Analytics', 'Content Creation', 'Communication', 'Trend Awareness'],
        scope: 'Digital Agencies, E-commerce, Startups, Freelance, Corporates',
        pros: ['High demand', 'Freelance possible', 'Low entry barrier', 'Remote work'],
        cons: ['Constant learning needed', 'Results pressure', 'Algorithm changes']
      },
      {
        id: 'data-science',
        title: 'Data Science & AI',
        icon: '🤖',
        description: 'Interested in data and machine learning? Data Science is a booming field.',
        duration: '4 Years (B.Tech/B.Sc) / Bootcamps: 6-12 months',
        avgSalary: '$7K - $25K/year (Starting)',
        topColleges: [
          { name: 'IIT Madras', location: 'Chennai, Tamil Nadu', ranking: '#1', established: '1959', website: 'www.iitm.ac.in', image: '/images/colleges/iit-madras.png' },
          { name: 'BITS Pilani', location: 'Pilani, Rajasthan', ranking: '#5', established: '1964', website: 'www.bits-pilani.ac.in', image: '/images/colleges/bits-pilani.png' },
          { name: 'IIIT Hyderabad', location: 'Hyderabad, Telangana', ranking: '#6', established: '1998', website: 'www.iiit.ac.in', image: '/images/colleges/nlsiu-bangalore.png' },
          { name: 'ISI Kolkata', location: 'Kolkata, West Bengal', ranking: '#8', established: '1931', website: 'www.isical.ac.in', image: '/images/colleges/iim-calcutta.png' },
          { name: 'Coursera / Stanford Online', location: 'Online', ranking: 'Global', established: '2012', website: 'www.coursera.org', image: '/images/colleges/iisc-bangalore.png' }
        ],
        entranceExams: ['JEE', 'University-specific', 'No entrance for bootcamps'],
        specializations: ['Machine Learning', 'Deep Learning', 'Data Analytics', 'NLP', 'Computer Vision'],
        skills: ['Python', 'Statistics', 'Mathematics', 'SQL', 'Problem Solving'],
        scope: 'Tech Companies, Startups, Banks, Healthcare, E-commerce',
        pros: ['Highest paying field', 'Future-proof career', 'Global demand'],
        cons: ['Requires continuous learning', 'Math-heavy', 'Competitive']
      },
      {
        id: 'defence',
        title: 'Defence Services',
        icon: '🎖️',
        description: 'Dream of serving the nation? Join via NDA or CDS.',
        duration: '3 Years (NDA) / 1.5 Years (OTA/IMA)',
        avgSalary: '$700 - $3K/month',
        topColleges: [
          { name: 'NDA Khadakwasla', location: 'Pune, Maharashtra', ranking: '#1', established: '1954', website: 'www.nda.nic.in', image: '/images/colleges/nda-khadakwasla.png' },
          { name: 'IMA Dehradun', location: 'Dehradun, Uttarakhand', ranking: '#2', established: '1932', website: 'www.ima.gov.in', image: '/images/colleges/ima-dehradun.png' },
          { name: 'OTA Chennai', location: 'Chennai, Tamil Nadu', ranking: '#3', established: '1985', website: 'www.otacademy.in', image: '/images/colleges/nit-trichy.png' },
          { name: 'AFA Hyderabad', location: 'Hyderabad, Telangana', ranking: '#4', established: '1969', website: 'www.afa.nic.in', image: '/images/colleges/nda-khadakwasla.png' },
          { name: 'INA Ezhimala', location: 'Kannur, Kerala', ranking: '#5', established: '2009', website: 'www.ina.gov.in', image: '/images/colleges/ima-dehradun.png' }
        ],
        entranceExams: ['NDA (after 12th)', 'CDS (after graduation)', 'AFCAT', 'INET'],
        specializations: ['Army', 'Navy', 'Air Force', 'Coast Guard'],
        skills: ['Physical Fitness', 'Leadership', 'Discipline', 'Courage', 'Teamwork'],
        scope: 'Indian Armed Forces, Paramilitary, DRDO, Defence PSUs',
        pros: ['Prestigious career', 'Job security', 'Pension', 'Adventure'],
        cons: ['Strict discipline', 'Physical demands', 'Family separation', 'Risk involved']
      },
      {
        id: 'animation',
        title: 'Animation & VFX',
        icon: '🎬',
        description: 'Love creating movie and game magic? Learn Animation.',
        duration: '3-4 Years',
        avgSalary: '$4K - $10K/year (Starting)',
        topColleges: [
          { name: 'NID Ahmedabad', location: 'Ahmedabad, Gujarat', ranking: '#1', established: '1961', website: 'www.nid.edu', image: '/images/colleges/nid-ahmedabad.png' },
          { name: 'FTII Pune', location: 'Pune, Maharashtra', ranking: '#2', established: '1960', website: 'www.ftiindia.com', image: '/images/colleges/nda-khadakwasla.png' },
          { name: 'Whistling Woods', location: 'Mumbai, Maharashtra', ranking: '#3', established: '2006', website: 'www.whistlingwoods.net', image: '/images/colleges/iit-bombay.png' },
          { name: 'Arena Animation', location: 'Multiple Cities', ranking: 'Top', established: '1996', website: 'www.arena-multimedia.com', image: '/images/colleges/nid-ahmedabad.png' },
          { name: 'MAAC', location: 'Multiple Cities', ranking: 'Top', established: '2001', website: 'www.maacindia.com', image: '/images/colleges/nift-delhi.png' }
        ],
        entranceExams: ['NID DAT', 'FTII Entrance', 'Institute-specific exams'],
        specializations: ['2D Animation', '3D Animation', 'VFX', 'Game Design', 'Motion Graphics'],
        skills: ['Creativity', 'Software Skills (Maya, Blender)', 'Storytelling', 'Patience'],
        scope: 'Film Industry, Gaming, Advertising, EdTech, OTT Platforms',
        pros: ['Creative field', 'Growing industry', 'Freelance opportunities'],
        cons: ['Long working hours', 'Deadline pressure', 'Software costs']
      }
    ]
  }
];

export const examCalendar = [
  { name: 'JEE Main', months: 'January & April', stream: 'Science' },
  { name: 'NEET UG', months: 'May', stream: 'Science' },
  { name: 'CLAT', months: 'December', stream: 'Arts' },
  { name: 'CAT', months: 'November', stream: 'Commerce' },
  { name: 'NATA', months: 'April & July', stream: 'Science' },
  { name: 'NIFT', months: 'January', stream: 'Arts' },
  { name: 'NID DAT', months: 'January', stream: 'Arts' },
  { name: 'UPSC CSE', months: 'June (Prelims)', stream: 'All' },
  { name: 'NDA', months: 'April & September', stream: 'Science' },
  { name: 'CA Foundation', months: 'May & November', stream: 'Commerce' },
  { name: 'CUET', months: 'May-June', stream: 'All' },
  { name: 'BITSAT', months: 'May-June', stream: 'Science' },
];

export const quizQuestions = [
  {
    question: 'What interests you the most?',
    options: [
      { text: 'Machines and Technology', stream: 'science' },
      { text: 'Business and Money Management', stream: 'commerce' },
      { text: 'Creative Arts and Writing', stream: 'arts' },
      { text: 'Helping People and Social Work', stream: 'arts' }
    ]
  },
  {
    question: 'What was your favorite subject?',
    options: [
      { text: 'Physics / Chemistry / Maths', stream: 'science' },
      { text: 'Accounts / Economics', stream: 'commerce' },
      { text: 'History / Political Science / Literature', stream: 'arts' },
      { text: 'Biology / Psychology', stream: 'science' }
    ]
  },
  {
    question: 'How do you imagine your future?',
    options: [
      { text: 'Engineer / Doctor / Scientist', stream: 'science' },
      { text: 'Business Owner / CA / Banker', stream: 'commerce' },
      { text: 'Writer / Designer / Lawyer', stream: 'arts' },
      { text: 'Army Officer / Civil Servant', stream: 'vocational' }
    ]
  },
  {
    question: 'What is your strength?',
    options: [
      { text: 'Problem Solving and Logic', stream: 'science' },
      { text: 'Numbers and Analysis', stream: 'commerce' },
      { text: 'Communication and Creativity', stream: 'arts' },
      { text: 'Leadership and Physical Fitness', stream: 'vocational' }
    ]
  },
  {
    question: 'How many years do you want to study?',
    options: [
      { text: '4-5 years (Degree)', stream: 'science' },
      { text: '3-4 years + Professional Course', stream: 'commerce' },
      { text: '3 years + Higher Studies', stream: 'arts' },
      { text: 'Short term courses / Training', stream: 'vocational' }
    ]
  }
];
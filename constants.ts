import type { Project, Experience, SkillGroup, Certification } from './types';

export const PERSONAL_INFO = {
  name: 'Ramya Pravallika Chadalavada',
  shortName: 'Ramya Pravallika C.',
  tagline: 'Turning Data → Insights → Business Value',
  email: 'ramya.pravallika.c@gmail.com',
  github: 'https://github.com/ramyapravallika',
  linkedin: 'https://www.linkedin.com/in/ramyapravallikachadalavada/',
  resumeFile: 'Ramya_Pravallika_Chadalavada_Resume.pdf',
}

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications'},
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE: Experience[] = [
  {
    year: 'Sep 2024 - Present',
    role: 'Analytics Engineer',
    company: 'RMSI Pvt Ltd (Client: Apple Maps)',
    description: 'Ensuring 100% quality and high productivity across geospatial analytics projects, supporting data-driven improvements for Apple Maps.',
    type: 'work',
  },
  {
    year: 'Mar 2023 - Jul 2024',
    role: 'Data Science & ML Intern',
    company: 'Tutort Academy',
    description: 'Built and optimized machine learning models, performed exploratory data analysis, and contributed to real-world client projects.',
    type: 'internship',
  },
  {
    year: '2018 - 2022',
    role: 'B.E / B.Tech in ECE',
    company: 'Saveetha Institute of Medical & Technical Sciences',
    description: 'Built a strong foundation in electronics, communication, and computational principles, laying the groundwork for a career in data and technology.',
    type: 'education',
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
    {
        icon: '📊',
        title: 'Data Analysis & Visualization',
        subgroups: [
            { name: 'Tools', skills: ['Power BI', 'Tableau', 'Excel'] },
            { name: 'Expertise', skills: ['Data Mining', 'Interactive Dashboards', 'Storytelling with Data'] },
            { name: 'Statistics', skills: ['Hypothesis Testing', 'Z-Test', 'ANOVA', 'A/B Testing'] },
        ],
    },
    {
        icon: '🐍',
        title: 'Programming & Databases',
        subgroups: [
            { name: 'Python', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
            { name: 'SQL', skills: ['Postgres', 'MySQL', 'SQL Server'] },
            { name: 'NoSQL', skills: ['MongoDB (Exposure)'] },
        ]
    },
    {
        icon: '🔄',
        title: 'Data Preparation & ETL',
        subgroups: [
            { name: 'Core Skills', skills: ['Data Cleansing', 'Data Transformation', 'Data Modeling'] },
            { name: 'Concepts', skills: ['ETL Workflows', 'Data Pipelines'] },
        ]
    },
    {
        icon: '☁️',
        title: 'Cloud & Tools',
        subgroups: [
            { name: 'Cloud', skills: ['Microsoft Azure (Data Fundamentals)'] },
            { name: 'Version Control', skills: ['Git/GitHub'] },
            { name: 'Development', skills: ['Jupyter Notebook', 'VS Code'] },
        ]
    },
    {
        icon: '💼',
        title: 'Business & Analytical Skills',
        subgroups: [
            { name: 'Core Competencies', skills: ['Requirement Gathering', 'Documentation', 'KPI Design', 'Dashboard Storytelling', 'Cross-functional Communication'] },
            { name: 'Domain Knowledge', skills: ['Retail', 'Finance', 'Supply Chain', 'Geospatial Analytics'] },
        ]
    }
];

export const CERTIFICATIONS: Certification[] = [
    { name: 'Data Science Job Simulation', issuer: 'BCG', program: 'Forage', link: 'https://www.forage.com/simulations/bcg/data-science-tq8d' },
    { name: 'Power BI Job Simulation', issuer: 'PwC', program: 'Forage', link: 'https://www.forage.com/simulations/pwc-uk/power-bi-rpa-xkyC' },
    { name: 'Azure Data Fundamentals', issuer: 'Microsoft Certified', program: 'DP-900', link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/'},
    { name: 'Applied Data Science Capstone', issuer: 'IBM', program: 'Coursera', link: 'https://www.coursera.org/professional-certificates/ibm-data-science' },
];


export const projects: Project[] = [
  {
    id: 1,
    title: 'Retail – Store-Level Profitability & Location Expansion Analysis',
    domain: 'Retail',
    description: 'Conducted store-level profitability analysis to uncover high-margin cities and underperforming outlets. Recommended top 5 locations for expansion with projected ROI.',
    problemStatement: 'Difficulty in identifying store-level profitability and finding the right cities for expansion.',
    solution: 'Developed interactive Power BI dashboards to track sales, costs, and profit margins while building a location recommendation framework.',
    insights: [
      'Found that 25% of stores contributed to 70% of total profits.',
      'Malls outperformed standalone stores by 18% in profitability.',
      'Recommended top 5 tier-2 cities with projected ROI of 12–15%.',
    ],
    tools: ['Power BI', 'SQL', 'Python'],
    dashboardImage: 'project1.png
',
    chartData: [
      { name: '10', value: 25 },
      { name: '20', value: 15 },
      { name: '40', value: 20 },
      { name: '60', value: 22 },
      { name: '80', value: 35 },
      { name: '100', value: 45 },
    ],
  },
  {
    id: 2,
    title: 'Cart Abandonment & Conversion Funnel Analysis',
    domain: 'E-commerce',
    description: 'Mapped the full customer journey and identified critical funnel drop-offs. Proposed solutions such as personalized reminders and optimized checkout to improve conversions.',
    problemStatement: 'High cart abandonment and poor visibility into customer checkout behavior.',
    solution: 'Built a funnel analysis dashboard to track drop-off points and customer engagement, with actionable retention strategies.',
    insights: [
      'Identified checkout stage as the highest drop-off point (35%).',
      'Suggested personalized reminders, improving conversions by 10%.',
      'Enhanced checkout speed, reducing abandonment by 8%.',
    ],
    tools: ['Tableau', 'SQL', 'Python'],
    dashboardImage: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chartData: [
      { name: 'View Product', value: 100 },
      { name: 'Add to Cart', value: 65 },
      { name: 'Checkout', value: 40 },
      { name: 'Purchase', value: 26 },
    ],
  },
  {
    id: 3,
    title: 'Customer Lifetime Value (CLV) Segmentation',
    domain: 'Banking',
    description: 'Built CLV-based cohorts to classify customers by profitability. Enabled targeted retention strategies and personalized offers for high-value segments.',
    problemStatement: 'Banks lacked insights into identifying and retaining high-value customers.',
    solution: 'Developed CLV segmentation models with churn prediction to guide customer retention strategies.',
    insights: [
      'Top 15% of customers drove 60% of revenue.',
      'Churn probability was highest among low-transaction, high-fee customers.',
      'Recommended tailored offers for premium segments, increasing retention by 12%.',
    ],
    tools: ['Python', 'SQL', 'Power BI'],
    dashboardImage: 'https://images.unsplash.com/photo-1628744448845-a1bdb4276137?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chartData: [
        { name: 'High Value', value: 15 },
        { name: 'Mid Value', value: 45 },
        { name: 'Low Value', value: 40 },
    ],
  },
    {
    id: 4,
    title: 'Hospital Resource Utilization & Patient Wait Time Analysis',
    domain: 'Healthcare',
    description: 'Analyzed resource utilization (beds, doctors, nurses) and patient wait times to identify bottlenecks. Proposed optimized scheduling to reduce delays by 20%.',
    problemStatement: 'Inefficient allocation of hospital resources leading to long patient wait times.',
    solution: 'Designed dashboards to monitor doctor availability, bed occupancy, and average wait times for optimized scheduling.',
    insights: [
      'Discovered peak OPD hours with 40% excess patient load.',
      'Optimized staff scheduling reduced wait time by 20%.',
      'Proposed real-time bed occupancy dashboards for better resource utilization.',
    ],
    tools: ['Python', 'Power BI'],
    dashboardImage: 'https://images.unsplash.com/photo-1605906232543-f62445b497b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chartData: [
        { name: 'Before', value: 45 },
        { name: 'After', value: 36 },
    ],
  },
  {
    id: 5,
    title: 'Warehouse-to-Store Delivery Efficiency',
    domain: 'Supply Chain',
    description: 'Monitored delivery routes and warehouse efficiency metrics. Designed dashboards to reduce delivery delays and optimize vehicle allocation.',
    problemStatement: 'Frequent delivery delays and lack of visibility into logistics efficiency.',
    solution: 'Built a delivery performance dashboard to monitor warehouse-to-store delivery times and costs.',
    insights: [
      'Identified 15% of delivery routes causing 40% of delays.',
      'Optimized delivery scheduling, reducing delays by 18%.',
      'Improved vehicle utilization by 12% through route clustering.',
    ],
    tools: ['Power BI', 'SQL', 'Excel'],
    dashboardImage: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chartData: [
        { name: 'On-Time', value: 94 },
        { name: 'Delayed', value: 6 },
    ],
  },
  {
    id: 6,
    title: 'Customer Usage & Recharge Behavior Analysis',
    domain: 'Telecom',
    description: 'Explored recharge frequency and usage trends to detect churn signals. Recommended targeted retention offers for at-risk customer groups.',
    problemStatement: 'Unclear recharge and usage patterns leading to increased customer churn.',
    solution: 'Created usage pattern dashboards to detect churn signals and design retention offers.',
    insights: [
      'Found that 30% of churned users had irregular recharge patterns.',
      'Customers on monthly packs had 25% higher retention rates.',
      'Targeted offers reduced churn risk by 10%.',
    ],
    tools: ['Python', 'Tableau'],
    dashboardImage: 'https://images.unsplash.com/photo-1593433399041-fb8927a76180?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chartData: [
        { name: 'Retained', value: 90 },
        { name: 'Churned', value: 10 },
    ],
  },
  {
    id: 7,
    title: 'Personal Expense Categorization & Trend Analysis',
    domain: 'Finance',
    description: 'Built an automated pipeline to categorize personal expenses and visualize spending trends. Empowered users with actionable budgeting insights.',
    problemStatement: 'Individuals lacked visibility into personal spending trends.',
    solution: 'Automated expense categorization pipeline with visualized monthly and yearly trends.',
    insights: [
      'Found that food and lifestyle made up 45% of monthly expenses.',
      'Provided personalized savings recommendations.',
      'Helped reduce unnecessary spending by 8%.',
    ],
    tools: ['Python', 'Power BI'],
    dashboardImage: 'https://images.unsplash.com/photo-1579621970795-87f54f597ba7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chartData: [
        { name: 'Food', value: 25 },
        { name: 'Lifestyle', value: 20 },
        { name: 'Housing', value: 30 },
        { name: 'Other', value: 25 },
    ],
  },
  {
    id: 8,
    title: 'Campaign ROI & Channel Effectiveness Analysis',
    domain: 'Marketing',
    description: 'Measured ROI across multiple marketing channels and campaigns. Identified the top 3 channels for maximum ROI, improving budget allocation efficiency.',
    problemStatement: 'Difficulty in tracking marketing ROI and identifying the best-performing channels.',
    solution: 'Developed ROI dashboards to analyze campaign performance and budget allocation.',
    insights: [
      'Discovered that social media drove 40% ROI compared to 18% from email campaigns.',
      'Recommended reallocating 20% of the budget to top-performing channels.',
      'Improved marketing ROI by 15%.',
    ],
    tools: ['Tableau', 'SQL', 'Power BI'],
    dashboardImage: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chartData: [
        { name: 'Social Media', value: 40 },
        { name: 'Email', value: 18 },
        { name: 'Search', value: 25 },
        { name: 'Display', value: 12 },
    ],
  },
  {
    id: 9,
    title: 'Claim Processing Time & Fraud Detection Analytics',
    domain: 'Insurance',
    description: 'Analyzed claim timelines and flagged anomalies for fraud detection. Reduced claim settlement time by suggesting process streamlining.',
    problemStatement: 'Claims were taking too long to settle, with fraud going undetected.',
    solution: 'Designed dashboards for claim processing timelines and anomaly detection models for fraud prevention.',
    insights: [
      'Reduced average claim processing time by 22%.',
      'Detected 7% of claims as potential fraud.',
      'Proposed automation in document verification to save 15% processing time.',
    ],
    tools: ['Python', 'SQL', 'Power BI'],
    dashboardImage: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chartData: [
        { name: 'Legitimate', value: 93 },
        { name: 'Fraudulent', value: 7 },
    ],
  },
  {
    id: 10,
    title: 'Household Electricity Consumption Patterns',
    domain: 'Energy',
    description: 'Studied household electricity usage patterns to detect peak hours. Delivered insights for energy-saving habits and sustainability programs.',
    problemStatement: 'Households lacked visibility into energy consumption, leading to wastage.',
    solution: 'Built dashboards to monitor electricity usage patterns and provide energy-saving recommendations.',
    insights: [
      'Found that 35% of consumption occurred during peak evening hours.',
      'Suggested energy-efficient appliances, reducing usage by 12%.',
      'Designed smart meter insights for household awareness.',
    ],
    tools: ['Python', 'Tableau', 'Power BI'],
    dashboardImage: 'https://images.unsplash.com/photo-1624397640148-94b8e84e54d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    chartData: [
        { name: 'Morning', value: 20 },
        { name: 'Afternoon', value: 30 },
        { name: 'Evening', value: 35 },
        { name: 'Night', value: 15 },
    ],
  },
];

import { Code2, Smartphone, Database, Wrench } from "lucide-react";

export const skills = [
  { title: "Frontend", icon: Code2, items: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Responsive web design"] },
  { title: "Mobile", icon: Smartphone, items: ["React Native", "Expo", "Mobile app development"] },
  { title: "Backend & data", icon: Database, items: ["Supabase", "Firebase / Firestore", "REST APIs", "Server-side development", "Authentication & authorization"] },
  { title: "Tools & platforms", icon: Wrench, items: ["Git", "GitHub", "Vercel", "Linux fundamentals"] },
];

export const learning = [
  { title: "DevOps", text: "Building on the fundamentals: automating builds, deployments and environments." },
  { title: "Linux & cloud", text: "Going deeper into Linux administration and cloud platforms." },
  { title: "CI/CD", text: "Automated testing and release pipelines for my own projects." },
  { title: "AI engineering", text: "Learning to build useful features on top of AI models." },
];


export const projects = [
  {
    name: "École Attendance", category: "SaaS / Education technology", status: "In development",
    summary: "A school attendance platform that replaces paper registers and scattered spreadsheets. Teachers record attendance in a mobile app, and administrators follow absences, justifications and re-entry permits from one web dashboard.",
    problem: "Schools in Tunisia often track absences by hand, which makes justifications, re-entry authorizations and statistics slow to follow up. This product puts all of it in one place.",
    features: ["Student and classroom management", "Teacher attendance recording", "Absence tracking and justification", "Re-entry authorization and entry permits", "User and role management", "Disciplinary records", "Statistics and PDF reports"],
    stack: ["Next.js", "React Native", "Expo", "Supabase", "Firebase (legacy)", "Vercel"],
    demo: "https://ecole-attendance-tf68.vercel.app/", repo: null,
  },

  {
    
name: "States Battle — Quiz Game",
category: "Mobile / Educational Gaming",
status: "In Development",

summary:
"A competitive educational quiz game built with React Native and Expo, where players answer questions, earn points, and compete to represent their governorate. The game combines knowledge-based challenges, automatic score calculation, and a governorate leaderboard to encourage learning through friendly competition.",

features: [
"Interactive multiple-choice quizzes",
"Governorate-based player competition",
"Automatic scoring and winner calculation",
"Leaderboard ranking by governorate",
"Question bank and score storage with Supabase",
"Arabic interface designed for local players"
],

stack: ["React Native", "Expo", "Supabase"],

demo: null,
repo: null,


  },
];

export const experience = {
  role: "Computer Science Teacher", place: "Secondary education, Tunisia", period: "September 2008 – Present",
  points: [
    "Teach computer science, programming and algorithmic thinking to secondary-school students.",
    "Introduce students to software development and office productivity tools.",
    "Design educational activities and practical exercises.",
    "Support students in building their digital skills.",
    "Apply technology to real educational problems, and build personal software projects alongside teaching.",
  ],
};

export const education = [
  { title: "Professional Master's degree in Web Development", detail: "Bac+6 academic background" },
];


export const certifications = [];

export interface Project {
  id: number;
  title: string;
  domain: string;
  description: string;
  problemStatement: string;
  solution: string;
  insights: string[];
  tools: string[];
  dashboardImage: string;
  chartData: { name: string; value: number }[];
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  type: 'work' | 'education' | 'internship';
}

export interface SkillSubGroup {
  name: string;
  skills: string[];
}

export interface SkillGroup {
  icon: string;
  title: string;
  subgroups: SkillSubGroup[];
}

export interface Certification {
  name: string;
  issuer: string;
  program: string;
  link?: string;
}
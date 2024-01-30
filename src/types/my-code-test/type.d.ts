export type Menu = {
  name: string;
  href: string;
};

export type Project = {
  name: string;
  texts: string;
  description: string;
};

export type FrequentQuestion = {
  question: string;
  answer: string;
};
export interface HomePage {
  menu: Menu[];
  projects: Project[];
  investor_service_section: string[];
  frequent_questions: FrequentQuestion[];
}

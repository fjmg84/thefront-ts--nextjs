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

export type InvestmentManager = {
  record: string;
  date: string;
  admin: string;
  manager: string;
};

export type CommercialAgents = {
  title: string;
  data: [
    {
      name: string;
      email: string;
      phone: string;
      address: string;
    },
  ];
};

export type Footer = {
  affiliates: string[];
  pensioners: string[];
  companies: string[];
  customer_service: string[];
  voluntary_savings: string[];
};

export interface HomePage {
  menu: Menu[];
  projects: Project[];
  investor_service_section: string[];
  frequent_questions: FrequentQuestion[];
  investment_manager: InvestmentManager[];
  principal_function: string[];
  commercial_agents: CommercialAgents[];
}

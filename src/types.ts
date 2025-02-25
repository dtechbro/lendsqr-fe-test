export interface User {
  userId: string;
  username: string;
  email: string;
  phone: string;
  organization: string;
  status: string;
  dateJoined: string;
  accountBalance: string;
  savingsBalance: string;
  loanBalance: string;
  tier: string;
  bankDetails: {
    accountNumber: string;
    bankName: string;
  };
  personalInfo: {
    fullName: string;
    gender: string;
    maritalStatus: string;
    children: number;
    residenceType: string;
    bvn: string;
  };
  employment: {
    education: string;
    status: string;
    sector: string;
    experience: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantors: {
    fullName: string;
    phone: string;
    email: string;
    relationship: string;
  }[];
}
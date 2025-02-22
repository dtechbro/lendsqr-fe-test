import {
  DashboardIcon,
  GuarantorIcon,
  LoanIcon,
  UsersIcon,
  SavingsIcon,
  DecisionModelIcon,
  WhitelistIcon,
  CancelIcon,
  OrganizationIcon,
  SavingsProductsIcon,
  FeeandChargesIcon,
  TransactionsIcon,
  ServicesIcon,
  ServiceAccountIcon,
  SettlementIcon,
  ReportsIcon,
  LoanRequestIcon,
  PreferenceIcon,
  FeesAndPricingIcon,
  AuditLogsIcon,
  SystemMessageIcon,
} from "../assets/SidebarIcons";

export const sidebarItems = [
  { path: "#", name: "Dashboard", icon: <DashboardIcon /> },

  {
    title: "CUSTOMERS",
    items: [
      { path: "/users", name: "Users", icon: <UsersIcon /> },
      { path: "/empty", name: "Guarantors", icon: <GuarantorIcon /> },
      { path: "#", name: "Loans", icon: <LoanIcon /> },
      { path: "#", name: "Decision Models", icon: <DecisionModelIcon /> },
      { path: "#", name: "Savings", icon: <SavingsIcon /> },
      { path: "#", name: "Loan Requests", icon: <LoanRequestIcon /> },
      { path: "#", name: "Whitelist", icon: <WhitelistIcon /> },
      { path: "#", name: "Karma", icon: <CancelIcon /> },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      { path: "#", name: "Organization", icon: <OrganizationIcon /> },
      { path: "#", name: "Loan Products", icon: <LoanRequestIcon /> },
      { path: "#", name: "Savings Products", icon: <SavingsProductsIcon /> },
      { path: "#", name: "Fees and Charges", icon: <FeeandChargesIcon /> },
      { path: "#", name: "Transactions", icon: <TransactionsIcon /> },
      { path: "#", name: "Services", icon: <ServicesIcon /> },
      { path: "#", name: "Service Account", icon: <ServiceAccountIcon /> },
      { path: "#", name: "Settlements", icon: <SettlementIcon /> },
      { path: "#", name: "Reports", icon: <ReportsIcon /> },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { path: "#", name: "Preferences", icon: <PreferenceIcon /> },
      { path: "#", name: "Fees and Pricing", icon: <FeesAndPricingIcon /> },
      { path: "#", name: "Audit Logs", icon: <AuditLogsIcon /> },
      { path: "#", name: "System Messages", icon: <SystemMessageIcon /> },
    ],
  },
];

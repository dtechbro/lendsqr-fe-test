import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to generate Nigerian phone numbers
const generateNigerianPhoneNumber = () => {
  const prefixes = ['070', '080', '081', '090', '091'];
  const prefix = faker.helpers.arrayElement(prefixes);
  const suffix = faker.string.numeric(8); // 8 random digits
  return `${prefix}${suffix}`;
};

// Helper function to format amounts with commas
const formatAmount = (amount) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(amount);
};

// Helper function to generate a unique 10-digit BVN
const generateBVN = () => {
  return faker.string.numeric(10);
};

// Helper function to generate a user tag
const generateUserTag = (company) => {
  const prefix = company.slice(0, 3).toUpperCase();
  const suffix = faker.string.alphanumeric(7);
  return `${prefix}${suffix}`;
};

const generateUser = () => {
  const company = faker.helpers.arrayElement(['Lendstar', 'Irorun', 'Kredi', 'Lendsqr']);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company.toLowerCase()}.com`,
    phone: generateNigerianPhoneNumber(),
    organization: company,
    status: faker.helpers.arrayElement(['Active', 'Pending', 'Inactive', 'Blacklisted']),
    dateJoined: faker.date.past().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    accountBalance: formatAmount(faker.number.float({ min: 1000, max: 500000, precision: 0.01 })),
    savingsBalance: formatAmount(faker.number.float({ min: 0, max: 1000000, precision: 0.01 })),
    loanBalance: formatAmount(faker.number.float({ min: 0, max: 500000, precision: 0.01 })),
    tier: faker.helpers.arrayElement(['★☆☆', '★★☆', '★★★']),
    bankDetails: {
      accountNumber: faker.finance.accountNumber(10),
      bankName: faker.helpers.arrayElement(['Providus Bank', 'GTBank', 'Zenith Bank']),
    },
    personalInfo: {
      fullName: `${firstName} ${lastName}`,
      gender: faker.helpers.arrayElement(['Male', 'Female']),
      maritalStatus: faker.helpers.arrayElement(['Single', 'Married', 'Divorced']),
      children: faker.number.int({ min: 0, max: 5 }),
      residenceType: faker.helpers.arrayElement(["Parent's Apartment", 'Rented', 'Owned']),
      bvn: generateBVN(), // Add BVN
    },
    employment: {
      education: faker.helpers.arrayElement(['B.Sc', 'M.Sc', 'Ph.D', 'Diploma']),
      status: faker.helpers.arrayElement(['Employed', 'Unemployed', 'Self-Employed']),
      sector: faker.helpers.arrayElement(['FinTech', 'Health', 'Education', 'Technology']),
      experience: `${faker.number.int({ min: 1, max: 20 })} years`,
      monthlyIncome: formatAmount(faker.number.float({ min: 100000, max: 1000000, precision: 0.01 })),
      loanRepayment: formatAmount(faker.number.float({ min: 10000, max: 100000, precision: 0.01 })),
    },
    socials: {
      twitter: `@${faker.internet.username()}`,
      facebook: faker.internet.username(),
      instagram: `@${faker.internet.username()}`,
    },
    guarantors: [
      {
        fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
        phone: generateNigerianPhoneNumber(),
        email: faker.internet.email(),
        relationship: faker.helpers.arrayElement(['Brother', 'Sister', 'Friend', 'Colleague']),
      },
      {
        fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
        phone: generateNigerianPhoneNumber(),
        email: faker.internet.email(),
        relationship: faker.helpers.arrayElement(['Father', 'Mother', 'Uncle', 'Aunt']),
      },
    ],
    userTag: generateUserTag(company), // Add user tag
  };
};

const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(generateUser());
  }
  return users;
};

const users = generateUsers(500); // Generate 500 users
const filePath = path.join(__dirname, '../src/data/users.json');
fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

console.log('Generated 500 users and saved to src/data/users.json');
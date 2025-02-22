import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    organization: faker.helpers.arrayElement(['Lendstar', 'Irorun', 'Kredi', 'Lendsqr']),
    status: faker.helpers.arrayElement(['Active', 'Pending', 'Inactive', 'Blacklisted']),
    dateJoined: faker.date.past().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    accountBalance: `₦${faker.finance.amount({ min: 1000, max: 500000, dec: 2 })}`,
    savingsBalance: `₦${faker.finance.amount({ min: 0, max: 1000000, dec: 2 })}`,
    loanBalance: `₦${faker.finance.amount({ min: 0, max: 500000, dec: 2 })}`,
    tier: faker.helpers.arrayElement(['★☆☆', '★★☆', '★★★']),
    bankDetails: {
      accountNumber: faker.finance.accountNumber(10),
      bankName: faker.helpers.arrayElement(['Providus Bank', 'GTBank', 'Zenith Bank']),
    },
    personalInfo: {
      fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
      gender: faker.helpers.arrayElement(['Male', 'Female']),
      maritalStatus: faker.helpers.arrayElement(['Single', 'Married', 'Divorced']),
      children: faker.number.int({ min: 0, max: 5 }),
      residenceType: faker.helpers.arrayElement(["Parent's Apartment", 'Rented', 'Owned']),
    },
    employment: {
      education: faker.helpers.arrayElement(['B.Sc', 'M.Sc', 'Ph.D', 'Diploma']),
      status: faker.helpers.arrayElement(['Employed', 'Unemployed', 'Self-Employed']),
      sector: faker.helpers.arrayElement(['FinTech', 'Health', 'Education', 'Technology']),
      experience: `${faker.number.int({ min: 1, max: 20 })} years`,
      monthlyIncome: `₦${faker.finance.amount({ min: 100000, max: 1000000, dec: 2 })}`,
      loanRepayment: `₦${faker.finance.amount({ min: 10000, max: 100000, dec: 0 })}`,
    },
    socials: {
      twitter: `@${faker.internet.username()}`,
      facebook: faker.internet.username(),
      instagram: `@${faker.internet.username()}`,
    },
    guarantors: [
      {
        fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
        phone: faker.phone.number(),
        email: faker.internet.email(),
        relationship: faker.helpers.arrayElement(['Brother', 'Sister', 'Friend', 'Colleague']),
      },
      {
        fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
        phone: faker.phone.number(),
        email: faker.internet.email(),
        relationship: faker.helpers.arrayElement(['Father', 'Mother', 'Uncle', 'Aunt']),
      },
    ],
  };
};

const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(generateUser());
  }
  return users;
};

const users = generateUsers(125); // Generate 500 users
const filePath = path.join(__dirname, '../src/data/users.json');
fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

console.log('Generated 500 users and saved to src/data/users.json');
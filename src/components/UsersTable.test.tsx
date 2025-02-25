// Import necessary libraries and components
// import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For additional matchers
import UsersTable from "./UsersTable";
import { User } from "../types"; // Adjust the import path as needed

// Mock data for testing
const mockUsers: User[] = [
  {
    userId: "1",
    organization: "Org A",
    username: "user1",
    email: "user1@example.com",
    phone: "123-456-7890",
    dateJoined: "2023-01-01",
    status: "active",
    userTag: "ORG123",
    accountBalance: "₦100,000",
    savingsBalance: "₦50,000",
    loanBalance: "₦0",
    tier: "★★☆",
    bankDetails: {
      accountNumber: "1234567890",
      bankName: "Test Bank",
    },
    personalInfo: {
      fullName: "Test User",
      gender: "Male",
      maritalStatus: "Single",
      children: 0,
      residenceType: "Rented",
      bvn: "1234567890",
    },
    employment: {
      education: "B.Sc",
      status: "Employed",
      sector: "Technology",
      experience: "5 years",
      monthlyIncome: "₦500,000",
      loanRepayment: "₦0",
    },
    socials: {
      twitter: "@test",
      facebook: "test",
      instagram: "@test",
    },
    guarantors: [
      {
        fullName: "Test Guarantor",
        phone: "1234567890",
        email: "guarantor@test.com",
        relationship: "Friend",
      },
    ],
  },
  {
    userId: "2",
    organization: "Org B",
    username: "user2",
    email: "user2@example.com",
    phone: "987-654-3210",
    dateJoined: "2023-02-01",
    status: "inactive",
    userTag: "ORG456",
    accountBalance: "₦200,000",
    savingsBalance: "₦75,000",
    loanBalance: "₦25,000",
    tier: "★★★",
    bankDetails: {
      accountNumber: "0987654321",
      bankName: "Test Bank",
    },
    personalInfo: {
      fullName: "Test User 2",
      gender: "Female",
      maritalStatus: "Married",
      children: 2,
      residenceType: "Owned",
      bvn: "0987654321",
    },
    employment: {
      education: "M.Sc",
      status: "Self-Employed",
      sector: "Finance",
      experience: "8 years",
      monthlyIncome: "₦800,000",
      loanRepayment: "₦50,000",
    },
    socials: {
      twitter: "@test2",
      facebook: "test2",
      instagram: "@test2",
    },
    guarantors: [
      {
        fullName: "Test Guarantor 2",
        phone: "0987654321",
        email: "guarantor2@test.com",
        relationship: "Sibling",
      },
    ],
  },
];

// Mock the navigate function from react-router-dom
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

// Describe block groups related tests
describe("UsersTable Component", () => {
  // Test 1: Renders the table with user data
  it("renders the table with user data", () => {
    // Render the component with mock data
    render(<UsersTable users={mockUsers} />);

    // Check if the table headers are rendered
    expect(screen.getByText("Organization")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
    expect(screen.getByText("Date Joined")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();

    // Check if the user data is rendered
    expect(screen.getByText("Org A")).toBeInTheDocument();
    expect(screen.getByText("user1")).toBeInTheDocument();
    expect(screen.getByText("user1@example.com")).toBeInTheDocument();
    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("2023-01-01")).toBeInTheDocument();
    expect(screen.getByText("active")).toBeInTheDocument();
  });

  // Test 2: Opens the filter modal when the filter icon is clicked
  it("opens the filter modal when the filter icon is clicked", () => {
    render(<UsersTable users={mockUsers} />);

    // Find the filter icon and click it
    const filterIcon = screen.getByRole("button", { name: /filter/i }); // Adjusted to get by role directly
    fireEvent.click(filterIcon);

    // Check if the filter modal is opened
    expect(screen.getByText("Filter By Organization")).toBeInTheDocument(); // Adjust based on your modal content
  });

  // Test 3: Opens the action modal when the action button is clicked
  it("opens the action modal when the action button is clicked", () => {
    render(<UsersTable users={mockUsers} />);

    // Find the action button (three dots) and click it
    const actionButton = screen.getAllByRole("button", { name: /actions/i })[0]; // Assuming the first action button
    fireEvent.click(actionButton);

    // Check if the action modal is opened
    expect(screen.getByText("View Details")).toBeInTheDocument();
    expect(screen.getByText("Blacklist User")).toBeInTheDocument();
    expect(screen.getByText("Activate User")).toBeInTheDocument();
  });

  // Test 4: Navigates to the user details page when "View Details" is clicked
  it("navigates to the user details page when 'View Details' is clicked", () => {
    // Mock the navigate function from react-router-dom
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));

    render(<UsersTable users={mockUsers} />);

    // Open the action modal
    const actionButton = screen.getAllByRole("button", { name: /actions/i })[0];
    fireEvent.click(actionButton);

    // Click the "View Details" button
    const viewDetailsButton = screen.getByText("View Details");
    fireEvent.click(viewDetailsButton);

    // Check if the navigate function was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith("/users/1");
  });
});

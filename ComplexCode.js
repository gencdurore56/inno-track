/* 
Filename: ComplexCode.js
Description: A complex and sophisticated JavaScript code that demonstrates dynamic data manipulation and advanced programming techniques.
Author: [Your Name]
Date: [Date]
*/

// Define an array of users
const users = [
  { name: "John", age: 21 },
  { name: "Sarah", age: 32 },
  { name: "Michael", age: 26 },
  { name: "Emily", age: 19 },
];

// Calculate the average age of the users
const calculateAverageAge = () => {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
};

// Sort the users by age in ascending order
const sortUsersByAge = () => {
  return users.sort((a, b) => a.age - b.age);
};

// Filter users based on age criteria
const filterUsersByAge = (minAge, maxAge) => {
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
};

// Generate a list of user names
const generateUserNamesList = () => {
  return users.map((user) => user.name);
};

// Find a user by name
const findUserByName = (name) => {
  return users.find((user) => user.name === name);
};

// Initialize a new object representing the application state
const appState = {
  averageAge: 0,
  sortedUsers: [],
  filteredUsers: [],
  userNamesList: [],
  searchedUser: null,
};

// Update the application state
const updateAppState = () => {
  appState.averageAge = calculateAverageAge();
  appState.sortedUsers = sortUsersByAge();
  appState.filteredUsers = filterUsersByAge(20, 30);
  appState.userNamesList = generateUserNamesList();
  appState.searchedUser = findUserByName("John");
};

// Render the application
const renderApp = () => {
  console.log("Average Age:", appState.averageAge);
  console.log("Sorted Users:", appState.sortedUsers);
  console.log("Filtered Users:", appState.filteredUsers);
  console.log("User Names List:", appState.userNamesList);
  console.log("Searched User:", appState.searchedUser);
};

// Call the necessary functions to update and render the application
updateAppState();
renderApp();
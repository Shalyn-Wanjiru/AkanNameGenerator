// Akan Name Generator Script
// Author: Shalyn
// Description:
// This script generates Akan names based on the user's birth date and gender.
// It uses the Akan naming system, which assigns names based on the day of the week a person is born.
// The script calculates the day of the week from the provided date and then selects the appropriate Akan name based on the user's gender.
// The script also includes input validation to ensure that the user provides a valid date
// and gender selection. If the input is invalid, the script will display an error message and prompt the user to correct their input.

// Arrays storing Akan names for males and females based on the day of the week
const maleNames = [
    "Kwasi", // Sunday
    "Kwadwo", // Monday
    "Kwabena", // Tuesday
    "Kwaku", // Wednesday
    "Yaw", // Thursday
    "Kofi", // Friday
    " Kwame" // Saturday
];

const femaleNames = [
    "Akosua", // Sunday
    "Adwoa", // Monday
    "Abenaa", // Tuesday
    "Akua", // Wednesday
    "Yaa", // Thursday
    "Abla", // Friday
    "Ama" // Saturday
];

// Function to calculate the day of the week from a given date
const getDayOfWeek = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}

// Function to generate Akan name based on birth date and gender
const generateAkanName = (birthDate, gender) => {
    const dayOfWeek = getDayOfWeek(birthDate);
    const dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(dayOfWeek);

    if (gender === "male") {
        return maleNames[dayIndex];
    } else if (gender === "female") {
        return femaleNames[dayIndex];
    } else {
        throw new Error("Invalid gender. Please choose 'male' or 'female'.");
    }
};
// Event listener for the form submission
document.getElementById("akanForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting normally 
    // Get user input values
    const birthDateInput = document.getElementById("birthDate").value;
    const genderInput = document.querySelector('input[name="gender"]:checked')?.value;

    // Input validation
    if (!birthDateInput || !genderInput) {
        alert("Please fill in all fields.");
        return;
    }

    const birthDate = new Date(birthDateInput);
    if (isNaN(birthDate.getTime())) {
        alert("Please enter a valid date.");
        return;
    }

    try {
        const akanName = generateAkanName(birthDate, genderInput);
        document.getElementById("result").innerText = `Your Akan name is: ${akanName}`;
    } catch (error) {
        alert(error.message);
    }
});
// Note: Ensure that the HTML form has the correct IDs and name attributes for the input fields to match the selectors used in this script.
// Example HTML structure for reference:
/*
<form id="akanForm">
    <input type="date" id="birthDate" required>
    <input type="radio" name="gender" value="male" required> Male
    <input type="radio" name="gender" value="female" required> Female
    <button type="submit">Generate Akan Name</button>
</form>
<div id="result"></div>
*/  

// Calculate the day of the week from a given date
let CC = Math.floor(2024 / 100); // Example date
let YY = 24; // Last two digits of the year
let MM = 6; // Example month (June)
let DD = 15; // Example day

let dayOfWeek = (CC / 4 - 2 * CC - 1 + 5 * YY / 4 + 26 * (MM + 1) / 10 + DD) % 7;
console.log(`The day of the week is ${dayOfWeek}.`);

// Handle negative dayOfWeek values
if (dayOfWeek < 0) {
    dayOfWeek += 7;
}

// Determine Akan name based on the day of the week and gender
let gender = "male"; // Example gender
if (gender === "male") {
    akanName = maleNames[dayOfWeek];
} else if (gender === "female") {
    akanName = femaleNames[dayOfWeek];
}

// Display the result
console.log(`Your Akan name is: ${akanName}`);

document.getElementById("akanForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting normally

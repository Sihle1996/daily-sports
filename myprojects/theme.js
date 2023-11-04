
const theme = document.querySelector(".theme-button");
const sheet = document.getElementById("theme-stylesheet");

// Function to set the theme mode in localStorage
function setThemeMode(themes) {
    localStorage.setItem('theme', themes);
}

// Check if a theme mode is stored in localStorage
const storedTheme = localStorage.getItem('theme');

// Use the stored theme mode or set a default if none is found
const currentTheme = storedTheme || 'dark';

// Apply the theme mode to the website
if (currentTheme === 'dark') {
    // Apply dark mode styles here
    sheet.disabled = false; // Enable dark mode stylesheet if you used the previous example
} else {
    // Apply light mode styles here
    sheet.disabled = true; // Disable dark mode stylesheet if you used the previous example
}

theme.addEventListener("click", () => {
    // Toggle the "disabled" attribute to enable or disable the dark mode stylesheet
    sheet.disabled = !sheet.disabled;

    // Update localStorage with the current theme mode
    const currentTheme = sheet.disabled ? 'light' : 'dark';
    setThemeMode(currentTheme);

    theme.classList.add('cliked');
});
   
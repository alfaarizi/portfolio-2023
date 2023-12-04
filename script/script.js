document.addEventListener("DOMContentLoaded", function () {
    // Get the current page's title
    var pageTitle = "[" + document.title.split(" - ")[0] + "]"; // Assuming the title format is "PageName - Zizi's Portfolio"

    // Find the nav-title element
    var navTitleElement = document.getElementById("nav-title");

    // Update the content of the nav-title element with the current page title
    if (navTitleElement) {
        navTitleElement.innerHTML = "<p class='navbar-brand d-xl-none d-lg-none d-xl-block'>" + pageTitle + "</p>";
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        // Toggle body class between dark-mode and light-mode
        document.body.classList.toggle("dark-mode");

        // Toggle header class between dark-mode and light-mode
        var header = document.querySelector('header');
        header.classList.toggle('dark-mode');

        // Toggle footer class between dark-mode and light-mode
        var footer = document.querySelector('footer');
        footer.classList.toggle('dark-mode');
    }

    // Get the darkModeToggle button
    var darkModeToggle = document.getElementById("darkModeToggle");

    // Add a click event listener to the button
    darkModeToggle.addEventListener("click", function () {
        toggleDarkMode();

        // Save the dark mode preference in local storage
        var isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
    });

    // Check if there is a saved dark mode preference
    var savedDarkMode = localStorage.getItem("darkMode");

    // If dark mode was previously selected, apply it
    if (savedDarkMode === "true") {
        toggleDarkMode();
    }

});

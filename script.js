function handleDarkMode() {
    const moonIcon = document.getElementById("moon");
    const sunIcon = document.getElementById("sun");

    // Switch visibility
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");

    localStorage.setItem("mode", "dark")
}

function handleLightMode() {
    const moonIcon = document.getElementById("moon");
    const sunIcon = document.getElementById("sun");
    
    // Switch visibility
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");

    localStorage.setItem("mode", "light");
}
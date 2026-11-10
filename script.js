
// Display the current year in the footer
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}

// RainGuard simulator
const waterLevel = document.getElementById("waterLevel");
const litterLevel = document.getElementById("litterLevel");
const waterValue = document.getElementById("waterValue");
const litterValue = document.getElementById("litterValue");
const water = document.getElementById("water");
const float = document.getElementById("float");
const statusMessage = document.getElementById("statusMessage");
const resetButton = document.getElementById("resetButton");

function updateSimulator() {
    if (!waterLevel || !litterLevel) return;

    const waterAmount = Number(waterLevel.value);
    const litterAmount = Number(litterLevel.value);

    waterValue.textContent = waterAmount + "%";
    litterValue.textContent = litterAmount + "%";

    // Update water illustration
    water.style.height = waterAmount + "%";

    // Update floating indicator
    float.style.bottom = (waterAmount + 5) + "%";

    // Update system status
    if (waterAmount >= 75 ||
        (waterAmount >= 55 && litterAmount >= 70)) {

        statusMessage.textContent =
            "HIGH WATER LEVEL! Inspect the model and check the flow path.";

        statusMessage.className = "status danger";

    } else if (litterAmount >= 60 || waterAmount >= 50) {

        statusMessage.textContent =
            "INSPECTION NEEDED: Check the mesh and collection basket.";

        statusMessage.className = "status warning-status";

    } else {

        statusMessage.textContent =
            "NORMAL FLOW: Continue monitoring the model.";

        statusMessage.className = "status normal";
    }
}

// Listen for slider changes
if (waterLevel && litterLevel) {
    waterLevel.addEventListener("input", updateSimulator);
    litterLevel.addEventListener("input", updateSimulator);

    updateSimulator();
}

// Reset simulator
if (resetButton) {
    resetButton.addEventListener("click", function () {
        waterLevel.value = 30;
        litterLevel.value = 15;
        updateSimulator();
    });
}

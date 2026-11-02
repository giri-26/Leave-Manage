
let casualLeave = 10;
let medicalLeave = 6;

const casualDisplay = document.getElementById("casualBalance");
const medicalDisplay = document.getElementById("medicalBalance");

function updateBalance() {
    casualDisplay.textContent = casualLeave;
    medicalDisplay.textContent = medicalLeave;
}

// Apply for leave
document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const leaveType = document.getElementById("leaveType").value;
    const days = Number(document.getElementById("days").value);

    if (!Number.isInteger(days) || days < 1) {
        alert("Please enter a valid number of days.");
        return;
    }

    if (leaveType === "casual") {
        if (days > casualLeave) {
            alert("Insufficient casual leave balance!");
            return;
        }

        casualLeave -= days;
    } else {
        if (days > medicalLeave) {
            alert("Insufficient medical leave balance!");
            return;
        }

        medicalLeave -= days;
    }

    updateBalance();

    alert("Leave applied successfully!");

    this.reset();
});

// Refresh balance
document.getElementById("refreshBtn").addEventListener("click", function() {
    updateBalance();
    alert("Leave balance refreshed!");
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", function() {
    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {
        alert("Logged out successfully!");
    }
});

updateBalance();
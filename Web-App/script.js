Web-App/script.js
function calculateAttendance() {
    let total = document.getElementById("total").value;
    let attended = document.getElementById("attended").value;
    let resultBox = document.getElementById("result");

    // Validation
    if (total === "" || attended === "" || total <= 0 || attended < 0) {
        resultBox.innerHTML = "Please enter valid numbers";
        resultBox.style.backgroundColor = "#fecaca"; // Light red
        resultBox.style.color = "red";
        return;
    }

    // Calculate percentage
    let percentage = (attended / total) * 100;
    percentage = percentage.toFixed(2);

    // Display result
    resultBox.innerHTML = "Attendance Percentage: " + percentage + "%";

    // Color coding
    if (percentage >= 75) {
        resultBox.style.backgroundColor = "#bbf7d0"; // Light green
        resultBox.style.color = "green";
    } else {
        resultBox.style.backgroundColor = "#fecaca"; // Light red
        resultBox.style.color = "red";
    }
}

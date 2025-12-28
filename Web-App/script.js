Web-App/script.js
function calculateAttendance() {
    let total = document.getElementById("total").value;
    let attended = document.getElementById("attended").value;
    let resultBox = document.getElementById("result");

    if (total === "" || attended === "" || total <= 0) {
        resultBox.innerHTML = "Please enter valid values";
        resultBox.style.backgroundColor = "#ffcccc";
        resultBox.style.color = "red";
        return;
    }

    let percentage = (attended / total) * 100;
    percentage = percentage.toFixed(2);

    resultBox.innerHTML = "Attendance Percentage: " + percentage + "%";

    if (percentage >= 75) {
        resultBox.style.backgroundColor = "#ccffcc";
        resultBox.style.color = "green";
    } else {
        resultBox.style.backgroundColor = "#ffcccc";
        resultBox.style.color = "red";
    }
}

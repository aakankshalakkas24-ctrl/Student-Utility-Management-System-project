Web-App/script.js
function calculateAttendance() {
    var total = document.getElementById("total").value;
    var attended = document.getElementById("attended").value;
    var result = document.getElementById("result");

    if (total === "" || attended === "" || total <= 0) {
        result.innerHTML = "Please enter valid numbers";
        result.style.backgroundColor = "#fecaca";
        result.style.color = "red";
        return;
    }

    var percentage = (attended / total) * 100;
    percentage = percentage.toFixed(2);

    result.innerHTML = "Attendance Percentage: " + percentage + "%";

    if (percentage >= 75) {
        result.style.backgroundColor = "#bbf7d0";
        result.style.color = "green";
    } else {
        result.style.backgroundColor = "#fecaca";
        result.style.color = "red";
    }
}

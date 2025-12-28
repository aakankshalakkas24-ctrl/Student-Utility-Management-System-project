Web-App/script.js
function calculateAttendance() {
    let total = document.getElementById("total").value;
    let attended = document.getElementById("attended").value;

    if (total == "" || attended == "") {
        document.getElementById("result").innerHTML = "Please enter values";
        return;
    }

    let percentage = (attended / total) * 100;

    document.getElementById("result").innerHTML =
        "Attendance Percentage: " + percentage.toFixed(2) + "%";
}

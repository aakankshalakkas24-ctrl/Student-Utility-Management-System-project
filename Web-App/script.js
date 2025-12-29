Web-App/script.js
function showDetails() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var attendance = document.getElementById("attendance").value;
    var marks = document.getElementById("marks").value;

    if (name === "" || roll === "" || attendance === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    var outputBox = document.getElementById("output");

    outputBox.innerHTML =
        "<h3 style='color:#ff5722;'>Student Details</h3>" +
        "<p style='color:#3f51b5;'><b>Name:</b> " + name + "</p>" +
        "<p style='color:#009688;'><b>Roll No:</b> " + roll + "</p>" +
        "<p style='color:#4caf50;'><b>Attendance:</b> " + attendance + "%</p>" +
        "<p style='color:#9c27b0;'><b>Marks:</b> " + marks + "</p>";
}


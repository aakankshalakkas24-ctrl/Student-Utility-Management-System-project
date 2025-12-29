Web-App/script.js
function showResult() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var attendance = document.getElementById("attendance").value;
    var marks = document.getElementById("marks").value;

    if (name === "" || roll === "" || attendance === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    var grade = "";
    if (marks >= 75) grade = "A";
    else if (marks >= 60) grade = "B";
    else if (marks >= 50) grade = "C";
    else grade = "Fail";

    document.getElementById("output").innerHTML =
        "<p><span class='label'>Name:</span> <span class='name'>" + name + "</span></p>" +
        "<p><span class='label'>Roll No:</span> <span class='roll'>" + roll + "</span></p>" +
        "<p><span class='label'>Attendance:</span> <span class='attendance'>" + attendance + "%</span></p>" +
        "<p><span class='label'>Marks:</span> <span class='marks'>" + marks + "</span></p>" +
        "<p><span class='label'>Grade:</span> <span class='grade'>" + grade + "</span></p>";
}



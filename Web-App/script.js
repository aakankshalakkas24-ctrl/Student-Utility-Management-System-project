Web-App/script.js
function showDetails() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let attendance = document.getElementById("attendance").value;
    let marks = document.getElementById("marks").value;

    if (name === "" || roll === "" || attendance === "" || marks === "") {
        alert("Please fill all fields");
        return;
    }

    let grade = "";

    if (marks >= 80) grade = "A";
    else if (marks >= 60) grade = "B";
    else if (marks >= 40) grade = "C";
    else grade = "Fail";

    document.getElementById("result").innerHTML = `
        <h3>📋 Student Report</h3>
        <p><b>Name:</b> <span class="name">${name}</span></p>
        <p><b>Roll No:</b> <span class="roll">${roll}</span></p>
        <p><b>Attendance:</b> <span class="attendance">${attendance}%</span></p>
        <p><b>Marks:</b> <span class="marks">${marks}</span></p>
        <p><b>Grade:</b> <span class="grade">${grade}</span></p>
    `;
}


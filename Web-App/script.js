Web-App/script.js
function showDetails() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let attendance = document.getElementById("attendance").value;
    let marks = document.getElementById("marks").value;

    if (name === "" || roll === "" || attendance === "" || marks === "") {
        alert("Please fill all details");
        return;
    }

    let result = `
        <p style="color:#ff5722;"><b>Name:</b> ${name}</p>
        <p style="color:#3f51b5;"><b>Roll No:</b> ${roll}</p>
        <p style="color:#4caf50;"><b>Attendance:</b> ${attendance}%</p>
        <p style="color:#9c27b0;"><b>Marks:</b> ${marks}</p>
    `;

    document.getElementById("output").innerHTML = result;
}

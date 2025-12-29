Web-App/script.js
function showDetails() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let attendance = document.getElementById("attendance").value;
    let marks = document.getElementById("marks").value;

    if (name === "" || roll === "" || attendance === "" || marks === "") {
        alert("Please fill all the fields");
        return;
    }

    let output = document.getElementById("output");

    output.innerHTML = `
        <h3 style="color:#ff5722; text-align:center;">Student Details</h3>
        <p><span class="label">Name:</span> <span class="value name">${name}</span></p>
        <p><span class="label">Roll No:</span> <span class="value roll">${roll}</span></p>
        <p><span class="label">Attendance:</span> <span class="value attendance">${attendance}%</span></p>
        <p><span class="label">Marks:</span> <span class="value marks">${marks}</span></p>
    `;
}


Web-App/script.js
function processData() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const att = document.getElementById("attendance").value;
    const marks = document.getElementById("marks").value;

    if (!name || !roll || !att || !marks) {
        alert("Please enter all details!");
        return;
    }

    document.getElementById("idle-state").style.display = "none";
    const report = document.getElementById("report-content");
    report.style.display = "block";

    let grade = marks >= 40 ? "QUALIFIED" : "NOT QUALIFIED";
    let gradeColor = marks >= 40 ? "#22c55e" : "#ef4444";

    report.innerHTML = `
        <h2 style="margin-top:0; color:#334155;">Student Analysis</h2>
        <div class="data-row c-blue"><span>Name:</span> <span>${name}</span></div>
        <div class="data-row c-blue"><span>Roll No:</span> <span>#${roll}</span></div>
        <div class="data-row c-green"><span>Attendance:</span> <span>${att}%</span></div>
        <div class="data-row c-purple"><span>Marks:</span> <span>${marks}/100</span></div>
        
        <div class="grade-banner" style="background: ${gradeColor}">
            ${grade}
        </div>
    `;
}

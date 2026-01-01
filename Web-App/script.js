Web-App/script.js
function generateReport() {
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const attendance = document.getElementById("attendance").value;
    const marks = document.getElementById("marks").value;

    if (!name || !roll || !attendance || !marks) {
        alert("Please fill all fields!");
        return;
    }

    let grade = "";
    let statusColor = "";

    if (marks >= 80) { grade = "Distinction (A+)"; statusColor = "var(--success)"; }
    else if (marks >= 60) { grade = "First Class (B)"; statusColor = "var(--primary)"; }
    else if (marks >= 40) { grade = "Pass (C)"; statusColor = "var(--warning)"; }
    else { grade = "Fail (F)"; statusColor = "var(--danger)"; }

    // Hide placeholder and show report
    document.getElementById("placeholder-text").style.display = "none";
    const reportBox = document.getElementById("report-output");
    reportBox.style.display = "block";

    reportBox.innerHTML = `
        <div class="report-header">
            <h2>📜 Student Analytical Report</h2>
            <p>Official Record for Academic Year 2025-26</p>
        </div>
        <div class="data-grid">
            <div class="data-item"><small>STUDENT NAME</small><span>${name}</span></div>
            <div class="data-item"><small>ROLL NUMBER</small><span>#${roll}</span></div>
            <div class="data-item"><small>ATTENDANCE</small><span>${attendance}%</span></div>
            <div class="data-item"><small>SCORE</small><span>${marks} / 100</span></div>
            <div class="grade-box" style="background: ${statusColor}; color: white;">
                ${grade}
            </div>
        </div>
        <p style="margin-top: 20px; font-size: 0.8rem; text-align:center; opacity: 0.6;">
            System Generated Report - Verified ✅
        </p>
    `;
}

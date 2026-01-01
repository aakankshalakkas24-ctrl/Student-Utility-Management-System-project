function generateAnalysis() {
    // 1. Capture data using correct IDs
    const name = document.getElementById("userName").value;
    const roll = document.getElementById("userRoll").value;
    const attendance = document.getElementById("userAttendance").value;
    const marks = document.getElementById("userMarks").value;

    // 2. Check if data is missing
    if (!name || !roll || !attendance || !marks) {
        alert("Error: Please fill in all fields!");
        return;
    }

    // 3. Logic for Analysis
    let grade = "";
    let color = "";
    if (marks >= 80) { grade = "DISTINCTION"; color = "#2ecc71"; }
    else if (marks >= 60) { grade = "FIRST CLASS"; color = "#3498db"; }
    else if (marks >= 40) { grade = "PASS"; color = "#f1c40f"; }
    else { grade = "FAIL"; color = "#e74c3c"; }

    // 4. Update UI
    document.getElementById("status-message").style.display = "none";
    const reportArea = document.getElementById("final-report");
    reportArea.style.display = "block";

    reportArea.innerHTML = `
        <h2 style="text-align:center; color:#333;">Student Report Card</h2>
        <div class="report-item name-box"><span>Name:</span> <span>${name}</span></div>
        <div class="report-item roll-box"><span>Roll No:</span> <span>#${roll}</span></div>
        <div class="report-item att-box"><span>Attendance:</span> <span>${attendance}%</span></div>
        <div class="report-item mark-box"><span>Total Marks:</span> <span>${marks}/100</span></div>
        
        <div class="grade-banner" style="background-color: ${color};">
            RESULT: ${grade}
        </div>
    `;
}

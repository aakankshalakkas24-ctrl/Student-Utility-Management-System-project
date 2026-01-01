Web-App/script.js
function generateAnalysis() {
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const attendance = document.getElementById('attendance').value;
    const marks = document.getElementById('marks').value;

    if (!name || !roll || !attendance || !marks) {
        alert("Please complete all fields to generate the analysis.");
        return;
    }

    let grade = "";
    let color = "";

    // Grade Logic
    if (marks >= 80) { grade = "EXCELLENT (A+)"; color = "#10b981"; }
    else if (marks >= 60) { grade = "GOOD (B)"; color = "#3b82f6"; }
    else if (marks >= 40) { grade = "AVERAGE (C)"; color = "#f59e0b"; }
    else { grade = "RE-ATTEMPT (F)"; color = "#ef4444"; }

    // UI Transitions
    document.getElementById('empty-state').style.display = 'none';
    const report = document.getElementById('report-card');
    report.style.display = 'block';

    report.innerHTML = `
        <div style="border-bottom: 1px solid #334155; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="margin:0; color:#818cf8;">Academic Performance Report</h2>
            <span style="color:#64748b; font-size:0.8rem;">REF ID: ${Math.floor(Math.random()*10000)}</span>
        </div>

        <div class="report-grid">
            <div class="data-box full-width">
                <label>Student Name</label>
                <div>${name.toUpperCase()}</div>
            </div>
            <div class="data-box">
                <label>Roll Number</label>
                <div>#${roll}</div>
            </div>
            <div class="data-box">
                <label>Attendance Rate</label>
                <div style="color: ${attendance < 75 ? '#ef4444' : '#10b981'}">${attendance}%</div>
            </div>
            <div class="data-box">
                <label>Marks Scored</label>
                <div>${marks} <small style="font-size:0.8rem; color:#64748b;">/ 100</small></div>
            </div>
            <div class="data-box">
                <label>Status</label>
                <div style="color:${color}">${marks >= 40 ? 'QUALIFIED' : 'DISQUALIFIED'}</div>
            </div>
            <div class="grade-banner full-width" style="background: ${color}">
                ${grade}
            </div>
        </div>
    `;
}

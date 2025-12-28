Web-App/script.js
function processStudentData() {
    const total = document.getElementById("totalClasses").value;
    const attended = document.getElementById("attendedClasses").value;
    const resultBox = document.getElementById("resultBox");
    const beep = document.getElementById("beepSound");

    // Input validation
    if (total === "" || attended === "" || total <= 0 || attended < 0 || attended > total) {
        resultBox.innerHTML = "Please enter valid numbers!";
        resultBox.style.backgroundColor = "#fecaca";
        resultBox.style.color = "red";
        return;
    }

    // Initial processing message
    resultBox.innerHTML = "Processing...";
    resultBox.style.backgroundColor = "#fef9c3";
    resultBox.style.color = "black";

    // Random background colors during 20s delay
    const colors = ["#f87171","#34d399","#60a5fa","#facc15","#a78bfa","#fb7185"];
    let colorInterval = setInterval(() => {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 500);

    // After 20 seconds, calculate result
    setTimeout(() => {
        clearInterval(colorInterval);
        document.body.style.backgroundColor = "#1e3a8a"; // reset background

        const totalNum = Number(total);
        const attendedNum = Number(attended);
        const percentage = ((attendedNum / totalNum) * 100).toFixed(2);

        console.log("Attendance Percentage:", percentage + "%"); // console output

        // Show result in box for 10 seconds
        resultBox.innerHTML = `Attendance Percentage: ${percentage}%`;
        if (percentage >= 75) {
            resultBox.style.backgroundColor = "#bbf7d0"; // green
            resultBox.style.color = "green";
        } else {
            resultBox.style.backgroundColor = "#fecaca"; // red
            resultBox.style.color = "red";
        }

        // After 10 seconds, show "Final Result" word by word
        setTimeout(() => {
            const message = ["Final", "Result"];
            resultBox.innerHTML = "";
            let i = 0;

            const interval = setInterval(() => {
                if (i < message.length) {
                    resultBox.innerHTML += message[i] + " ";
                    beep.play();
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 1000);
        }, 10000); // 10 seconds

    }, 20000); // 20 seconds delay
}

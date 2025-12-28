Web-App/script.js
function processStudentData() {
    const total = document.getElementById("totalClasses").value;
    const attended = document.getElementById("attendedClasses").value;
    const calcType = document.getElementById("calculation").value;
    const resultBox = document.getElementById("resultBox");
    const beep = document.getElementById("beepSound");

    // Validate input
    if (total === "" || attended === "" || total <= 0 || attended < 0) {
        resultBox.innerHTML = "Please enter valid numbers!";
        resultBox.style.backgroundColor = "#fecaca";
        resultBox.style.color = "red";
        return;
    }

    resultBox.innerHTML = "Processing...";
    resultBox.style.backgroundColor = "#fef9c3"; // yellow
    resultBox.style.color = "black";

    // Random background colors during delay
    const colors = ["#f87171","#34d399","#60a5fa","#facc15","#a78bfa","#fb7185"];
    let colorInterval = setInterval(() => {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 500);

    // 20-second delay before calculation
    setTimeout(() => {
        clearInterval(colorInterval); // stop background color change
        document.body.style.backgroundColor = "#1e3a8a"; // reset background

        // Calculate based on user choice
        let totalNum = Number(total);
        let attendedNum = Number(attended);
        let result;

        if (calcType === "attendance") {
            result = ((attendedNum / totalNum) * 100).toFixed(2) + "%";
        } else if (calcType === "double") {
            result = totalNum * 2;
        } else if (calcType === "triple") {
            result = totalNum * 3;
        }

        console.log("Result:", result);

        // Display result for 10 seconds
        resultBox.innerHTML = `Result: ${result}`;
        resultBox.style.backgroundColor = "#bbf7d0";
        resultBox.style.color = "green";

        setTimeout(() => {
            // Show "Final Result" sequentially
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

        }, 10000); // after showing result for 10 seconds

    }, 20000); // 20-second delay
}

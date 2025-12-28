Web-App/script.js
function startProcess() {
  const total = document.getElementById("totalClasses").value;
  const attended = document.getElementById("attendedClasses").value;
  const resultBox = document.getElementById("resultBox");
  const countdownBox = document.getElementById("countdownBox");
  const beep = document.getElementById("beepSound");

  // Validate input
  if (total === "" || attended === "" || total <= 0 || attended < 0 || attended > total) {
    resultBox.innerHTML = "❌ Please enter valid numbers!";
    resultBox.style.backgroundColor = "#fecaca";
    resultBox.style.color = "red";
    countdownBox.innerHTML = "";
    return;
  }

  resultBox.innerHTML = "⏳ Processing... Please wait 20 seconds";
  resultBox.style.backgroundColor = "#fef9c3";
  resultBox.style.color = "black";

  // Step 1: Random background during 20s
  const colors = ["#f87171","#34d399","#60a5fa","#facc15","#a78bfa","#fb7185"];
  let colorInterval = setInterval(() => {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }, 500);

  // Step 2: Countdown timer
  let countdown = 20;
  countdownBox.innerHTML = `Time remaining: ${countdown}s`;
  let countdownInterval = setInterval(() => {
    countdown--;
    countdownBox.innerHTML = `Time remaining: ${countdown}s`;
    if (countdown <= 0) clearInterval(countdownInterval);
  }, 1000);

  // Step 3: After 20s, show result
  setTimeout(() => {
    clearInterval(colorInterval);
    document.body.style.backgroundColor = "#1e3a8a"; // reset background
    countdownBox.innerHTML = ""; // clear countdown

    const totalNum = Number(total);
    const attendedNum = Number(attended);
    const percentage = ((attendedNum / totalNum) * 100).toFixed(2);

    console.log("Attendance Percentage:", percentage + "%"); // console output

    // Show result in box for 10s
    resultBox.innerHTML = `✅ Attendance Percentage: ${percentage}%`;
    if (percentage >= 75) {
      resultBox.style.backgroundColor = "#bbf7d0"; // green
      resultBox.style.color = "green";
    } else {
      resultBox.style.backgroundColor = "#fecaca"; // red
      resultBox.style.color = "red";
    }

    // Step 4: After 10s, sequential "Final Result"
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

    }, 10000); // after 10s display

  }, 20000); // 20s delay
}

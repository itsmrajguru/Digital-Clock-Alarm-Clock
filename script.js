// Get HTML elements
let timeDisplay = document.getElementById("time-display");
let alarmInput = document.getElementById("alarm-input");
let setBtn = document.getElementById("set-btn");
let clearBtn = document.getElementById("clear-btn");
let alarmStatus = document.getElementById("alarm-status");
let alarmSound = document.getElementById("alarm-sound");

let alarmTime = "";
let alarmSet = false;

// Function to update clock every second
function updateClock() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  // Add 0 before numbers < 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let currentTime = `${h}:${m}:${s}`;
  timeDisplay.textContent = currentTime;

  // Check if alarm should ring
  if (alarmSet && currentTime === alarmTime) {
    alarmSound.play();
    alarmStatus.textContent = "Alarm ringing!";
    alarmStatus.style.color = "red";
  }
}

// Run clock every second
setInterval(updateClock, 1000);

// Set alarm
setBtn.addEventListener("click", function() {
  if (alarmInput.value) {
    alarmTime = alarmInput.value + ":00"; // add seconds
    alarmSet = true;
    alarmStatus.textContent = "Alarm set for " + alarmTime;
    alarmStatus.style.color = "green";
  }
});

// Clear alarm
clearBtn.addEventListener("click", function() {
  alarmSet = false;
  alarmSound.pause();
  alarmSound.currentTime = 0;
  alarmStatus.textContent = "Alarm cleared.";
  alarmStatus.style.color = "#000";
});

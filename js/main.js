const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const days = document.getElementById("days");

// Change this to Change Your goal time and make timer alive
const Goal = "2 Feb 2023";

function countDown() {
  const thatsDay = new Date(Goal);
  const currentDate = new Date();

  const totalSecond = (thatsDay - currentDate) / 1000;
  const second = Math.floor(totalSecond) % 60;
  seconds.innerHTML = second;
  const minute = Math.floor(totalSecond / 60) % 60;
  minuts.innerHTML = minute;
  const hour = Math.floor(totalSecond / 3600) % 24;
  hours.innerHTML = hour;
  const day = Math.floor(totalSecond / 3600 / 24);
  days.innerHTML = day;
}
countDown();
setInterval(countDown, 1000);

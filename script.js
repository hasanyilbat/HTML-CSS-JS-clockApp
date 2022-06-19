const display = document.getElementById("clockDisplay");

function showtime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let session = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    session = "PM";
    hour = hour - 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  display.textContent = hour + ":" + min + ":" + sec + " " + session;
  setTimeout(showtime, 1000);
}

showtime();

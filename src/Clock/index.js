setInterval(() => {
  let time = new Date();
  let hrs = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am = "AM";
  if (hrs > 12) {
    hrs -= 12;
    am = "PM";
  } else if (hrs == 0) {
    hrs = 12;
    am = "AM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  let currTime = hrs + ":" + min + ":" + sec + " " + am;
  $("#showClock").html(currTime);
}, 1000);

// here using setInterval method for 1 sec as it will change the time in every one second
setInterval(() => {
  // taking object of date class
  let time = new Date();
  //taking hours
  let hrs = time.getHours();
  //taking minutes
  let min = time.getMinutes();
  //taking seconds
  let sec = time.getSeconds();
  //setting initial value to am for am and pm
  let am = "AM";
  //   As the getHours method return time in 24 hrs format so converting it into 12 hour format
  if (hrs > 12) {
    hrs -= 12;
    am = "PM";
    // as in 24 hrs format 12 Am is represnted as 00
  } else if (hrs == 0) {
    hrs = 12;
    am = "AM";
  }
  //   checking if time is in single digit to add the 0 else no
  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  let currTime = hrs + ":" + min + ":" + sec + " " + am;
  //   displaying time
  $("#showClock").html(currTime);
}, 1000);

//creating four variable to calculate the time in the stopwatch
let [ms, sec, min, hrs] = [0, 0, 0, 0];
//selecting and getting time as initial from index.html
let time = document.querySelector(".display");
let isClear = null;
//on clicking start button a function will be called
$("#start").click(() => {
  if (isClear != null) {
    clearInterval(isClear);
  }
  //   this will set the interval to every 10 seconds so that exact time can be calculated
  isClear = setInterval(() => {
    // incremeneting time everytime by 10 ms
    ms += 10;
    // to set the sec
    if (ms === 1000) {
      ms = 0;
      sec++;
      //   to set the minutes
      if (sec === 60) {
        sec = 0;
        min++;
        // to set the hrs
        if (min === 60) {
          min = 0;
          hrs++;
        }
      }
    }
    //it will add 0 if the time is in single digit and for ms two zeros will be added if its time is less than 10 and one zero if its time is less than 100
    let h = hrs < 10 ? "0" + hrs : hrs;
    let s = sec < 10 ? "0" + sec : sec;
    let m = min < 10 ? "0" + min : min;
    let mis = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;
    time.innerHTML = `${h} : ${m} : ${s} : ${mis}`;
  }, 10);
});
// this function will pause the stopwatch and with the help of clearInterval function the setInterval timer will be stopped and the time which was calculated will be shown
$("#pause").click(() => {
  clearInterval(isClear);
});
// this will reset the clock to 0000
$("#reset").click(() => {
  clearInterval(isClear);
  [ms, hrs, min, sec] = [0, 0, 0, 0];
  time.innerHTML = "00 : 00 : 00 : 000";
});

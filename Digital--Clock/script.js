const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const dm = document.getElementById("date-month");
const year = document.getElementById("year");
const days = ["sun", "mon", "tues", "wed", "Thur", "fri", "sat"];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function syncClock() {
  let currentDate = new Date();

  let h = currentDate.getHours();
  let m = currentDate.getMinutes();
  let s = currentDate.getSeconds();
  let d = currentDate.getDay();
  let c = currentDate.getDate();
  let cm = currentDate.getMonth();
  let y = currentDate.getFullYear();

  hour.textContent = h < 10 ? "0" + h : h;
  min.textContent = m < 10 ? "0" + m : m;
  sec.textContent = s < 10 ? "0" + s : s;

  document.getElementById(days[d]).style.color = "lightblue";
  document.getElementById(days[d]).style.fontWeight = "bold";
  dm.textContent = month[cm] + "-" + c;
  year.textContent = y;
}
setInterval(syncClock, 1000);

syncClock();
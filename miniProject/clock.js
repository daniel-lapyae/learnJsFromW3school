const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");
const date = document.getElementById("dateAndDay");

function displayClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amPm = "AM";
    let d = new Date().toDateString()
    if (h >= 12){
        amPm = "PM";
    }
    if( h > 12 ){
        h = h - 12;
    }
    hour.innerHTML = h < 10 ? "0" + h : h;
    minute.innerHTML = m < 10 ? "0" + m : m;
    second.innerHTML = s < 10 ? "0" + s : s;
    ampm.innerHTML = amPm;
    date.innerHTML = d;
    setTimeout(() => {
        displayClock()
    }, 1000); // 1000 ms = 1 s
}
displayClock()


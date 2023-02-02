const hourE1 = document.querySelector(".hour");
const minuteE1 = document.querySelector(".minute");
const secondE1 = document.querySelector(".second");


function updateClock() {
    const current = new Date();
    setTimeout(updateClock, 1000)
    const hour = current.getHours();
    const minute = current.getMinutes();
    const second = current.getSeconds();
    const hourDeg = (hour / 12) * 360;
    document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`
    const minuteDeg = (minute / 60) * 360;
    document.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`
    const secondDeg = (second / 60) * 360;
    document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`

}


updateClock();
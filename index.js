'use strict';

const timer = document.querySelector(".timer-time");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    timer.innerHTML = `${hours < 10 ? `0${hours}` : hours}
    : ${min < 10 ? `0${min}` : min}
    : ${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
    var myTimer = setInterval(getTime, 1000);
}

init();

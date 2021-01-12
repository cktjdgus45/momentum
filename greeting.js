'use strict';

const timerForm = document.querySelector(".timer-form"),
    input = timerForm.querySelector("input"),
    button = timerForm.querySelector("button"),
    userName = document.querySelector(".user-name");

function setItem(event) {
    event.preventDefault()
    const name = input.value;
    localStorage.setItem('name', name);
    input.value = "";
    showName();
}

function getItem() {
    const value = localStorage.getItem('name');
    if (value !== null) {
        timerForm.classList.add("unactive");
        return value;
    } else {
        return "___";
    }
}

function showName() {
    const masterName = getItem();
    userName.innerHTML = masterName;
}

function handleEnterKey(event) {
    if (event.keyCode == 13) {
        setItem(event);
    }
}


function init() {
    showName();
    button.addEventListener("click", setItem);
    input.addEventListener("keydown", handleEnterKey)
}
init();
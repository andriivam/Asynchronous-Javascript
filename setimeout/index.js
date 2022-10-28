// create function and set timeout
const message = document.getElementById("message");
const time = document.getElementById("time");

/*
let str = "prout".slice("");
let index = 0;

const displayLetter = () => {

 let result= (str[index])
  index++;
  message.innerHTML += result;
  if (index === str.length) {
    clearInterval(interval);
  }
};
let interval = setInterval(displayLetter, 1000);

// display time on the screen
let second = 0;

const displayTime = () => {
time.innerHTML = second + ' sec'
second++;
if(second % 60 === 0) {
  let message = `${second / 60} minute has passed`
  time.innerHTML = message;
}

 }
 setInterval(displayTime, 1000);
   */

// GAME Whack-A-Mole

setInterval(changeColor, 2100);

const score = document.getElementById("score");
let points = 0;
let circle;
// generating random number

function randomNumber() {
  return Math.floor(Math.random() * 12) + 1;
}

function changeColor() {
  let num = randomNumber();
  // select random circle and change background color
  circle = document.querySelector(`.circle:nth-child(${num})`);
  circle.style.backgroundColor = "red";
  eventHandler();
}

function eventHandler() {
  circle.addEventListener("click", (e) => {
    circle.style.backgroundColor = "white";
    points++;
    score.innerHTML = points;
  });
}
// debugger
// function to clear back color if no click
function clearCircle() {
  circle.style.backgroundColor = "white";
  circle.removeEventListener("click", eventHandler);
}

setTimeout(clearCircle, 2200);

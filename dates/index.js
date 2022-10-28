const ulZone = document.getElementById("zones");

const display = document.getElementById("display");

// Dates by timezones
/*
const todayDate = new Date();
    const str = todayDate.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
console.log(todayDate.toLocaleString('en-US', { timeZone: 'Atlantic/Reykjavik'}) + " Reykyavik time");
console.log(todayDate.toLocaleString('en-US', { timeZone: 'Europe/Kyiv'}) + " Kyiv time");
console.log(todayDate.toLocaleString('en-US', { timeZone: 'America/Anchorage'}) + " Anchorage time");
console.log(todayDate.toLocaleString('en-US', { timeZone: 'Europe/Brussels'}) + " Brussels time");
*/

let zones = [
  "America/Anchorage",
  "Iceland/Reykjavik",
  "Ukraine/Kyiv",
  "Belgium/Brussels",
];

let date = new Date();
zones.forEach((timeZone) => {
  let strTime = date.toLocaleString({ timeZone: `${timeZone}` });
  console.log(timeZone, strTime);
});

//Timestamp function
// How many days since my birthday
const myBirthDay = new Date("1992/08/10");
let today = new Date();
const howManyDays = Math.floor(
  (today.getTime() - myBirthDay.getTime()) / (1000 * 24 * 60 * 60)
);

console.log(howManyDays, "my birthday");

// function to find how many days have passed since any point in time (after 1970).

function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

console.log(getNumberOfDays("08/10/1992", "10/25/2022"));

// Time in the future
const present = new Date();
// convert hours into milliseconds
const hour = 80000 * 1000 * 60 * 60;
// creating new date and find date in the future
const futureTime = new Date(present.getTime() + hour);
// console.log(futureTime.toLocaleString())

// function to count amount of hours
const countingHours = () => {
  const input = document.getElementById("input").value;
  let time = new Date();
  let hours = input * 1000 * 60 * 60;
  let futureTime = new Date(time.getTime() + hours);

  display.innerHTML = futureTime.toLocaleString();
};
input.addEventListener("keyup", (e) => {
  countingHours();
});

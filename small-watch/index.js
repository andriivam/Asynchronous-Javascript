const dayName = document.getElementById('day');
const month = document.getElementById('monthDay');
const monthN = document.getElementById('monthName');
const year = document.getElementById('year');
const time = document.getElementById('time');

const runTime = () => {
// creating data object
const localTime = new Date();
// getting name of the day
const day = localTime.toString().split(' ')[0];
dayName.innerHTML = day;
// getting month number
const monthDay = localTime.getUTCDate();
month.innerHTML = monthDay;
// getting month name
const monthName = localTime.toLocaleString('default', {month: 'short'});
monthN.innerHTML = monthName;
// getting years
const yearNum = localTime.getFullYear();
year.innerHTML = yearNum;
// getting local timezone
const timer = localTime.toLocaleTimeString();
time.innerHTML = timer;
}

time.addEventListener('click', (e) => {
    let newTime = new Date();
    let newFormat = newTime.getHours();
    if(newTime > 11) {
        newFormat = newFormat - 12
        time.innerHTML = newFormat
    }
    console.log(newFormat);
})


 setInterval(runTime, 1000);




const container = document.getElementById("main");
const button = document.getElementById("btn");
const input = document.getElementById("input");
const select = document.getElementById("select");

let url = "";
let country = "";
let names = "";

const getName = () => {
    if(country === undefined) {
        console.log('test')
    }
  fetch(url + country)
    .then((response) => response.json())
    .then((data) => {
      newDiv = document.createElement("div");
      newDiv.innerHTML =
        data.name + " age is " + data.age + " " + data.country_id;
      main.appendChild(newDiv);
    });
};

button.addEventListener("click", (e) => {
  let names = input.value;
  url = "https://api.agify.io?name=";
  url += names;
  getName();
  resetInput();
});

select.addEventListener("change", (e) => {
  let names = input.value;
  country = "&country_id=" + select.value;
  url = "https://api.agify.io?name=";
  url = url + names + country;
 // console.log(url);
  resetInput();
  getName();
});

// reset our input
const resetInput = () => {
  input.value = "";
};

//let localStore = localeStorage.getItem("")

/*
async function getUserName () {
    const res = await fetch('https://api.agify.io?name=joe&country_id=US')
    const result = await res.json();
    console.log(result);
}

 getUserName();
*/

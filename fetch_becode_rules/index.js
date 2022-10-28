const rootDiv = document.getElementById('root');
const button = document.getElementById('btn');
const ul = document.createElement('ul');
rootDiv.appendChild(ul);
// fetching data from our json file
const getRules = () => {
    fetch("becode.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        for(let i = 0; i < data.length; i++) {
            const li = document.createElement('li')
            let rule = data[i];
            console.log(rule);
            li.innerHTML = rule;
            ul.appendChild(li);
        }
    })
    .catch((err) => console.log(err))
};

// adding event to our button
button.addEventListener('click', getRules);

// getting all the variables that we need
const hamb = document.querySelector('#hambergar');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const menu = document.querySelector('.menu-container');
const list = document.querySelector('.list');
const names = Array.from(document.querySelectorAll('.name'));



//add event click to the hambergar
hamb.addEventListener('click', () => {
    one.classList.toggle('active');
    three.classList.toggle('active');
    two.classList.toggle('active');
    menu.style.visibility = "visible";
    if (one.classList[1] !== 'active')
    {
        menu.style.visibility = "hidden";
    }
});

// adding event click on the menu list
list.addEventListener('click', (e) => {
    if (e.target.nodeName = 'LI')
    {
        for (let i = 0; i < names.length; i++)
        {
            if (names[i].innerHTML === e.target.innerHTML)
            {
                names[i].scrollIntoView();
                menu.style.visibility = "hidden";
                one.classList.toggle('active');
                three.classList.toggle('active');
                two.classList.toggle('active');
            }
        }
    }
});

// All the variables that we need
const mainContainer = document.querySelector("#main-container");
let sliderWidth = document.querySelector(".slider").offsetWidth;
let move = 345;
let x = {
    "Mechanics-of-Material": 0,
    "Medical-physics": 0,
    "Mathematics-III": 0,
    "BME-1": 0,
    "Thermodynamics": 0,
    "Electrical-Engineering": 0,
    "Material-science-I": 0,
    "Technical-English-II": 0
};



// Add event click to the main Container
mainContainer.addEventListener('click', (e) => {
    dataValue = e.target.closest("#file-container").children[1].dataset["name"];
    if(e.target.classList[0] === "r" || e.target.classList[1] === "r")
    {
        slider("-", dataValue);
    }
    else if (e.target.classList[2] === "l" || e.target.classList[0] === "l")
    {
        slider("+", dataValue); 
    }
})

// function to move the slider right or left
function slider(direction, dataValue)
{
    if(direction === "+")
    {
        if(x[dataValue] + 345 >= sliderWidth) return;        
        document.querySelector(`[data-name='${dataValue}']`).style.transform = `translateX(${x[dataValue] += move}px)`;
    }
    else
    {
        if(x[dataValue] <= 0) return;
        document.querySelector(`[data-name='${dataValue}']`).style.transform = `translateX(${x[dataValue] -= move}px)`;
    }
}

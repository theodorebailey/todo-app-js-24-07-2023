// input field, button, listContainer

// create const values to select html elements and store in a variable

// input field equals input-box
const inputField = document.getElementById("input-box");

// list container is the unordered list to store li elements populated with user inputs
const listContainer = document.getElementById("list-container");


// attached to button element with onclick event
function addTask() {

    // if empty should be first check
    if(inputField.value === "") {
        // alert user we need text info
        alert("You need to write a TODO: ");
    } 
    else {
        // create a list element store variable li
        let li = document.createElement("li");
        // populate innerHTML of list element with value of input fields text box value
        li.innerHTML= inputField.value;
        // append created child into parent class list container --> with li variable populated with value of input field provided by user
        listContainer.appendChild(li);


        // added cross icon to list elements
        let span = document.createElement("span");
        // add cross icon to span element
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    // set inputField.value to blank string
    inputField.value = "";
    // execute function to save data to localStorage
    saveData();

}


// add click event listener to listContainer which executes a function with parameter which we use to
listContainer.addEventListener("click", function(e) {
    // access the targets tagName value stored in caps and evaluate a truthy expression to see if we should toggle classList value to checked
    // CAPITAL DUE TO HEIRACHY
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // else if tagName is SPAN in caps parameter.target parentElement with remove function to delete the task
    // CAPITAL DUE TO HEIRACHY
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    // 
}, false)

// create array of linear gradiant colors
const colors = [
    'linear-gradient(135deg, #153677, #4e085f)',
    'linear-gradient(135deg, #e01f5a, #6ab04c)',
    'linear-gradient(135deg, #c86e8d, #333333)',
    'linear-gradient(135deg, #187bcd, #4c9c75)',
    'linear-gradient(135deg, #7a3bd9, #6ab04c)',
];

// create a color index counter and randomly assign it a color using colors.length of array
let currentColor = Math.floor(Math.random() * colors.length);

// create a change background color function
function changeBGC() {
    // select element using querySelector and grab the container
    const container = document.querySelector(".container");
    // create index counter
    currentColor = (currentColor + 1) % colors.length;
    // select container get the style and backgroundImage and set equal to colors[currentColor]
    container.style.backgroundImage = colors[currentColor];
}

// create a function to store values in browsesr data
function saveData() {
    // localStorage setItem string value name of data to listContainers innerHTML value
    // access via localStorage.getItem("data");
    localStorage.setItem("data", listContainer.innerHTML);

}

// show task accesses localStorage, .getItem stored with variable string name data
function showTask(){
    // listContainer holds all list items, save the innerHTML equal to localStorage.getItem saved to name localStorage name "data"
    listContainer.innerHTML = localStorage.getItem("data");
}


// execute showTask function on initial compilation
showTask();

// change background colour
changeBGC();
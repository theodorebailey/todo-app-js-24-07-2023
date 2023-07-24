// input field
// button

// create const values to select html elements and store in a variable
const inputField = document.getElementById("input-box");
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

    inputField.value = "";
    // execute function to save data to localStorage
    saveData();

}


// add click event listener to listContainer which executes a function with parameter which we use to
listContainer.addEventListener("click", function(e) {
    // access the targets tagName value stored in caps and evaluate a truthy expression to see if we should toggle classList value to checked
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // else if tagName is SPAN in caps parameter.target parentElement with remove function to delete the task
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


// create a function to store values in browsesr data

function saveData() {
    // localStorage setItem string value name of data to listContainers innerHTML value
    // access via localStorage.getItem("data");
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){
    // listContainer holds all list items, save the innerHTML equal to localStorage.getItem saved to name localStorage name "data"
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
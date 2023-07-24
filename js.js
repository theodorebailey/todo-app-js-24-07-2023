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

    }

}
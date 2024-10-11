const inputBox = document.getElementById("input-box");
// document means webpage, getElementById("input-box") finds where is the element input box in the entire webpage
// it then stores the value in the const --> inputBox

const listContainer = document.getElementById("list-container");
// does the same for list-container

function addTask() 
{
    if(inputBox.value === '')
    {
        alert("Get Some Work Done!");
    }
    else
    {
        let li = document.createElement("li");
        // a new list element is created and then stored in the variable li

        li.innerHTML = inputBox.value;
        // the li gets the value of what was typed in the input box 

        listContainer.appendChild(li);
        // a child element i.e. a new element is thus added now to the list

        let span = document.createElement("span");
        // a span element is created, span is an inlne container,
        // typically used for small groups w/o affecting the layout of the document

        span.innerHTML = "\u00d7";
        // "\u00d7" represents the multiplication sign (×), used as a cross here

        li.appendChild(span);
        // with each list a x will now be added
    }

    inputBox.value = ""; 

}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// event listener "click" checks for any click in the document
// function (e) is a random function 
// now if the click is over the li element then it toggles/triggers the check
// if the click is over the span element then it removes the parentElement from the list


function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
    // this stores data in the local storage

}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
    // retrives the previously stored data and make sure it doesnt dissapear during refresh
}

showTask();

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var deleteButtons = document.getElementsByClassName("delete");
deleteButtons = Array.from(deleteButtons);
var ul = document.querySelector("ul");
var list = Array.from(ul.children);

function inputLength() {
	return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var button = document.createElement("button");
    button.innerHTML = 'Delete';
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(button);
    li.addEventListener("click", completeTask);
    button.addEventListener("click", deleteListItem);
	ul.appendChild(li);
    input.value = "";
    return li;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function completeTask(e) {
    e.target.classList.toggle("done");
}

function deleteListItem(e) {
    ul.removeChild(e.target.parentNode);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.forEach(element => {
    element.addEventListener("click", completeTask);
});

deleteButtons.forEach(element => {
    element.addEventListener("click", deleteListItem);
})



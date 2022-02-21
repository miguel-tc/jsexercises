var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 

function inputLength() {
	return input.value.length;
}

function listLength(){
	return listItems.length;
}

function underlined(){
	var taskDone = event.target;
	taskDone.classList.toggle("done");
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 

function deleteButton(){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){
	deleteButton();
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li) + deleteButton();
	input.value = "";
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

button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", underlined)
input.addEventListener("keypress", addListAfterKeypress);
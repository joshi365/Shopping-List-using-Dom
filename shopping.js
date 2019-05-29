var input = document.getElementById("input");
var Enter = document.getElementById("enter");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length 
}

function createElement() {
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("delete"));
  button.onclick=removeParent;
    li.appendChild(button);  
    ul.appendChild(li);
    input.value = "";
}

ul.onclick=function(event){
  var target=event.target;
  target.classList.toggle("done");
}

function removeParent(evt){
  evt.target.parentNode.remove();
} 

function deleteItems() {
  btn.onclick=removeParent
}


function addList()  {
   if (inputLength() > 0){
     createElement();
     }
  }

function addListKeypress(event){
if (inputLength() > 0 && event.keyCode === 13){
   	createElement();
 }
}

Enter.addEventListener("click", addList);
input.addEventListener("keypress",addListKeypress);




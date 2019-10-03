let logo = document.querySelector(".logo");
logo.addEventListener("mouseup", function(){
	this.classList.add("animated","bounce");
});

logo.addEventListener("mousedown", function(){
	this.classList.remove("animated","bounce");
});

let selected;
let menu = document.querySelector("ul.header-menu");
menu.addEventListener("click", function(event) {
  let targ = event.target; // где был клик?

  if (targ.tagName != 'LI') return; // не на TD? тогда не надо

  highlight(targ); // подсветить TD
});

function highlight(node) {
  if (selected) {
    selected.classList.remove('active');
  }
  selected = node;
  selected.classList.add('active');
}
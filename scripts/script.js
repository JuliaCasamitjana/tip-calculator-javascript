const extendNav = document.querySelector("#extend_nav");
const listNav = document.querySelector("#list_nav");

extendNav.addEventListener("click", function(){

	listNav.classList.toggle("extended");


});

function removeExtended() {
 
  if (window.innerWidth >= 600){

	listNav.classList.remove("extended");
	}
}

window.onresize = removeExtended;




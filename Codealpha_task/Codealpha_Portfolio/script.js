const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSection);

function revealSection(){

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;

let elementTop=reveals[i].getBoundingClientRect().top;

let visible=150;

if(elementTop<windowHeight-visible){

reveals[i].classList.add("active");

} else {
    reveals[i].classList.remove("active");
}

}

}

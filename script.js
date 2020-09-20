

//Navbar Smart-scroll
const navBar = document.querySelector(".smart-scroll");
//Detetc scroll top or down
window.addEventListener("scroll", () => {
  navBar.classList.toggle("sticky", window.scrollY > 100)
})

//Title Effect
let i = 0;
let title = "Hi, I'm Ivan";



function typeWriter(){
    if (i < title.length) {
      document.querySelector(".effect").innerHTML += title.charAt(i);
      i++;
      setTimeout(typeWriter, 125);
    }
}




window.onload = typeWriter;


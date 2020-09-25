

//Navbar Smart-scroll
const navBar = document.querySelector(".smart-scroll");
//Detetc scroll top or down
window.addEventListener("scroll", () => {
  navBar.classList.toggle("sticky", window.scrollY > 100)
})




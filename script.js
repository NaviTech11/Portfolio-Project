

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


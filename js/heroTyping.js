var i = 0;
var txt = "Hi, I'm Swanagan"; /* The text */
var speed = 75; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.onload = typeWriter();

var i = 0;
var j = 0;
var txt = "Hi, I'm Swanagan"; /* The text */
var txt2 = "Blockchain Engineer";
var speed = 75; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (j < txt.length) {
    document.getElementById("title2").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}

document.onload = typeWriter();

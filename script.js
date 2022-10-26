mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} /*a single line JS comment*/

function myFunction()
{
var a=document.getElementById("text_a").value;

if (a=="lykeisbasinda##")
  {
  
alert("Kod doğru, yönlendirilmek için 'Tamam' tuşuna bas!");
location.href = '/tsifsa.html';

  }
else
  {
alert("Kod yanlış!")
  }
}

function myFunctiona()
{
var a=document.getElementById("text_c").value;

if (a=="lykeisbasinda##")
  {
  
alert("Kod doğru, yönlendirilmek için 'Tamam' tuşuna bas!");
location.href = '/ccvb.html';

  }
else
  {
alert("Kod yanlış!")
  }
}
var countDownDate = new Date("February 6, 2023 23:59:59").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
  
  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + " gün, " + hours + " saat, "
  + minutes + " dakika, " + seconds + " saniye kaldı. ";
  
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "SÜRE DOLDU";
  }
}, 1000);
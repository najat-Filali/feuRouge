
const bt = document.querySelector('button'); 

bt.addEventListener('click', changer);

  if(document.getElementsByClassName('circleG')[0].style.display = 'block'){
  
  function changer(){
      console.log('circleO');
      document.getElementsByClassName('circleO')[0].style.display = 'block';
      document.getElementsByClassName('circleG')[0].style.display = 'none';
      let time = setTimeout(changerToO, 2000);
      
    function changerToO(){
      console.log("circleR");
      document.getElementsByClassName('circleO')[0].style.display = 'none';
      document.getElementsByClassName('circleR')[0].style.display = 'block';
      setTimeout(changerToR, 3000);
    }

    function changerToR(){
      console.log("circleG");
      document.getElementsByClassName('circleR')[0].style.display = 'none';
      document.getElementsByClassName('circleG')[0].style.display = 'block';
    }
  }
}
  







/*
let myVar = setInterval(setColor, 300);

function setColor() {
  var x = document.div;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

function stopColor() {
  clearInterval(myVar);
}
var myVar;

function myStartFunction() {
  myVar = setInterval(function(){ alertFunc("First parameter", "Second parameter"); }, 2000);
}

function alertFunc(param1, param2) {
  document.getElementById("demo").innerHTML += "Hello ";

  document.getElementById("demo2").innerHTML = "Parameters passed to alertFunc(): <br>" 
  + param1 + "<br>" + param2 + "<br>";
}

function myStopFunction() {
  clearInterval(myVar);
  
}*/
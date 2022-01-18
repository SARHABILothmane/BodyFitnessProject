if (screen && screen.width > 552) {
   // this script for arrow moving 
   var getTime = localStorage.getItem("arrow");
     if (new Date().getTime() > getTime){
         var time = 1000 * 60 * 60 * 750;
         setTimeout(function() {
             localStorage.setItem("arrow", new Date().getTime()+time);
             document.getElementById("arrow").style.display = "block";
             setTimeout(function() {
                 document.getElementById("arrow").style.display = "none";
                 setTimeout(function() {
                     document.getElementById("arrow").style.display = "block";
                     setTimeout(function() {
                       document.getElementById("arrow").style.display = "none";
                     }, 15000);
                 }, 30000);
             }, 15000);
         }, 20000);
     }
   const $icon = document.querySelector('.icon');
   const $arrow = document.querySelector('.arrow');
       $arrow.animate([
         {left: '0'},
         {left: '10px'},
         {left: '0'}
       ],{
         duration: 700,
         iterations: Infinity
       });
 }
 
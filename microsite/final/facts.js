// hamburger menu
function toggle() {
  var navLinks = document.getElementById("menu");
  navLinks.classList.toggle("active");
  console.log("toggled menu");
  }
  
// card flipping
document.addEventListener("DOMContentLoaded", function(){
  const facts = document.querySelectorAll('.facts');
  console.log(facts);
  facts.forEach(function(fact){
      fact.addEventListener("click", function (){
          fact.classList.toggle('flipped');
        });
  });
});
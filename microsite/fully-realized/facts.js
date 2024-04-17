  // card flipping

  document.addEventListener("DOMContentLoaded", function(){
    const facts = document.querySelectorAll('.facts');
    console.log(facts);
    facts.forEach(function(fact){
        fact.addEventListener("click", function (){
            fact.classList.toggle('flipped');
            
            console.log("clicked!");
          });
    });
  });
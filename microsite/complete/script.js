// hamburger navigation menu
function toggle() {
  var x = document.getElementByClass(".menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// navigation highlight
// const unit = document.querySelectorAll('timeline-unit');
// const nav = document.querySelectorAll('.timeline-nav ul li a');
// window.addEventListener('scroll', ()=> {
//   let current = '';
//   units.forEach(section => {
//     const top = unit.offsetTop;
//     const height = unit.clientHeight;
//     if(pageYOffset >= top - height / 3) {
//       current = unit.getAttribute("id");
//     }
//   });

//   nav.forEach((li) => {
//     li.classList.remove("current");
//     if(li.classList.contains(current)) {
//       li.classList.add("current");
//     }
//   });
// });

// hamburger menu



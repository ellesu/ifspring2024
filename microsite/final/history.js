// navigation highlight
// const unit = document.querySelectorAll('timeline-unit');
// const nav = document.querySelectorAll('.timeline-nav ul li a');
// document.addEventListener('scroll', ()=> {
//   let current = '';
//   units.forEach(function(unit) {
//     const top = unit.offsetTop;
//     const height = unit.clientHeight;
//     if(pageYOffset >= top - height / 3) {
//       current = unit.getAttribute("id");
//     }
//   });

//   nav.forEach((nav) => {
//     nav.classList.remove("current");
//     if(nav.classList.contains(current)) {
//       nav.classList.add("current");
//     }
//   });
// });

// document.addEventListener('scroll', function() {
//     var sections = document.querySelectorAll('.timeline-unit');
//     var nav = document.querySelectorAll('.timeline-nav ul li a'); 
//     sections.forEach(function(section) {
//       var top = section.offsetTop;
//       var height = section.clientHeight;
  
//       if (pageYOffset >= top - height / 3) {
//         current = section.getAttribute("id");
//       }
//     });
//     nav.forEach((nav) => {
//           nav.classList.remove("current");
//           if(nav.classList.contains(current)) {
//             nav.classList.add("current");
//             console.log(nav);
//           }
//         });
//   });

// JavaScript to highlight current section in the timeline navigation
document.addEventListener('scroll', function() {
  var units = document.querySelectorAll('.timeline-unit');
  var navLinks = document.querySelectorAll('.timeline-nav a');

  units.forEach(function(unit) {
    var top = unit.offsetTop;
    var height = unit.clientHeight;

    if (pageYOffset >= top - height / 3 && pageYOffset < top + height - height / 3) {
      var currentUnitId = unit.getAttribute('id');
      navLinks.forEach(function(navLink) {
        var href = navLink.getAttribute('href');
        if (href === '#' + currentUnitId) {
          navLink.classList.add('current');
          console.log(href);
        } else {
          navLink.classList.remove('current');
        }
      });
    }
  });
});

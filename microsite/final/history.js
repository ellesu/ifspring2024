// hamburger menu
function toggle() {
  var navLinks = document.getElementById("menu");
  navLinks.classList.toggle("active");
  console.log("toggled menu");
  }

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

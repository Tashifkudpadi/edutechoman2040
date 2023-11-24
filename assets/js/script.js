//////////////////////////// Navbar starts////////////////////
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('open')
  const isOpen = dropdownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
})


// var prevScrollPos = window.pageYOffset;
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollPos > currentScrollPos) {
//     document.querySelector("header").style.top = "0";
//   } else {
//     document.querySelector("header").style.top = "-100px";
//   }
//   prevScrollPos = currentScrollPos;
// };
/////////////////////// Navbar Ends/////////////////////////////

////////////////////////////////// Timer Starts///////////////////////
// Set the target date (change it to your desired date)
// var targetDate = new Date("2023-9-06").getTime();

// // Update the timer every second
// var timerInterval = setInterval(updateTimer, 1000);

// function updateTimer() {
//   var now = new Date().getTime();
//   var distance = targetDate - now;

//   // Calculate the days, hours, minutes, and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the timer
//   var timerElement = document.getElementById("timer");
//   var timerDays = document.getElementById("days");
//   var timerHour = document.getElementById("hour");
//   var timerMins = document.getElementById("mins");
//   var timerSecs = document.getElementById("secs");

//   timerDays.innerHTML = days + "<br> DAYS ";
//   timerHour.innerHTML = hours + "<br>HOURS ";
//   timerMins.innerHTML = minutes + "<br> MINS ";
//   timerSecs.innerHTML = seconds + "<br> SECS ";

//   // Check if the countdown is over
//   if (distance < 0) {
//     clearInterval(timerInterval);
//     timerElement.innerHTML = "Countdown is over!";
//     timerDays.innerHTML = " ";
//     timerHour.innerHTML = " ";
//     timerMins.innerHTML = " ";
//     timerSecs.innerHTML = " ";
//   }
// }
//////////////////////////////////////Timer Ends//////////////////////

///////////////////////////////// Progress Bar circle starts////////////////////
$('#1').waypoint(function () {
  increment(1, 200);
}, { offset: '95%' });

$('#2').waypoint(function () {
  increment(2, 20);
}, { offset: '75%' });

$('#3').waypoint(function () {
  increment(3, 30);
}, { offset: '75%' });

$('#4').waypoint(function () {
  increment(4, 20);
}, { offset: '75%' });

$('#5').waypoint(function () {
  increment(5, 46);
}, { offset: '75%' });

$('#6').waypoint(function () {
  increment(6, 14);
}, { offset: '75%' });

function increment(elem, finalVal) {
  var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
  if (currVal < finalVal) {
    currVal = currVal + 5;
    document.getElementById(elem).innerHTML = currVal + "+";

    setTimeout(function () {
      increment(elem, finalVal);
    }, 20)
  }
};
// Create an Intersection Observer instance
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // When the section is in the viewport
      animateDots();
      observer.unobserve(entry.target);
    }
  });
});

// Get the section element
var section = document.querySelector('.progress_container');

// Start observing the section
observer.observe(section);

// Function to animate the dot elements
function animateDots() {
  // Get all elements with the "dot" class
  var dotElements = document.querySelectorAll('.dot');

  // Add the necessary CSS properties to each element
  dotElements.forEach(function (dotElement) {
    dotElement.style.position = 'absolute';
    dotElement.style.inset = '5px';
    dotElement.style.zIndex = '10';
    dotElement.style.animation = 'animateDot 2s linear forwards';
  });

  // Create the @keyframes animation
  var styleSheet = document.createElement('style');
  styleSheet.innerHTML = `
  @keyframes animateDot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(calc(3.6deg * var(--num)));
    }
  }`;
  document.head.appendChild(styleSheet);
}
// Create an Intersection Observer instance
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      // When the section is in the viewport
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
});

// Get all elements with the "card" class
var cardElements = document.querySelectorAll('.progress_container .card');

// Start observing each card element
cardElements.forEach(function (cardElement) {
  observer.observe(cardElement);
});
// Get all elements matching the selector
var circleElements = document.querySelectorAll('.progress_container .card .percent svg circle:nth-child(2)');

// Apply the CSS properties to each element
circleElements.forEach(function (circleElement) {
  circleElement.style.stroke = 'var(--clr)';
  circleElement.style.strokeDasharray = '440';
  circleElement.style.strokeDashoffset = 'calc(440 - (440 * var(--num)) / 100)';
  circleElement.style.opacity = '0';
  circleElement.style.animation = 'fadeIn 1s linear forwards';
  circleElement.style.animationDelay = '2.5s';
});

//////////////////////////progres bar circle ends/////////////////

////////////////////////Goto Top button starts////////////////
document
  .getElementById("goTopButton")
  .addEventListener("click", function () {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling animation
    });
  });
////////////////////////Goto Top button ends////////////////////////////

/////////////////////////// horizontal progress bar starts////////////////////
// Get all the skill elements
const skills = document.querySelectorAll(".skill");
let sectionInView = false;

// Update the progress bars and percentages for each skill
function updateSkillProgress() {
  if (!sectionInView && isSectionInViewport()) {
    sectionInView = true;
    animateSkills();
  }
}

// Animate the progress bars and percentages for each skill
function animateSkills() {
  skills.forEach((skill) => {
    const progressBar = skill.querySelector(".progress");
    const progressPercentage = progressBar.dataset.progress;
    const percentageLabel = skill.querySelector(".percentage");

    animateProgressBar(progressBar, progressPercentage);
    animatePercentage(percentageLabel, progressPercentage);
  });
}

// Animate the progress bar width
function animateProgressBar(progressBar, targetWidth) {
  let currentWidth = 0;
  const increment = 1;
  const interval = 10;
  const duration =
    (Math.abs(targetWidth - currentWidth) * interval) / increment;

  const timer = setInterval(() => {
    if (currentWidth >= targetWidth) {
      clearInterval(timer);
    } else {
      currentWidth += increment;
      progressBar.style.width = `${currentWidth}%`;
    }
  }, interval);
}

// Animate the percentage label value
function animatePercentage(percentageLabel, targetPercentage) {
  let currentPercentage = 0;
  const increment = 1;
  const interval = 10;
  const duration =
    (Math.abs(targetPercentage - currentPercentage) * interval) /
    increment;

  const timer = setInterval(() => {
    if (currentPercentage >= targetPercentage) {
      clearInterval(timer);
    } else {
      currentPercentage += increment;
      percentageLabel.textContent = `${currentPercentage}%`;
    }
  }, interval);
}

// Check if the section is in the viewport
function isSectionInViewport() {
  const section = document.querySelector(".skills-container");
  const rect = section.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <=
    (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Update the progress bars and percentages on scroll
window.addEventListener("scroll", updateSkillProgress);
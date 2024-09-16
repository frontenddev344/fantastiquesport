// Toggle Menu Functionaliy Start
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-icon").addEventListener("click", function () {
      document.body.classList.add("menuToggle");
  });

  document.querySelector(".close-icon").addEventListener("click", function () {
      document.body.classList.remove("menuToggle");
  });
});
// Toggle Menu Functionaliy End


// Header Scroll JS Start
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  });
});
// Header Scroll JS End


// Accordion JS Start




// Accordion JS Start


 //Cookies JS Start
 const cookiesBox = document.querySelector('.wrapper'),
 buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
 if (document.cookie.includes('AlexGolovanov')) return;
 cookiesBox.classList.add('show');

 // ---- ---- Button ---- ---- //
 buttons.forEach((button) => {
   button.addEventListener('click', () => {
     cookiesBox.classList.remove('show');

     // ---- ---- Time ---- ---- //
     if (button.id == 'acceptBtn') {
       document.cookie =
         'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
     }
   });
 });
};
window.addEventListener('load', executeCodes);
// //Cookies JS End



document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.icon');
      
      button.classList.toggle('active');
      
      if (content.style.height === '0px' || !content.style.height) {
          content.style.height = content.scrollHeight + 'px'; // Set the height dynamically
          content.style.opacity = '1';
          icon.textContent = '−';
      } else {
          content.style.height = '0';
          content.style.opacity = '0';
          icon.textContent = '+';
      }
  });
});
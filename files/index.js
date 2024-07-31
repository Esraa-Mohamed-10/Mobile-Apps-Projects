let fixed_btn = document.getElementById("fixed-btn");
let menu_btn = document.getElementById("menu-btn");
let close_menu = document.getElementById("close-menu");
let drop_menu = document.getElementById("drop-menu");

// console.log("scroll : " + scrollY)

document.addEventListener("scroll", function () {
  if (scrollY >= 700) {
    fixed_btn.style.display = "block";
  } else if (scrollY < 700) {
    fixed_btn.style.display = "none";
  }
});

menu_btn.addEventListener("click", function () {
  menu_btn.style.display = "none";
  close_menu.style.display = "block";
  drop_menu.style.display = "block";
});

close_menu.addEventListener("click", function () {
  menu_btn.style.display = "block";
  close_menu.style.display = "none";
  drop_menu.style.display = "none";
});


// Load Intersection Observer library
(function() {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intersection-observer/0.12.0/intersection-observer.min.js';
  script.onload = function() {
      console.log('Intersection Observer library loaded.');
  };
  document.head.appendChild(script);
})();

// progress bar animation
document.addEventListener("DOMContentLoaded", () => {
  const progressSection = document.querySelector(".progress-section");
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => {
            bar.style.width = bar.getAttribute("data-progress") + "%";
          });
          observer.unobserve(progressSection); // Stop observing once the animation has started
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the section is visible
    }
  );

  observer.observe(progressSection);
});

// emailjs code

// Load the EmailJS script
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
script.type = 'text/javascript';
script.onload = function () {
    emailjs.init({
        publicKey: 'Kf46iGPQJ_1g66U4B',
    });
};
document.head.appendChild(script);

document.getElementById("contact").addEventListener("submit", function(event) {
  event.preventDefault(); 
  SendMail(); 
});

function SendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_c38tg0s", "template_c4occxb", parms)
    .then(function(response) {
      alert("تم ارسال استفسارك سنتواصل بك قريبا");
    }, function(error) {
      console.error("FAILED...", error);
      alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    });
}


const texts = ["تطبيقاتي", "عنوان 2", "عنوان 3"];
const speed = 100; // سرعة الكتابة
const eraseSpeed = 100; // سرعة المسح
const waitTime = 1000; // وقت الانتظار قبل المسح
const element = document.getElementById("typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
    if (charIndex < texts[textIndex].length) {
        element.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, waitTime); // انتظار قبل المسح
    }
}

function eraseText() {
    if (charIndex >= 0) {
        element.innerHTML = texts[textIndex].substring(0, charIndex);
        charIndex--;
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length; // الانتقال للجملة التالية
        setTimeout(typeWriter, 500); // انتظار قبل إعادة الكتابة
    }
}

typeWriter();
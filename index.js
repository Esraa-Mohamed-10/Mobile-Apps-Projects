let fixed_btn = document.getElementById("fixed-btn")
let menu_btn = document.getElementById("menu-btn")
let close_menu = document.getElementById("close-menu")
let drop_menu= document.getElementById("drop-menu")

// console.log("scroll : " + scrollY)

document.addEventListener("scroll",function()
{
    if(scrollY>=700)
    {
fixed_btn.style.display="block"
    }
    else if(scrollY<700)
    {
        fixed_btn.style.display="none"
    }
})

menu_btn.addEventListener('click',function(){
    menu_btn.style.display="none"
    close_menu.style.display="block"
    drop_menu.style.display="block"
})

close_menu.addEventListener('click',function(){
    menu_btn.style.display="block"
    close_menu.style.display="none"
    drop_menu.style.display="none"
})


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

 
function SendMail(){
  let parms = {
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    message:document.getElementById('msg').value
  }

  emailjs.send('service_asg5xkd','template_8riijaf',parms).then(alert('تم ارسال استفسارك سنتواصل بك قريبا'))
}
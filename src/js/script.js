const menu=document.querySelector('.nav_menu');
const nav=document.querySelector('.toogle .navbar-nav');
const play=document.querySelector('.play__video');
const video=document.querySelector('.video');
const navbar=document.querySelector('.navbar');
menu.addEventListener('click',()=>{
    nav.classList.toggle('hidden');
    navbar.classList.toggle('dark');

});
play.addEventListener('click',()=>{
    video.style.display='block';
});

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".portfolio__flters .btn");
    // console.log(filterButtons);
    const portfolioItems = document.querySelectorAll(".portfolio__item");
    console.log(portfolioItems);
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const filterClass = button.classList[1]; // e.g., 'alll', 'pros1', etc.
  
        portfolioItems.forEach((item) => {
          if (filterClass === "all") {
            item.style.display = "block";
          } else {
            if (item.classList.contains(filterClass.replace("1", ""))) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          }
        });
      });
    });
  });
  

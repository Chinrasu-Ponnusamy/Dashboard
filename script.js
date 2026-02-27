const body =document.querySelector("body"),
      modeToggle =body.querySelector(".mode-toggle");
    siderbar =body.querySelector("nav");
    siderbarToggle =body.querySelector(".siderbar-toggle");

modeToggle.addEventListener("click",()=>{
 body.classList.toggle("dark")
});

 siderbarToggle.addEventListener("click",()=>{
    siderbar.classList.toggle("close");
 })
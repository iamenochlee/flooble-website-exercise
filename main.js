
    const hamburger = document.querySelector("#menuBtn");
    const navMenu = document.querySelector("#sideNav");


    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
  
tabs = document.querySelectorAll(".card")


tabs.forEach((tab) => {
  console.log(tab)
  tab.addEventListener("click", (event) => {
    event.target.classList.toggle("active")
    console.log(event.target.id)
    if ( event.target.id == 1 ) {
      document.querySelector(".br").classList.toggle("hidden");
      document.querySelector(".all").classList.toggle("hidden");
    } else if ( event.target.id == 2 ) {
      document.querySelector(".br").classList.toggle("hidden");
      document.querySelector(".all").classList.toggle("hidden");
    } else if ( event.target.id == 3 ) {
      document.querySelector(".wd").classList.toggle("hidden");
      document.querySelector(".all").classList.toggle("hidden");
  }
  });
});


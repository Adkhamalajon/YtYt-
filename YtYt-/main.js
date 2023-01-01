let toggle = document.querySelector(".toggle-button")
let navWrapper = document.querySelector(".nav-wrapper")
toggle.addEventListener("click", ()=>{
    navWrapper.style.display =  "flex";
})
let xButoon = document.querySelector(".x-button")
undefined
xButoon.addEventListener("click", ()=>{
    navWrapper.style.display = "none"
})


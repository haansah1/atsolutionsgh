navbarEl = document.querySelector(".header");
// needEl = document.querySelector(".art1");
// art2El = document.querySelector(".art2");
// artEl = document.querySelectorAll(".one");
hid1El = document.querySelector(".hid1");
hidEl = document.querySelector(".hid");
secbarEl = document.querySelector(".secbar");
separateEl = document.querySelector(".separate");
separatEl = document.querySelector(".separat");
inputEl = document.getElementById("input");
bodyEl = document.querySelector(".body");
headerEl = document.querySelector(".header");
// art4El = document.querySelector(".art4");
aEl = document.querySelector(".a");
loremEl = document.querySelector(".lorem")




// console.log(navbarEl.offsetHeight);
// console.log(art4El.offsetTop);
// console.log(window.scrollY);
// window.addEventListener("scroll", ()=> {
//     if(window.scrollY > needEl.offsetTop - navbarEl.offsetHeight - 400){
//         needEl.classList.add("active");
//     }
//     else if(window.scrollY < needEl.offsetTop - navbarEl.offsetHeight - 400){
//         needEl.classList.remove("active");
//     }
// }
// );


// window.addEventListener("scroll", ()=> {
//     if(window.scrollY > art4El.offsetTop - navbarEl.offsetHeight - 500){
//         // art4El.style.color = "red";
//         art4El.classList.add("active3");
//         // needEl.classList.add("active");
//     }
//     else{
//         // art4El.style.opacity = 0;
//         art4El.classList.remove("active3");
//         // needEl.classList.remove("active");
//     }
// }
// );




updateMode();
function updateMode(){
    if(inputEl.checked){
        hidEl.style.transform = "scaleY(1)";
        loremEl.style.visibility = "hidden";
        
    }
    else{
        loremEl.style.visibility = "visible";
        hidEl.style.transform = "scaleY(0)";
        hid1El.style.transform = "scaleY(0)";
    }
}

inputEl.addEventListener("input", ()=>{
    updateMode();
});


// window.addEventListener("scroll", ()=> {
//     for(i=0; i < artEl.length; i++){
//         if(window.scrollY > needEl.offsetTop - navbarEl.offsetHeight - 100){
//             artEl[i].classList.add("activ");
//             // artEl[i].style.background = "pink";
//             }
//         else if(window.scrollY < needEl.offsetTop - navbarEl.offsetHeight - 100){
//             artEl[i].classList.remove("activ");
//             }
//         }
//     }
// );

bodyEl.addEventListener("click", ()=>{
    // hidEl.classList.remove("active0");
    // hid1El.classList.remove("active0");
    hidEl.style.transform = "scaleY(0)";
    hid1El.style.transform = "scaleY(0)";
    loremEl.style.visibility = "visible";
})

headerEl.addEventListener("click", ()=>{
    // hidEl.classList.remove("active0");
    // hid1El.classList.remove("active0");
    hidEl.style.transform = "scaleY(0)";
    hid1El.style.transform = "scaleY(0)";
    loremEl.style.visibility = "visible";
})

secbarEl.addEventListener("mouseover", ()=>{
    // hid1El.classList.add("active0");
    hid1El.style.transform = "scaleY(1)";
})
// secbarEl.addEventListener("click", ()=>{
//     hid1El.classList.remove("active0")
// })

secbarEl.addEventListener("mouseout", ()=>{
    // hid1El.classList.remove("active0")   
})
hid1El.addEventListener("mouseout", ()=>{
    // hid1El.classList.remove("active0")
    hid1El.style.transform = "scaleY(0)";
})
hid1El.addEventListener("mouseover", ()=>{
    // hid1El.classList.add("active0")
    hid1El.style.transform = "scaleY(1)";
})
separateEl.addEventListener("mouseover", ()=>{
    // hid1El.classList.remove("active0")
    hid1El.style.transform = "scaleY(0)";
})

aEl.addEventListener("mouseover", ()=>{
    separatEl.style.transform = "scaleY(1)";
})

aEl.addEventListener("mouseout", ()=>{
    // separatEl.classList.remove("active4")
    // separatEl.style.display = "none"
    // separatEl.style.display = "none"
    separatEl.style.transform = "scaleY(0)";

})





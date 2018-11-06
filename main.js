// Navigation Menu
let navPopup = document.querySelector(".nav-popup");

function navToggleClick() {
    if (navPopup.style.display == "none") {
        navPopup.style.display = "block";
        this.style.transform = "rotate(90deg)";
    } else {
        navPopup.style.display = "none";
        this.style.transform = "rotate(180deg)";
    }  
};

document.querySelector(".nav-toggle-wrap").addEventListener("click", navToggleClick);

// GSAP Animations
TweenMax.staggerFrom('li', .3, {opacity: 0, scale: .5, y: 80, delay: 0}, .3);
TweenMax.staggerFrom('article', .7, {opacity: 0, xPercent: 40}, .3);
TweenMax.staggerFrom('.logo', 1, {opacity: 0, scale: .2, y: 80, delay: .5});

// (function() {
//     let h1 = document.getElementsByTagName("h1");
//     let tl = new TimelineLite();

//     tl
//         .from(h1, .3, {x: -2000, autoAlpha: 0, ease:Power3.easeIn}, .3);
// })();

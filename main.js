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

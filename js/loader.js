window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
    const star = document.getElementById("star")
    const counter = document.getElementById("counter");
    const points = document.getElementsByClassName("point");
    const nav = document.getElementById("nav-placeholder");


    setTimeout(() => {

        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
            star.style.display = "block";
            counter.style.display = "block";
            nav.style.display = "block";

        }, 300);
    }, 300); 

});




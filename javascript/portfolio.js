//Time of day function

const hour = new Date();
let hourOfDay = hour.getHours();
if (hourOfDay < 12 && hourOfDay >= 00) {
    document.getElementById("greeting").innerHTML = "Good Morning!"
    document.getElementById("greeting").style.color = "orangered"
}
else if (hourOfDay < 18 && hourOfDay >= 12) {
    document.getElementById("greeting").innerHTML = "Good Afternoon!"
    document.getElementById("greeting").style.color = "#b3dbe0"
}
else if (hourOfDay < 21 && hourOfDay >= 18) {
    document.getElementById("greeting").innerHTML = "Good Evening!"
    document.getElementById("greeting").style.color = "#392033"
}
else if (hourOfDay >= 22 && hourOfDay <= 00) {
    document.getElementById("greeting").innerHTML = "Good Night!"
    document.getElementById("greeting").style.color = "#OFO44C"
}
else {
    document.getElementById("greeting").innerHTML = "Welcome"
    document.getElementById("greeting").style.color = "#0000"
}

//Time of day ends

//
//Day of the week function
//

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("weekday-display").innerHTML = day;
//day of the week ends
//

//Random words function
//
const randomWords = [
    "a Fun filled",
    "a Pleasant",
    "a Relaxing",
    "a vibrant",
    "a productive",
    "an Amazing",
    " a Calm",
    "a Lovely",
    "a pleasurable",
    "a cheerful",
    "a nice",
    "a satisfying",
    "a delightful",
    "an enjoyable",
    "a cool"
];
let ranDom = Math.floor(Math.random() * randomWords.length);
let ranDomValue = randomWords[ranDom];
document.getElementById("qualifier").innerHTML = ranDomValue;

//
//Random words function ends
//

//Hamburger menu
//
// Nav hamburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

//Shows the menu

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
})
//select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);


//loader
/*document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible"
    }
    else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility="visible"
    }
}*/
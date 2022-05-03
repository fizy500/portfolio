//Variable declarations
let greeting = document.getElementById("greeting");
let qualifier = document.getElementById("qualifier");
let dayOfWeek = document.getElementById("weekday-display");
let clock = document.getElementById("clock");

//Time of day function
const timeOfDay = () => {
    const hour = new Date();
    let hourOfDay = hour.getHours();
    return hourOfDay
}

if (timeOfDay() < 12 && timeOfDay() >= 00) {
    greeting.innerHTML = "Good Morning!"
    greeting.style.color = "orangered"
}
else if (timeOfDay() < 18 && timeOfDay() >= 12) {
    greeting.innerHTML = "Good Afternoon!"
    greeting.style.color = "#b3dbe0"
}
else if (timeOfDay() < 21 && timeOfDay() >= 18) {
    greeting.innerHTML = "Good Evening!"
    greeting.style.color = "#392033"
}
else if (timeOfDay() == 22 && timeOfDay() <= 00) {
    greeting.innerHTML = "Good Night!"
    greeting.style.color = "#OFO44C"
}
else {
    greeting.innerHTML = "Welcome"
    greeting.style.color = "#1111"
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
dayOfWeek.innerHTML = day;
//day of the week ends


//Random words function
//

const ranDomFunc = () => {
    randomWords = [
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
    qualifier.innerHTML = ranDomValue;
}
setInterval(ranDomFunc, 9000);
//
//Random words function ends
//

const showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    am_pm = "AM";
    let dot = ":";

    if (hour > 12) {
        hour -= 12;
        am_pm = "pm";
    }
    if (hour == 0) {
        hour = 12;
        am_pm = "am";
    }
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    let currentTime = hour + dot + min + " " + am_pm;
    clock.innerHTML = currentTime;
}
setInterval(showTime);

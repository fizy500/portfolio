//Day of the week function
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
document.getElementById("weekday-display").innerHTML =day;











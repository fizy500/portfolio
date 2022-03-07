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
else if (hourOfDay  >= 22 && hourOfDay <= 00 ) {
    document.getElementById("greeting").innerHTML = "Good Night!"
    document.getElementById("greeting").style.color = "#OFO44C"
}
else {
    document.getElementById("greeting").innerHTML = "Welcome" 
    document.getElementById("greeting").style.color = "#0000"
}
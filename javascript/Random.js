//Random words function
const myArray = [
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

let ranDom = Math.floor(Math.random() * myArray.length);
let ranDomValue = myArray[ranDom];
document.getElementById("qualifier").innerHTML =ranDomValue;

//const myfunc = myArray.map(name => name.charAt(0));
//const vowels = ["A", "E", "I", "O", "U"];

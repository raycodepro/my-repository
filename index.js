let buttonClick = document.getElementById("clickmebtn1")
let buttonLog = document.getElementById("log-rolls")
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

//var linkElement = document.getElementById('https://google.com');
//document.createElement('a')

let count = 0
let message = ""

function buttonClickHandler() {
  let selection = Math.random()
  if (selection <= 0.00001) {
    count = count + 250000000
    //message = "MYTHIC"
  } else if (selection <= 0.0001) {
    count = count + 2500000
    //message = "OMG"
  } else if (selection <= 0.001) {
    count = count + 250000
    //message = "wow"
  } else if (selection <= 0.002) {
    count = count + 50000
    message = "how did this happen?"
  } else if (selection <= 0.004) {
    count = count + 500
    //message = "SECRET!"
    secretLink.textContent= "SECRET!?!!?"
  } else if (selection <= 0.04) {
    count = count + 25
    //message = "JACKPOT!"
    jackpotLink.textContent = "JACKPOT!!!"
    //linkElement.href = https://google.com;
  } else if (selection <= 0.09) {
    count = count + 5
    epicLink.textContent = "Epic!"
    //message = "epic!"
  } else if (selection <= 0.4) {
    count = count + 3
 ehLink.textContent = "Ehh"
  } else {
    count = count + 1
   
  }

  countEl.textContent = count
}

function logAction() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  ehLink.textContent = ""
  epicLink.textContent = ""
  jackpotLink.textContent = ""
  secretLink.textContent= ""
  count = 0
  countEl.textContent = 0
}

var body = document.body
/* var hover_element = document.getElementById("hero_hover_animation");
hover_element.addEventListener("mouseover", function () {
    body.style.backgroundColor = '#ffd66b'
});
hover_element.addEventListener("mouseout", function () {
    body.style.backgroundColor = '#fff';
}); */
//const innerTextOutput = document.getElementById("innerTextOutput");
//innerTextOutput.value = source.innerText;
//const button = document.querySelector("button");
//count = 0
//button.addEventListener("click", (event) => {
//button.textContent = `Click count: ${event.detail}`;
//count += 1;
// });
let initialNumber = 100
let addNumber = 100
let theNumber = Number(prompt("Pick A Number Of Viruses"))
if (theNumber < 0){
window.confirm("this is unusual...")}
window.confirm(
  "Your number is the square root of " +
    (theNumber + addNumber) * initialNumber,
)
alert("have some misinformation fun")
function multiBtn(){
count = count * 2;
countEl.textContent = count;
}
let ehLink = document.getElementById("ehlink")
let epicLink = document.getElementById("epiclink")
let jackpotLink = document.getElementById("jackpotlink")
let secretLink = document.getElementById("secretlink")




function newsPrompt(){
let newsPrompt = 
(prompt("what is your name?"))
}

function newsFeature(){
    window.confirm("This person will DIE in 8 days to a semi-truck -- troubled psychic    " + 
    newsPrompt)}



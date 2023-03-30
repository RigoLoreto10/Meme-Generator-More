let activeCard = null;
let awaitingMove = false;
let count =0;
let currentScore = 0;
let start=document.getElementById("start");
let bestScore = localStorage.getItem("best-score");

if(bestScore){
  document.getElementById("best-score").innerText = lowScore;
}

const gameContainer = document.getElementById("game");
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

const numCards = COLORS.length;

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    newDiv.setAttribute("data-color",color);
    newDiv.setAttribute("flipped","false");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", function(){
      const alreadyFlipped = newDiv.getAttribute("flipped");
      if(awaitingMove || alreadyFlipped === "true" || newDiv === activeCard){
        return;
      }
      newDiv.style.backgroundColor = color;
      
      if(!activeCard){
        activeCard=newDiv;
      console.log(activeCard);
        return;
      }

      const match = activeCard.getAttribute("data-color");

      if(match===color){
        newDiv.setAttribute("flipped","true");
        awaitingMove = false;
        activeCard=null;
        count+=2;

        if(count===numCards){
          alert("you win! refresh to play again");
        }
        return;
      }


      awaitingMove = true;
      
      setTimeout(function(){
      newDiv.style.backgroundColor = null;
      activeCard.style.backgroundColor = null;

      awaitingMove = false;
      activeCard=null;
      },1000);
      
      return newDiv;

    });

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
// function handleCardClick(event) {
// // you can use event.target to see which element was clicked
//  const cards = document.querySelectorAll("[flipped]");
// if(awaitingMove){
//   return;
// }
// this.style.backgroundColor = event.target.className;

// if(!activeCard){
//   activeCard=this;

//   return;
// }

// awaitingMove = true;

// setTimeout(function(){
// event.target.className = null;
// activeCard.style.backgroundColor = null;
// },1000);

// return event.target.className;

//  const flippedCards = Array.from(cards).filter((card)=>card.getAttribute("flipped")=== "true");
//  if(flippedCards.includes(this)){
//   return;
//  }
// console.log("you just clicked", event.target);
  // this.setAttribute("flipped",true);
// } 

// when the DOM loads
createDivsForColors(shuffledColors);

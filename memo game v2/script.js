

const cardArray = [
    {name : "cheeseburger",  img : "img/cheeseburger.png" },
    {name : "fries", img : "img/fries.png" },
    {name : "hotdog", img : "img/hotdog.png" },
    {name : "ice-cream", img : "img/ice-cream.png" },
    {name : "milkshake", img : "img/milkshake.png" },
    {name : "pizza", img : "img/pizza.png" },
    {name : "cheeseburger",  img : "img/cheeseburger.png" },
    {name : "fries", img : "img/fries.png" },
    {name : "hotdog", img : "img/hotdog.png" },
    {name : "ice-cream", img : "img/ice-cream.png" },
    {name : "milkshake", img : "img/milkshake.png" },
    {name : "pizza", img : "img/pizza.png" }
    
    
];

cardArray.sort( () => 0.5 - Math.random())

const displayCards = document.querySelector("#grid");
const displayScore = document.getElementById("score");


console.log(cardArray);

let chosenCardsdataIdArray = [];
let chosenCardName = [];
let cardsWon = [];
//some variables have to come hear..







function createBoard() {
    for(let i=0; i<cardArray.length; i++){
       const card = document.createElement("img");
       card.setAttribute("src", "img/blank.png");
       card.setAttribute("data-id", i)
       displayCards.appendChild(card);
       
       card.addEventListener("click", flipCard);
       
    }
}

createBoard();

function flipCard() {
    let chosenCardId = this.getAttribute("data-id");
    chosenCardName = cardArray[chosenCardId].name;
   chosenCardsdataIdArray.push(chosenCardId);
   const cardSrc = cardArray[chosenCardId].img;
   this.setAttribute("src", cardSrc);
   
   if(chosenCardsdataIdArray.length === 2) {
     setTimeout(checkForMatch, 1000);
   }
}  

function checkForMatch () {
    const cards = document.querySelectorAll("img");
    const option1 = chosenCardsdataIdArray[0];
    const option2 = chosenCardsdataIdArray[1];
    if(option1 === option2) {
        cards[option1].setAttribute('src', 'img/blank.png');
        cards[option2].setAttribute('src', 'img/blank.png');
        alert("Oops you chose the same card");
    }else if(cardArray[option1].name === cardArray[option2].name) {
        alert("Its a match!");
        cards[option1].setAttribute('src', 'img/white.png');
        cards[option2].setAttribute('src', 'img/white.png');
        cards[option1].removeEventListener('click', flipCard);
        cards[option2].removeEventListener('click', flipCard);
        cardsWon.push(chosenCardName); 

    }else{
        alert("sorry try again");
        cards[option1].setAttribute('src', 'img/blank.png');
        cards[option2].setAttribute('src', 'img/blank.png');
    }
 chosenCardName = [];
 chosenCardsdataIdArray = [];

 if (cardsWon.length === cardArray.length/2) {
    displayScore.textContent =  'Congratulations! You found them all! ' +  'attempts ' + cardsWon.length;
 }

}

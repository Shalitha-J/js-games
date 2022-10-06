
const displayComputerChoice = document.getElementById("computer-choice");
const displayUserChoice = document.getElementById("user-choice");
const displayResult = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let  userChoice;
let  computerChoice;
let result;



// user choice display ...

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    displayUserChoice.innerHTML = userChoice;
    
    computerChoices();
    
}));

// computer choice generator ...

function computerChoices() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

   /* if( randomNumber ===1 ) {
        computerChoice = "rock";
    }
    if( randomNumber === 2 ) {
        computerChoice = "paper";
    }
    if( randomNumber === 3 ) {
        computerChoice = "scissors";
    }*/

    switch (randomNumber) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
    }

    displayComputerChoice.innerHTML = computerChoice;

    winloos();
    
    


    
    

}

//displaying the results...


function winloos() {
   if(userChoice ===  computerChoice) {
    result = "It's a Drow!..🤝";
   }else if(userChoice === "Rock" && computerChoice === "Paper") {
    result = "You loose..💀";
   }else if(userChoice === "Rock" && computerChoice === "Scissors") {
    result = "You win..🎉🎇💎";
   }else if(userChoice === "Paper" && computerChoice === "Rock") {
    result = "You win..🎉🎇💎";
   }else if(userChoice === "Paper" && computerChoice === "Scissors") {
    result = "You loose..💀";
   }else if(userChoice === "Scissors" && computerChoice === "Rock") {
    result = "You loose..💀";
   }else if(userChoice === "Scissors" && computerChoice === "Paper") {
    result = "You win..🎉🎇💎";
   }
   displayResult.innerHTML = result;
}


console.log(displayResult.innerHTML);
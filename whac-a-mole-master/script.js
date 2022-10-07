


const squares = document.querySelectorAll(".square");
const score = document.querySelector('#score');
const timeLeft = document.querySelector('#timeLeft');



let moleId;
let result = 0;
let currentTime = 10;
let timerId ;


function randomSquare () {
    squares.forEach(square => {
        square.classList.remove("mole")
    } )


    let randomSquare = squares[Math.floor(Math.random() * 9)] ;
    randomSquare.classList.add('mole');

    moleId=randomSquare.id;
    console.log(moleId);
    
}

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        console.log(square.id);
        if(square.id === moleId) {
           result = result + 1
           console.log(result);
           score.textContent = result;
        }
    })
})


function callRandomSquare() {
    

    timerId = setInterval(randomSquare, 500);
}

callRandomSquare();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime==0) {
        clearInterval(timerId);
        clearInterval(countDownTimerId);
        alert('GAME OVER! Your final score is ' + result)
    }
}

let  countDownTimerId = setInterval(countDown, 1000); 






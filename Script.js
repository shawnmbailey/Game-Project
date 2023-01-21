let pattern = [];
let playerPattern = [];
let flash;
let round;
let good;
let pcTurn;
let on = false;
let win;

const roundCounter = document.querySelector("#ROUND");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const blue = document.querySelector("#blue");
const onBtn = document.querySelector("#on");
const startbtn = document.querySelector("#start-button");

onBtn.addEventListener('click', (event) => {
    if (onBtn.checked == true) {
        on = true;
        roundCounter.innerHTML = "-";
    } else {
        on = false;
        roundCounter.innerHTML = "";
        clearColor();
        
    }
});

startbtn.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

function play() {
    win = false;
    pattern = [];
    playerPattern = [];
    flash = 0;
    intervalid = 0;
    round = 1;
    roundCounter.innerHTML = 1;
    good = true;
    updatePattern(1);
    pcTurn = true;

    gameTurn();
}

function updatePattern(n){
    for (var i = 0; i < n; i++) {
        pattern.push(Math.floor(Math.random() * 4) + 1);
    }
}

function gameTurn() {
    if (pcTurn) {
        clearColor();
        let array = [1,4,2,3] // pattern

        console.log('hello')

  let i = 0;                    //  set your counter to 1
    function myLoop() {         //  create a loop function
      setTimeout(function() {   //  your code here
                                // perform logic prior to increment
                                clearColor();
                                console.log(pattern)
                                console.log('trig1')
       if(pattern[i]==1){
        one();
       }
       if(pattern[i]==2){
        two()
       }
       if(pattern[i] ==3){
        three()
       }
       if(pattern[i]==4){
        four()
       }
        i++;  
        flash++;                  //  increment the counter
        if (i < pattern.length+1) {           //  if the counter < 10, call the loop function
            console.log('trig')
          myLoop();             //  ..  again which will trigger another 
        } else {
            return pcTurn = false;
        }                      //  ..  setTimeout()
      }, 1000)
    }
  
  myLoop();
   
    }
}

function one() {
    if (pcTurn) {

    }

    green.style.backgroundColor = "lightgreen";
}

function two() {
    if (pcTurn) {

    }

    red.style.backgroundColor = "tomato";
}

function three() {
    if (pcTurn) {

    }
    yellow.style.backgroundColor = "yellow";
}

function four() {
    if (pcTurn) {

    }

    blue.style.backgroundColor = "lightskyblue";
}
// full game flashes
function clearColor() {
    green.style.backgroundColor = "darkgreen";
    red.style.backgroundColor = "darkred";
    yellow.style.backgroundColor = "goldenrod";
    blue.style.backgroundColor = "darkblue";
}

function flashColor() {
    green.style.backgroundColor = "lightgreen";
    red.style.backgroundColor = "tomato";
    yellow.style.backgroundColor = "yellow";
    blue.style.backgroundColor = "lightskyblue";
}
// below is checking for player input
green.addEventListener('click', (event) => {
   
        playerPattern.push(1);
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    
})

red.addEventListener('click', (event) => {
    console.log('red')

        playerPattern.push(2);
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    
})

yellow.addEventListener('click', (event) => {
 
        playerPattern.push(3);
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    
})

blue.addEventListener('click', (event) => {

        playerPattern.push(4);
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    
})
function check(){
   console.log(playerPattern.sort().join(','))
   console.log(pattern.sort().join(','))
   console.log(playerPattern.sort().join(',') == pattern.sort().join(','))
    if(playerPattern.sort().join(',') == pattern.sort().join(',')){
        console.log('correct')
        round++;
        document.querySelector('#ROUND').innerText=round;
        playerPattern=[];
        pcTurn= true;
        updatePattern(round)
        gameTurn();
        if(round>2){ // number of rounds until win
          endGame();
        }
    } 

    if(playerPattern.length == pattern.length){
        console.log('incorrect')
        playerPattern= [];
    }
}

function winGame() {
    flashColor();
    roundCounter.innerHTML = "WIN!";
    on = false;
    win = true;
}

function endGame(){
    document.body.innerHTML='<div class="winScreen"><div>You Win!</div><button id="playAgain">Play Again</button></div>'
let playButton  =  document.querySelector('#playAgain');
playButton.addEventListener('click',e=>{
    location.reload();
})
}
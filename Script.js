// Variables for Game elements 
let pattern = [];
let playerPattern = [];
let flash;
let round;
let pcTurn;
let on = false;
let win;
let sound = true;

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
// function to turn on the game and start the first pattern
startbtn.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});
//Game play function
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
// Updates Pattern for next round 
function updatePattern(n){
    for (var i = 0; i < n; i++) {
        pattern.push(Math.floor(Math.random() * 4) + 1);
    }
}
// function for game turns (computer/player)
function gameTurn() {
    if (pcTurn) {
        clearColor();
        let array = [] // pattern

  let i = 0;                    
    function myLoop() {  
      setTimeout(function() {   
        clearColor();
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
        flash++;                     //  increment the counter
        if (i < pattern.length+1) {  //  if the counter < 10, call the loop function
          myLoop();                  //  ..  again which will trigger another 
        } else {
            return pcTurn = false;
        }                           //  ..  setTimeout()
      }, 1000)
    }
  
  myLoop();
   
    }
}
// functions for sounds to trigger when computer plays pattern
function one() {
    if (sound) {
      let audio = document.getElementById("sound1");
      audio.play();
    }
    sound = true;
    green.style.backgroundColor = "lightgreen";
  }
  
  function two() {
    if (sound) {
      let audio = document.getElementById("sound2");
      audio.play();
    }
    sound = true;
    red.style.backgroundColor = "tomato";
  }
  
  function three() {
    if (sound) {
      let audio = document.getElementById("sound3");
      audio.play();
    }
    sound = true;
    yellow.style.backgroundColor = "yellow";
  }
  
  function four() {
    if (sound) {
      let audio = document.getElementById("sound4");
      audio.play();
    }
    sound = true;
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
//Checking pattern input and number of rounds until game is won
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
        if(round>14){ 
          endGame();
        }
    } 

    if(playerPattern.length == pattern.length){
        flashColor();
        roundCounter.innerHTML="NO!"
        setTimeout(()=>{
            roundCounter.innerHTML = round;
            clearColor();
        },800)
        playerPattern= [];
    }
}
// function to win game
function winGame() {
    flashColor();
    roundCounter.innerHTML = "WIN!";
    on = false;
    win = true;
}
//End Game and play again function
function endGame(){
    document.body.innerHTML='<div class="winScreen"><div>You Win!</div><button id="playAgain">Play Again</button></div>'
let playButton  =  document.querySelector('#playAgain');
playButton.addEventListener('click',e=>{
    location.reload();
})
}
let pattern = [];
let playerPattern = [];
let flash;
let round;
let good;
let pcTurn;
let intervalid;
let strict = false;
let on = false;
let win;

const roundCounter = document.querySelector("#ROUND");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const blue = document.querySelector("#blue");
const strictBtn = document.querySelector("#strict-mode");
const onBtn = document.querySelector("#on");
const startbtn = document.querySelector("#start-button");

strictBtn.addEventListener('click', (event) => {
    if (strictBtn.checked == true) {
        strict = true;
    } else {
        strict = false;
    }
});

onBtn.addEventListener('click', (event) => {
    if (onBtn.checked == true) {
        on = true;
        roundCounter.innerHTML = "-";
    } else {
        on = false;
        roundCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalid);
    }
});

startbtn.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

function play() {
    win = false;
    pattern = [1, 1, 2, 4];
    playerPattern = [];
    flash = 0;
    intervalid = 0;
    round = 1;
    roundCounter.innerHTML = 1;
    good = true;
    for (var i = 0; i < 20; i++) {
        pattern.push(Math.floor(Math.random() * 4) + 1);
    }
    pcTurn = true;

    intervalid = setInterval(gameTurn, 800);
}

function gameTurn() {
    on = false;

    if (flash == round) {
        clearInterval(intervalid);
        pcTurn = false;
        clearColor();
        on = true;
    }

    if (pcTurn) {
        clearColor();
        setTimeout(() => {
            if (pattern[flash] == 1) one();
            if (pattern[flash] == 2) two();
            if (pattern[flash] == 3) three()
            if (pattern[flash] == 4) four();
            flash++;
        }, 200);
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

    red.style.bacgroundColor = "tomato";
}

function three() {
    if (pcTurn) {

    }
    noise = true;
    yellow.style.backgroundColor = "yellow";
}

function four() {
    if (pcTurn) {

    }

    blue.style.backgroundColor = "lightskyblue";
}

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

green.addEventListener('click', (event) => {
    if (on) {
        playerPattern.push(1);
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

red.addEventListener('click', (event) => {
    if (on) {
        playerPattern.push(2);
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

yellow.addEventListener('click', (event) => {
    if (on) {
        playerPattern.push(3);
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

blue.addEventListener('click', (event) => {
    if (on) {
        playerPattern.push(4);
        check();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

function check() {
    if (playerPattern[playerPattern.length - 1] !== pattern[playerPattern.length - 1])
        good = false;

    if (playerPattern.length == 3 && good) {
        winGame();
    }

    if (good == false) {
        flashColor();
        roundCounter.innerHTML = "!";
        setTimeout(() => {
            roundCounter.innerHTML = round;
            clearColor();

            if (strict) {
                play();
            } else {
                pcTurn = true;
                flash = 0;
                playerPattern = [];
                good = true;
                intervalid = setInterval(gameTurn, 800);
            }
        }, 800);

    }

    if (round == playerPattern.length && good && !win) {
        round++;
        playerPattern = [];
        pcTurn = true;
        flash = 0;
        roundCounter.innerHTML = round;
        intervalid = setInterval(gameTurn, 800);
    }

}

function winGame() {
    flashColor();
    roundCounter.innerHTML = "WIN!";
    on = false;
    win = true;
}
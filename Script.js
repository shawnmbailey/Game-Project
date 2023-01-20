let pattern = [];
let playerPattern = [];
let flash
let playerTurn;
let cmpterTurn;
let good;
let interval;
let strictMode = false;
let powerOn = false;
let win;

const roundIndicator = document.querySelector("#round");
const green = document.querySelector("#green");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const blue = document.querySelector("#blue");
const strctMode = document.querySelector("#strict-mode");
const pwrOn = document.querySelector("#on");
const startBtn = document.querySelector("#start");

strctMode.addEventListener('click', (event) => {
    if (strctMode.checked == true) {
        strictMode = true;
    } else {
        strictMode = false;
    }
});

pwrOn.addEventListener('click', (event) => {
    if (pwrOn.checked == true) {
        powerOn = true;
    } else {
        powerOn = false;
    }
});

startBtn.addEventListener('click', (event) => {
    if (on || win) {
        playGame();
    }
})

function playGame() {
    win = false;
    pattern = [];
    playerPattern = [];
    flash = 0;
    interval = 0;
    playerTurn = 1;
    roundIndicator.innerHTML = 1;
    good = true;
    for (let i = 0; i < 20; i++) {
        pattern.push(Math.floor(Math.random() * 4) + 1);
    }
    cmpterTurn = true;

    interval = setInterval(gameTrn, 800);
}

function gameTrn() {
    powerOn = false;

    if (flash == playerTurn) {
        clearInterval(interval);
        cmpterTurn = false;
        clearColor();
        powerOn = true;
    }

    if (cmpterTurn) {
        clearColor();
        setTimeout(() => {
            if (pattern[flash] == 1) one();
            if (pattern[flash] == 2) two();
            if (pattern[flash] == 3) three();
            if (pattern[flash] == 4) four();
            flash++;
        }, 200);
    }
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
    if (powerOn) {
        playerPattern.push(1);
        check();
        one();
        if (!win) {
            setTimeout(
                () => {
                    clearColor
                }, 300)
        }
    }
})

red.addEventListener('click', (event) => {
    if (powerOn) {
        playerPattern.push(2);
        check();
        two();
        if (!win) {
            setTimeout(
                () => {
                    clearColor
                }, 300)
        }
    }
})

yellow.addEventListener('click', (event) => {
    if (powerOn) {
        playerPattern.push(3);
        check();
        three();
        if (!win) {
            setTimeout(
                () => {
                    clearColor
                }, 300)
        }
    }
})

blue.addEventListener('click', (event) => {
    if (powerOn) {
        playerPattern.push(4);
        check();
        four();
        if (!win) {
            setTimeout(
                () => {
                    clearColor
                }, 300)
        }
    }
})

function check() {
    if( playerPattern[playerPattern.length -1] !== pattern[playerPattern.length])
}
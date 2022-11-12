let yourScore = document.querySelector("#yourScore");
let yourHp = 100;

let enemyScore = document.querySelector("#enemyScore");
let enemyHp = 100;

let roundResult = document.querySelector("#roundResult");

let rockPlayer = document.querySelector("#rockPlayer");
let paperPlayer = document.querySelector("#paperPlayer");
let scissorsPlayer = document.querySelector("#scissorsPlayer");

let rockComputer = document.querySelector("#rockComputer");
let paperComputer = document.querySelector("#paperComputer");
let scissorsComputer = document.querySelector("#scissorsComputer");

let playerPick = document.querySelector("#playerPick");
let computerPick = document.querySelector("#computerPick");

let matchHistory = document.querySelector("#matchHistory");

let rock = 1;
let paper = 2;
let scissors = 3;

let buttonDiv = document.querySelector("#buttonDiv");
let resetBtn = document.querySelector("#resetButton");

resetBtn.addEventListener("click", resetGame);

function resetGame(){
    location.reload();
}

rockPlayer.addEventListener("click", pickRock);

function pickRock(){
    let enemyPick = Math.ceil(Math.random()*3);
    playerPick.removeChild(playerPick.firstChild);
    playerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>You picked rock</div>");
  
    rockPlayer.style.backgroundColor = "black";
    paperPlayer.style.backgroundColor = "";
    scissorsPlayer.style.backgroundColor = "";
    
    if (enemyPick === rock){
        roundResult.textContent = "This round is a tie !";
        roundResult.style.color = "blue";

        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='tie'>You picked Rock and Computer picked Rock. Its a tie!</h5>");

        computerPick.removeChild(computerPick.firstChild);
        computerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>Cat picked rock</div>");
 
        rockComputer.style.backgroundColor = "black";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === paper){
        yourHp -= 10;
        yourScore.style.width = yourHp + '%';
        yourScore.insertAdjacentHTML("afterend", "<h6 class='damage'>-10</h6>");

        roundResult.textContent = "You lose this round !";
        roundResult.style.color = "red";

        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='lose'>You picked Rock and Computer picked Paper. You lose !</h5>");

        computerPick.removeChild(computerPick.firstChild);
        computerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>Cat picked paper</div>");

        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "black";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === scissors){
        enemyHp -= 10;
        enemyScore.style.width = enemyHp + '%';
        enemyScore.insertAdjacentHTML("afterend", "<h6 class='damage'>-10</h6>");

        roundResult.textContent = "You win this round !";
        roundResult.style.color = "lightgreen";

        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='win'>You picked Rock and Computer picked scissors. You win !</h5>");

        computerPick.removeChild(computerPick.firstChild);
        computerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>Cat picked scissors</div>");

        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "black";
    }

    if(yourScore.style.width == "0%"){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        buttonDiv.style.position = "fixed";
        buttonDiv.style.top = "350px";

        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");

        roundResult.textContent = "Cat wins the game !";
        roundResult.style.fontSize = "40px";

        playerPick.removeChild(playerPick.children[1]);
        playerPick.insertAdjacentHTML("beforeend", "<img src='images/playerdead.gif' class='loserDisplay'>");
    
    } else if (enemyScore.style.width == "0%"){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        buttonDiv.style.position = "fixed";
        buttonDiv.style.top = "350px";

        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");

        roundResult.textContent = "You win the game !";
        roundResult.style.fontSize = "40px";

        computerPick.removeChild(computerPick.children[1]);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/catdead.gif' class='loserDisplay'>");
    }
}

paperPlayer.addEventListener("click", pickPaper)

function pickPaper(){
    let enemyPick = Math.ceil(Math.random()*3);
    playerPick.removeChild(playerPick.firstChild)
    playerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>You picked paper</div>");

    rockPlayer.style.backgroundColor = "";
    paperPlayer.style.backgroundColor = "black";
    scissorsPlayer.style.backgroundColor = "";

    if (enemyPick === rock){
        enemyHp -= 10;
        enemyScore.style.width = enemyHp + '%';
        enemyScore.insertAdjacentHTML("afterend", "<h6 class='damage'>-10</h6>");

        roundResult.textContent = "You win this round !";
        roundResult.style.color = "lightgreen";

        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='win'>You picked Paper and Computer picked Rock. You win !</h5>");

        computerPick.removeChild(computerPick.firstChild);
        computerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>Cat picked rock</div>");

        rockComputer.style.backgroundColor = "black";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === paper){
        roundResult.textContent = "This round is a tie !";
        roundResult.style.color = "blue";

        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='tie'>You picked Paper and Computer picked Paper. Its a tie !</h5>");

        computerPick.removeChild(computerPick.firstChild);
        computerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>Cat picked paper</div>");

        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "black";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === scissors){
        yourHp -= 10;
        yourScore.style.width = yourHp + '%';
        yourScore.insertAdjacentHTML("afterend", "<h6 class='damage'>-10</h6>");

        roundResult.textContent = "You lose this round !";
        roundResult.style.color = "red";

        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='lose'>You picked Paper and Computer picked scissors. You lose !</h5>");

        computerPick.removeChild(computerPick.firstChild);
        computerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>Cat picked scissors</div>");

        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "black";
    }

    if(yourScore.style.width == "0%"){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        buttonDiv.style.position = "fixed";
        buttonDiv.style.top = "350px";

        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");

        roundResult.textContent = "Cat wins the game !";
        roundResult.style.fontSize = "40px";

        playerPick.removeChild(playerPick.children[1]);
        playerPick.insertAdjacentHTML("beforeend", "<img src='images/playerdead.gif' class='loserDisplay'>");
    
    } else if (enemyScore.style.width == "0%"){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        buttonDiv.style.position = "fixed";
        buttonDiv.style.top = "350px";

        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");

        roundResult.textContent = "You win the game !";
        roundResult.style.fontSize = "40px";
    
        computerPick.removeChild(computerPick.children[1]);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/catdead.gif' class='loserDisplay'>");
    }
  
}

scissorsPlayer.addEventListener("click", pickscissors)

function pickscissors(){
    let enemyPick = Math.ceil(Math.random()*3);
    playerPick.removeChild(playerPick.firstChild)
    playerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>You picked scissors</div>");

    rockPlayer.style.backgroundColor = "";
    paperPlayer.style.backgroundColor = "";
    scissorsPlayer.style.backgroundColor = "black";

    if (enemyPick === rock){
        yourHp -= 10;
        yourScore.style.width = yourHp + '%';
        yourScore.insertAdjacentHTML("afterend", "<h6 class='damage'>-10</h6>");

        roundResult.textContent = "You lose this round !";
        roundResult.style.color = "red";

        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='lose'>You picked scissors and Computer picked Rock. You lose !</h5>");

        computerPick.removeChild(computerPick.firstChild);
        computerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>Cat picked rock</div>");

        rockComputer.style.backgroundColor = "black";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === paper){
        enemyHp -= 10;
        enemyScore.style.width = enemyHp + '%';
        enemyScore.insertAdjacentHTML("afterend", "<h6 class='damage'>-10</h6>");

        roundResult.textContent = "You win this round !";
        roundResult.style.color = "lightgreen";

        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='win'>You picked scissors and Computer picked Paper. You win !</h5>");

        computerPick.removeChild(computerPick.firstChild);
        computerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>Cat picked paper</div>");

        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "black";
        scissorsComputer.style.backgroundColor = "";
    } else if (enemyPick === scissors){
        roundResult.textContent = "This round is a tie !";
        roundResult.style.color = "blue";

        matchHistory.insertAdjacentHTML("afterbegin", "<h5 class='tie'>You picked scissors and Computer picked scissors. Its a tie !</h5>");

        computerPick.removeChild(computerPick.firstChild);
        computerPick.insertAdjacentHTML("afterbegin", "<div class='signPicked'>Cat picked scissors</div>");

        rockComputer.style.backgroundColor = "";
        paperComputer.style.backgroundColor = "";
        scissorsComputer.style.backgroundColor = "black";
    }
 
    if(yourScore.style.width == "0%"){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        buttonDiv.style.position = "fixed";
        buttonDiv.style.top = "350px";

        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");

        roundResult.textContent = "Cat wins the game !";
        roundResult.style.fontSize = "40px";

        playerPick.removeChild(playerPick.children[1]);
        playerPick.insertAdjacentHTML("beforeend", "<img src='images/playerdead.gif' class='loserDisplay'>");
    
    } else if (enemyScore.style.width == "0%"){
        resetBtn.textContent = "PLAY AGAIN";
        resetBtn.style.backgroundColor = "green";
        buttonDiv.style.position = "fixed";
        buttonDiv.style.top = "350px";

        rockPlayer.setAttribute("disabled", "");
        paperPlayer.setAttribute("disabled", "");
        scissorsPlayer.setAttribute("disabled", "");

        roundResult.textContent = "You win the game !";
        roundResult.style.fontSize = "40px";

        computerPick.removeChild(computerPick.children[1]);
        computerPick.insertAdjacentHTML("beforeend", "<img src='images/catdead.gif' class='loserDisplay'>");
    }
}










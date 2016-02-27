var board = document.getElementsByClassName('board')[0];
var rows = document.getElementsByClassName('row');
var header2 = document.getElementsByClassName('playerTwo');
var turnLabel = document.getElementsByTagName('h2')[0];
var hiddenLabel = document.getElementsByTagName('h2')[1];
var playerOneTurn = true;
var tile = [];
var choices = [];

function grabCells() {
    for (i = 0; i < 9; i++) {
        var id = "cell" + i;
        var foo = id;
        tile.push(document.getElementById(foo))
    }
}
grabCells();
var win1 = [tile[0], tile[1], tile[2]];
var win2 = [tile[3], tile[4], tile[5]];
var win3 = [tile[6], tile[7], tile[8]];
var win4 = [tile[0], tile[3], tile[6]];
var win5 = [tile[1], tile[4], tile[7]];
var win6 = [tile[2], tile[5], tile[8]];
var win7 = [tile[0], tile[4], tile[8]];
var win8 = [tile[2], tile[5], tile[6]];
var winners = [win1, win2, win3, win4, win5, win6, win7, win8];

function whoseTurn() {
    if (playerOneTurn) {
        turnLabel.style.visibility = 'visible';
        hiddenLabel.style.visibility = 'hidden';
    } else {
        turnLabel.style.visibility = 'hidden';
        hiddenLabel.style.visibility = 'visible';
    }
}
whoseTurn();

function playerChoice(e) {
    if (playerOneTurn) {
        e.target.classList.add('p1');
        e.target.classList.add('clicked');
        playerOneTurn = false;
    } else {
        e.target.classList.add('p2');
        e.target.classList.add('clicked');
        playerOneTurn = true;
    }
    didYouWin(e);
    whoseTurn();
}

board.addEventListener('click', function (e) {
    if (e.target && e.target.matches("div.tile")) {
        if (e.target.classList.contains('clicked') === false) {
            playerChoice(e);
        }
    }
});

function didYouWin(e) {
    for (i=0;i<winners.length;i++){
        if (winners[i][0].classList.contains('p1')){
            if (winners[i][1].classList.contains('p1')){
                if (winners[i][2].classList.contains('p1')) {xWin();}
            }
        } else
        if (winners[i][0].classList.contains('p2')){
            if (winners[i][1].classList.contains('p2')){
                if (winners[i][2].classList.contains('p2')) {yWin();}
            }
        }
    }
}

function xWin(){
 document.getElementById('xWin').style.visibility = 'visible';
    
}
function yWin(){
 document.getElementById('yWin').style.visibility = 'visible'; 
}
//document.getElementsByClassName('reset')[0].onclick(window.location.href=window.location.href);
let flag = true;
function inputTurnB1() {
    if (flag === true) {
        document.getElementById('b1').value = "X";
        document.getElementById('b1').disabled = true;
        flag = false;
    } else {
        document.getElementById('b1').value = "0";
        document.getElementById('b1').disabled = true;
        flag = true;
    }
}
function inputTurnB2() {
    if (flag === true) {
        document.getElementById('b2').value = "X";
        document.getElementById('b2').disabled = true;
        flag = false;
    } else {
        document.getElementById('b2').value = "0";
        document.getElementById('b2').disabled = true;
        flag = true;
    }
}
function inputTurnB3() {
    if (flag === true) {
        document.getElementById('b3').value = "X";
        document.getElementById('b3').disabled = true;
        flag = false;
    } else {
        document.getElementById('b3').value = "0";
        document.getElementById('b3').disabled = true;
        flag = true;
    }
}
function inputTurnB4() {
    if (flag === true) {
        document.getElementById('b4').value = "X";
        document.getElementById('b4').disabled = true;
        flag = false;
    } else {
        document.getElementById('b4').value = "0";
        document.getElementById('b4').disabled = true;
        flag = true;
    }
}
function inputTurnB5() {
    if (flag === true) {
        document.getElementById('b5').value = "X";
        document.getElementById('b5').disabled = true;
        flag = false;
    } else {
        document.getElementById('b5').value = "0";
        document.getElementById('b5').disabled = true;
        flag = true;
    }
}
function inputTurnB6() {
    if (flag === true) {
        document.getElementById('b6').value = "X";
        document.getElementById('b6').disabled = true;
        flag = false;
    } else {
        document.getElementById('b6').value = "0";
        document.getElementById('b6').disabled = true;
        flag = true;
    }
}
function inputTurnB7() {
    if (flag === true) {
        document.getElementById('b7').value = "X";
        document.getElementById('b7').disabled = true;
        flag = false;
    } else {
        document.getElementById('b7').value = "0";
        document.getElementById('b7').disabled = true;
        flag = true;
    }
}
function inputTurnB8() {
    if (flag === true) {
        document.getElementById('b8').value = "X";
        document.getElementById('b8').disabled = true;
        flag = false;
    } else {
        document.getElementById('b8').value = "0";
        document.getElementById('b8').disabled = true;
        flag = true;
    }
}
function inputTurnB9() {
    if (flag === true) {
        document.getElementById('b9').value = "X";
        document.getElementById('b9').disabled = true;
        flag = false;
    } else {
        document.getElementById('b9').value = "0";
        document.getElementById('b9').disabled = true;
        flag = true;
    }
}


let countX = 0;
let count0 = 0;

function myFunc() {
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    b3 = document.getElementById('b3').value; 
    b4 = document.getElementById('b4').value;
    b5 = document.getElementById('b5').value;
    b6 = document.getElementById('b6').value;
    b7 = document.getElementById('b7').value; 
    b8 = document.getElementById('b8').value; 
    b9 = document.getElementById('b9').value;
    
    if (b1 === 'X' && b2 === 'X' && b3 === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = true;
    } else if (b4 === 'X' && b5 === 'X' && b6 === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = true;
    } else if (b7 === 'X' && b8 === 'X' && b9 === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        flag = true;
    } else if (b1 === 'X' && b5 === 'X' && b9 === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        flag = true;
    } else if (b3 === 'X' && b5 === 'X' && b7 === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = true;
    } else if (b1 === 'X' && b4 === 'X' && b7 === '7') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = true;
    } else if (b2 === 'X' && b5 === 'X' && b8 === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        document.getElementById('b1').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = true;
    } else if (b3 === 'X' && b6 === 'X' && b9 === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        flag = true;
    }
    else if (b1 === '0' && b2 === '0' && b3 === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = false;
    } else if (b4 === '0' && b5 === '0' && b6 === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = false;
    } else if (b7 === '0' && b8 === '0' && b9 === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        flag = false;
    } else if (b1 === '0' && b5 === '0' && b9 === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        flag = false;
    } else if (b3 === '0' && b5 === '0' && b7 === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = false;
    } else if (b1 === '0' && b4 === '0' && b7 === '7') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = false;
    } else if (b2 === '0' && b5 === '0' && b8 === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        document.getElementById('b1').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b9').disabled = true;
        flag = false;
    } else if (b3 === '0' && b6 === '0' && b9 === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        flag = false;
    }
    else if((b1 == 'X' || b1 == '0') && (b2 == 'X' || b2 == '0') && (b3 == 'X' || b3 == '0') &&
            (b4 == 'X' || b4 == '0') && (b5 == 'X' || b5 == '0') && (b6 == 'X' || b6 == '0') &&
            (b7 == 'X' || b7 == '0') && (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0')) {
                document.getElementById('print').innerHTML = "Match Tie";
                flag = true;
            }
    else {
        if (flag == true) {
            document.getElementById('playerTurn').innerHTML = "Player X Turn";
        } else {
            document.getElementById('playerTurn').innerHTML = "Player 0 Turn";
        }
    }
}

function setEmpty() {    
    document.getElementById('b1').value = "";
    document.getElementById('b2').value = "";
    document.getElementById('b3').value = "";
    document.getElementById('b4').value = "";
    document.getElementById('b5').value = "";
    document.getElementById('b6').value = "";
    document.getElementById('b7').value = "";
    document.getElementById('b8').value = "";
    document.getElementById('b9').value = "";

    document.getElementById('b1').disabled = false;
    document.getElementById('b2').disabled = false;
    document.getElementById('b3').disabled = false;
    document.getElementById('b4').disabled = false;
    document.getElementById('b5').disabled = false;
    document.getElementById('b6').disabled = false;
    document.getElementById('b7').disabled = false;
    document.getElementById('b8').disabled = false;
    document.getElementById('b9').disabled = false;
}

function finalResult() {
    if (countX === 0 && count0 === 0) {
        alert("Play First");
        location.reload();
    }
    else if (countX > count0) {
        alert("Player X Won")
        if (confirm("Do you want to restart?") === true) {
            location.reload();
        }
    } else if (countX < count0) {
        alert("Player 0 Won");
        if (confirm("Do you want to restart?") === true) {
            location.reload();
        }
    } else if (countX === count0) {
        alert("Equal Points, It's a tie!")
        if (confirm("Do you want to restart?") === true) {
            location.reload();
        }
    }
}





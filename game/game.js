let fieldNames =  [b1, b2, b3, b4, b5, b6, b7, b8, b9];
let flag = true;

function inputTurn(e) {
    if (flag === true) {
        e.value = "X";
        e.disabled = true;
        flag = false;
    } else {
        e.value = "0";
        e.disabled = true;
        flag = true;
    }
}

function stopInput(a, b, c) {
    for(let i=1; i<10; i++) {
        if(fieldNames[a] === i || fieldNames[b] === i || fieldNames[c] === i){
            continue;
        }
        document.getElementById('b' + i).disabled = true;
    }
}

let countX = 0;
let count0 = 0;

function myFunc() {
    for (let i=1; i<10; i++) {
        fieldNames[i] = document.getElementById('b' + i).value;
    }
    
    if (fieldNames[1] === 'X' && fieldNames[2] === 'X' && fieldNames[3] === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        stopInput(1, 2, 3),
        flag = true;
    } else if (fieldNames[4] === 'X' && fieldNames[5] === 'X' && fieldNames[6] === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        stopInput(4, 5, 6);
        flag = true;
    } else if (fieldNames[7] === 'X' && fieldNames[8] === 'X' && fieldNames[9] === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        stopInput(7, 8, 9);
        flag = true;
    } else if (fieldNames[1] === 'X' && fieldNames[5] === 'X' && fieldNames[9] === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        stopInput(1, 5, 9);
        flag = true;
    } else if (fieldNames[3] === 'X' && fieldNames[5] === 'X' && fieldNames[7] === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        stopInput(3, 5, 7);
        flag = true;
    } else if (fieldNames[1] === 'X' && fieldNames[4] === 'X' && fieldNames[7] === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        stopInput(1, 4, 7);
        flag = true;
    } else if (fieldNames[2] === 'X' && fieldNames[5] === 'X' && fieldNames[8] === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        stopInput(2, 5, 8);
        flag = true;
    } else if (fieldNames[3] === 'X' && fieldNames[6] === 'X' && fieldNames[9] === 'X') {
        document.getElementById('resultHere').innerHTML = "Player X Won";
        countX++;
        document.getElementById('forX').value = countX;
        stopInput(3, 6, 9);
        flag = true;
    }
    else if (fieldNames[1] === '0' && fieldNames[2] === '0' && fieldNames[3] === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        stopInput(1, 2, 3);
        flag = false;
    } else if (fieldNames[4] === '0' && fieldNames[5] === '0' && fieldNames[6] === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        stopInput(4, 5, 6);
        flag = false;
    } else if (fieldNames[7] === '0' && fieldNames[8] === '0' && fieldNames[9] === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        stopInput(7, 8, 9);
        flag = false;
    } else if (fieldNames[1] === '0' && fieldNames[5] === '0' && fieldNames[9] === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        stopInput(1, 5, 9);
        flag = false;
    } else if (fieldNames[3] === '0' && fieldNames[5] === '0' && fieldNames[7] === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        stopInput(3, 5, 7);
        flag = false;
    } else if (fieldNames[1] === '0' && fieldNames[4] === '0' && fieldNames[7] === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        stopInput(1, 4, 7);
        flag = false;
    } else if (fieldNames[2] === '0' && fieldNames[5] === '0' && fieldNames[8] === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        stopInput(2, 5, 8);
        flag = false;
    } else if (fieldNames[3] === '0' && fieldNames[6] === '0' && fieldNames[9] === '0') {
        document.getElementById('resultHere').innerHTML = "Player 0 Won";
        count0++;
        document.getElementById('for0').value = count0;
        stopInput(3, 6, 9);
        flag = false;
    }
    else if((fieldNames[1] == 'X' || fieldNames[1] == '0') && (fieldNames[2] == 'X' || fieldNames[2] == '0') && (fieldNames[3] == 'X' || fieldNames[3] == '0') &&
            (fieldNames[4] == 'X' || fieldNames[4] == '0') && (fieldNames[5] == 'X' || fieldNames[5] == '0') && (fieldNames[6] == 'X' || fieldNames[6] == '0') &&
            (fieldNames[7] == 'X' || fieldNames[7] == '0') && (fieldNames[8] == 'X' || fieldNames[8] == '0') && (fieldNames[9] == 'X' || fieldNames[9] == '0')) {
                document.getElementById('resultHere').innerHTML = "Match Tie";
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
    for (let i=1; i<10; i++) {
        document.getElementById('b' + i).value = "";
        document.getElementById('b' + i).disabled = false;
    }
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

function clrScreen() {
    document.getElementById('valueGet').value = "";
}

function backspace() {
    let str = document.getElementById('valueGet').value;
    str = str.toString();
    str = str.slice(0, str.length-1);
    document.getElementById('valueGet').value = str; 
}

function getIt(val) {
    let a = document.getElementById('valueGet').value += val;
    b = a;
}

let myOperator;
function getOper(operator) {
    
    let a = document.getElementById('valueGet').value += operator;

    myOperator = operator;
}

function calculateIt() {
    b = b.toString();
    let prev=0;
    let curr=0;
    // Loop to get first operand
    for (let i=0; i<b.length; i++) {
        prev += b[i];
        if (b[i] === '+' || b[i] === '-' || b[i] === '*' || b[i] === '/' || b[i] === '%') {
            break;
        }
    }
    // Loop to get second operand
    for (let i=0; i<b.length; i++) {
        if (b[i] === '+' || b[i] === '-' || b[i] === '*' || b[i] === '/' || b[i] === '%') {
            for (let j=i; j<b.length; j++) {
                curr += b[i];
                i++;
            }
            break;
        }
    }

    prev = prev.slice(1, prev.length - 1);
    prev = Number(prev);

    curr = curr.slice(2);
    curr = Number(curr);

    switch (myOperator) {
        case "+":
            document.getElementById('valueGet').value = prev + curr;
            break;
        case "-":
            document.getElementById('valueGet').value = prev - curr;
            break;
        case "*":
            document.getElementById('valueGet').value = prev * curr;
            break;
        case "/":
            document.getElementById('valueGet').value = prev / curr;
            break;
        case "%":
            document.getElementById('valueGet').value = prev % curr;
            break;
        default:
            alert("Invalid Input");
    }
}
function clrScreen() {
    document.getElementById('valueGet').value = "";
}
function getIt(val) {
    let a = document.getElementById('valueGet');
    a.value += val;
}


function calculateIt() {
    let x = document.getElementById('valueGet').value;
    y = eval(x);
    document.getElementById('valueGet').value = y;
}

function delIt() {
    let a = document.getElementById('valueGet').value;
    a.slice(0, -1)  
}
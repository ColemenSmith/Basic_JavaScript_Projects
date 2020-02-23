function nan() {
    document.getElementById("nan").innerHTML = 0 / 0;
}

function falseth() {
    document.getElementById("false").innerHTML = isNaN('Yellow');
}

function truth() {
    document.getElementById("true").innerHTML = isNaN(75);
}

function positinity() {
    document.write(3E310);
}

function negitinity() {
    document.write(-4E400);
}

function bool_False() {
    document.write(6 > 15);
}

function bool_True() {
    document.write(6 < 15);
}

console.log(7 + 10);

function coercion() {
    document.write('100' + 10);
}

console.log(10 < 5);

function equal_False() {
    document.write(10 == 10);
}

function equal_True() {
    document.write(3 == 10);
}

function triple_Equal() {
    var one = 1;
    var two = 1;
    var three = 'one';
    var four = 'two';
    var five = 5;
    document.write(one === two);
    document.write(one === five);
    document.write(two === three);
    document.write(three === four);
}
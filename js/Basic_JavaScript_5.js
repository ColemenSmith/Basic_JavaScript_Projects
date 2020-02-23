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
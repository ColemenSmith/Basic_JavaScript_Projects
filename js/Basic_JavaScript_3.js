function addition_Function() {
    var addition = 63 + 47;
    document.getElementById("Math").innerHTML = "63 + 47 = " + addition;
}

function subtraction_Function() {
    var subtraction = 63 - 47;
    document.getElementById("Subtract").innerHTML = "63 - 47 = " + subtraction;
}

function division_Function() {
    var division = 63 / 47;
    document.getElementById("Divide").innerHTML = "63 / 47 = " + division;
}

function multiplication_Function() {
    var multiplication = 63 * 47;
    document.getElementById("Multiply").innerHTML = "63 * 47 = " + multiplication;
}

function operational_Function() {
    var operators = (10 + 13) * 18 / 3 - 5;
    document.getElementById("Operate").innerHTML = "Ten plus Thirteen multiplied times eighteen divided by three minus five = " + operators;
}

function modulus_Function() {
    var modulus = 50 % 3;
    document.getElementById("Modulate").innerHTML = "50 divided by three has a remained of: " + modulus;
}

function negation_Function() {
    var negative = 10;
    document.getElementById("Negate").innerHTML = -negative;
}

function increase() {
    var x = 10;
    x++;
    document.write(x);
}

function decrease() {
    var x = 10;
    x--;
    document.write(x);
}
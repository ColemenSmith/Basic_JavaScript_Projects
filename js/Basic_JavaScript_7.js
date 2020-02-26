var name = "Colemen";

function debug() {
    document.getElementById("Practice").innerHTML = adder();

    function adder() {
        var num = 2;

        function add_One() { num += 2; }
        debug();
        return num;
    }
}

document.write(num)

function hiThere() {
    if (new Date().getHours() < 10) {
        document.getElementById("morning").innerHTML = "Well, good morning!";
    } else if (10 < new Date().getHours() < 18) {
        document.getElementById("morning").innerHTML = "Good afternoon!";
    } else {
        document.getElementById("morning").innerHTML = "Good evening!";
    }
}

function baby() {
    Age = document.getElementById("Age").value;
    if (Age < 6) {
        document.getElementById("Statement").innerHTML = "Well, you're just a babe!"
    } else if (6 < Age && Age < 12) {
        document.getElementById("Statement").innerHTML = "Calm down, you're just a kid."
    } else if (12 < Age && Age < 18) {
        document.getElementById("Statement").innerHTML = "Look at the little teenager!"
    } else {
        document.getElementById("Statement").innerHTML = "Welcome to adulthood."
    }
}

function forCar() {
    money = document.getElementById("Money").value;
    if (money < 1200) {
        document.getElementById("Answer").innerHTML = "Sorry bud, you can't have this car."
    } else {
        document.getElementById("Answer").innerHTML = "The cars all yours! Just give me the money first."
    }
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
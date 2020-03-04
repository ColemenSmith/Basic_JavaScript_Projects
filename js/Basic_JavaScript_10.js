function Call_Loop() {
    var i = 1;
    var digit = "";
    while (i < 21) {
        digit += "<br>" + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = digit;
}

function strLeng() {
    var strng = "Let's see how long this is."
    var n = strng.length;
    document.getElementById("length").innerHTML = n;
}

function for_loop() {
    var myDictionary = ['Guitar', 'Ukelele', 'Trombone', 'Bass', 'Trumpet', 'Clarinet'];
    var content = '';
    var i;
    for (i = 0; i < myDictionary.length; i++) {
        content += "<br>" + myDictionary[i];
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function array_Function() {
    var array = [];
    array[0] = 'running';
    array[1] = 'swimming';
    array[2] = 'sleeping';
    array[3] = 'gaming';
    document.getElementById('Array').innerHTML = 'On the weekends I like to go ' + array[0] + '.';
}

function constant_Function() {
    const food = { type: 'Pizza', toppings: "Pepperoni and bacon", crust_Type: "Deep dish" };
    food.price = 15;
    food.cook_Time = 'Thirty minutes';
    food.meal = 'Dinner';
    document.getElementById('Constant').innerHTML = 'My favorite food is ' + food.type + ', I prefer ' + food.toppings + ' on it. It usually costs me around ' + food.price + ' dollars, and arrives in ' + food.cook_Time + '. You usually eat it at ' + food.meal + ' time.';
}

var food = 'Pizza';
document.write("<br>" + food);
{
    let food = 'Sandwich';
    document.write("<br>" + food);
}
document.write("<br>" + food);

let house = {
    size: "6000sq ft",
    rooms: "3b",
    bathrooms: "2 bath",
    land: "2 acres",
    garage: "2 car",
    description : function() {
        return "This house is " + this.size + ", it has " + this.rooms + " and " + this.bathrooms + ". The total land size is " + this.land + " and it has a " + this.garage + " garage.";
    }
};

document.getElementById("house_object").innerHTML = house.description();

var text = "";
var i = 0;
while (i < 10) {
    text += "<br> The number is " + i;
    i++;
    if (i === 6) {
        break;
    }
}

document.getElementById("text").innerHTML = text;

var strng = "";
var friends = ["Tanner", "Tyler", "Cory", "Lance", "Kelsey"];
var j;

for (j = 0; j < friends.length; j++) {
    if (friends[j] === "Tyler") {
        continue;
    }
    strng += friends[j] + "<br>";
}

document.getElementById("texty").innerHTML = strng;
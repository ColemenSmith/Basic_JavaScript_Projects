function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride."
}

function age_Limit() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough to vote" : "You can vote!";
    document.getElementById("Vote").innerHTML = Can_Vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Champion(Name, Role, Rune, Sums) {
    this.Champion_Name = Name;
    this.Champion_Role = Role;
    this.Champion_Rune = Rune;
    this.Champion_Sums = Sums;
}

var Ezreal = new Champion("Ezreal", "ADC", "Precision", "Flash and Teleport");
var Kaisa = new Champion("Kai'sa", "ADC", "Precision", "Flash and Heal");
var Teemo = new Champion("Teemo", "Top", "Resolve", "Flash Teleport");

function champFunction() {
    document.getElementById("New_and_This").innerHTML = "I like to play Ezreal, he is an " + Ezreal.Champion_Role + ". His main rune tree is " + Ezreal.Champion_Rune + " and the main sums you take are: " + Ezreal.Champion_Sums + ".";
}

function adding_Function() {
    document.getElementById("Nested_Function").innerHTML = adder();

    function adder() {
        var added = 3;

        function plus_Two() {
            added += 2;
        }
        plus_Two();
        plus_Two();

        return added;
    }
}
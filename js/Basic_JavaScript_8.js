function concFun() {
    sent1 = "Wow look at ";
    sent2 = "what I learned to ";
    sent3 = "do with coding! ";
    sent4 = "It's pretty cool!"
    var wholesent = sent1.concat(sent2, sent3, sent4);
    document.getElementById("concatenate").innerHTML = wholesent;
}

function slice() {
    var sent = "Hello my name is Colemen.";
    var name = sent.slice(17, 24);
    document.getElementById("slicer").innerHTML = name;
}

document.write("Colemen".toUpperCase());

function srch() {
    var str = "I just figured this out!"
    var n = str.search("out");
    document.getElementById("String").innerHTML = n;
}

function numString() {
    var n = 167;
    document.getElementById('string').innerHTML = n.toString();
}

function prec() {
    var n = 1231231.123123123123;
    document.getElementById("precise").innerHTML = n.toPrecision(5)
}

function fixed() {
    var n = 5.67543860945390;
    document.getElementById("fix").innerHTML = n.toFixed(3);
}

function valueof() {
    var n = 77;
    document.getElementById("prim").innerHTML = n.valueOf();
}
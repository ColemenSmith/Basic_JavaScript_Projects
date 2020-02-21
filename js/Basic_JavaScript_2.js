function owner() {
    var firstName = document.getElementById('name');
    var lastName = document.getElementById('name2');
    firstName.style.color = 'blue';
    lastName.style.color = 'green';
}

function myName() {
    var name = 'Colemen';
    name += ' Smith';
    document.getElementById('wholeName').innerHTML = name;
}
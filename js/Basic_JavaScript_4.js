function my_Dictionary() {
    var Animal = {
        Type: 'dog',
        Color: 'brown',
        Name: 'Bubs',
        Breed: 'Husky',
        Age: '7'
    };
    delete Animal.Breed;
    document.getElementById('Dictionary').innerHTML = Animal.Breed;
}
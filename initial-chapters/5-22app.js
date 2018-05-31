var Bucky = {
  favFood: "Bacon",
  favMovie: "Chappie"
};

var Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood); //Will print salad because of a reference to the same memory location and not a new var.

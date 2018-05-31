var Bucky = {
  printFirstName: function () {
    console.log("My name is Bucky");
    console.log((this === Bucky));
  }
};

Bucky.printFirstName(); //prints true

//the default calling context in the "this" is global
function doSomethingWorthless() {
  console.log("\nI am worthless");
  console.log(this === global);
}

doSomethingWorthless();

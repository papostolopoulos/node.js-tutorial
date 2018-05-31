function User(){
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLive(targetPlayer) {
    targetPlayer.life += 1;
    console.log(this.name, "gave 1 life to", targetPlayer.name);
  };
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
console.log("Bucky:", Bucky.life, "Wendy:", Wendy.life);


//Add functions to objects
User.prototype.uppercut = function (targetPlayer) {
  targetPlayer.life -= 3;
  console.log(this.name, "took 3 life from", targetPlayer.name);
};

Wendy.uppercut(Bucky);
console.log("Bucky:", Bucky.life, "Wendy:", Wendy.life);


//Adding properties in objects
User.prototype.magic = 60;

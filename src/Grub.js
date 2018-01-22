var Grub = function(age, color, food) {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function() {

};

// var Bee = function() {
//   Grub.call(this); //creates new instance of Bee, w/ structure of Grub
//
//   this.age = 5;
//   this.color = 'yellow';
//
//   this.job = 'keep on growing';
// };

//but now we need the methods from Grub:
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// Bee.prototype.eat = function() {
// //inherit from Grub
// }

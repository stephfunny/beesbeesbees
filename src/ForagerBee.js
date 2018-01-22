var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
  this.color = 'yellow';

};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;


//ForagerBee.prototype.eat = Bee.prototype.eat;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

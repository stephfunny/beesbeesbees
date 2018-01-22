var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
  this.color = 'yellow';
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;


//HoneyMakerBee.prototype.eat = Bee.prototype.eat;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}

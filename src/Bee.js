var Bee = function() {
  Grub.call(this); //creates new instance of Bee, w/ structure of Grub

  this.age = 5;
  this.color = 'yellow';

  this.job = 'keep on growing';

};

Bee.prototype.eat = Grub.prototype.eat;

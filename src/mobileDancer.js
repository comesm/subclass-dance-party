var MobileDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, 100, 1000);
  this.$node.addClass('mobile');
  this.$node.removeClass('dancer');
  this.$node.prepend('<img src="img/trump.jpg" />');
  // this.timeBetweenSteps = 1000;
  // this.left = 100;
  this.position = 0;
  this.increment = 10;
};

MobileDancer.prototype = Object.create(Dancer.prototype);

MobileDancer.prototype.constructor = MobileDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
MobileDancer.prototype.oldStep = Dancer.prototype.step;
MobileDancer.prototype.step = function() {
  
  this.oldStep();  
  
  var positionObj = this.$node.position();
  // debugger;
  this.position += this.increment;
  if (this.position === 100) {
    this.increment = -10;
  }
  if (this.position === 0) {
    this.increment = 10;
  }
  var left = positionObj['left'];
  var top = positionObj['top'];
  this.$node.animate({left: this.position + '%'}, 'slow');
  //this.$node.animate({top: this.$node.offset({left: 100})}, 'slow');
  // this.$node.animate({bottom: this.$node.offset({right: 500})}, 'slow');



};

MobileDancer.prototype.lineUp = function(top, left) {
  this.setPosition(100, this.left);
};
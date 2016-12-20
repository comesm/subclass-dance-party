var MobileDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('drunk');
  this.$node.removeClass('dancer');
  this.$node.prepend('<img src="img/trumpPutin.jpg" />');


};

MobileDancer.prototype = Object.create(Dancer.prototype);

MobileDancer.prototype.constructor = MobileDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
MobileDancer.prototype.oldStep = Dancer.prototype.step;
MobileDancer.prototype.step = function() {
  
  this.oldStep();  
  
  this.$node.animate({top: this.$node.offset({left: "-=100px"})}, 'slow');
  this.$node.animate({top: this.$node.offset({right: "-=100px"})}, 'slow');



};
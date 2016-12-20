var SquareDancer = function(top, left, timeBetweenSteps) {
  // var SquareDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('square');

};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = SquareDancer.step;
SquareDancer.prototype.oldStep = Dancer.prototype.step;
SquareDancer.prototype.step = function() {
  
  this.oldStep();
  // this.$node.addClass('square');  
  this.$node.toggleClass('square-toggle');
  

};
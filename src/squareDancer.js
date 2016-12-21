class SquareDancer extends Dancer {

constructor(top, left, timeBetweenSteps, id) {
  // var SquareDancer = Dancer(top, left, timeBetweenSteps);
  super(top, left, timeBetweenSteps, id);
  this.$node.removeClass('dancer');
  this.$node.addClass('square');

};

// SquareDancer.prototype = Object.create(Dancer.prototype);
// SquareDancer.prototype.constructor = SquareDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = SquareDancer.step;
step() {

  super.step();
  // this.$node.addClass('square');
  this.$node.toggleClass('square-toggle');


};

lineUp(top, left) {
  super.setPosition(this.top, 600);
};

};
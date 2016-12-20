var TrashyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('drunk');
  this.$node.removeClass('dancer');
  this.$node.prepend('<img src="img/trumpPutin.jpg" />');


};

TrashyDancer.prototype = Object.create(Dancer.prototype);

TrashyDancer.prototype.constructor = TrashyDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
TrashyDancer.prototype.oldStep = Dancer.prototype.step;
TrashyDancer.prototype.step = function() {
  
  this.oldStep();  
  // debugger;
  this.$node.animate({top: this.top + 300 + 'px'}, 'fast');
  this.$node.animate({left: this.left + 300 + 'px'}, 'fast');
  this.$node.animate({top: this.top + 'px'}, 'fast');
  this.$node.animate({left: this.left + 'px'}, 'fast');

};
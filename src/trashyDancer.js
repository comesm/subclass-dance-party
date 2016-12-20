var TrashyDancer = function(top, left, timeBetweenSteps, ids) {
  // var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps, id);
  this.$node.addClass('drunk');
  this.$node.removeClass('dancer');
  this.$node.prepend('<img src="img/trumpPutin.jpg" />');
  this.animate = true;

};

TrashyDancer.prototype = Object.create(Dancer.prototype);

TrashyDancer.prototype.constructor = TrashyDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
TrashyDancer.prototype.oldStep = Dancer.prototype.step;
TrashyDancer.prototype.step = function() {
  this.oldStep();  
  if (this.animate) {
    this.$node.animate({top: this.top + 300 + 'px'}, 'fast');
    this.$node.animate({left: this.left + 300 + 'px'}, 'fast');
    this.$node.animate({top: this.top + 'px'}, 'fast');
    this.$node.animate({left: this.left + 'px'}, 'fast');
  }

};

TrashyDancer.prototype.lineUp = function(top, left) {
  this.setPosition(300, this.left);
  // this.$node.animate({top: 300, left: this.left});
  // this.$node.animate({left: 300, left: this.left});
  // this.$node.animate({top: 300, left: this.left});
  // this.$node.animate({left: 300, left: this.left});
  // this.animate = false;
};
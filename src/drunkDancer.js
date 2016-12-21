var DrunkDancer = function(top, left, timeBetweenSteps, id) {
  // var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps, id);
  this.$node.addClass('drunk');
  this.$node.removeClass('dancer');
  // this.$node.prepend('<img src="img/rtx1gzco.jpg" />');
  // this.$node.append('<img class="mario" src="img/mario.jpg" />');
  this.$node.append('<img class="mario" src="img/MJMario.gif" />');
  


};

DrunkDancer.prototype = Object.create(Dancer.prototype);

DrunkDancer.prototype.constructor = DrunkDancer;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
DrunkDancer.prototype.oldStep = Dancer.prototype.step;
DrunkDancer.prototype.step = function() {
  
  this.oldStep();  
  
  this.$node.find('img').animate({height: '300px'});
  this.$node.find('img').animate({height: '100px'});
  this.$node.find('img').animate({width: '300px'});
  this.$node.find('img').animate({width: '100px'});
};
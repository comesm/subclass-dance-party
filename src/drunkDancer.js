class DrunkDancer extends Dancer {

 constructor(top, left, timeBetweenSteps, id) {
  // var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  super(top, left, timeBetweenSteps, id);
  this.$node.addClass('drunk');
  this.$node.removeClass('dancer');
  // this.$node.prepend('<img src="img/rtx1gzco.jpg" />');
  // this.$node.append('<img class="mario" src="img/mario.jpg" />');
  this.$node.append('<img class="mario" src="img/MJMario.gif" />');
  };


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
// DrunkDancer.prototype.oldStep = Dancer.prototype.step;
step() {

  super.step();

  this.$node.find('img').animate({height: '300px'});
  this.$node.find('img').animate({height: '100px'});
  this.$node.find('img').animate({width: '300px'});
  this.$node.find('img').animate({width: '100px'});
};

};
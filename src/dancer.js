// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, id) {

  // use jQuery to create an HTML <span> tag]
  var nodeStr = '<span id="' + id + '" class="dancer element"></span>';
  this.$node = $(nodeStr);
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
  this.id = id;   
  // this.$node.attr('id', id);
  console.log(id);
  // window.dancers.push(this);
};



Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  // var styleSettings = {
  //   top: top,
  //   left: left
  // };
  this.top = top;
  this.left = left;
  this.$node.css({top: top, left: left});
};

Dancer.prototype.getDistance = function(otherDancer) {

  var heightDiff = Math.abs(this.top - otherDancer.top);  
  var widthDiff = Math.abs(this.left - otherDancer.left);  
  var distance = Math.sqrt(Math.pow(heightDiff, 2) + Math.pow(widthDiff, 2));

  return distance;

};

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function() {
  this.setPosition(this.top, 100);
};
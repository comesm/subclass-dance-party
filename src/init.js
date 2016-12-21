$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.round($('body').height() * Math.random()),
      Math.round($('body').width() * Math.random()),
      Math.random() * 1000, 
      window.dancers.length + 1
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(function(value) {
      value.lineUp();
    });
  });

  $('body').on('mouseover', '.element', function(event) {
    // debugger;
    $(this).css({border: '10px solid #2FB5F3'});
  });

  $('body').on('click', '.element', function(event) {
    // debugger;
    var currDancer = $(this);
    var currId = currDancer.attr('id');
    var dancers = window.dancers;
    var currDancerObj = dancers[currId - 1];
    console.log(currId);
    console.log(currDancerObj);
    // console.log(dancers);
    // console.log(window.dancers);

    var closestDancerObj = dancers.reduce(function(acc, curr) {
      if (currDancerObj.id === curr.id) {
        return acc;
      }
      if (currDancerObj.id === acc.id) {
        return curr;
      }
      return currDancerObj.getDistance(acc) < 
           currDancerObj.getDistance(curr) ? acc : curr;
    }); 
    
    var closestDancer = $('body').find('#' + closestDancerObj.id);
    console.log(closestDancer);
    console.log(closestDancerObj);
    console.log(typeof closestDancerObj.top);
    currDancer.animate({top: '+=100px', 
        left: '+=100px'}, 'fast');
    closestDancer.animate({top: '-=100px',   
        left: '-=100px'}, 'fast');
    currDancerObj.top += 100;
    currDancerObj.left += 100;
    closestDancerObj.top -= 100;
    closestDancerObj.left -= 100;
    // currDancer.animate({top: closestDancerObj.top + 'px', 
    //     left: closestDancerObj.left + 'px'}, 'fast');
    // closestDancer.animate({top: currDancerObj.top + 'px',   
    //     left: currDancerObj.left + 'px'}, 'fast');

    // var closestCopy = JSON.parse(JSON.stringify(closestDancer));

    // closestDancer.top = currDancer.top;
    // closestDancer.left = currDancer.left;
    // currDancer.top = closestCopy.top;
    // currDancer.left = closestCopy.top;

    
    // $(currDancerObj).animate({top: closestDancerObj.top + 'px', 
    //     left: closestDancerObj.left + 'px'}, 'fast');

    // var index = window.dancers.indexOf();
  });


});


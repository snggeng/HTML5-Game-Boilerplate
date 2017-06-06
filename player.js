var Player = function(settings) {

    // Settings
    var playerElement = null;

    // Prevent player from escaping the game window
    function wall() {

      var playerRect = playerElement.getBoundingClientRect();
      var w = parseInt(window.innerWidth);
      var h = parseInt(window.innerHeight);

      if(playerRect.bottom > h){
        playerElement.style.top = (h-playerRect.height) + 'px';
      }

      if(playerRect.top < 0){
        playerElement.style.top = '0px';
      }

      if(playerRect.left < 0){
          playerElement.style.left = '0px';
      }

      if(playerRect.right > w){
          playerElement.style.left = ( w - playerRect.width) + 'px' ;
      }
    }

    // Move the player around manually
    function move(interactions){

      if(interactions.up){
        playerElement.style.top = parseInt(playerElement.style.top)-8+"px";
      }

      if(interactions.down){
        playerElement.style.top = parseInt(playerElement.style.top)+8+"px";
      }

      if(interactions.left){
        playerElement.style.left = parseInt(playerElement.style.left)-8+"px";
      }

      if(interactions.right){
        playerElement.style.left = parseInt(playerElement.style.left)+8+"px";
      }

      if(settings.walls){ // if walls setting is true, player cannot move out of window
        wall();
      }
    }

    // Create the object asset
    function create() {
        // in-line styling is important because we will be using the element's
        // in-line styling to manipulate it's movement, as above in the move()
        // function
        playerElement = document.getElementById('player');
        playerElement.style.top = '400px';
        playerElement.style.left = '400px';
        playerElement.style.height = '100px';
    }

    function init(){
       create(); //create object
       // add other functions to initialize

    }

    // render function needs to be accessed outside of the Player Object
    // so that when we call assets[i].render on it it'll render the move() function
    this.render = function(interactions){
      move(interactions);
    }

    init(); //initialize
}

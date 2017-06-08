const Enemy = function (settings) {
  // Settings
  let enemyElement = null

  // Prevent enemy from escaping the game window
  function wall () {
    const enemyRect = enemyElement.getBoundingClientRect() // get the active style values of our moving enemy
    const w = parseInt(window.innerWidth)
    const h = parseInt(window.innerHeight)

    if (enemyRect.bottom > h) {
      enemyElement.style.top = `${h - enemyRect.height}px`
    }

    if (enemyRect.top < 0) {
      enemyElement.style.top = '0px'
    }

    if (enemyRect.left < 0) {
      enemyElement.style.left = '0px'
    }

    if (enemyRect.right > w) {
      enemyElement.style.left = `${w - enemyRect.width}px`
    }
  }

    // Move the enemy around manually
  function move () {
    // Make enemy move around the game window
    enemyElement = document.getElementsByClassName('enemy')[0]
    enemyElement.style.top = parseInt(enemyElement.style.top) + 1 + 'px'

    // Keep enemy movement within our game window
    if (settings.walls) { // if walls setting is true, enemy cannot move out of window
      wall()
    }
  }

  // Create the object asset
  function create () {
    enemyElement = document.createElement('div')
    enemyElement.setAttribute('class', 'enemy')
    enemyElement.style.top = '100px'
    enemyElement.style.left = '100px'
    document.body.prepend(enemyElement)
  }

  function init () {
    create() // create object
       // add other functions to initialize
  }

    // render function needs to be accessed outside of the Player Object
    // hence, this.render()
    // so that when we call assets[i].render on it it'll render the move() function
    // which belongs to the Player Object
  this.render = function (interactions) {
    move()
  }

  init() // initialize
}

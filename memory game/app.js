document.addEventListener('DOMContentLoaded', () =>{

    //card option 

    const cardArray=[

    {
        name:'ironamerica',
        img:'america.jpeg'
    },

    {
        name:'mellowdude',
        img:'mellowdue.png'
    },

    {
        name:'randomguy',
        img:'randomboy.png'
    },

    {
        name:'superman',
        img:'superman.png'
    },

    {
        name:'ironman',
        img:'ironman.png'
    },

    {
        name:'mushroom',
        img:'mushroom.png'
    },

    {
        name:'turtle',
        img:'turtle.png'
    },

    {
        name:'smileyface',
        img:'smileyface.png'
    },

    {
        name:'ironamerica',
        img:'america.jpeg'
    },

    {
        name:'mellowdude',
        img:'mellowdue.png'
    },

    {
        name:'randomguy',
        img:'randomboy.png'
    },

    {
        name:'superman',
        img:'superman.png'
    },

    {
        name:'ironman',
        img:'ironman.png'
    },

    {
        name:'mushroom',
        img:'mushroom.png'
    },

    {
        name:'turtle',
        img:'turtle.png'
    },

    {
        name:'smileyface',
        img:'smileyface.png'
    },
    ]
})


//gameboard

cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

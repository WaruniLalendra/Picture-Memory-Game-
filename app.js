 document.addEventListener('DOMContentLoaded',() =>{

    //card options
    const cardArray = [
        {
            name: 'cat',
            img: 'images/cat.png' 
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'gentelman',
            img: 'images/gentelman.png'
        },
        {
            name: 'gentelman',
            img: 'images/gentelman.png'
        },
        {
            name: 'girl',
            img: 'images/girl.png'
        },
        {
            name: 'girl',
            img: 'images/girl.png'
        },
        {
            name: 'princess',
            img: 'images/princess.png'
        },
        {
            name: 'princess',
            img: 'images/princess.png'
        },
        {
            name: 'swd',
            img:'images/swd.png'
        },
        {
            name: 'swd',
            img:'images/swd.png'
        },
        {
            name: 'wolf',
            img:'images/wolf.png'
        },
        {
            name: 'wolf',
            img:'images/wolf.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random()) 

    const grid = document.querySelector('.grid') 
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/background.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }

    //check for match
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/check.png')
            cards[optionTwoId].setAttribute('src', 'images/check.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src', 'images/background.png')
            cards[optionTwoId].setAttribute('src', 'images/background.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all'
        } 
    }

    //flip your card 
     function flipcard(){
         var cardId = this.getAttribute('data-id')
         cardsChosen.push(cardArray[cardId].name)
         cardsChosenId.push(cardId)
         this.setAttribute('src', cardArray[cardId].img)
         if(cardsChosen.length === 2){
             setTimeout(checkForMatch, 500)
         }
     }


    createBoard()

 })   
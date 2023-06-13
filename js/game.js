const grid = document.querySelector('.grid');

const characters = [
  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopy',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = document.createElement('div');
  back.className = 'face back';


  front.style.backgroundImage = `url('../images/${character}.png')`;



  
  card.appendChild(front);
  card.appendChild(back);

   return card;

}

const loadGame = () => {
  characters.forEach((characters) => {

    const card = createCard(characters);
    grid.appendChild(card);
  });
};

loadGame();
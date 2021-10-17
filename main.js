const arenas = document.querySelector('.arenas');
const randomButtom = document.querySelector('.button')

const player1 = {
  player: 1,
  name: 'Sub-zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapont: ['Sword'],
  attack: function () {
    console.log(player1.name + " Fight...");
  }
}

const player2 = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapont: ['Kunai'],
  attack: function () {
    console.log(player2.name + " Fight...");
  }
}

function createElement (tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(playerObject) {
  const playerBox = createElement('div', 'player' + playerObject.player),
        character = createElement('div', 'character'),
        progressBar = createElement('div', 'progressbar'),
        life = createElement('div', 'life'),
        name = createElement('div', 'name'),
        img = createElement('img');

  life.style.width = playerObject.hp + "%";
  name.innerText = playerObject.name;
  img.src = playerObject.img;
  img.alt = playerObject.name + ' image';
  character.append(img);
  progressBar.append(life, name);
  playerBox.append(progressBar, character);
  return playerBox;
}
function changeHp (player) {
  const playerLife = document.querySelector('.player' + player.player + ' .life');
  const randomHp = Math.ceil(Math.random() * 21);
  player.hp -= randomHp;
  playerLife.style.width = player.hp + '%';
  if ( player.hp <= 0) {
    player.hp = 0;
    playerLife.style.width = player.hp + '%';
    if (player1.hp > player2.hp){
      arenas.append(playerWins(player1.name))
    }else{
      arenas.append(playerWins(player2.name))
    }
    
    randomButtom.disabled = true;
  }
}
function playerWins (name) {
  const loseTitle = createElement('div', 'loseTitle');
  loseTitle.innerText = name + ' wins';
  return loseTitle;
}

randomButtom.addEventListener('click', function () {
  const user = Math.ceil(Math.random() * 3);
  user === 1 ? changeHp(player1) : changeHp(player2);
});

arenas.append(createPlayer(player1))
arenas.append(createPlayer(player2))

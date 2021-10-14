const arenas = document.querySelector('.arenas');

const player1 = {
  name: 'Sub-zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapont: ['Sword'],
  attack: function () {
    console.log(player1.name + " Fight...");
  }
}

const player2 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapont: ['Kunai'],
  attack: function () {
    console.log(player2.name + " Fight...");
  }
}

function createPlayer(player, playerObject) {
  const playerBox = document.createElement('div'),
        character = document.createElement('div'),
        progressBar = document.createElement('div'),
        life = document.createElement('div'),
        name = document.createElement('div');
  const img = document.createElement('img');

  playerBox.classList.add(player);
  progressBar.classList.add('progressbar');
  life.classList.add('life');
  life.style.width = playerObject.hp + "%";
  name.classList.add('name');
  name.innerText = playerObject.name;
  character.classList.add('character');
  img.src = playerObject.img;
  img.alt = playerObject.name + ' image';
  character.append(img);
  progressBar.append(life, name);
  playerBox.append(progressBar, character);
  arenas.appendChild(playerBox);
}

createPlayer('player1', player1);
createPlayer('player2', player2);

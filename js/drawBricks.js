let bricksContainer = document.getElementById("bricks-container");

let level1 = {
  level: 1,
  tiles: [
    1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 0,
    0, 0, 1, 1, 1, 0, 0,
    0, 0, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
}

let level2 = {
  level: 2,
  tiles: [
    1, 1, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 1, 0,
    0, 0, 1, 1, 1, 0, 0,
    0, 1, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1,
  ],
}

let level3 = {
  level: 3,
  tiles: [
    1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 1, 0, 1,
    1, 1, 0, 1, 0, 1, 1,
    1, 0, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1,
  ],
}

let map = {
    columns: 7,
    rows: 5,
    size: 35,
    tiles: level1.tiles,
    getTile: function(col, row) {
        return this.tiles[row * this.columns + col];
    }
};

function drawBricks() {

  if (gameState.level === 1) {
    map.tiles = level1.tiles;
  } else if (gameState.level === 2) {
    map.tiles = level2.tiles;
    } else if (gameState.level === 3) {
      map.tiles = level3.tiles;
      }

    livesNum = 3;
    bricksContainer.innerHTML = '';
    const colorList = [
        "red",
        "purple",
        "green",
        "blue",
        "pink",
        "yellow",
        "cyan",
    ];
    
    for (let row = 0; row < map.rows; row++) {
        createBricksRow(colorList[row], row);
    }
}

function createBricksRow(brickColor, rowIndex) {
    for (let col = 0; col < map.columns; col++) {
        if (map.getTile(col, rowIndex) === 1) {
            let brick = document.createElement("div");
            let brickFace = document.createElement("div");
            let brickShadow = document.createElement("div");
            
            brick.classList.add(brickColor);
            brickFace.classList.add(brickColor);
            brickShadow.classList.add('brick-shadow');
            brickFace.classList.add('brick-face');
            brick.classList.add('brick');
            
            brick.appendChild(brickFace);
            brick.appendChild(brickShadow);

            bricksContainer.append(brick);
        } else {
            let emptySpace = document.createElement("div");
            emptySpace.classList.add('brick');
            emptySpace.classList.add('breaked');
            bricksContainer.append(emptySpace);
        }
    }
}
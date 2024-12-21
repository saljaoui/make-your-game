let bricksContainer = document.getElementById("bricks-container");

function addBricks() {
  console.log(bricksContainer);
  const colorList = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "cyan",
  ];
  for (let index = 0; index < colorList.length; index++) {
    createElementBricks(colorList[index]);
  }
}

function createElementBricks(brickColor) {
  for (let index = 0; index < 10; index++) {
    let brick = document.createElement("div");
    let brickFace = document.createElement("div");
    let brickShadow = document.createElement("div");

    brick.classList.add(brickColor)
    brickFace.classList.add(brickColor)
    brickShadow.classList.add('brick-shadow')
    brickFace.classList.add('brick-face')
    brick.classList.add('brick');

    brick.appendChild(brickFace);
    brick.appendChild(brickShadow);

    bricksContainer.append(brick);
  }
}

addBricks();

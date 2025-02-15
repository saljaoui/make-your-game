const popup = document.querySelector('.popup');
const shadowBackground = document.querySelector('.shadow-background');
const btnPause = document.getElementById('pause');
const timerDisplay = document.getElementById('timer');
const livesDisplay = document.getElementById('lives');
const levelDisplay = document.getElementById('level');

function createImage() {
    const img = document.createElement('img');
    img.src = './styles/logo.jpg';
    return img;
}

function createHeading(text) {
    const heading = document.createElement('h2');
    heading.textContent = text;
    return heading;
}

function createButton(text, id = '', className = '') {
    const button = document.createElement('button');
    button.textContent = text;
    if (id) button.id = id;
    if (className) button.className = className;
    return button;
}

function showPopup() {
    shadowBackground.style.display = 'block';
    popup.classList.add('open-popup');
}

function hidePopup() {
    popup.classList.remove('open-popup');
    shadowBackground.style.display = 'none';
}

function clearPopup() {
    popup.innerHTML = '';
}

function resetGameState() {
    gameState.ball = {x: 300, y: 520, velocityX: -2, velocityY: 3};
    gameState.isPaused = false;
    gameState.score = 0;
    gameState.level = 1;
}

function handlePlayButton() {
    document.getElementById('play').addEventListener('click', () => {
        startTimer();
        hidePopup();
        resetGameState();
        drawBricks();
        requestAnimationFrame(moveBall);
    });
}

function handleResumeButton() {
    document.getElementById('resume').addEventListener('click', () => {
        hidePopup();
        gameState.isPaused = false;
        requestAnimationFrame(moveBall);
    });
}

function handleRestartButton() {
    document.getElementsByClassName('restart')[0].addEventListener('click', () => {
        hidePopup();
        timerDisplay.innerHTML = 'Timer: 00:00';
        scoreDisplay.innerHTML = 'Score: 0';
        livesDisplay.innerHTML = 'Lives: 3';
        levelDisplay.innerHTML = 'Level: 1'
        gameStates.level = 1;
        bricksContainer.innerHTML = '';
        
        livesNum = 3;
        paddlePosition = 235;
        resetGameState();
        
        stopTimer();
        startTimer();
        drawBricks();
        requestAnimationFrame(moveBall);
    });
}

function handleQuitButton() {
    document.getElementById('quit').addEventListener('click', () => {
        hidePopup();
        bricksContainer.innerHTML = '';
        paddlePosition = 235;
        startGame();
    });
}

function pauseGame() {
    gameState.isPaused = true;
    clearPopup();
    showPopup();
    
    popup.appendChild(createImage());
    popup.appendChild(createHeading('Paused'));
    popup.appendChild(createButton('Continue', 'resume'));
    popup.appendChild(createButton('Restart', '', 'restart'));
    
    handleRestartButton();
    handleResumeButton();
}

function startGame() {
    clearPopup();
    
    popup.appendChild(createImage());
    popup.appendChild(createHeading("start level " + gameState.level));
    popup.appendChild(createButton('Play', 'play'));
    
    showPopup();
    handlePlayButton();
}

function gameStates(textGameState) {
    stopTimer();
    clearPopup();
    showPopup();
    resetGameState()
    gameState.isPaused = true;
    paddlePosition = 235;
    
    popup.appendChild(createImage());
    popup.appendChild(createHeading(textGameState));
    
    const timeElement = document.createElement('h3');
    timeElement.textContent = timerDisplay.textContent;
    popup.appendChild(timeElement);
    
    const scoreElement = document.createElement('h3');
    scoreElement.textContent = scoreDisplay.textContent;
    popup.appendChild(scoreElement);
    
    popup.appendChild(createButton('Restart', '', 'restart'));
    popup.appendChild(createButton('Quit', 'quit'));
    
    handleQuitButton();
    handleRestartButton();
}

function nextLevel() {
    clearPopup();
    showPopup();
    gameState.level += 1
    gameState.ball = {x: 300, y: 520, velocityX: -2, velocityY: 3};
    gameState.isPaused = true;
    levelDisplay.innerHTML = "Level: " + gameState.level;
    livesDisplay.innerHTML = 'Lives: 3';
    paddlePosition = 235;
    
    popup.appendChild(createImage());
    popup.appendChild(createHeading(('level ' + gameState.level)));
    popup.appendChild(createButton('Next level', 'nextLevel'));
    popup.appendChild(createButton('Restart', '', 'restart'));

    handleRestartButton();
    handleNextButton();
}

function handleNextButton() {
    document.getElementById('nextLevel').addEventListener('click', () => {
        hidePopup();
        gameState.isPaused = false;
        drawBricks();
        requestAnimationFrame(moveBall);
    });
}

btnPause.addEventListener('click', pauseGame);

startGame();

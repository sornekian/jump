let dino = document.getElementById("dino");
let bomb = document.getElementById("bomb");
let startButton = document.getElementById("startButton");
let tryAgainButton = document.getElementById("tryAgainButton");
let gameDiv = document.getElementById("game");
let isJumping = false;
let score = 0;

startButton.addEventListener("click", startGame);
tryAgainButton.addEventListener("click", tryAgain);

function startGame() {
	startButton.style.display = "none";
	tryAgainButton.style.display = "none";
	gameDiv.style.display = "block";

	dino.style.top = "150px";
	bomb.style.left = "480px";
	bomb.style.animationDuration = "1.5s";

	score = 0;

	document.addEventListener("click", jump);
	setTimeout(() => {
		intervalId = setInterval(checkDead, 5);
	}, 1000);
}

function tryAgain() {
	tryAgainButton.style.display = "none";
	startGame();
}

function jump() {
	if (!isJumping) {
		isJumping = true;
		dino.style.animation = "jump 300ms";
		setTimeout(function () {
			dino.style.animation = "";
			isJumping = false;
			incrementScore();
		}, 300);
	}
}

function incrementScore() {
	score++;
}

function checkDead() {
	let characterTop = parseInt(
		window.getComputedStyle(dino).getPropertyValue("top"),
	);
	let blockLeft = parseInt(
		window.getComputedStyle(bomb).getPropertyValue("left"),
	);

	// the code below is if the bomb is hit horizontally or vertically

	if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
		tryAgainButton.style.display = "block";
		gameDiv.style.display = "none";

		clearInterval(intervalId);

		alert("Game over. Your score is: " + score);
	}
}

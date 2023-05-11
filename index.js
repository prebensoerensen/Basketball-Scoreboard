let homeScore = 0;
let guestScore = 0;
const homeScreen = document.getElementById("homescreen");
const guestScreen = document.getElementById("guestscreen");
const timerEl = document.getElementById("timer-el");


function updateScore(team, points) {
  if (team === 'home') {
    homeScore += points;
	if (homeScore < 0) {
		homeScore = 0
	}
	homeScreen.textContent = homeScore;
  }  if (team === 'guest') {
    guestScore += points;
	if (guestScore < 0) {
		guestScore = 0
	}
    guestScreen.textContent = guestScore;
  }
  negativeScore()
  numberhighlight();
}

function negativeScore() {
	
}

function newgame() {
  homeScore = 0;
  guestScore = 0;
  homeScreen.textContent = homeScore;
  guestScreen.textContent = guestScore;
  numberhighlight();
  resetTimer();
}

function numberhighlight() {
  if (homeScore > guestScore) {
    homeScreen.style.color = "#02c902";
    guestScreen.style.color = "#F94F6D";
  }
  if (homeScore < guestScore) {
    homeScreen.style.color = "#F94F6D";
    guestScreen.style.color = "#02c902";
  }
  if (homeScore == guestScore) {
    homeScreen.style.color = "#F94F6D";
    guestScreen.style.color = "#F94F6D";
  }
}

// time in minutes
const initialTime = 12;

let totalSeconds = initialTime * 60;
let timerInterval;

// adding 0 to time if there's only 1 digit
function formatTime(time) {
	if (time < 10) {
		return `0${time}`
	} else {
		return `${time}`
	}
}

function startTimer() {
	
	clearInterval(timerInterval);

	timerInterval = setInterval(() => {

		const minutesLeft = Math.floor(totalSeconds / 60);
		const secondsLeft = totalSeconds % 60;

		const formatMinutes = formatTime(minutesLeft);
		const formatSeconds = formatTime(secondsLeft);

		timerEl.innerHTML = `${formatMinutes}:${formatSeconds}`;

		totalSeconds--;

		if (totalSeconds < 0) {
			clearInterval(timerInterval);
			timerEl.innerHTML = "00:00";
			} else if (totalSeconds === 0) {
			clearInterval(timerInterval);
			timerEl.innerHTML = "00:00";
		}
	}, 1000);
}

function pauseTimer() {
	clearInterval(timerInterval);
}

function resetTimer() {
	clearInterval(timerInterval);
	totalSeconds = initialTime * 60;
	const formatMinutes = formatTime(initialTime);
	const formatSeconds = formatTime(0);
	timerEl.innerHTML = `${formatMinutes}:${formatSeconds}`;
}
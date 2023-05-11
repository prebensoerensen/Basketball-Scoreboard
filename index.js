let homeScore = 0;
let guestScore = 0;
let foulsHome = 0;
let foulsGuest = 0;
let period = 1;
const homeScreen = document.getElementById('homescreen');
const guestScreen = document.getElementById('guestscreen');
const foulsHomeEl = document.getElementById('fouls-home-el');
const foulsGuestEl = document.getElementById('fouls-guest-el');
const periodEl = document.getElementById('period-el');
const timerEl = document.getElementById("timer-el");


function updateScore(team, points) {
  if (team === 'home') {
    homeScore += points;
	if (homeScore < 0) {
		homeScore = 0;
	}
	homeScreen.textContent = homeScore;
  }  if (team === 'guest') {
    guestScore += points;
	if (guestScore < 0) {
		guestScore = 0;
	}
    guestScreen.textContent = guestScore;
  }
  numberHighlight();
}

function updateFouls(team, value) {
	if (team === 'home') {
		foulsHome += value;
		if (foulsHome < 0) {
			foulsHome = 0;
		}
		foulsHomeEl.textContent = foulsHome;
	} if (team === 'guest') {
		foulsGuest += value;
		if (foulsGuest < 0) {
			foulsGuest = 0;
		}
		foulsGuestEl.textContent = foulsGuest;
	}
}

function updatePeriod() {
	if (period < 4) {
		period += 1;
	}
	periodEl.textContent = period;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  foulsHome = 0;
  foulsGuest = 0;
  period = 1;
  homeScreen.textContent = homeScore;
  guestScreen.textContent = guestScore;
  foulsHomeEl.textContent = foulsHome;
  foulsGuestEl.textContent = foulsGuest;
  periodEl.textContent = period;
  numberHighlight();
  resetTimer();
}

function numberHighlight() {
  if (homeScore > guestScore) {
    homeScreen.style.color = '#02c902';
    guestScreen.style.color = '#F9F6D';
  }
  if (homeScore < guestScore) {
    homeScreen.style.color = '#F94F6D';
    guestScreen.style.color = '#02c902';
  }
  if (homeScore == guestScore) {
    homeScreen.style.color = '#F94F6D';
    guestScreen.style.color = '#F94F6D';
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
			timerEl.innerHTML = '00:00';
			} else if (totalSeconds === 0) {
			clearInterval(timerInterval);
			timerEl.innerHTML = '00:00';
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
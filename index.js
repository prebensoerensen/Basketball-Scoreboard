let home = 0;
let guest = 0;
let homescr = document.getElementById("homescr");
let guestscr = document.getElementById("guestscr");

function homeadd1() {
  home += 1;
  homescr.textContent = home;
  numberhighlight();
}

function homeadd2() {
  home += 2;
  homescr.textContent = home;
  numberhighlight();
}

function homeadd3() {
  home += 3;
  homescr.textContent = home;
  numberhighlight();
}

function guestadd1() {
  guest += 1;
  guestscr.textContent = guest;
  numberhighlight();
}

function guestadd2() {
  guest += 2;
  guestscr.textContent = guest;
  numberhighlight();
}

function guestadd3() {
  guest += 3;
  guestscr.textContent = guest;
  numberhighlight();
}

function newgame() {
  home = 0;
  guest = 0;
  homescr.textContent = home;
  guestscr.textContent = guest;
  numberhighlight();
}

function numberhighlight() {
  if (home > guest) {
    homescr.style.color = "#02c902";
    guestscr.style.color = "#F94F6D";
  }
  if (home < guest) {
    homescr.style.color = "#F94F6D";
    guestscr.style.color = "#02c902";
  }
  if (home == guest) {
    homescr.style.color = "#F94F6D";
    guestscr.style.color = "#F94F6D";
  }
}

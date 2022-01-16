let drumBox = document.getElementById("drum-machine");
let display = document.getElementById("display");

// fcc grab required HTML audio files

let Q = document.getElementById("Q");
let W = document.getElementById("W");
let E = document.getElementById("E");
let A = document.getElementById("A");
let S = document.getElementById("S");
let D = document.getElementById("D");
let Z = document.getElementById("Z");
let X = document.getElementById("X");
let C = document.getElementById("C");

// grab each actual element

let padQ = document.getElementById("padQ");
let padW = document.getElementById("padW");
let padE = document.getElementById("padE");
let padA = document.getElementById("padA");
let padS = document.getElementById("padS");
let padD = document.getElementById("padD");
let padZ = document.getElementById("padZ");
let padX = document.getElementById("padX");
let padC = document.getElementById("padC");

padQ.addEventListener("click", (e) => {
  padQ.name = "Clap";
  Q.play();
  display.textContent = padQ.name;
});

padW.addEventListener("click", (e) => {
  padW.name = "HiHat-808";
  W.play();
  display.textContent = padW.name;
});

padE.addEventListener("click", (e) => {
  padE.name = "Perc-laser";
  E.play();
  display.textContent = padE.name;
});

padA.addEventListener("click", (e) => {
  padA.name = "Electric Kick";
  A.play();
  display.textContent = padA.name;
});

padS.addEventListener("click", (e) => {
  padS.name = "Kick-808";
  S.play();
  display.textContent = padS.name;
});

padD.addEventListener("click", (e) => {
  padD.name = "Snare-808";
  D.play();
  display.textContent = padD.name;
});

padZ.addEventListener("click", (e) => {
  padZ.name = "Acoustic Ride";
  Z.play();
  display.textContent = padZ.name;
});

padX.addEventListener("click", (e) => {
  padX.name = "Tom-808";
  X.play();
  display.textContent = padX.name;
});

padC.addEventListener("click", (e) => {
  padC.name = "Tom Lofi";
  C.play();
  display.textContent = padC.name;
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 65) {
    padA.name = "Electric Kick";
    A.play();
    display.textContent = padA.name;
  }
  if (e.keyCode == 83) {
    padS.name = "Kick-808";
    S.play();
    display.textContent = padS.name;
  }
  if (e.keyCode == 68) {
    padD.name = "Snare-808";
    D.play();
    display.textContent = padD.name;
  }

  if (e.keyCode == 81) {
    padQ.name = "Clap";
    Q.play();
    display.textContent = padQ.name;
  }
  if (e.keyCode == 87) {
    padW.name = "HiHat-808";
    W.play();
    display.textContent = padW.name;
  }
  if (e.keyCode == 69) {
    padE.name = "Perc-laser";
    E.play();
    display.textContent = padE.name;
  }

  if (e.keyCode == 90) {
    padZ.name = "Acoustic Ride";
    Z.play();
    display.textContent = padZ.name;
  }
  if (e.keyCode == 88) {
    padX.name = "Tom-808";
    X.play();
    display.textContent = padX.name;
  }
  if (e.keyCode == 67) {
    padC.name = "Tom Lofi";
    C.play();
    display.textContent = padC.name;
  }
});

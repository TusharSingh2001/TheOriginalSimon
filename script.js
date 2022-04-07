var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var guessCounter =0;
var clueHoldTime = 1000; // time for the clue's lights/sounds
var cluePauseTime = 333;
var nextClueWaitTime = 1000;
var mode = "easy";
var mistakes = 3;
var audio = document.getElementById("audio1");
var volume = 1;



// start the game
function startGame(){
  
  progress = 0;
  gamePlaying = true;
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  setMode(mode); // this sets the mistakes too and other vars
  randomize();
  playClueSequence();
}

// stop the game
function stopGame(){
  
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

}

// randomize the pattern of the game
function randomize(){
  for(let i = 0; i < pattern.length; i++){
    pattern[i] = Math.floor(Math.random() * 4) + 1;
    console.log("pattern at " + i + " number: " + pattern[i]);
  }
}

const freqMap = {
  1: 200.3,
  2: 241.2,
  3: 420,
  4: 569.2
}
function playTone(btn,len){ 
  
  startTone(btn)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
  
}
function startTone(btn){
  if(!tonePlaying){
    
    if(btn == 1){
     audio = document.getElementById("audio1");
      audio.play();
      console.log("played");
  }else if (btn == 2){
    audio = document.getElementById("audio2");
    audio.play();
  }else if (btn == 3){
    audio = document.getElementById("audio3");
    audio.play();
  }else if (btn == 4){
    audio = document.getElementById("audio4");
    audio.play();
  }
    
    tonePlaying = true
  }
  
  
}
function stopTone(){
    
  audio.currentTime = 0.3;
  audio.pause();
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for(let i= 0; i <= progress; i++){
    console.log("play single clue: " + pattern[i] + " in " + delay + " ms")
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
    if(mode == "easy"){
      clueHoldTime -= 25;
    }
  
    console.log("time " + clueHoldTime);
  }
}

// player loses the game
// on missing one pattern
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

// player wins the game
// on guessing complete pattern
function winGame(){
  stopGame();
  alert("Game Over, You Won!!!!")
}

function guess(btn){
  console.log("user guess: "+ btn);
  if(!gamePlaying){
    return;
  }
 
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == 5){
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{ 
      guessCounter++; 
    }
  }else{
      if(mistakes == 2){
        loseGame();
      }
      mistakes -= 1;
      console.log("mistakes: " + mistakes);
      playClueSequence();
  }
}

// function to increase volume
function increaseVolume(){
  volume += .10;
  audio.volume = volume;
  console.log("volume: " + audio.volume);
}

// function to decrease volume
function decreaseVolume(){
  if(volume != 0){
    volume -= .10;
    audio.volume = volume;
  }
  console.log("volume: " + volume);
}

// function to put on easy
function setMode(btn){
  if(btn == "easy"){
    mode = "easy";
    mistakes = 2;
    clueHoldTime = 1000;
    cluePauseTime = 333;
    nextClueWaitTime = 1000;
  }else if(btn == "medium"){
    mode = "medium";
    mistakes = 1;
    clueHoldTime = 500;
    cluePauseTime = 200;
    nextClueWaitTime = 500;
  }else if(btn == "hard"){
    mode = "hard";
    mistakes = 0;
    clueHoldTime = 250;
    cluePauseTime = 100;
    nextClueWaitTime = 250;
  }
  console.log("set " + btn+ " mode");
}


var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
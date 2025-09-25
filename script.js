//your JS code here. If required.
const audio = document.getElementById('audio');
const video = document.getElementById('video');
const beachBtn = document.getElementById('beachBtn');
const rainBtn = document.getElementById('rainBtn');
const playBtn = document.querySelector('.play');
const timeDisplay = document.querySelector('.time-display');
const smallerBtn = document.getElementById('smaller-mins');
const mediumBtn = document.getElementById('medium-mins');
const longBtn = document.getElementById('long-mins');

let meditationTime = 600; // 10 min default
let elapsed = 0;
let playing = false;
let timerInterval;

// Change sound and video
beachBtn.onclick = () => {
  audio.src = 'Sounds/beach.mp3';
  video.src = 'Videos/beach.mp4';
  if (playing) {
    audio.play();
    video.play();
  }
};

rainBtn.onclick = () => {
  audio.src = 'Sounds/rain.mp3';
  video.src = 'Videos/rain.mp4';
  if (playing) {
    audio.play();
    video.play();
  }
};

// Select time
smallerBtn.onclick = () => setMeditationTime(120);
mediumBtn.onclick = () => setMeditationTime(300);
longBtn.onclick = () => setMeditationTime(600);

function setMeditationTime(t) {
  meditationTime = t;
  elapsed = 0;
  updateDisplay(t);
  if (playing) {
    pauseMeditation();
  }
}

// Play/pause button
playBtn.onclick = () => {
  if (!playing) {
    startMeditation();
  } else {
    pauseMeditation();
  }
};

function startMeditation() {
  playing = true;
  audio.play();
  video.play();
  playBtn.textContent = 'Pause';
  timerInterval = setInterval(() => {
    elapsed++;
    updateDisplay(meditationTime - elapsed);
    if (elapsed >= meditationTime) {
      pauseMeditation();
      updateDisplay(0);
    }
  }, 1000);
}

function pauseMeditation() {
  playing = false;
  audio.pause();
  video.pause();
  playBtn.textContent = 'Play';
  clearInterval(timerInterval);
}

function updateDisplay(t) {
  let mins = Math.floor(t / 60);
  let secs = t % 60;
  timeDisplay.textContent = `${mins}:${secs}`;
}

// Initial display
updateDisplay(meditationTime);

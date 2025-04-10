// Custom Video Player Functionality

const videoPlayer = document.getElementById('videoPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');

playBtn.addEventListener('click', () => {
    videoPlayer.play();
});

pauseBtn.addEventListener('click', () => {
    videoPlayer.pause();
});

stopBtn.addEventListener('click', () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0; // Reset to the beginning
});

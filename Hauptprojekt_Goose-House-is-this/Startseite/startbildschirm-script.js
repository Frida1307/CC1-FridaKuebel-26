const startButton = document.getElementById('start-button');
const video = document.getElementById('startbildschirm-video');
const ui = document.querySelector('.ui-overlay');

video.addEventListener('loadedmetadata', () => {
    video.playbackRate = 0.7;
});

startButton.addEventListener('click', () => {
    window.location.href = '../Spiel/GHIT-Spiel.html';
});
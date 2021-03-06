const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay(){
   const method = video.paused ? 'play' : 'pause';
   video[method]();
}

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip) // ici on extrait les donner du data-skip dans le html de chaque boutton
}


video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click',skip))
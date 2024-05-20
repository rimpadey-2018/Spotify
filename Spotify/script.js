console.log("Welcome to Spotify");

// Initialize Variables
let songIndex = 0;
let audioElement;
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    { songName: "Sajni Re - Lapaata Ladies", filepath: "Sajni Re.mp3", coverpath: "Cover.jpeg" }, // Corrected file extension
    { songName: "Another Song", filepath: "AnotherSong.mp3", coverpath: "AnotherCover.jpeg" } // Example of another song
    // Add more songs as needed
];

// Initialize audio element with the first song
audioElement = new Audio(songs[songIndex].filepath);

// Function to load and play a song
function playSong(index) {
    audioElement.src = songs[index].filepath;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
}

// Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update seekbar
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myprogressbar.value = progress;
});

myprogressbar.addEventListener('input', () => {
    audioElement.currentTime = (myprogressbar.value / 100) * audioElement.duration;
});

// Function to play next song
function playNextSong() {
    songIndex = (songIndex + 1) % songs.length; // Loop through songs
    playSong(songIndex);
}

// Function to play previous song
function playPreviousSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop through songs
    playSong(songIndex);
}

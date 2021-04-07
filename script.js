const songs = [
  "bensound-creativeminds.mp3",
  "bensound-cute.mp3",
  "bensound-littleidea.mp3",
  "bensound-memories.mp3"
];

const player = document.getElementById('player');
const slider = document.getElementById('volumeSlider');

function createSongList(){
  const list = document.createElement('ol');
  songs.forEach(function(song){
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(song))
    list.appendChild(li);
  })
  return list;
}

const songList = document.getElementById("songList")
songList.appendChild(createSongList(songs));

const links = document.querySelectorAll('li');
for(let link of links){
  link.addEventListener('click', setSong)
}

function setSong(e){
  const selectedTrack = e.target.innerText;
  const source = document.getElementById('source');
  source.src = "songs/"+selectedTrack;

  displayCurrentTrack(selectedTrack);


  player.load();
  player.play();
}


function displayCurrentTrack(track){
  document.querySelector('#currentSong').innerText = `Now Playing: ${track}`
}


function playAudio(){
  if(player.readyState){
    player.play()
  }
}

function pauseAudio(){
  player.pause();
}

slider.oninput = function(e){
  const volume = e.target.value;
  player.volume = volume;
}

function updateProgress(){
  let progressBar = document.getElementById('progress');
  progressBar.value = (player.currentTime / player.duration) * 100;
}
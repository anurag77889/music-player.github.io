let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");


song.onloadedmetadata = ()=>{
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    var audio = document.getElementById("song");
    var icon = document.getElementById("ctrlIcon");

    if (audio.paused) {
        audio.play();
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
    } else {
        audio.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = ()=>{
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}


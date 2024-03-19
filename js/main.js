let dropZone = document.querySelectorAll('.box'),
	instrument = document.querySelectorAll('.instrument'),
	pausebutton = document.querySelector('.pausebutton'),
	rebutton = document.querySelector('.rebutton'),
	music = document.querySelectorAll('.music');
    let draggedPiece;

function startedDragging() {
    console.log("dragStart called");
    draggedPiece = this;
 }
        
function draggedOver(e) {
    console.log("draggedOver called");
    e.preventDefault();
    
}
        
function dropped(e) {
    console.log("item was dropped");
    e.preventDefault();
    let dropZone = this;
    dropZone.innerHTML = ''; 
    dropZone.appendChild(draggedPiece.cloneNode(true)); 
    let instrumentIndex = Array.from(instrument).indexOf(draggedPiece);
    if (instrumentIndex !== -1) {
        music[instrumentIndex].play();
    }
    
    draggedPiece.style.visibility = 'hidden';
}

function restartAudio() { 
    music.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
    
    instrument.forEach(inst => {
        inst.style.top = '0px'; 
        inst.style.left = '0px'; 
        document.querySelector('.originalPosition').appendChild(inst);
    });
}

function pauseAudio() { 
    music.forEach(audio => {
        audio.pause(); 
    });
}

instrument.forEach(instrument => {
    instrument.addEventListener("dragstart", startedDragging);
});

dropZone.forEach(dropZone => {
    dropZone.addEventListener("dragover", draggedOver);
    dropZone.addEventListener("drop", dropped);
});

rebutton.addEventListener('click', function() {
    window.location.href = window.location.href; 
});
pausebutton.addEventListener('click', pauseAudio);






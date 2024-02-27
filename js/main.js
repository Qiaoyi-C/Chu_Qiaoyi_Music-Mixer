let dropZone = document.querySelectorAll('.box'),
	instrument = document.querySelectorAll('.instrument'),
	pausebutton = document.querySelector('.pausebutton'),
	rwbutton = document.querySelector('.rwbutton'),
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
}

instrument.forEach(instrument => {
    instrument.addEventListener("dragstart", startedDragging);
});

dropZone.forEach(dropZone => {
    dropZone.addEventListener("dragover", draggedOver);
    dropZone.addEventListener("drop", dropped);
});







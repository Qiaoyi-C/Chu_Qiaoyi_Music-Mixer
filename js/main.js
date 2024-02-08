
var box2 = document.querySelector('.box2');

box2.ondragenter = function () {
    console.log("Start dragging object!");
}


box2.ondragleave = function () {

    console.log("The object crossed the box and did not land in the box.");
}


box2.ondragover = function (e) {

    e.preventDefault(); 

    console.log("Drag ends");
    console.log("***************");
}


box2.ondrop = function () {
    console.log("The drag target passes over the placement object and is not placed in the placement object.");
}
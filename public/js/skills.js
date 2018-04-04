// To get it in one function, give every icon the same mouse over
// function, and pass the event var into the function
// in the function call event.target to get the icone that triggered
// the function. Then use e.target.className to get that events class name
// then but all possible classNames in a switch case to change the right class
// get a list of the icons and add hover event listeners
var icons = document.getElementById("icon-wrap").getElementsByTagName('i');
Array.from(icons).forEach(function(icon) {
    icon.addEventListener('mouseover', addColor);
    icon.addEventListener('mouseout', removeColor);
})


//get the element the mouse is on and change it to the colored icon
function addColor(e) {
    var hoverIcon = e.target;
    var name = hoverIcon.className;
    var newName = name + ' colored';
    var title = hoverIcon.nextElementSibling;
    hoverIcon.className = newName;
    hoverIcon.style.fontSize = "150px";
    title.style.display = "block";
}

function removeColor(e) {
    var hoverIcon = e.target;
    var name = hoverIcon.className;
    var newName = name.replace(' colored', '');
    var title = hoverIcon.nextElementSibling;
    hoverIcon.className = newName;
    hoverIcon.style.fontSize = "100px";
    title.style.display = "none";
}
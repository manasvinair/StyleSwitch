function changeColor() {
    const color = document.getElementById("colorInput").value;
    const div = document.querySelector(".design");
    div.style.backgroundColor = color;
}
function changeTextColor() {
    const tcolor = document.getElementById("textColorInput").value;
    const div = document.querySelector("#sample-text");
    div.style.color = tcolor;
}
function changeSize() {
    const tsize = document.getElementById("fontSize").value;
    const div = document.querySelector("#sample-text");
    div.style.fontSize = tsize;
}
function changeFont() {
    const tfont = document.getElementById("fontType").value;
    const div = document.querySelector("#sample-text");
    div.style.fontFamily = tfont;
}
function changeJustifyContent() {
    const justifyContent = document.getElementById('justify-content').value;
    document.getElementById('flexbox-container').style.justifyContent = justifyContent;
}

function changeAlignItems() {
    const alignItems = document.getElementById('align-items').value;
    document.getElementById('flexbox-container').style.alignItems = alignItems;
}

function changeFlexDirection() {
    const flexDirection = document.getElementById('flex-direction').value;
    document.getElementById('flexbox-container').style.flexDirection = flexDirection;
}
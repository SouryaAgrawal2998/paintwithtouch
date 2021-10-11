var mouseevent = "empty";
var last_position_of_touch_x, last_position_of_touch_y;
var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var width_of_line = 2;
var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}
else{
    document.getElementById("myCanvas").width= "800";
    document.getElementById("myCanvas").height= "600";
}
canvas.addEventListener("touchstart", my_touchstart);
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown() {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("widthOfLine").value;
    mouseevent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup() {
    mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave() {
    mouseevent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    mouseevent = "mousemove";
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

function my_touchstart(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("widthOfLine").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}
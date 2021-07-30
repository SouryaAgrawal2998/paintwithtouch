var mouseevent = "";
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var color = "";
var width_of_line = "";
addEventListener("mousedown", my_mousedown);

function my_mousedown() {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("widthOfLine").value;
    mouseevent = "mouseup";
}
//addEventListener("mouseup", my_mouseup);

function my_mouseup() {
    color = document.getElementById("color").value;
   width_of_line = document.getElementById("widthOfLine").value;
   mouseevent = "mouseup";
}
//addEventListener("mouseleave", my_mouseleave);

function my_mouseleave() {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("widthOfLine").value;
    mouseevent = "mouseleave";
}
addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("widthOfLine").value;
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

function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clienty - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}
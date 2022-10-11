 canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");var mouseEvent="";
 var last_position_of_x, last_position_of_y;
 canvas.addEventListener("mousedown",Mymousedown);
 function Mymousedown (e){
    mouseEvent="mousedown";
 }
 canvas.addEventListener("mouseup",Mymouseup);
 function Mymouseup (e) {
    mouseEvent="mouseup";
 }
 canvas.addEventListener("mouseleave",Mymouseleave);
 function Mymouseleave (e) {
    mouseEvent="mouseleave";
 }
 canvas.addEventListener("mousemove",Mymousemove);
 function Mymousemove (e) {
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
        
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
 }    
 
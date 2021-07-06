addEventListener 
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";
function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}
function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if( keyPressed == '70'){
        new_image('taklo.png');
        console.log("f");
    }

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if( keyPressed == '66'){
        new_image('tato.png');
        console.log("b");
    }

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if( keyPressed == '76'){
        new_image('harigobi.png');
        console.log("l");
    }

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if( keyPressed == '82'){
        new_image('bijiwala.png');
        console.log("r");
    }

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if( keyPressed == '72'){
        new_image('samose wala.png');
        console.log("h");
    }

}


    if( keyPressed == '38')
    {
        up();
        console.log("up");
    }




    if( keyPressed == '37')
    {
        left();
        console.log("left");
    }




    if( keyPressed == '40')
    {
        down();
        console.log("down");
    }






    if( keyPressed == '39')
    {
        right();
        console.log("right");
    }





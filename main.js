var canvas=new fabric.Canvas('myCanvas');
block_width=30;
block_height=30;
player_x=100;
player_y=100;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
            left:player_x   
        });
        canvas.add(player_object);
    });
}
function new_Image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimage_object=Img;
        blockimage_object.scaleToWidth(block_width);
        blockimage_object.scaleToHeight(block_height);
        blockimage_object.set({
            top:player_y,
            left:player_x   
        });
        canvas.add(blockimage_object);
    });
}
window.addEventListener("keydown",myKeydown);
function myKeydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=='80'){
        console.log("p and shift pressed together");
        block_height=block_height+10;
        block_width=block_width+10;
    document.getElementById('current_width').innerHTML=block_width;
    document.getElementById('current_height').innerHTML=block_height;    

    }

    if (e.shiftKey==true && keyPressed=='77'){
        console.log("m and shift pressed together");
        block_height=block_height-10;
        block_width=block_width-10;
    document.getElementById('current_width').innerHTML=block_width;
    document.getElementById('current_height').innerHTML=block_height;    

    }

    if (keyPressed=='38')
     {
        up();
        console.log("up arrow key is pressed");
     }   

     if (keyPressed=='40')
     {
        down();
        console.log("down arrow key is pressed");
     }   

     if (keyPressed=='37')
     {
        left();
        console.log("left arrow key is pressed");
     }   

     if (keyPressed=='39')
     {
        right();
        console.log("right arrow key is pressed");
     }


     
     if (keyPressed=='67')
     {
        new_Image('cloud.jpg');
        console.log("c");
     } 
     
     if (keyPressed=='68')
     {
        new_Image('dark_green.png');
        console.log("d");
     } 
     
     if (keyPressed=='71')
     {
        new_Image('ground.png');
        console.log("g");
     } 
     
     if (keyPressed=='76')
     {
        new_Image('light_green.png');
        console.log("l");
     }   

     if (keyPressed=='82')
     {
        new_Image('roof.jpg');
        console.log("r");
     }   

     if (keyPressed=='84')
     {
        new_Image('trunk.jpg');
        console.log("t");
     }   

     if (keyPressed=='85')
     {
        new_Image('unique.png');
        console.log("u");
     }   

     if (keyPressed=='87')
     {
        new_Image('wall.jpg');
        console.log("w");
     }   

     if (keyPressed=='89')
     {
        new_Image('yellow_wall.png');
        console.log("yw");
     }   
}

function up()
{
   if(player_y>=0)
{
player_y = player_y-block_height;
console.log("block Height"+ block_height);
console.log("UP arrow key is pressed X =" + player_x + " Y = " + player_y);
canvas.remove(player_object);
player_update();


   }
}


function down()
{
   if(player_y<=900)
{
player_y = player_y+block_height;
console.log("block Height"+ block_height);
console.log("DOWN arrow key is pressed X =" + player_x + " Y = " + player_y);
canvas.remove(player_object);
player_update();


   }
}

function right()
{
   if(player_x<=1000)
{
player_x = player_x+block_width;
console.log("block width"+ block_width);
console.log("RIGHT arrow key is pressed X =" + player_x + " Y = " + player_y);
canvas.remove(player_object);
player_update();


   }
}


function left()
{
   if(player_x>0)
{
player_x = player_x-block_width;
console.log("block Width"+ block_width);
console.log("LEFT arrow key is pressed X =" + player_x + " Y = " + player_y);
canvas.remove(player_object);
player_update();


   }
}
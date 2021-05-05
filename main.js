var canvas = new fabric.Canvas("myCanvas");
block_image_height = 30;
block_image_width = 30;
player_x = 10;
player_y = 10;
var block_image_object = "";
var player_object = "";

function player_object() {
    fabric.image.fromURL("R1.png", funtion(Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(player_object);

    });
}

function new_image(get_image) {
    fabric.image.fromURL(get_image, funtion(Img) {
       block_image_object= Img;
       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add( block_image_object);

    });
}
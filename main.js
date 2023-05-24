var canvas = new fabric.Canvas('myCanvas');
var canvas2 = new fabric.Canvas('alterCanvas');
 var x= document.getElementById("myAudio");
function playSound() {
    x.play();	

    fabric.Image.fromURL('52.jpg', function(Img) {
        block_image_object = Img;
        
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set ({
            top:0,
            left:0
        });
    canvas.add(block_image_object);
    });

    fabric.Image.fromURL('1971.jpg', function(Img) {
        block_image_object = Img;
        
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set ({
            top:0,
            left:0
        });
    canvas2.add(block_image_object);
    });


}
function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        block_image_object = Img;
        
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set ({
            top:0,
            left:0
        });
    canvas.add(block_image_object);
    });
}

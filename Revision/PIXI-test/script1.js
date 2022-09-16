//Creating an Application
let app = new PIXI.Application({
    width:800,
    height:600,
});
//Adding view to the dom
document.body.appendChild(app.view);

//create a sprites
/*There are a number of ways to draw images in PixiJS, 
but the simplest is by using a Sprite.*/
let sprite= PIXI.Sprite.from('toy.png');

//adding sprite to the stage
app.stage.addChild(sprite);

//ticker is used for animation
app.ticker.add(animate);
let elapsed =0;
let delta =0;
function animate(delta){
    elapsed+=delta;
    sprite.x=100.0 + Math.sin(elapsed/50.0)*100.0;
}
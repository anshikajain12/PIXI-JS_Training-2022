let app = new PIXI.Application({
    width:800,
    height:600,
})
document.body.appendChild(app.view);

let container= new PIXI.Container();
app.stage.addChild(container);

let texture = PIXI.Texture.from('toy.png');

for(let i=0;i<25;i++){
    let sprite= PIXI.Sprite.from(texture);
    sprite.x=(i%5)*40;
    sprite.y=Math.floor(i/5)*40;
    sprite.anchor.set(0.5);
    container.addChild(sprite);
}
container.x= app.screen.width/2;
container.y= app.screen.height/2;

container.pivot.x= container.width/2;
container.pivot.y= container.height/2;

app.ticker.add(animate);
let delta=0;
function animate(delta){
    container.rotation +=0.01*delta;
    //+ means- clockwise dirn
    // - means anticlockwise dirn
}
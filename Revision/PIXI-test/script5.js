let app = new PIXI.Application({
    width:800,
    height:600,
})
document.body.appendChild(app.view);

let sprite = new PIXI.Sprite.from('toy.png');

sprite.anchor.set(0.5);
sprite.x=app.screen.width/2;
sprite.y=app.screen.height/2;
sprite.width=250;
sprite.height=200;

sprite.interactive=true;
sprite.buttonMode=true;
sprite.on('pointerdown',onclick);
app.stage.addChild(sprite);


function onclick(){
    sprite.scale.x*=1.25;
    sprite.scale.y*=1.25;
    
}
let app = new PIXI.Application({
    width:800,
    height:600,
})
document.body.appendChild(app.view);

const container = new PIXI.Container();
container.x=app.screen.width/2;
container.y=app.screen.height/2;
app.stage.addChild(container);


let sprites=[];
let parent= container;
for (let i = 0; i < 3; i++) {
    let sprite = PIXI.Sprite.from('toy.png');
    sprite.anchor.set(0.5);
    parent.addChild(sprite);
    sprites.push(sprite);
    parent= sprite;
}

let delta=0.0;
app.ticker.add((d)=>{
    delta+=d/60;
    const amount = Math.sin(delta);
    const scale = 1.0 +0.25*amount;
    const alpha = 0.75 +0.25*amount;
    const angle = 40*amount;
    const X= 75*amount;
    for (let i = 0; i < sprites.length; i++) {
        const sprite= sprites[i];
        sprite.scale.set(scale);
        sprite.alpha=alpha;
        sprite.angle= angle;
        sprite.x=X;
        // sprite.tint=0x00FF33;
    }
})
    
    
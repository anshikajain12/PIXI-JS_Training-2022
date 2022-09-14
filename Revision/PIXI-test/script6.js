let app = new PIXI.Application({
    width:800,
    height:600,
})
document.body.appendChild(app.view);

let texture = new PIXI.Texture.from('toy.png');
const btn1 = new PIXI.Sprite(texture);
btn1.position.set(50,50);
btn1.interactive=true;
btn1.buttonMode=true;

btn1.on('pointerdown',(e)=>onClick(btn1));
btn1.on('pointerover',(e)=>onPointerOver(btn1));
btn1.on('pointerout',(e)=>onPointerOut(btn1));

app.stage.addChild(btn1);
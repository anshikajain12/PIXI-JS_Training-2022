let app = new PIXI.Application({
    width:800,
    height:600,
})
document.body.appendChild(app.view);

let graphic = new PIXI.Graphics();

//rectangle
graphic.beginFill(0xDE3249);
graphic.drawRect(10,10,50,50);
graphic.endFill();

//rectangle + line 
graphic.lineStyle(2,0xFEEB77,1);
graphic.beginFill(0x650A5A);
graphic.drawRect(70,10,50,50);
graphic.endFill();


//circle
graphic.lineStyle(0);
graphic.beginFill(0xDE3249);
graphic.drawCircle(70,150,50);
graphic.endFill();

//circle + line style 1
graphic.lineStyle(2,0xffffff,1);
graphic.beginFill(0x650A5A);
// graphic.drawCircle(200,200,50);
graphic.endFill();

//ellipse
graphic.lineStyle(2,0xffffff,1);
graphic.beginFill(0x650A5A);
graphic.drawEllipse(200, 250, 80, 50);
graphic.endFill();

//shapes
graphic.beginFill(0xFF3300);
graphic.lineStyle(4,0xffffff,1);
graphic.moveTo(10,10);
graphic.lineTo(60,60);
graphic.lineTo(60,10);
graphic.closePath();
graphic.endFill();

//draw star
// graphic.lineStyle(2,0xffffff);
// graphic.beginFill(0x35CC5A,1);
// graphic.drawStar(300,300,6,50);
// graphic.endFill();
app.stage.addChild(graphic);
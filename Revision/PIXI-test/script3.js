let app = new PIXI.Application({
    width:800,
    height:600,
})
document.body.appendChild(app.view);

//create  a window frame
let frame = new PIXI.Graphics(); 
frame.beginFill(0xffffff);
frame.lineStyle({
    width:4,
    alignment:0,
    color:0xffffff
})
frame.drawRect(0,0,208,208);
frame.position.set(200,100);
// frame.position.set(app.screen.width/4,app.screen.height/4);
app.stage.addChild(frame);


//create a graphic object to define our mask
let mask = new PIXI.Graphics();
mask.beginFill(0xfffff);
mask.drawRect(0,0,200,200);
mask.endFill();

//Add container that will hold our masked content
let maskcont= new PIXI.Container();
maskcont.mask = mask;
maskcont.addChild(mask); 
maskcont.position.set(4,4);
frame.addChild(maskcont);

let text = new PIXI.Text({
    fontSize:24,
    fill:0x1010ff,
    wordWrap:true,
    wordWrapWidth:180
})
text.x=10;
text.y=60;
maskcont.addChild(text);
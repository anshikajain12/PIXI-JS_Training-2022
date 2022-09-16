

//     var app = new PIXI.Application({
//         width:1350,
//         height:650,
//         backgroundColor:0x2266FF,
//     });
//     console.log("app",app);
//     document.body.appendChild(app.view);

// // app.loader.add('button','assets/button.png')
// // .load(()=>{
// //     const button = PIXI.Sprite.from('button');
// //     button.offsetX=app.screen.width/4;
// //     button.width=app.screen.height/4;
// //     button.x=100;
// //     button.y=100;
// //     button.width=250;
// //     button.height=100;
// //     button.buttonMode= true;
// //     app.stage.addChild(button);
// // });

// // var button = new PIXI.Sprite('assets/button.png');
// // button.anchor.set(0.5);
// // button.x = 200;
// // button.y = 200;

// // button.interactive = true;
// // button.buttonMode = true;

// // button.on('pointerup',onButtonUp);
// // app.stage.addChild(button);

// // let sats = new PIXI.filters.ColorMatrixFilter();
// // button.filters[sats];
// // sats.saturation(100,100);


// // function onButtonUp() {
// //     this.isdown = false;
// //     if (this.isOver) {
// //         this.texture = textureButtonOver;
// //     }
// //     else {
// //         this.texture = textureButton;
// //     }
// // }



const canvas = document.getElementById('canvas');
const app = new PIXI.Application({
    view:canvas,
    width:window.innerWidth,
    height:window.innerHeight
});

const texture= PIXI.Texture.from('assets/button.png');
const img= new PIXI.Sprite(texture);
img.x= app.renderer.width/2;
img.y= app.renderer.height/2;
img.anchor.x=0.5;
img.anchor.y=0.5;
app.stage.addChild(img);
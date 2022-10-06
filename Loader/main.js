const game = new PIXI.Application({
    width: innerWidth,
    height: innerHeight,
    backgroundColor: 0x838996,
  });
  document.getElementById("game").append(game.view);
  loadAssets([
    
    { name: "front", url: "assets/button.png" },
  ], start);




  
  //------------------------------
  const pBar = document.getElementById("bar");
  const pText = document.getElementById("progress");
  function preload(e) {
    console.log(e.progress);
    if(e.progress===50)
    {
      pBar.style.backgroundColor = "black";
        pBar.style.width = e.progress +"%" ;
        pText.innerText = e.progress +"%" 
      setTimeout(() => {
        
    pText.innerText = e.progress +"%";
    pBar.style.width = e.progress +"%" ;
      }, 1000);
      
  
    }
   
    if (e.progress === 100) {
      console.log("hide loader");
      pBar.style.backgroundColor = "red";
      
      setTimeout(() => {
        pBar.style.width = e.progress +"%" ;
        document.getElementById("loader").style.display = "none";
      }, 2000);
    }
    
  }
   function loadAssets(list, onLoadComplete) {
    game.loader.onProgress.add(preload);
    game.loader.add(list).load(onLoadComplete);
  }
 
  //----------------------------------
  function start(loader, resources) {
      
      const smily = new PIXI.Texture(resources['front'].texture);
      
      const front = PIXI.Sprite.from(smily);
       front.scale.set(1.5);
       front.anchor.set(0.5);
       front.x=game.renderer.screen.width/2;
      front.y=game.renderer.screen.height/2;
      game.stage.addChild(front);
  
   
        
      var text = new PIXI.Text('Welcome To The Game',
      {
        font : '50px Arial',
        fill : 0xFFFFFF,
      });
      text.scale.set(1.5);
      
      text.x=480;
      text.y=80;
  
      game.stage.addChild(text);
  }
const game = new PIXI.Application({
  width: 800,
  height: 600,
  backgroundColor: 0x3366ff,
});
document.getElementById("game").append(game.view);

//Loader
///--------------------------
const Pbar = document.getElementById("bar");
const ptext = document.getElementById("progress");
loadAssets(
  [
    { name: "back", url: "/assets/back-card.jpg" },
    { name: "front", url: "/assets/cards.png" },
  ],
  start
);
function preload(e) {
  Pbar.style.width = e.progress * 2 + "%";
  ptext.innerText = e.progress + "%";
  if (e.progress === 100) {
    console.log("hide loader");
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 2000);
  }
  console.log(e.progress);
}
function loadAssets(list, onLoadComplete) {
  game.loader.onProgress.add(preload);
  game.loader.add(list).load(onLoadComplete);
}

////---------------------------------

function start(loader, resources) {
  console.log("params", arguments);
  const back = PIXI.Sprite.from(resources["back"].texture);
  back.scale.set(0.2);
  game.stage.addChild(back);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 2; j++) {
      const smily = new PIXI.Texture(
        resources["front"].texture,
        new PIXI.Rectangle(4, 8, 54, 67)
        );
        const front = PIXI.Sprite.from(smily);
        game.stage.addChild(front);
    }
  }
  // front.scale.set(0.2);
  const smily1 = new PIXI.Texture(
    resources["front"].texture,
    new PIXI.Rectangle(54, 6, 54, 67)
  );
  const front1 = PIXI.Sprite.from(smily1);
  // front.scale.set(0.2);
  front1.x = 120;
  front1.y = 0;

  game.stage.addChild(front1);
}

const game = new PIXI.Application({
    width:800,
    height:600,
    backgroundColor:0x3366FF,
});
document.getElementById('game').append(game.view);

//Loader
function preload(e){
    
}
function loadAssets(list,onLoadComplete) {
    game.loader.onProgress.add(preload);
    game.loader.add(list)
    .load(onLoadComplete);
}
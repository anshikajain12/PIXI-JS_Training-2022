import { Application, Loader, Sprite } from "pixi.js";
import { gsap } from "gsap";
import { getResource, setResources } from "./Texture.utils";
import { Spine } from "pixi-spine";
export class Game extends Application {
  constructor(opts: any) {
    super(opts);
    this.preload(
      [
       
        { name: "goblin", url: "assets/goblins/goblins.json" },
        { name: "boy", url: "assets/spineboy/spineboy.json" },
        { name: "hero", url: "assets/hero/hero.json" },
      ],
      this.onLoad.bind(this)
    );
  }
  preload(list: any[], cb: () => {}): void {
    this.loader.onComplete.add((l: Loader) => {
      setResources(l.resources);
    });
    this.loader.add(list);
    this.loader.load(cb);
  }
  onLoad(): void {
    this.stage.interactive = true;

    const gob = new Spine(getResource("goblin").spineData);
    gob.skeleton.setSkinByName("goblin");
    gob.skeleton.setSlotsToSetupPose();
    gob.state.setAnimation(0, "walk", true);
    gob.x = this.screen.width/1.5;
    gob.y = this.screen.height/2;
    this.stage.addChild(gob);

    this.stage.on("pointertap", () => {
      // change current skin
      const currentSkinName = gob.skeleton.skin.name;
      const newSkinName = currentSkinName === "goblin" ? "goblingirl" : "goblin";
      gob.skeleton.setSkinByName(newSkinName);
      gob.skeleton.setSlotsToSetupPose();
    });
  
   

    const spine = new Spine(getResource("hero").spineData);

    spine.x = this.screen.width / 4;
    spine.y = this.screen.height/2;
    spine.scale.set(0.5);
    spine.skeleton.setSlotsToSetupPose();
    spine.stateData.setMix('walk', 'jump', 0.2);
    spine.stateData.setMix('jump', 'walk', 0.4);
    spine.state.setAnimation(0, "idle", true);
    this.stage.addChild(spine);
    let previousAnim1: string = 'idle';
    let currentAnim1: string = 'idle';
    let revertToAnim1:string = 'idle';
    let direction1: number = 1;
    let defaultScale1 = spine.scale.x;
    this.ticker.add(()=>{
      spine.scale.x = defaultScale1 * direction1;
      if(currentAnim1!=previousAnim1){
          console.log(currentAnim1, previousAnim1);
          spine.state.setAnimation(0, currentAnim1, true);
          previousAnim1 = currentAnim1;
          
      }
  });

  function onKeyEvent1(e: KeyboardEvent): void {
    console.log("keyboard event", e);
    switch (e.type) {
      case "keyup":
          switch(e.code) {
              default:
                  currentAnim1 = revertToAnim;
                  // direction = 1;
                  break;
          }
        break;
      case "keydown":
          switch(e.code) {
              case 'KeyW':
                  currentAnim1 = 'attack';
                  break;
              case 'KeyD':
                  currentAnim1 = 'run';
                  revertToAnim1 = 'walk';
                  direction1 = 1;
                  break;
              case 'KeyF':
                  currentAnim1 = 'crouch';
                  revertToAnim1 = 'run';
                  direction1 = 1;
                  break;
              case 'KeyA':
                  currentAnim1 = 'walk';
                  revertToAnim1 = 'walk';
                  direction1 = -1;
                  break;
              case 'Space':
                  currentAnim1 = 'fall';
                  break;
              default:
                  currentAnim1 = 'idle';
                  revertToAnim1 = 'idle';
          }
        break;
      default:
        console.warn("Event has no listener", e.type);
    }
  }
  window.addEventListener("keydown", onKeyEvent1);
  window.addEventListener("keyup", onKeyEvent1);


    const hero = new Spine(getResource("boy").spineData);
    hero.x = this.screen.width / 2;
    hero.y = this.screen.height;
    hero.scale.set(0.5);
    hero.skeleton.setSlotsToSetupPose();
    hero.stateData.setMix('walk', 'jump', 0.2);
    hero.stateData.setMix('jump', 'walk', 0.4);
    hero.state.setAnimation(0, "idle", true);
    this.stage.addChild(hero);
    let previousAnim: string = 'idle';
    let currentAnim: string = 'idle';
    let revertToAnim:string = 'idle';
    let direction: number = 1;
    let defaultScale = hero.scale.x;
    this.ticker.add(()=>{
        hero.scale.x = defaultScale * direction;
        if(currentAnim!=previousAnim){
            console.log(currentAnim, previousAnim);
            hero.state.setAnimation(0, currentAnim, true);
            previousAnim = currentAnim;
            
        }
    });
    function onKeyEvent(e: KeyboardEvent): void {
      console.log("keyboard event", e);
      switch (e.type) {
        case "keyup":
            switch(e.code) {
                default:
                    currentAnim = revertToAnim;
                    // direction = 1;
                    break;
            }
          break;
        case "keydown":
            switch(e.code) {
                case 'KeyW':
                    currentAnim = 'jump';
                    break;
                case 'KeyD':
                    currentAnim = 'walk';
                    revertToAnim = 'walk';
                    direction = 1;
                    break;
                case 'KeyA':
                    currentAnim = 'walk';
                    revertToAnim = 'walk';
                    direction = -1;
                    break;
                case 'Space':
                    currentAnim = 'shoot';
                    break;
                default:
                    currentAnim = 'idle';
                    revertToAnim = 'idle';
            }
          break;
        default:
          console.warn("Event has no listener", e.type);
      }
    }
    window.addEventListener("keydown", onKeyEvent);
    window.addEventListener("keyup", onKeyEvent);
  }
}

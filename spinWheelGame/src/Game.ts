
import { Application, Sprite,Text } from 'pixi.js';
import { gsap } from 'gsap';
export class Game extends Application {
    private spin: boolean;
    private sliceAngle = 360 / 12;
    constructor(opts: any) {
        super(opts);
        this.preload([
            { name:"wheel",url:"assets/wheelofspine-removebg-preview.png"},
            { name:"arrow",url:"assets/arrow.png"}
        ], this.onLoad.bind(this));
    }
    preload(list: any[], cb: () => {}): void {
        this.loader.add(list);
        this.loader.load(cb);
    }
    winnerpage(ran:number):void{
        let arr=[12,11,10,9,8,7,6,5,4,3,2,1];
        let text = new Text(`Congratulation , you have won ${arr[ran]}$ from this lucky wheel\n `);
        text.anchor.set(0.5);
        text.x= this.screen.width/2;
        text.y= this.screen.height/2+300;
        this.stage.addChild(text);
        setTimeout(() => {
            text.visible=false;
            this.onLoad();
        }, 3000);
        console.log(arr[ran]);  
        }  
    onLoad(): void {
        let random = 0;

        const wheel = new Sprite(this.loader.resources['wheel'].texture);
        const arrow = new Sprite(this.loader.resources['arrow'].texture);
        wheel.anchor.set(0.5);
        wheel.x = this.screen.width / 2;
        wheel.y = this.screen.height / 2;
        arrow.x= this.screen.width/2-40;
        arrow.y= this.screen.height/2-270;
        arrow.width=50;
        arrow.height=65;
        this.stage.addChild(wheel);
        this.stage.addChild(arrow);
        wheel.interactive = true;
        wheel.buttonMode = true;
        console.log(this.stage);
        wheel.on('pointerup', () => {
           let random=Math.floor(Math.random()*12);
            let stopAngle = random * this.sliceAngle;
                gsap.fromTo(wheel, { angle: 0 }, { angle: 3600 + stopAngle, duration: 6, ease: 'expo.out' });     
            setTimeout(() => {
                this.winnerpage(random);
            }, 7000);
           
        });
    }
}




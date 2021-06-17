const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, hour ;
var time;

function preload() {
    getBackgroundImg();
}
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);

        noStroke();
        textSize(40);
        fill("black");
        if(time >= 12){
            text("Time :" + time%12 + " PM", width/2-400, 60);
        }else if(time == 0){
            text("Time : 12 AM", width/2-400, 60);
        }else{
            text("Time :" + time%12 + " AM", width/2-400, 60);
        }

    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    time = hour;

    if(hour>=00 && hour<=02){
        debugger;
        bg = "sunrise1.png";
    }else if(hour>=02 && hour<=04){
        debugger;
        bg = "sunrise2.png";
    }else if(hour>=04 && hour<=06){
        debugger;
        bg = "sunrise3.png";
    }else if(hour>=06 && hour<=08){
        debugger;
        bg = "sunrise4.png";
    }else if(hour>=08 && hour<=10){
        debugger;
        bg = "sunrise5.png";
    }else if(hour>=10 && hour<=12){
        debugger;
        bg = "sunrise6.png";
    }else if(hour>=12 && hour<=14){
        debugger;
        bg = "sunset7.png";
    }else if(hour>=14 && hour<=16){
        debugger;
        bg = "sunset8.png";
    }else if(hour>=16 && hour<=18){
        debugger;
        bg = "sunset9.png";
    }else if(hour>=18 && hour<=20){
        debugger;
        bg = "sunset10.png";
    }else if(hour>=20 && hour<=22){
        debugger;
        bg = "sunset11.png";
    }else{
        debugger;
        bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

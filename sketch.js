//Create variables here
var dog,happyDog,database,foodS,foodStock,
dogImg,happyDogImg
function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png")
  happyDogImg=loadImage("dogImg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(150,50,20,20)
  dog.addImage(dogImg)
  dog.scale=0.1
  
  
 

}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }
  drawSprites();
  fill("black")
  foodStock=database.ref('Food');
  foodStock.on("value",readStock,showEror);
  textSize(20)

  text("Food Remaining: "+foodS,150,150)
  //add styles here

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
function showEror(){
  console.log("error")
}




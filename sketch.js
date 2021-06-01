var happydog, dog;
var database;

function preload()
{
	dogImg= loadImage("dogImg.png")
  happydogImg= loadImage("dogImg1.png")

}

function setup() {
	createCanvas(500, 500);

  dog= createSprite(250,250,30,30)
  dog.addImage(dogImg)
  //happydog= createSprite(250,250,)
  //happydog.addImage(happydogImg)
  
  database = firebase.database();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)

 
}


function draw() {  
background("#50C878")

if(keyWentDown(UP_ARROW)){
writeStock(foodStock)
dog.addImage(happydogImg)
}

  drawSprites();
  fill("white")
text("Food Remaining:" + foodStock ,200,190)


}

function readStock(data){
foodStock= data.val()
}

function writeStock(x){

  if(x<0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })

}


var camino,niño;
var caminoImage,niñoImage;
var leftBoundary,rightBoundary,bounceOff;

function preload(){
  
  //loadImage de path (camino)
  caminoImage = loadImage("path.png");
  //loadAnimation de boy (niño)
  niñoImage = loadAnimation("Runner-1.png","Runner-2.png"); 
}

function setup(){
  createCanvas(400,400);
  
 
  
  //crear sprite de path (camino) 
  camino = createSprite(200,180,400,20);
  camino.addImage(caminoImage);
  camino.y=camino.width /2;
  
  //crear sprite de boy (niño)
  niño = createSprite(200,325,20,50);
  niño.addAnimation("movingNiño",niñoImage);
  niño.scale=0.1
 
  // crear  left Boundary (límite izquierdo)
  leftBoundary = createSprite(400,0,100,800);
  ////establecer visibilidad como false (falso) para límite izquierdo
  leftBoundary.visible=false; 
  //crear right Boundary (límite derecho)
  rightBoundary=createSprite(5,400,100,800)
  //establecer visibilidad como false (falso) para límite izquierdo 
  rightBoundary.visible=false;
}

function draw() {
  background(0);
  //Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
  camino.velocityY=4; 
  
  //código para reiniciar el fondo
  if(camino.y>400 ){
    camino.y=height/2; 
  }
  edges= createEdgeSprites();
   niño.bounceOff(leftBoundary);
  
  
  
 
   // boy moviéndose en el eje X con el mouse
   niño.x=World.mouseX
  
  drawSprites();
}


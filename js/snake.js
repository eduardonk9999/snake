const cvs = document.querySelector('#snake');
const context = cvs.getContext('2d');



//imgs
let backgroundImg = new Image();
backgroundImg.src = "img/ground.png";

let foodImg = new Image();
foodImg.src = "img/food.png";

//unidade (tamanho do quadrado dentro do canvas)
const box = 22;

//sons
// load audio files
const dead = new Audio();
const eat = new Audio();
const up = new Audio();
const left = new Audio();
const right = new Audio();
const down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
left.src = "audio/left.mp3";
right.src = "audio/right.mp3";
down.src = "audio/down.mp3";

//snake
let snake = [];
snake[0] = {
  x: 12*box,
  y: 10*box 
};

// let food   
let food = {
  x: Math.floor (Math.random()*15+1)*box,
  y: Math.floor (Math.random()*12+3)*box
}

//score
let score = 0;


//control
let d;




document.addEventListener('keydown', direction);


function direction(event) {
  let key = event.keyCode;

  if(key == 37 && d != "RIGHT"){
    left.play(); 
    d = "LEFT";

  }
  else if(key == 38 && d != "DOWN") {
    up.play(); 
    d = "UP";
  }
  else if (key == 39 && d != "LEFT") {
    right.play(); 
    d = "RIGHT";
  }
  else if (key == 40 && d != "UP") {
    down.play(); 
    d = "DOWN";
  }
}



//mobile
let btnRight = document.querySelector('.btnRight');
btnRight.addEventListener('click', function(){
  up.play(); 
  d = "RIGHT";
});

let btnDown = document.querySelector('.btnDown');
btnDown.addEventListener('click', function(){
  down.play(); 
  d = "DOWN";
});


let btnLeft = document.querySelector('.btnLeft');
btnLeft.addEventListener('click', function(){
  left.play(); 
  d = "LEFT";
});


let btnUp = document.querySelector('.btnUp');
btnUp.addEventListener('click', function(){
  up.play(); 
  d = "UP";
});






//check COLISAO
function collision(head, array) {
  for(let i = 0; i < array.length; i++){
    if(head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}



//Desenha Tudo
function draw() {
  context.drawImage(backgroundImg,0,0);

  //desenhando snake
  for(let i = 0; i < snake.length; i++) {
    context.fillStyle = (i == 0) ? "#fff" : "#7D86E3";
    context.fillRect(snake[i].x, snake[i].y, box,box); 

    context.strokeStyle = "red";
    context.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  //desenha comida
  context.drawImage(foodImg, food.x, food.y);


  //posicao antiga da cabeca
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  
  //direction
  if( d == "LEFT") snakeX -= box;
  if( d == "UP") snakeY -= box;
  if( d == "RIGHT") snakeX += box;
  if( d == "DOWN") snakeY += box;
  




  //eats the food
  if(snakeX == food.x && snakeY == food.y){
    eat.play();
    score++;
    //reposition apple
    food = {
      x: Math.floor (Math.random()*15+1)*box,
      y: Math.floor (Math.random()*12+3)*box
    }
  }else{
     //remove rastro
    snake.pop();
  }
   //add new Head 
   let newHead = {
    x: snakeX,
    y: snakeY
  }

  //game over
  if(snakeX < box || snakeX > 16 * box || snakeY < 3*box || snakeY > 16*box || collision(newHead, snake)) {
    clearInterval(game);
    dead.play();
  }


  //aumenta
  snake.unshift(newHead);

  //texto
  context.fillStyle = "white";
  context.font = "45px Helvetica";
  context.fillText(score, 4*box,2*box);

  


}



let game = setInterval(draw, 150);
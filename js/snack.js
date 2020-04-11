class Snake(){
  this.stage = stage;
  this.context = context;
  this.velocity = velocity;
  //velocidade inicial
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  //posição inicial Snake
  this.positionX = positionX;
  this.positionY = positionY;

  //Tamanho do CUBO
  this.cube = cube;
  //Quantidade de cubos no canvas (aumount)
  this.aumountC = aumountC;

  //posição da Maçã
  this.appleX = appleX;
  this.appleY = appleY;

  //rastro da snake
  this.trail = trail;
  
  //rabo
  this.tail = tail;

}


/*
window.onload = function() {
  var stage = document.querySelector("#stage");
  var context = stage.getContext("2d");
  document.addEventListener("keydown", keyPush); 


  setInterval(game, 60);

  const vel = 1;
  var vx = 0;
  var vy = 0;
  //posicao inicial da snake
  var px = 10;
  var py = 15;
  //tamanho da peça
  var tp = 20;
  //quantidade de peças (quadradinhos no tabuleiro);
  var qp = 20;
  //posição inicial da maçã
  var ax = 15
  var ay = 15;

  //rastro da cobra
  var trail = [];
  //rabo
  tail = 5;




  function game() {
    px += vx;
    py += vy;

    if (px < 0) {
        px = qp-1;
    }
    if(px > qp-1){
        px = 0;
    }
    if(py < 0) {
       py = qp-1;
    }
    if(py > qp-1){
       py = 0;
    }


    //Pintando o stage
    context.fillStyle = "black";
    context.fillRect(0,0, stage.width, stage.height);

    //pintando a maçã
    context.fillStyle = "red";
    context.fillRect(ax*tp, ay*tp, tp,tp);

    context.fillStyle = "gray";

    //criando o rastro da snake
    for(var i = 0; i < trail.length; i++) {
      context.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);

      // //regras do jogo, colisao da snake
      if(trail[i].x == px && trail[i].y == py){
        vx = vy = 0;
        tail = 5;
      }

    }

    //colocamos no nossa array a posicao x,y baseados no nossso px e py, assim preenchemos
    trail.push({x:px, y:py});
    //dai com isso temos que sempre triar o preenchimento da última posição/ o tamanho do rabo não pode ser maior que o tamanho da cobra
    while (trail.length > tail){
      //dai retiramos o último elemento do array
      trail.shift();
    }

    //aumentando a cobra
    if(ax==px && ay==py) {
      tail++;

      //Posicionando a Maçã aleatoriamente
      ax = Math.floor(Math.random()*qp);
      ay = Math.floor(Math.random()*qp);
    }
  }

  //Movimentação de JOGOS
  function keyPush(event) {
    switch(event.keyCode) {
      case 37: //tecla left
        vx = -vel;
        vy = 0;   
        break;
      case 38: //tecla up
        vx = 0;
        vy = -vel;
        break;
      case 39: //tecla right
        vx = vel;
        vy = 0;
        break;
      case 40: //tecla down
        vx = 0;
        vy = vel;
        break;     
      default:

          break;     
  
    }
  }

  
}

*/
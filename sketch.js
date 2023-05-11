// Adicione o código para importar os módulos no arquivo sketch.js:







// Adicione create canvas (adicionar tela), engine (mecanismo), e world (mundo)
// dentro da função setup() no arquivo sketch.js
function setup() {
  createCanvas(400,400);

  

  
  // Escreva o código dentro da função setup() no arquivo sketch.js para criar a variável
  // ball_options e o objeto bola.

   



   
   var ground_options ={
     isStatic: true
   };
  
  
//    Crie o corpo retângulo chamado ground (solo) e adicione ao world dentro da função
// setup():
 

    
  // Adicione o objeto bola ao mundo:
 
  
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  // Adicione as posições x e y da bola:
  
  // Dentro da função draw(), exiba o corpo do retângulo:

 
console.log(ground.position.y);

  
  
}


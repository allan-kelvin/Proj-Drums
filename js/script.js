/*
//colocando o play dentro da função
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick =tocaSomPom; 


function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}
//chamando  a tecla clap no click, trazendo o som.
document.querySelector('.tecla_clap').onclick = tocaSomClap;

*/

function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let i=0; i< listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio =`#som_${instrumento}`;

    tecla.onclick = function(){
         tocaSom(idAudio);
    }


  // quando preciosa a tecla 
  
    tecla.onkeydown = function(evento){
        if(evento.code ==='Space')  {
        tecla.classList.add('ativa');
      } 

        if (evento.code ==='Enter'){
            tecla.classList.add('ativa');

        }
  }
  

  // quando solta a tecla 
  tecla.onkeyup= function (){
      tecla.classList.remove('ativa');
  }
}



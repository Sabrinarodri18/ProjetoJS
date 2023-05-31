//array com as palavras disponiveis 

//alteração 
var availableWords = ['amor', 'mar', 'lealdade', 'contente', 'luz', 'flores', 'emoção'];


function checkPoem(){
    var input = document.getElementById('textarea').value.toLowerCase() 
    var words = input.split(' ');

    var isValid = words.some(function (word){
        return availableWords.includes(word);
    });


    var result = document.getElementById('result');

    if (isValid) {
        result.textContent = 'Você é realmente uma pessoa criativa, parabéns!!';
    } else {
        result.textContent = 'Você  não usou uma das palavras combinadas, faça novamente.'
    }
}



document.addEventListener('DOMContentLoaded', function() {  //carregar o event listener
 let btncriar =  document.getElementById("botao"); //criamos variaveis para pegar elementos botão e o section
 let div =  document.getElementById("section");

 btncriar.addEventListener('click', function() {


 	let painel = document.createElement('div');
 	div.appendChild(painel);

 	let textarea = document.createElement('textarea');
 	textarea.setAttribute('id', 'textarea');
 	painel.appendChild(textarea);

 	let btnExcluir = document.createElement('button');
 	btnExcluir.setAttribute('id', 'btn-remove');
 	btnExcluir.textContent = "exluir";
 	painel.appendChild(btnExcluir);
 	btncriar.style.display = 'none';

 	btnExcluir.addEventListener('click', function() {
 		painel.remove();
 		btncriar.style.display = 'flex';
	})
});





})

     
     
     
     /*setatribut modificar ou add atributo
     append elemento filho dentro dele pq ele é o pai */

     const poemas = document.querySelectorAll('.poema');
     poemas.forEach(poema => {
       const stars = poema.querySelectorAll('.rating input[type="radio"]');
       const classificacao = poema.querySelector('p');
     
       });
     });

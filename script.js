alert ("Passe o mouse sobre um card para ver um breve resumo sobre cada autor da foto.")
// nessa pagina foi usado o event listener  

document.addEventListener("DOMContentLoaded", function(){   
    const verse = document.getElementById("verse");   
    const Preview = document.getElementById("preview");
     
    verse.addEventListener("input", function() { 
const poema = verse.value;
 Preview.textContent = poema;  
   });
});

verse.value = ""; // Limpa o campo de entrada após pressionar Enter



//o código monitora o evento input na entrada de texto do poema. Sempre que o poema é alterado, o número de caracteres digitados é calculado e exibido no contador correspondente na página. Isso permite que a pessoa saiba quantos caracteres ela digitou enquanto escreve o poema.

//o eventListener aqui é responsável por executar uma função sempre que o valor da entrada de texto (poema) é alterado. Quando ocorre uma alteração no texto do poema, a função pedida ao event listener é chamada e realiza faz a constagem das strings 

 document.addEventListener("DOMContentLoaded", function() {
    const verse = document.getElementById("verse");
    const contador = document.getElementById("contador"); 

 verse.addEventListener("input", function(){
 const caracteresDigitados = verse.value.length; 
 contador.textContent = caracteresDigitados;  //vai atualizando a contagem em tempo real
    })
})

//quando o usuario enviar o poema vai receber uma mensagem dizendo que foi recebido.


const verseInput = document.getElementById("verse");
const botãoEnviar = document.getElementById("botão");
const mensagemDiv = document.getElementById("mensagem"); 


botãoEnviar.addEventListener("click",function(){
const texto = verseInput.value.trim(); //remove espaço em branco e recebe valor do texto

if (texto !== "") {
mensagemDiv.textContent = "O poema foi recebido! (:"
} else {
    mensagemDiv.textContent = "Digite o poema antes de enviar!"
}

// limpa o campo de entrada ao clicar enviar
verseInput.value = "";
})



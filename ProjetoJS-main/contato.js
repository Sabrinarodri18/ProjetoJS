var celularInput = document.getElementById("celular");

  // Adicionar evento de mudança ao campo de celular
  celularInput.addEventListener("change", function() {
    var celularValue = celularInput.value;
    var celularPattern = /^\(\d{2}\) \d{9}$/;

    // Verificar se o formato do celular é válido
    if (!celularPattern.test(celularValue)) {
      alert("Por favor, insira o celular no formato correto: (DDD) 9XXXX-XXXX");
    } else {
      localStorage.setItem("celualr", celularValue);
    }
  });






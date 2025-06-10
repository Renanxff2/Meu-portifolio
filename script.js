
  function mostrarSecao(id) {
    // Esconde tudo
    document.getElementById("header").style.display = "none";
    document.getElementById("sobre").style.display = "none";
    document.getElementById("projetos").style.display = "none";
    document.getElementById("redes-sociais").style.display = "none";

    // Mostra só a seção clicada
    document.getElementById(id).style.display = "block";
  }

  function voltar() {
    // Volta ao header
    document.getElementById("header").style.display = "block";
    document.getElementById("sobre").style.display = "none";
    document.getElementById("projetos").style.display = "none";
    document.getElementById("redes-sociais").style.display = "none";
  }


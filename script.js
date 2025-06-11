function mostrarSecao(id) {
      document.getElementById("header").style.display = "none";
      document.getElementById("sobre").style.display = "none";
      document.getElementById("projetos").style.display = "none";
      document.getElementById("redes-sociais").style.display = "none";

      document.getElementById(id).style.display = "block";
    }

    function voltar() {
      document.getElementById("header").style.display = "block";
      document.getElementById("sobre").style.display = "none";
      document.getElementById("projetos").style.display = "none";
      document.getElementById("redes-sociais").style.display = "none";
    }
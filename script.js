
  // Lista com os IDs das seções
  const secoes = ["header", "sobre", "projetos", "redes-sociais"];

  // Função para mostrar uma seção e esconder as outras
  function mostrarSecao(id) {
    secoes.forEach(secao => {
      const elemento = document.getElementById(secao);
      if (elemento) {
        elemento.style.display = (secao === id) ? "block" : "none";
      }
    });
  }

  // Função para voltar à seção principal (header)
  function voltar() {
    mostrarSecao("header");
  }

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
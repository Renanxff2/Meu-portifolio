document.addEventListener("DOMContentLoaded", () => {
  const secoes = ["header", "sobre", "projetos", "redes-sociais"];

  window.mostrarSecao = function (id) {
    secoes.forEach(secao => {
      document.getElementById(secao).style.display = "none";
    });
    document.getElementById(id).style.display = "block";
  };

  window.voltar = function () {
    secoes.forEach(secao => {
      document.getElementById(secao).style.display = "none";
    });
    document.getElementById("header").style.display = "block";
  };
});

function mostrarSecao(id) {
  const secoes = ["sobre", "projetos", "redes-sociais"];

  // Esconde todas as seções
  secoes.forEach(secao => {
    document.getElementById(secao).classList.add("secao-oculta");
  });

  // Esconde o header
  document.getElementById("header").style.display = "none";

  // Mostra a seção clicada
  document.getElementById(id).classList.remove("secao-oculta");
}

function voltar() {
  // Mostra o header
  document.getElementById("header").style.display = "flex";

  // Esconde todas as seções
  const secoes = ["sobre", "projetos", "redes-sociais"];
  secoes.forEach(secao => {
    document.getElementById(secao).classList.add("secao-oculta");
  });
}

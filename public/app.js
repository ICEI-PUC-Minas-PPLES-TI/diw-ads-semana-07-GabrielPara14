let noticias = [
    { id: "1", title: "noticia 1", content: "conteudo noticia 1" },
    { id: "2", title: "noticia 2", content: "conteudo noticia 2" },
    { id: "3", title: "noticia 3", content: "conteudo noticia 3" },
    { id: "4", title: "noticia 4", content: "conteudo noticia 4" },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const titulos = document.querySelectorAll(".card-title a");
  
    titulos.forEach((titulo) => {
      titulo.addEventListener("click", (event) => {
        event.preventDefault();
        const id = titulo.getAttribute("href").split("=")[1];
        window.location.href = `detalhes.html?id=${id}`;
      });
    });
  });
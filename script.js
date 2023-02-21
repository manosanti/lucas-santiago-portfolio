var typed = new Typed(".multiple-text" , {
    strings: ["Desenvolvedor Front-End", "Designer UX/UI"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

function toggleContent() {

    const conteudo = document.getElementById("conteudo");

    if (conteudo.style.display === "none") {
      conteudo.style.display = "block";
    } else {
      conteudo.style.display = "none";
    }
}
  
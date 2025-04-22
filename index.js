document.getElementById("botao-sobre").addEventListener("click", function(){

    document.getElementById("sobre-mim").scrollIntoView({
        behavior:"smooth"});
});

/********************************************* */

function abrirModal() {
    document.getElementById("modalCurriculo").style.display = "block";
}

function fecharModal() {
    document.getElementById("modalCurriculo").style.display = "none";
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    let modal = document.getElementById("modalCurriculo");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
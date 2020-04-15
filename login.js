let nomeDefinido = "walmir";
let senhaDefinida = 123456;
function verificarUsuario() {
    var inUsuario = document.getElementById("inUsuario");
    var inSenha = document.getElementById("inSenha");
    var outTeste = document.getElementById("outTeste");
    var nome = inUsuario.value;
    var senha = Number(inSenha.value);

    if (nome == "") {
        alert("Informe o nome do usuário...");
        inUsuario.focus();
        return;
    }

    if (senha <= 0 || isNaN(senha)) {
        alert("Senha não informada...");
        inSenha.focus();
        return;
    }
    if (nome == nomeDefinido && senha == senhaDefinida) {
        outTeste.textContent = "Login realizado com sucesso!!"
        outTeste.style.color = "blue";
    } else {
        outTeste.textContent = "Nome de usuário ou senha estão incorretos.";
        outTeste.style.color = "red";
        inUsuario.focus();
        inUsuario.value = "";
        inSenha.value = "";
        confirm("As informações inseridas não são correspondentes a nenhuma conta vinculada! Desja tentar novamente?");
        if (confirm == true) {
            inUsuario.focus();
            inUsuario.value = "";
            inSenha.value = "";
            outTeste.textContent = "";
        } else {
            window.location.href = "http://www.google.com";
        }
    }

}
var btEntrar = document.getElementById("btEntrar");
btEntrar.addEventListener("click", verificarUsuario);

let nomeDefinido = "walmir";
let senhaDefinida = Number(123456);
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
    } else {
        outTeste.textContent = "Nome de usuário ou senha estão incorretos.";
        inUsuario.focus();
        inUsuario.value = "";
        inSenha.value = "";
    }

}
var btEntrar = document.getElementById("btEntrar");
btEntrar.addEventListener("click", verificarUsuario);

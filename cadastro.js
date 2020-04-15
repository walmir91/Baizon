function userRegister(){
   var inUserName = document.getElementById("inUserName");
   var inPasswordRegister  = document.getElementById("inPasswordRegister");
   var inPasswordConfirm = document.getElementById("inPasswordConfirm");
   var name = inUserName.value;
   var passwordR = inPasswordRegister.value;
   var password = inPasswordConfirm.value;

   if(name == "" || password == "" || passwordR == ""){
       alert("Por favor, preencher os campos corretamente.");
       inUserName.focus();
       return;
   }
   if(passwordR != password){
       alert("Os valores informados para senha são diferentes.");
       inPasswordRegister.focus();
       inPasswordRegister.value = "";
       inPasswordConfirm.value = "";
       return;
   }
   alert("Cadastro realizado com sucesso!");
}
var btConfirm = document.getElementById("btConfirm");
btConfirm.addEventListener("click", userRegister);

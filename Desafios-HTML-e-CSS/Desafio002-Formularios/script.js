function mostrarMensagem(event) {

    event.preventDefault(); 
    
    alert("Este aviso indica que está tudo certo com seus dados");
}

function validarSenha() {
  const senha = document.getElementById("isen");
  const confirma = document.getElementById("iconfsen");

  if (senha.value !== confirma.value) {
    confirma.setCustomValidity("As senhas não conferem");
  } else {
    confirma.setCustomValidity("");
  }
}

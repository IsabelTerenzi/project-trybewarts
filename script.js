let botaoEnviar = document.querySelector(".entrarbtn");
botaoEnviar.addEventListener("click", logIn);

let botaoForm = document.querySelector("#submit-btn");


function logIn() {
    let email = document.querySelector(".email").value;
    let senha = document.querySelector(".senha").value;
    if(email === "tryber@teste.com" && senha ==="123456"){
    alert("Olá, Tryber!");
    }else{
        alert("Email ou senha inválidos.");
    }
}

function enviarForm() {
    let checkBox = document.querySelector("#agreement");
    if(checkBox.checked){
        botaoForm.enabled
}
}


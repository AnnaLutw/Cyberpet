let btn = document.querySelector("#vsenha")
let btnConfirm = document.querySelector("#vconfirmarsenha")

let nome = document.querySelector("#Nome")
let labelnome = document.querySelector("#labelnome")
let validnome = false;

let usuario = document.querySelector("#usuario")
let labelusuario = document.querySelector("#labelusuario")
let validusuario = false;

let senha = document.querySelector("#senha")
let labelsenha = document.querySelector("#labelsenha")
let validsenha = false;

let confirmarsenha = document.querySelector("#confirmarsenha")
let labelconfirmarsenha = document.querySelector("#labelconfirmarsenha")
let validconfirmarsenha = false;

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener("keyup",()=>{
    if(nome.value.length <= 2){
        labelnome.setAttribute("style","color: red")
        labelnome.innerHTML = "Insira no mínimo 3 caracteres!"
        nome.setAttribute("style","border-color: red")
    }
    else{
        labelnome.setAttribute("style","color: #272262")
        nome.setAttribute("style","border-color: #272262")
        labelnome.innerHTML = "Nome"
        validnome = true;
    }
})

usuario.addEventListener("keyup",()=>{
    if(usuario.value.length <= 4){
        labelusuario.setAttribute("style","color: red")
        labelusuario.innerHTML = "Insira no mínimo 5 caracteres!"
        usuario.setAttribute("style","border-color: red")
    }
    else{
        labelusuario.setAttribute("style","color: #272262")
        usuario.setAttribute("style","border-color: #272262")
        labelusuario.innerHTML = "Usuário"
        validusuario = true;
    }
})

senha.addEventListener("keyup",()=>{
    if(senha.value.length <= 5){
        labelsenha.setAttribute("style","color: red")
        labelsenha.innerHTML = "Insira no mínimo 6 caracteres!"
        senha.setAttribute("style","border-color: red")
    }
    else{
        labelsenha.setAttribute("style","color: #272262")
        senha.setAttribute("style","border-color: #272262")
        labelsenha.innerHTML = "Senha"
        validsenha = true
    }
})

confirmarsenha.addEventListener("keyup",()=>{
    if(senha.value != confirmarsenha.value){
        labelconfirmarsenha.setAttribute("style","color: red")
        labelconfirmarsenha.innerHTML = "As senhas não são iguais!"
        confirmarsenha.setAttribute("style","border-color: red")
    }
    else{
        labelconfirmarsenha.setAttribute("style","color: #272262")
        confirmarsenha.setAttribute("style","border-color: #272262")
        labelconfirmarsenha.innerHTML = "Confirmar senha"
        validconfirmarsenha = true;
    }
})

btn.addEventListener("click",()=>{
    let inputSenha = document.querySelector("#senha")
    
    if(inputSenha.getAttribute("type") == "password"){
    inputSenha.setAttribute("type","text")
    }
    else{
    inputSenha.setAttribute("type","password")
    }
}
)

btnConfirm.addEventListener("click",()=>{
    let inputConfirmSenha = document.querySelector("#confirmarsenha")
    
    if(inputConfirmSenha.getAttribute("type") == "password"){
    inputConfirmSenha.setAttribute("type","text")
    }
    else{
    inputConfirmSenha.setAttribute("type","password")
    }
}
)

cadastrar = function(){
    const nome = document.getElementById("Nome").value;
    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const complemento = document.getElementById("complemento").value;
    const senha = document.getElementById("senha").value;

    const usuarioParam = {
        nomeCompleto: nome,
        usuario: usuario,
        email: email,
        telefone: telefone,
        endereco: endereco,
        complemento: complemento,
        senha: senha

    }

    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/clientes/save";
    xhr.onload = sucesso;
    xhr.oneerror=
    xhr.open('POST',url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(usuarioParam));
}

sucesso = (data)=>{
   // let dadosHTML =' ';
  //  let dadosFilmes = JSON.parse(data.target.response)
  alert("Usuario cadastrado com sucesso");
  window.location.href = "/Login/HtmlLogin.html";  
}
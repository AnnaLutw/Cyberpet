let btn = document.querySelector("#vsenha")
let btnConfirm = document.querySelector("#vconfirmarsenha")

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

function CodRec(){
    window.location.pathname = '/Recuperaçãosenha/CodRec.html'
}

function TrocarSenha(){
    window.location.pathname = '/Recuperaçãosenha/Trocarsenha.html'
}
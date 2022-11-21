let btn = document.querySelector(".fa-eye")
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

logar = function(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const logar{
        usuario: usuario,
        senha: senha

    }

    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/clientes/save";
    xhr.onload = sucesso;
    xhr.oneerror=
    xhr.open('POST',url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(logar));
}


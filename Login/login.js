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
    let usuario = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;

    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/security/login";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
     
            let token = xhr.responseText;

            if(token == null || token == ""){
                alert("Usuario ou usenha incorretos");
            }
            else{
                localStorage.setItem ('token', token);
                window.location.href= "../home-page/Home_Page.html"
            }
        }


    }
    
    xhr.open('POST',url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("usuario=" + usuario + "&senha=" + senha);
}


logout = function(){
    localStorage.setItem ('cliente', undefined);
    window.location.href= "../home-page/Home_Page.html";

}
init = function(){
    let clienteString = localStorage.getItem('cliente');
    if(clienteString == undefined || clienteString == 'undefined'){
        document.getElementById('loginSpan').innerHTML=`
        
        <li class="nav-item" >
        <a style="color :white" class="nav-link" href="/Login/HtmlLogin.html">LOGIN</a>
      </li>`;
    }else{
        document.getElementById('loginSpan').innerHTML=` 
        <li class="nav-item dropdown" style="margin-left:30px ;">
            <a style="color :white" class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/img/logoUsuarioo.png" width="30px" alt="">
                <span id="loginUser"></span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">        
                <li><button class="btnOpenModal" onclick="openModal()"><a class="dropdown-item" href="#">PEDIDOS</a></li></button>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a onclick="logout()" class="dropdown-item" href="#">SAIR</a></li>
            </ul>
        </li>`;
    }
}

validaConta = function(){
    let clienteString = localStorage.getItem('cliente');
    if(clienteString == undefined || clienteString == 'undefined'){
        alert("Favor Realizar o login");
        window.location.href = '../Login/HtmlLogin.html';
        return false;
    }
   return true;
}
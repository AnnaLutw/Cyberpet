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

exibirPedidos = function(){
    let cliente = JSON.parse(localStorage.getItem('cliente'));
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/compras/findAll";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            dadosCompras = JSON.parse(xhr.responseText);
            if (dadosCompras.length > 0) {
                for (let i = 0; i < dadosCompras.length; i++) {
                    let dadosCompra =dadosCompras[i];
                    for(let k =0; k<dadosCompra.produtos.length; k++){
                        let produtoCompra= dadosCompra.produtos[k];
                        document.getElementById('infoCompras').innerHTML +=
                        `<tr>
                            <td style="width: 25%;">${produtoCompra.produto.nomeProduto}</td>
                            <td style="width: 25%;">${produtoCompra.produto.categoria}</td>
                            <td style="width: 25%;">${dadosCompra.id}</td>
                            <td style="width: 25%;">${produtoCompra.quantProduto}</td>
                        </tr>`
                    }            
                }
                
            }
            else if(dadosCompras.length == ""){
                carrinhoVazio();
            }
            else  {
                alert('Compra não encontrado')
            }
        }


    }
    xhr.oneerror =
    xhr.open('GET', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("auth-token", cliente.token);
    xhr.send();
   
}
function openModal() {
    modal.classList.add('active')
    exibirPedidos();
  }
  
  function closeModal() {
    modal.classList.remove('active')
  }
  
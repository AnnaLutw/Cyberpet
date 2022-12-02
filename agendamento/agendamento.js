mostrarUsuario = function(){
    
    let cliente = JSON.parse(localStorage.getItem('cliente'));
    if(cliente != null || cliente != ""){
        document.getElementById('loginUser').innerHTML = cliente.usuario;
    }
    else{
        document.getElementById('loginUser').innerHTML = '  <a style="color :white" class="nav-link" href="/Login/HtmlLogin.html">LOGIN</a>';
    }
}
abrirCarrinho = function(){
    window.location.href = "/carrinho/carrinho.html?carrinho=" ;
}
const modal = document.querySelector('.modal-container')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  modal.classList.remove('active')
}


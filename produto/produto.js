mostraProduto = function () {
   
    let idProduto = getParameterByName("idProduto");
   
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/produtos/findAll";
    xhr.onreadystatechange = function () {
        
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let dadosProdutos = JSON.parse(xhr.responseText);
            if (dadosProdutos.length > 0) {
                let produto = dadosProdutos.filter(p => p.id == idProduto).shift();
                preencheProdutos(produto);
            }
        }
        
    }
    xhr.oneerror =
    xhr.open('GET', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}
preencheProdutos = function(dadosProduto){
   
   document.querySelector('#card').innerHTML += `

<div class="container">
    <div class="row teste " style="justify-content: space-evenly;">
        <div class="imgProduto">
            <img class="card-img-top"  src="../home-page/${dadosProduto.imagePath}"  alt="Card image cap">
         </div>      
        <div class="cardInfo" style="width:30%; height:30%;  margin-top: 150px;"  >
            <div id="um" class="card-body">
                <b>  
                    <h2 class="card-title">${dadosProduto.nomeProduto}</h2>
                    <p  class="card-text">${dadosProduto.descricao} </p>
                </b>
                <p  class="card-text"> R$ ${dadosProduto.preco}</p> 
            </div>            
            <div class="btnCarrinho" onClick="adicionaCarrinho(${dadosProduto.id})">
                <a href="#" class="btn btn-warning"> <img src="/home-page/images1/logoCarrinho.jpg" width="30px"> + CARRINHO </a>
            </div>    
        </div>     
    </div>
</div>     
            `;
}
getParameterByName = function (name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
let dadosProdutos = [];
let carrinho = [];
adicionaCarrinho = function(idProduto){

    carrinho.push(idProduto);

    document.getElementById("quantItem").innerHTML = carrinho.length;
}
abrirCarrinho = function(){
    window.location.href = "/carrinho/carrinho.html?carrinho=" + carrinho;
}

mostrarUsuario = function(){
    
    let cliente = JSON.parse(localStorage.getItem('cliente'));
    if(cliente != null || cliente != ""){
        document.getElementById('loginUser').innerHTML = cliente.usuario;
    }
    else{
        document.getElementById('loginUser').innerHTML = '  <a style="color :white" class="nav-link" href="/Login/HtmlLogin.html">LOGIN</a>';
    }
}

const modal = document.querySelector('.modal-container')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  modal.classList.remove('active')
}


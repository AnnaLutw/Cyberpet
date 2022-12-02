mostraProdutosCachorro = function () {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/produtos/findAll";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            dadosProdutos = JSON.parse(xhr.responseText);

            if (dadosProdutos.length > 0) {

                for (let i = 0; i < dadosProdutos.length; i++) {
                    if (dadosProdutos[i].categoria == 'cachorro') {
                        preencheProdutos(dadosProdutos[i]);
                    }

                }
            }
            else {
                alert('Produto não encontrado')
            }
        }


    }
    xhr.oneerror =
        xhr.open('GET', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

}
mostraProdutosGato = function () {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/produtos/findAll";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            dadosProdutos = JSON.parse(xhr.responseText);

            if (dadosProdutos.length > 0) {

                for (let i = 0; i < dadosProdutos.length; i++) {
                    if (dadosProdutos[i].categoria == 'gato') {
                        preencheProdutos(dadosProdutos[i]);
                    }

                }
            }
            else {
                alert('Produto não encontrado')
            }
        }


    }
    xhr.oneerror =
        xhr.open('GET', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

}
mostraProdutosPeixe = function () {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/produtos/findAll";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            dadosProdutos = JSON.parse(xhr.responseText);

            if (dadosProdutos.length > 0) {

                for (let i = 0; i < dadosProdutos.length; i++) {
                    if (dadosProdutos[i].categoria == 'peixe') {
                        preencheProdutos(dadosProdutos[i]);
                    }

                }
            }
            else {
                alert('Produto não encontrado')
            }
        }


    }
    xhr.oneerror =
        xhr.open('GET', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

}


preencheProdutos = function (dadosProduto) {

    document.querySelector('.card_area1').innerHTML += `

    <div class="col-12 col-sm-12 col-md-3 col-lg-3 rounded card_pd text-center" style="width: 18rem;">
        <a href="/produto/produto.html"><img src="../home-page/${dadosProduto.imagePath}" class="card-img-top" alt="..." style="margin-top: 10px;">  </a>
        <div class="card-body">
            <h5 class="card-title">${dadosProduto.nomeProduto}</h5>
            <p class="card-text">${dadosProduto.descricao}</p>
            <p><strong>R$ ${dadosProduto.preco}</strong></p>
            <div class="btnCarrinho" onClick="adicionaCarrinho(${dadosProduto.id})">
            <a  class="btn btn-warning"> <img src="/home-page/images1/logoCarrinho.jpg" width="30px">+ CARRINHO</a>
            </div>
        </div>
    </div>`;

}

let dadosProdutos = [];
let carrinho = [];
adicionaCarrinho = function (idProduto) {

    carrinho.push(idProduto);

    document.getElementById("quantItem").innerHTML = carrinho.length;
}
abrirCarrinho = function () {
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


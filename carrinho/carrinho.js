mostrarProdutos = function (dadosProduto) {

    document.querySelector('#table').innerHTML += `
   
    <tr class="infoCarrinho">
        <td>
            <div class="card" style="width: 18rem;">              
                <img class="card-img-top" src="../home-page/${dadosProduto.imagePath}" alt="Card image cap">                
                <div class="card-body">
                    <h5 class="card-title">${dadosProduto.nomeProduto}</h5>
                    <p class="card-text">${dadosProduto.descricao}</p>
                </div>               
            </div>
        </td>
        <td>
            <button onClick="retiraItem('quantItem_${dadosProduto.id}')"> - </button>
            <label id="quantItem_${dadosProduto.id}"> 1</label>
            <button onClick="adcItem('quantItem_${dadosProduto.id}')"> + </button>
        </td>
        <td>
            R$ ${dadosProduto.preco}
        </td>
        <td>
            R$ <label id="precoSubtotal_${dadosProduto.id}"> ${dadosProduto.preco}</label>
        </td>
</tr>`;

}

carrinhoVazio = function(){ 
    document.querySelector('#table').innerHTML +=`
    <div class='card'>
    <div class="logo">
        <img src="/home-page/images1/logoCarrinho.jpg" width="justify-center" height="210">
    </div>

    <div class="justify-center">
        <hr>
    </div>
    
    <h1> CARRINHO VAZIO </h1>
        
</div>`

}


let produtosCarrinho = [];
carrega = function () {

    let itensCarrinho = getParameterByName("carrinho");
    let itensCarrinhoArray = itensCarrinho.split(',');


    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/produtos/findAll";
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            dadosProdutos = JSON.parse(xhr.responseText);
            if (dadosProdutos.length > 0) {
                for (let i = 0; i < dadosProdutos.length; i++) {
                    if (itensCarrinhoArray.indexOf(dadosProdutos[i].id.toString()) != -1) {
                        let produtoCarrinho = { idProduto: dadosProdutos[i].id, qtd: 1, produto: dadosProdutos[i] };
                        produtosCarrinho.push(produtoCarrinho);
                        mostrarProdutos(dadosProdutos[i]);
                    }
                }
                
            }
            else if(dadosProduto.length == ""){
                carrinhoVazio();
            }
            else  {
                alert('Produto não encontrado')
            }
        }


    }
    xhr.oneerror =
        xhr.open('GET', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

}

getParameterByName = function (name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

adcItem = function (id) {
    let idProduto = parseInt(id.replace("quantItem_", ""));
    let produtoCarrinho = produtosCarrinho.filter(p => p.idProduto == idProduto).shift();
    let valorAtual = document.getElementById("precoSubtotal_" + idProduto).innerHTML;
    valorAtual = parseFloat(valorAtual) + produtoCarrinho.produto.preco;
    document.getElementById("precoSubtotal_" + idProduto).innerHTML = valorAtual;

    document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML) + 1;
}

retiraItem = function (id) {
    let idProduto = parseInt(id.replace("quantItem_", ""));
    let produtoCarrinho = produtosCarrinho.filter(p => p.idProduto == idProduto).shift();
    let valorAtual = document.getElementById("precoSubtotal_" + idProduto).innerHTML;
    if (valorAtual > 0) {
        valorAtual = parseFloat(valorAtual) - produtoCarrinho.produto.preco;
        document.getElementById("precoSubtotal_" + idProduto).innerHTML = valorAtual;

        document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML) - 1;
    }

}
precoItem = function (preco) {
    let precoTotal = 0;

    if (adcItem()) {
        preco++;
    }
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

mudarPagamento = function(){
    if(validaConta()){
        localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho));   

        window.location.href = '/pagamento/index.html';
    }
    
    
}
mostrarProdutos = function(dadosProduto){

    document.querySelector('#table').innerHTML += `
   
    <tr class="infoCarrinho">
        <td>
            <div class="card" style="width: 18rem;">              
                <img class="card-img-top" src="../home-page/${dadosProduto.imagePath}" alt="Card image cap">                
                <div class="card-body">
                    <h5 class="card-title">${dadosProduto.nomeProduto}</h5>
                    <p class="card-text">${dadosProduto.descricao }</p>
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
let produtosCarrinho = [];
carrega = function(){

    let itensCarrinho = getParameterByName("carrinho");
    let itensCarrinhoArray = itensCarrinho.split(',');


    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/produtos/findAll";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
     
            dadosProdutos = JSON.parse(xhr.responseText);
            if(dadosProdutos.length> 0){
                for(let i=0; i<dadosProdutos.length; i++){    
                    if(itensCarrinhoArray.indexOf(dadosProdutos[i].id.toString()) != -1){
                        let produtoCarrinho= {idProduto:dadosProdutos[i].id,qtd:1,produto:dadosProdutos[i]};
                        produtosCarrinho.push(produtoCarrinho);
                        mostrarProdutos(dadosProdutos[i]);
                    }              
                   
                }               
            }
            else{
                alert('Produto não encontrado')
            }
        }


    }
    xhr.oneerror=
    xhr.open('GET',url, true);
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

adcItem = function(id){
    let idProduto = parseInt(id.replace("quantItem_", ""));
    let produtoCarrinho = produtosCarrinho.filter(p => p.idProduto == idProduto).shift();
    let valorAtual = document.getElementById("precoSubtotal_" + idProduto).innerHTML;
    valorAtual = parseFloat(valorAtual)+ produtoCarrinho.produto.preco;
    document.getElementById("precoSubtotal_" + idProduto).innerHTML = valorAtual;

    document.getElementById(id).innerHTML= parseInt(document.getElementById(id).innerHTML)+1;
}

retiraItem = function(id){
    let idProduto = parseInt(id.replace("quantItem_", ""));
    let produtoCarrinho = produtosCarrinho.filter(p => p.idProduto == idProduto).shift();
    let valorAtual = document.getElementById("precoSubtotal_" + idProduto).innerHTML;
    if(valorAtual > 0){
        valorAtual = parseFloat(valorAtual)-produtoCarrinho.produto.preco;
        document.getElementById("precoSubtotal_" + idProduto).innerHTML = valorAtual;
    
        document.getElementById(id).innerHTML= parseInt(document.getElementById(id).innerHTML)-1;
    }
   
}

precoItem = function(preco){
    let precoTotal = 0;

    if(adcItem()){
        preco++;
    }
}

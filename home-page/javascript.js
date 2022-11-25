const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

sucesso = (data)=>{
    // let dadosHTML =' ';
   //  let dadosFilmes = JSON.parse(data.target.response)

   alert("MOSTRANDO");
   debugger;
 }

let dadosProdutos = [];
let carrinho = [];

mostraProdutos = function(){
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/produtos/findAll";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
     
            dadosProdutos = JSON.parse(xhr.responseText);

            if(dadosProdutos.length> 0){

                for(let i=0; i<dadosProdutos.length; i++){
                    if(dadosProdutos[i].preco < 50){
                      preencheMelhoresProdutos(dadosProdutos[i]);                     
                    }
                    preencheProdutos(dadosProdutos[i]);
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

preencheMelhoresProdutos = function(dadosProduto){
    
        document.querySelector('.product-container').innerHTML += `
   
        <div class=\"product-card\">
             <div class=\"product-image\">
                <a href="#" onclick="abrirProduto()"><img  src=\" ${dadosProduto.imagePath } \" class=\"product-thumb\" alt="">   </a>          
            </div>
            <div class=\"product-info\">               
                <h2 class=\"product-brand\">${dadosProduto.nomeProduto }</h2>
                <p class=\"product-short-description\">${dadosProduto.descricao }</p>
                <span class=\"price\">R$ ${dadosProduto.preco }</span>
                <div class="btnCarrinho" onClick="adicionaCarrinho(${dadosProduto.id})">
                    <a  class="btn btn-warning"> <img src="/home-page/images1/logoCarrinho.jpg" width="30px"> + CARRINHO </a>
                </div>
            </div>
        </div> `;
                 
}

preencheProdutos = function(dadosProduto){
   
        document.querySelector('.card_area1').innerHTML += `
   
        <div class="col-12 col-sm-12 col-md-3 col-lg-3 rounded card_pd text-center" style="width: 18rem;">
            <a href="#" onclick="abrirProduto()"><img src="${dadosProduto.imagePath}" class="card-img-top" alt="..." style="margin-top: 10px;">  </a>
            <div class="card-body">
                <h5 class="card-title">${dadosProduto.nomeProduto }</h5>
                <p class="card-text">${dadosProduto.descricao }</p>
                <p><strong>R$ ${dadosProduto.preco }</strong></p>
                <div class="btnCarrinho" onClick="adicionaCarrinho(${dadosProduto.id})">
                    <a  class="btn btn-warning"> <img src="/home-page/images1/logoCarrinho.jpg" width="30px">+ CARRINHO</a>
                </div>
            </div>
        </div>`;
                 
}

adicionaCarrinho = function(idProduto){

    carrinho.push(idProduto);

    document.getElementById("quantItem").innerHTML = carrinho.length;
}
abrirCarrinho = function(){
    window.location.href = "/carrinho/carrinho.html?carrinho=" + carrinho;
}
abrirProduto = function(){
    window.location.href = "/produto/produto.html"
}




var pix = document.getElementById("pix");
var cartao = document.getElementById("cartao");


pix.addEventListener("click", function(){

    var container = document.getElementById("container");
    var container2 = document.getElementById("container2");

    if(container.style.display === "none" || container.style.display === ""){
        container.style.display = "block"
        container2.style.display = "none"
        console.log("container.style.display");
        
    }else{
        container.style.display = "none";
    }
})

cartao.addEventListener("click", function(){

    var container2 = document.getElementById("container2");
    var container = document.getElementById("container");


    if(container2.style.display === "none" || container2.style.display === ""){
        container2.style.display = "block"
        container.style.display = "none"
        console.log("container.style.display");
    }else{
        container2.style.display = "none";
    }
})
 const nome = document.getElementById("fname")
 const telefone = document.getElementById("lnum")
 const endereco = document.getElementById("endereco")
 const complemento = document.getElementById("complemento")
 const titularCartao = document.getElementById("tcartao")
 const numeroCartao = document.getElementById("ncartao")
 const cvv = document.getElementById("cvv")
 const mes = document.getElementById("mes")
 const ano = document.getElementById("ano")
 const pixId = document.getElementById("pixId");


 console.log(botao);
 console.log(nomee);

 var nomee = nome.value;

function verifica(){

    if(notEmpty(nome)  && notEmpty(telefone)  && notEmpty(endereco)  && notEmpty(titularCartao)
    && notEmpty(numeroCartao) && notEmpty(cvv) ){
            document.getElementById("botao").disabled = false;
    }
    else{
        botao.disabled = true;
    }  
}

function verificaPix(){

    if(notEmpty(nome)  && notEmpty(telefone)  && notEmpty(endereco)  && notEmpty(pixId)){
        document.getElementById("botao").disabled = false;
    }
    else{
        botao.disabled = true;
    } 

}

function notEmpty (componente){
    return componente != null && componente.value != undefined && componente.value != null && componente.value != '' ;
}


// Apenas letras  
nome.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});
titularCartao.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

const pagamento = document.getElementById("pagamento");
pagamento.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange";
  
    setTimeout(() => {
      event.target.style.color = "";
    }, 200);
  }, false);


  
  mostrarProdutos = function(dadosProduto){

    document.querySelector('.itemPagamento').innerHTML += `
   
    <td>
        <div class="card" style="width: 18rem;">              
            <img class="card-img-top" src="../home-page/${dadosProduto.imagePath}" alt="Card image cap">                
            <div class="card-body">
                <h5 class="card-title">${dadosProduto.nomeProduto}</h5>
                <p class="card-text">${dadosProduto.descricao }</p>
            </div>               
        </div>
      </td>`;
                 
}

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


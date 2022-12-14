
var pix = document.getElementById("pix");
var cartao = document.getElementById("cartao");


pix.addEventListener("click", function () {

    var container = document.getElementById("container");
    var container2 = document.getElementById("container2");

    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block"
        container2.style.display = "none"
        console.log("container.style.display");

    } else {
        container.style.display = "none";
    }
})

cartao.addEventListener("click", function () {

    var container2 = document.getElementById("container2");
    var container = document.getElementById("container");


    if (container2.style.display === "none" || container2.style.display === "") {
        container2.style.display = "block"
        container.style.display = "none"
        console.log("container.style.display");
    } else {
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



var nomee = nome.value;

function verifica() {

    if (notEmpty(nome) && notEmpty(telefone) && notEmpty(endereco) && notEmpty(titularCartao)
        && notEmpty(numeroCartao) && notEmpty(cvv)) {
        document.getElementById("botao").disabled = false;
    }
    else {
        botao.disabled = true;
    }
}

function verificaPix() {

    if (notEmpty(nome) && notEmpty(telefone) && notEmpty(endereco) && notEmpty(pixId)) {
        document.getElementById("botao").disabled = false;
    }
    else {
        botao.disabled = true;
    }

}

function notEmpty(componente) {
    return componente != null && componente.value != undefined && componente.value != null && componente.value != '';
}


// Apenas letras  
nome.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }
});
titularCartao.addEventListener("keypress", function (e) {
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


inicializarPagina = function(){
    let clienteString = localStorage.getItem('cliente');
    if(clienteString == undefined){
        alert("Favor Realizar o login");
        window.location.href = '../Login/HtmlLogin.html';
        return;
    }
    let cliente = JSON.parse(clienteString);
    document.getElementById('fname').value = cliente.nomeCompleto;
    document.getElementById('lnum').value = cliente.telefone;
    document.getElementById('endereco').value = cliente.endereco;
    document.getElementById('complemento').value = cliente.complemento;

    if(cliente != null || cliente != ""){
        document.getElementById('loginUser').innerHTML = cliente.usuario;
    }
    else{
        document.getElementById('loginUser').innerHTML = '  <a style="color :white" class="nav-link" href="/Login/HtmlLogin.html">LOGIN</a>';
    }
}
pesquisarProduto = function(e){
    console.log('Tetse');;
    e.preventDefault();
}
document.getElementById('formularioPesquisa').addEventListener('submit', pesquisarProduto);

pagar = function(){
    let cliente = JSON.parse(localStorage.getItem('cliente'));
    let produtosCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));

    let compra = {
        'endereco': cliente.endereco ,
        'complemento': cliente.complemento,
        'telefone': cliente.telefone,
        'usuario' :{'id': cliente.id},
        'produtos': []
        }

    for(let i=0; i<produtosCarrinho.length; i++){
        let produtoCarrinho = produtosCarrinho[i];
        compra.produtos.push({'produto':  {'id' : produtoCarrinho.idProduto}, 'quantProduto': produtoCarrinho.qtd, 'precoProduto': produtoCarrinho.produto.preco})
    }
    console.log(compra);   

    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/compras/save";
    xhr.onload = sucesso;
    xhr.oneerror=
    xhr.open('POST',url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("auth-token", cliente.token);
    xhr.send(JSON.stringify(compra));
}

sucesso = (data)=>{

   alert("Compra efetuada com sucesso");
   window.location.href = "/pagamento/pagamentoConcluido.html";  
 }

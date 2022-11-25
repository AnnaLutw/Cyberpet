mostraProduto()
    const params = new URLSearchParams(location.search)
    let id = params.get('id');
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/produtos/findAll";
    xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE){
        let dadosProdutos = JSON.parse(xhr.responseText);
        if(dadosProdutos.length> 0){
            preencheProdutos(dadosProdutos);
        }  
    }      
    else{
        alert('Filme não encontrado')
    }
    xhr.oneerror=
    xhr.open('GET',url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

preencheProdutos = function(dadosProduto){
   
   document.querySelector('#card').innerHTML += `

   <div class="container col-8">
    <div class="row teste ">
        <div class="col-lg-6">
            <img class="card-img-top" src="../home-page/${dadosProduto.imagePath}"  alt="Card image cap">
        </div>
        <div class="col-6">
            <div id="um" class="card-body">
                <b>  <h2 class="card-title">${dadosProduto.nomeProduto}</h2>
                  <p  class="card-text">${dadosProduto.descricao} </p></b>
                  <p  class="card-text">${dadosProduto.preco}</p> 
            </div>            
            <div class="btnCarrinho">
              <a href="#" class="btn btn-warning"> <img src="/home-page/images1/logoCarrinho.jpg" width="30px"> + CARRINHO </a>
            </div>    
        </div>
    </div>
  </div>     
            `;}
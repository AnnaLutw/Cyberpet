mostraProdutos = function(){
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/produtos/findAll";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
     
            let dadosProdutos = JSON.parse(xhr.responseText);

            if(dadosProdutos.length> 0){

                for(let i=0; i<dadosProdutos.length; i++){
                  
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

preencheProdutos = function(dadosProduto){
   
   document.querySelector('.container').innerHTML += `

   <div class="card">
                <div class="row">
                    <div class="col-4">
                        <img class="card-img-top" src="${dadosProduto.imagePath}" width="300px alt="Card image cap">
                    </div>
                    <div class="col-6">
                        <div id="um" class="card-body">
                            <b>  <h5 class="card-title">${dadosProduto.nomeProduto }</h5>
                               <p  class="card-text">${dadosProduto.descricao }</p> </b>
                        </div>
                        <ul class="list-group list-group-flush">
                            <b>   <li class="list-group-item">R$ ${dadosProduto.preco }</li> </b>
                        </ul>
                      
                    </div>
                </div>
            </div>    
            `;}
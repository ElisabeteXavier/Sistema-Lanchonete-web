function fazDelete(url) {
  let request = new XMLHttpRequest();
  request.open("DELETE", url, true);
  request.send();
  let form = document.getElementById("formulario");
  // form.reset();
  location.reload();

}

function confirmacao() {
  var x;
  var r = confirm("Confirma a exclusão?");
  if (r == true) {
    deletarProduto();
    x = "você pressionou OK!";
    
  } else {
    x = "Você pressionou Cancelar!";
  }
}

function deletarProduto() {
  event.preventDefault();
  var produtoId = document.getElementById("produto-atualizar").value;

  let url = `http://127.0.0.1:8080/produtos/${produtoId}`;

  fazDelete(url);
}

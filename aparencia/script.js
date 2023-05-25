const form = document.getElementById("form");
const username = document.getElementById("username");
const CPF = document.getElementById("CPF");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();

function checkInputs(){
    const usernameValue = username.value;
    const CPFValue = CPF.value;

    if(usernameValue == ""){
        setErrorFor(username, "O nome de usuario é obrigatorio!");
    }

    if(CPFValue == ""){
        setErrorFor(CPF, "O CPF do usuario é obrigatorio!");
    }
}
});

function setErrorFor(input, messager){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = messager;
    formControl.className = "form-control error";
}



function criar() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;



  var jsonData = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:8085/", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Dados criados: Nome: " + nome + ", CPF: " + cpf);
    }
  };
  xhr.send(jsonData);

}

  function recuperar() {
    var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8085/", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      console.log("Dados recuperados: ", response);
    }
  };
  xhr.send();


    console.log("Recuperar dados");
  }

/* Função para exibir os cadastros antigos
function exibirCadastros() {
  fetch('/cadastros')
    .then((response) => response.json())
    .then((data) => {
      cadastrosDiv.innerHTML = ''; // Limpar o conteúdo atual

      data.forEach((cadastro) => {
        const cadastroDiv = document.createElement('div');
        cadastroDiv.classList.add('cadastro');
        cadastroDiv.innerHTML = `
          <h3>${cadastro.nome}</h3>
          <p><strong>Nome:</strong> ${cadastro.nome}</p>
          <hr>
        `;

        cadastrosDiv.appendChild(cadastroDiv);
      });
    })
    .catch((error) => {
      console.error('Erro ao obter os cadastros:', error);
    });
}

// Atualizar a exibição dos cadastros antigos inicialmente
exibirCadastros();*/

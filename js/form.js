var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event)
{
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  //montar o paciente
  var paciente = obtemPacienteDoForm(form);    
  
  //verificando erros
  var erros = validaPaciente(paciente);  

  if(erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  // adicionando paciente na tabela
  adicionaPacienteNaTabela(paciente);  
  
  form.reset();
  //limpando mensagens de erro antes de exibir novo paciente
  var mensagemErro = document.querySelector("#mensagens-erro");
  mensagemErro.innerHTML = ""; 
  
});

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";                                     // limpa mensagens de erro anteriores
  erros.forEach(function(erro) {                         //erro é apenas um nome semântico para o parâmetro
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoForm(form){

  var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;  
}

function montaTr(paciente) {  
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente"); 

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr
}

function montaTd(dado, classe){  
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("Por favor, preencha o nome.");
  }
  
  if(paciente.gordura.length == 0){
    erros.push("Por favor, informe a porcentagem de gordura.");
  }

  if(paciente.peso.length == 0){
    erros.push("Por favor, informe o peso.");
  }

  if(paciente.altura.length == 0){
    erros.push("Por favor, informe a altura.");
  }

  if(!validaPeso(paciente.peso)){
    erros.push("O Peso é inválido");
  }
  if(!validaAltura(paciente.altura)){
    erros.push("A Altura é inválida");
  }

  return erros;
}
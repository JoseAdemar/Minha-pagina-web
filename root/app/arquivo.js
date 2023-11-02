let validaCampo = () => {
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let areatexto = document.getElementById('areatexto');
    
    if(nome.value === ''){
        this.aplicaEstiloCss(nome);
        exibirAlertaPersonalizado('O campo nome não pode estar vazio!');
        event.preventDefault();
    }else if(email.value === ''){
        this.aplicaEstiloCss(email);
        exibirAlertaPersonalizado('Email não pode estar vazio!');
        event.preventDefault();
    }else if(areatexto.value === ''){
        this.aplicaEstiloCss(areatexto)
        exibirAlertaPersonalizado('A área de texto não pode estar vazio');
        event.preventDefault();
    }else{
        exibirAlertaPersonalizadoSucesso('Mensagem enviada com sucesso!');
        event.preventDefault();
        this.limparCampos();
        this.aplicaEstiloCssLimpaFormulario(nome);
        this.aplicaEstiloCssLimpaFormulario(email);
        this.aplicaEstiloCssLimpaFormulario(areatexto);
    }
}


document.getElementById('formulario').addEventListener('submit', validaCampo);

document.getElementById('enviar').addEventListener('click', function (event) {
   
    event.preventDefault(); // Impede o comportamento padrão do botão (opcional, se necessário)
});

function aplicaEstiloCss(element){
    element.classList.add('estiloCustomizado');
}

function aplicaEstiloCssLimpaFormulario(element){
    element.classList.add('estiloCustomizado-formulario');
}

function exibirAlertaPersonalizado(mensagem) {
    // Crie um elemento de div para exibir a mensagem
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alerta-personalizado';
    alertDiv.textContent = mensagem;
  
    // Adicione o elemento de alerta à página
    document.body.appendChild(alertDiv);
  
    // Remova o elemento de alerta após algum tempo (opcional)
    setTimeout(function () {
      document.body.removeChild(alertDiv);
    }, 4000); // Remover após 4 segundos (ajuste conforme necessário)
  }

  function exibirAlertaPersonalizadoSucesso(mensagem) {
    // Crie um elemento de div para exibir a mensagem
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alerta-personalizado-sucesso';
    alertDiv.textContent = mensagem;
  
    // Adicione o elemento de alerta à página
    document.body.appendChild(alertDiv);
  
    // Remova o elemento de alerta após algum tempo (opcional)
    setTimeout(function () {
      document.body.removeChild(alertDiv);
    }, 4000); // Remover após 4 segundos (ajuste conforme necessário)
  }

  function limparCampos(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('areatexto').value = '';
  }

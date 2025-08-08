document.getElementById("submitButton").addEventListener("click", registrarCliente);

async function registrarCliente(event) {
    event.preventDefault();
    const cpf_cliente = document.getElementById("input1").value;
    const nome_cliente = document.getElementById("input2").value;
    const dataNasc_cliente = document.getElementById("input3").value;
    const cep_cliente = document.getElementById("input4").value;
    const especificacaoEndereco_cliente = document.getElementById("input5").value;
    const telefone_cliente = document.getElementById("input6").value;
    const email_cliente = document.getElementById("input7").value;
    const div = document.getElementById("div2")
  try {
    const resposta = await fetch('http://localhost:3000/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpf_cliente,
        nome_cliente,
        dataNasc_cliente,
        cep_cliente,
        especificacaoEndereco_cliente,
        telefone_cliente,
        email_cliente
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      div.innerText = '✅ Usuário registrado com sucesso!' + '\n' + 'Detalhes:' + dados
      location.reload();
    } else {
      switch (resposta.status) {
        case 400:
          div.innerText = '⚠️ Requisição inválida. Verifique os dados enviados.'
          break;
        case 404:
          div.innerText = '❌ Usuário não encontrado.'
          break;
        case 500:
          div.innerText = '💥 Erro interno no servidor. Tente novamente mais tarde.'
          break;
        default:
          div.innerText = `❗ Erro inesperado: ${resposta.status}` + "\n" + 'CPF ja cadastrado.'
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
  }
}

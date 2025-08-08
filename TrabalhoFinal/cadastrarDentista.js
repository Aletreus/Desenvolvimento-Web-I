document.getElementById("submitButton").addEventListener("click", registrarDentista);


async function registrarDentista() {
  const nome_dentista = document.getElementById("input1").value;
  const especializacao = document.getElementById("input2").value;
  const cpf_dentista = document.getElementById("input3").value;
  const cro = document.getElementById("input4").value;
  const telefone_dentista = document.getElementById("input5").value;
  const email_dentista = document.getElementById("input6").value;
  const cep_dentista = document.getElementById("input7").value;
  const especificacaoEndereco_dentista = document.getElementById("input8").value;
  const div = document.getElementById("div2");
  try {
    const resposta = await fetch('http://localhost:3000/cadastro-dentista', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome_dentista,
        especializacao,
        cpf_dentista,
        cro,
        telefone_dentista,
        email_dentista,
        cep_dentista,
        especificacaoEndereco_dentista
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      div.innerText = '✅ Dentista registrado com sucesso!' + '\n' + 'Detalhes:' + dados
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
          div.innerText = `❗ Erro inesperado: ${resposta.status}`
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar usuário:', erro.message);
  }
}

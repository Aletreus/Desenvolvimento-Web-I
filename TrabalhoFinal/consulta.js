document.getElementById("submitButton").addEventListener("click", registrarConsulta);

async function registrarConsulta(event) {
    event.preventDefault();
  const cliente_cpfCliente = document.getElementById("input1").value;
  const doutor_idDoutor = document.getElementById("input2").value;
  const procedimento_agendamento = document.getElementById("input3").value;
  const dataMarcado_agendado = document.getElementById("input4").value;
  const horaMarcada_agendamento = document.getElementById("input5").value;
  const valorTo_agendamentos = document.getElementById("input6").value;
  //const div = document.getElementById("div2")
  try {
    const resposta = await fetch('http://localhost:3000/consulta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cliente_cpfCliente,
        doutor_idDoutor,
        procedimento_agendamento,
        dataMarcado_agendado,
        horaMarcada_agendamento,
        valorTo_agendamentos
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      //div.innerText = '✅ Consulta marcada com sucesso!' + '\n' + 'Detalhes:' + dados
    } else {
      switch (resposta.status) {
        case 400:
          //div.innerText = '⚠️ Requisição inválida. Verifique os dados enviados.'
          break;
        case 404:
          //div.innerText = '❌ Usuário não encontrado.'
          break;
        case 500:
          //div.innerText = '💥 Erro interno no servidor. Tente novamente mais tarde.'
          break;
        default:
          //div.innerText = `❗ Erro inesperado: ${resposta.status}`
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar marcar consulta:', erro.message);
  }
}

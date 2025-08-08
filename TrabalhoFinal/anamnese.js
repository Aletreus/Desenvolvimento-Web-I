document.getElementById("submitButton").addEventListener("click", registrarAnamnese);

async function registrarAnamnese(event) {
  event.preventDefault();

  const cliente_cpfCliente = document.getElementById("input1").value;
  const esta_em_tratamento_medico = document.getElementById("input2").value;
  const motivo_tratamento_medico = document.getElementById("input3").value;
  const gravidez = document.getElementById("input4").value;
  const dieta = document.getElementById("input5").value;
  const diabetes = document.getElementById("input6").value;
  const alergias = document.getElementById("input7").value;
  const quais_alergias = document.getElementById("input8").value;
  const febre_reumatica = document.getElementById("input9").value;
  const problema_de_coagulacao = document.getElementById("input10").value;
  const cardiaco = document.getElementById("input11").value;
  const hemorragicos = document.getElementById("input12").value;
  const problemas_com_anestesias = document.getElementById("input13").value;
  const alergia_a_medicamentos = document.getElementById("input14").value;
  const quais_medicamentos = document.getElementById("input15").value;
  const hepatite = document.getElementById("input16").value;
  const quanto_tempo_faz = document.getElementById("input17").value;
  const hiv = document.getElementById("input18").value;
  const drogas = document.getElementById("input19").value;
  const droga_qual = document.getElementById("input20").value;
  const fumante = document.getElementById("input21").value;
  const ja_fumou = document.getElementById("input22").value;
  const pressao_arterial = document.getElementById("input23").value;
  const problema_respiratorio = document.getElementById("input24").value;
  const qual_respiratorio = document.getElementById("input25").value;
  const doenca_familiar = document.getElementById("input26").value;
  const observacao = document.getElementById("input27").value;
  const doutor_idDoutor = document.getElementById("input28").value;

  //const div = document.getElementById("verAnamnese");
  try {
    const resposta = await fetch('http://localhost:3000/cadastro-anamnese', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cliente_cpfCliente,
        esta_em_tratamento_medico,
        motivo_tratamento_medico,
        gravidez,
        dieta,
        diabetes,
        alergias,
        quais_alergias,
        febre_reumatica,
        problema_de_coagulacao,
        cardiaco,
        hemorragicos,
        problemas_com_anestesias,
        alergia_a_medicamentos,
        quais_medicamentos,
        hepatite,
        quanto_tempo_faz,
        hiv,
        drogas,
        droga_qual,
        fumante,
        ja_fumou,
        pressao_arterial,
        problema_respiratorio,
        qual_respiratorio,
        doenca_familiar,
        observacao,
        doutor_idDoutor
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      //div.innerText = '✅ Anamnese registrada com sucesso!' + '\n' + 'Detalhes:' + JSON.stringify(dados);
    } else {
      switch (resposta.status) {
        case 400:
          //div.innerText = '⚠️ Requisição inválida. Verifique os dados enviados.';
          break;
        case 404:
          //div.innerText = '❌ Usuário não encontrado.';
          break;
        case 500:
          //div.innerText = '💥 Erro interno no servidor. Tente novamente mais tarde.';
          break;
        default:
          //div.innerText = `❗ Erro inesperado: ${resposta.status}`;
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro ao tentar registrar consulta:', erro.message);
  }
}

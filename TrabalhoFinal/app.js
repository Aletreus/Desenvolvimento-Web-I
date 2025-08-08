// Frontend JavaScript

// Função para registrar um novo usuário
async function registrarCliente() {
  const cpf_cliente = prompt("Digite o CPF");
        const nome_cliente = prompt("Digite o nome");
        const dataNasc_cliente = prompt("Digite a data de nascimento (DD/MM/AAAA)");
        const cep_cliente = prompt("Digite o CEP");
        const especificacaoEndereco_cliente = prompt("Digite a especificação do endereço");
        const telefone_cliente = prompt("Digite o telefone");
        const email_cliente = prompt("Digite o email");
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
async function registrarDentista() {
  const nome_dentista = prompt("Digite o Nome: ");
  const especializacao = prompt("Digite a especialização");
  const cpf_dentista = prompt("Digite o CPF: ");
  const cro = prompt("Digite o CRO: ");
  const telefone_dentista = prompt("Digite o Telefone: ");
  const email_dentista = prompt("Digite o Email: ");
  const cep_dentista = prompt("Digite o CEP: ");
  const especificacaoEndereco_dentista = prompt("Digite o Ponto de Referência: ");
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

// Função para fazer login
/*async function fazerLogin(cpf_cliente, senha) {
  try {
    const resposta = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cpf_cliente,
        senha
      })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('✅ Login realizado com sucesso!');
      console.log('Bem-vindo,', dados.user.nome_cliente || cpf_cliente); // Mostra o nome do cliente
    } else {
      switch (resposta.status) {
        case 400:
          console.warn('⚠️ Requisição inválida. Verifique os dados enviados.');
          break;
        case 401:
          console.warn('🔒 CPF ou senha incorretos.');
          break;
        case 404:
          console.warn('❌ Usuário não encontrado.');
          break;
        case 500:
          console.warn('💥 Erro interno no servidor. Tente novamente mais tarde.');
          break;
        default:
          console.warn(`❗ Erro inesperado: ${resposta.status}`);
      }

      console.debug('Detalhes do erro:', dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
}
*/

async function buscarCliente() {
  const div = document.getElementById("div2");
  const cpf_cliente = prompt("Digite o CPF do Cliente.");
  try {
    const resposta = await fetch('http://localhost:3000/buscar-usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cpf_cliente })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      //div.innerText = ('Usuário encontrado.');
      div.innerText = 
    'Nome: ' + dados.user.nome_cliente + '\n' +
    'Data de Nascimento: ' + dados.user.dataNasc_cliente + '\n' +
    'CEP: ' + dados.user.cep_cliente + '\n' +
    'Endereço: ' + dados.user.especificacaoEndereco_cliente + '\n' +
    'Telefone: ' + dados.user.telefone_cliente + '\n' +
    'Email: ' + dados.user.email_cliente;

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
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
}
async function buscarDentista() {
  const div = document.getElementById("div2");
  const idDentista = prompt("Digite o id do dentista.");
  try {
    const resposta = await fetch('http://localhost:3000/buscar-dentista', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idDentista })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      div.innerText = 'Usuário encontrado.' + '\n' + 'ID: ' + dados.user.idDentista + '\n' + 'Nome:' + dados.user.nome_dentista + '\n' + 'Especialização: ' + dados.user.especializacao + '\n' + 'CPF: ' + dados.user.cpf_dentista + '\n' + 'CRO: ' + dados.user.cro + '\n' + 'Telefone: ' + dados.user.telefone_dentista + '\n' + 'Email: ' + dados.user.email_dentista + '\n' + 'CEP: ' + dados.user.cep_dentista + '\n' + 'Ponto de Referência: ' + dados.user.especificacaoEndereco_dentista
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
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
}
async function excluirCliente() {
  const cpf_cliente = prompt("Cpf do cliente: ")
  const div = document.getElementById("div2");
  try {
    const resposta = await fetch('http://localhost:3000/excluir-usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cpf_cliente })
    });

    const dados = await resposta.json();
    if(dados.ok){
      div.innerText = 'Cliente excluido.'
    }else {
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
          div.innerText = `❗ Erro inesperado: ${resposta.status}` + '\n' + 'Cliente inexistente.'
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
   } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
  location.reload();
}

async function excluirDentista() {
  const idDentista = prompt("Id do Dentista: ")
  const div = document.getElementById("div2")
  try {
    const resposta = await fetch('http://localhost:3000/excluir-dentista', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idDentista })
    });

    const dados = await resposta.json();
    if(dados.ok){
      div.innerText = 'Dentista excluido.'
    }else {
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
          div.innerText = `❗ Erro inesperado: ${resposta.status}` + '\n' + 'Dentista inexistente.'
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
   } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
  location.reload();
}

// Menu de opções

async function menu() {
  let exit = false;

  while (!exit) {
    const option = prompt("Escolha uma opção:\n1 - Buscar Cliente\n2 - Cadastrar novo usuário\n3 - Buscar Dentista\n4 - Cadastrar novo Dentista\n5 - Excluir Cliente\n6 - Excluir Dentista 7- Sair");

    switch (option) {
      case "1":
        const cpf_cliente1 = prompt("Digite o CPF do Cliente.");
        await buscarCliente(cpf_cliente1);
        break;
      case "2":
        const cpf_cliente2 = prompt("Digite o CPF");
        const nome_cliente2 = prompt("Digite o nome");
        const dataNasc_cliente2 = prompt("Digite a data de nascimento (DD/MM/AAAA)");
        const cep_cliente2 = prompt("Digite o CEP");
        const especificacaoEndereco_cliente2 = prompt("Digite a especificação do endereço");
        const telefone_cliente2 = prompt("Digite o telefone");
        const email_cliente2 = prompt("Digite o email");
        await registrarCliente(cpf_cliente2, nome_cliente2, dataNasc_cliente2, cep_cliente2, especificacaoEndereco_cliente2, telefone_cliente2, email_cliente2);
        break;
      case "3":
        const idDentista = prompt("Digite o ID do Dentista.")
        await buscarDentista(idDentista);
        break;
      case "4":
        const nome_dentista1 = prompt("Digite o Nome: ");
        const especializacao1 = prompt("Digite a especialização");
        const cpf_dentista1 = prompt("Digite o CPF: ");
        const cro1 = prompt("Digite o CRO: ");
        const telefone_dentista1 = prompt("Digite o Telefone: ");
        const email_dentista1 = prompt("Digite o Email: ");
        const cep_dentista1 = prompt("Digite o CEP: ");
        const especificacaoEndereco_dentista1 = prompt("Digite o Ponto de Referência: ");
        registrarDentista(nome_dentista1, especializacao1, cpf_dentista1, cro1, telefone_dentista1, email_dentista1, cep_dentista1, especificacaoEndereco_dentista1);
        break;
      case "5":
        const cpf_cliente3 = prompt("Digite o CPF do cliente:");
        excluirCliente(cpf_cliente3);
        break;
      case "6":
        const idDentista2 = prompt("Digite o id do dentista:");
        excluirDentista(idDentista2);
        break;
      case "7":
        console.log("Saindo...");
        exit = true;
        break;
      default:
        console.log("Opção inválida.");
        break;
    }
  }
}

async function registrarConsulta() {
  const cliente_cpfCliente = prompt("CPF do cliente: ")
  const doutor_idDoutor = prompt("id do Doutor: ")
  const procedimento_agendamento = prompt("Tipo de procedimento da consulta: ")
  const dataMarcado_agendado = prompt("Data da consulta --/--/--: ")
  const horaMarcada_agendamento = prompt("Hora da consulta: ")
  const valorTo_agendamentos = prompt("Valor da consulta: ")
  const div = document.getElementById("div2")
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
      div.innerText = '✅ Consulta marcada com sucesso!' + '\n' + 'Detalhes:' + dados
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
    console.error('🚫 Erro ao tentar marcar consulta:', erro.message);
  }
}

async function excluirConsulta() {
  const idConsulta = prompt("Id da consulta: ")
  const div = document.getElementById("div2")
  try {
    const resposta = await fetch('http://localhost:3000/excluir-consulta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idConsulta })
    });

    const dados = await resposta.json();
    if(dados.ok){
      div.innerText = 'Consulta desmarcada.'
    }else {
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
          div.innerText = `❗ Erro inesperado: ${resposta.status}` + '\n' + 'Consulta inexistente.'
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
    

   } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
  }
  location.reload();
}

async function mostrarTodosClientes() {
  const div = document.getElementById('visualizar');
  
  try {
    const resposta = await fetch('http://localhost:3000/usuarios', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
      
    });

    const dados = await resposta.json();

    if (resposta.ok) {
       div.innerHTML= '';
       const h1 = document.createElement('h1');
        h1.textContent = `Clientes Cadastrados: `
        div.appendChild(h1);
      dados.forEach(cliente => {
        const p = document.createElement('p');
        const divisao = document.createElement('p');
        p.textContent = `Cliente: ${cliente.nome_cliente} - CPF: ${cliente.cpf_cliente} - Nascimento: ${cliente.dataNasc_cliente} - CEP: ${cliente.cep_cliente} - Ponto Referência: ${cliente.especificacaoEndereco_cliente} ${cliente.telefone_cliente} - Email: ${cliente.email_cliente}`;
        divisao.textContent = `==============================================================`
        div.appendChild(p);
        div.appendChild(divisao);
      });

    } else {
      switch (resposta.status) {
        case 400:
          div.innerText = '⚠️ Requisição inválida. Verifique os dados enviados.';
          break;
        case 404:
          div.innerText = '❌ Usuário não encontrado.';
          break;
        case 500:
          div.innerText = '💥 Erro interno no servidor. Tente novamente mais tarde.';
          break;
        default:
          div.innerText = `❗ Erro inesperado: ${resposta.status}`;
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
    div.innerText = '🚫 Erro de conexão com o servidor.';
  }
}

async function mostrarTodosDentistas() {
  const div = document.getElementById('visualizar');

  try {
    const resposta = await fetch('http://localhost:3000/dentistas', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
      
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      div.innerHTML = '';
      const h1 = document.createElement('h1');
      const divisao = document.createElement('p');
        h1.textContent = `Dentistas Cadastrados: `
        div.appendChild(h1);
      dados.forEach(dentistas => {
        const p = document.createElement('p');
        p.textContent = `Dentista: ${dentistas.nome_dentista} - Especialização: ${dentistas.especializacao} - CPF: ${dentistas.cpf_dentista} - CRO: ${dentistas.cro} - Telefone: ${dentistas.telefone_dentista} - Email: ${dentistas.email_dentista} - CEP: ${dentistas.cep_dentista} - Ponto Referência: ${dentistas.especificacaoEndereco_dentista} - ID: ${dentistas.idDentista}`;
        divisao.textContent = `==============================================================`
        div.appendChild(p);
        div.appendChild(divisao);
      });

    } else {
      switch (resposta.status) {
        case 400:
          div.innerText = '⚠️ Requisição inválida. Verifique os dados enviados.';
          break;
        case 404:
          div.innerText = '❌ Usuário não encontrado.';
          break;
        case 500:
          div.innerText = '💥 Erro interno no servidor. Tente novamente mais tarde.';
          break;
        default:
          div.innerText = `❗ Erro inesperado: ${resposta.status}`;
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
    div.innerText = '🚫 Erro de conexão com o servidor.';
  }
}

async function mostrarTodasConsultas() {
  const div = document.getElementById('visualizar');

  try {
    const resposta = await fetch('http://localhost:3000/consultas', {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'
      }
      
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      div.innerHTML = '';
       const h1 = document.createElement('h1');
       const divisao = document.createElement('p');
        h1.textContent = `Consultas Marcadas: `
        div.appendChild(h1);
      dados.forEach(agendamentos => {
        const p = document.createElement('p');
        p.textContent = `ID: ${agendamentos.idConsulta} Cliente: ${agendamentos.cliente_cpfCliente} - Doutor: ${agendamentos.doutor_idDoutor} - Procedimento: ${agendamentos.procedimento_agendamento} - Data: ${agendamentos.dataMarcado_agendado} - Hora: ${agendamentos.horaMarcada_agendamento} - Valor: ${agendamentos.valorTo_agendamentos}`;
        divisao.textContent = `==============================================================`
        div.appendChild(p);
        div.appendChild(divisao);
      });

    } else {
      switch (resposta.status) {
        case 400:
          div.innerText = '⚠️ Requisição inválida. Verifique os dados enviados.';
          break;
        case 404:
          div.innerText = '❌ Usuário não encontrado.';
          break;
        case 500:
          div.innerText = '💥 Erro interno no servidor. Tente novamente mais tarde.';
          break;
        default:
          div.innerText = `❗ Erro inesperado: ${resposta.status}`;
      }
      console.debug('Detalhes do erro:', dados.error || dados.mensagem || dados);
    }
  } catch (erro) {
    console.error('🚫 Erro de conexão com o servidor:', erro.message);
    div.innerText = '🚫 Erro de conexão com o servidor.';
  }
}



//menu();

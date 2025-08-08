// server.js

// Dependências
const cors = require('cors');
const express = require('express');
const app = express();
const db = require('./db');  // Seu arquivo de conexão com o banco de dados
require('dotenv').config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Rota GET - Listar usuários
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM cliente', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
app.get('/dentistas', (req, res) => {
  db.query('SELECT * FROM dentistas', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});
app.get('/consultas', (req, res) => {
  db.query('SELECT * FROM agendamentos', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Rota POST - Login usuário
app.post('/usuarios', (req, res) => {
  const { cpf_cliente, senha } = req.body;

  if (!cpf_cliente || !senha) {
    return res.status(400).json({ error: 'CPF e senha são obrigatórios' });
  }

  const sql = 'SELECT * FROM cliente WHERE cpf_cliente = ? AND senha = ?';
  db.query(sql, [cpf_cliente, senha], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Login bem-sucedido
    const user = results[0];
    res.json({
      message: 'Login bem-sucedido',
      user: {
        cpf_cliente: user.cpf_cliente,
        nome_cliente: user.nome_cliente,
        telefone_cliente: user.telefone_cliente,
        email_cliente: user.email_cliente
      }
    });
  });
});

// Rota POST - Cadastro de novos usuários
app.post('/cadastro', (req, res) => {
  const {
    cpf_cliente,
    nome_cliente,
    dataNasc_cliente,
    cep_cliente,
    especificacaoEndereco_cliente,
    telefone_cliente,
    email_cliente
  } = req.body;

  // Verificar se todos os campos estão presentes
  if (!cpf_cliente || !nome_cliente || !dataNasc_cliente || !cep_cliente || !telefone_cliente || !email_cliente) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const sql = `INSERT INTO cliente 
    (cpf_cliente, nome_cliente, dataNasc_cliente, cep_cliente, especificacaoEndereco_cliente, telefone_cliente, email_cliente) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [cpf_cliente, nome_cliente, dataNasc_cliente, cep_cliente, especificacaoEndereco_cliente, telefone_cliente, email_cliente], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'CPF já está cadastrado' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Usuário registrado com sucesso', id: result.insertId });
  });
});

app.post('/cadastro-dentista', (req, res) => {
  const {
    nome_dentista,
    especializacao,
    cpf_dentista,
    cro,
    telefone_dentista,
    email_dentista,
    cep_dentista,
    especificacaoEndereco_dentista
  } = req.body;

  if (
    !nome_dentista ||
    !especializacao ||
    !cpf_dentista ||
    !cro ||
    !telefone_dentista ||
    !email_dentista ||
    !cep_dentista ||
    especificacaoEndereco_dentista === undefined
  ) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const sql = `INSERT INTO dentistas 
    (nome_dentista, especializacao, cpf_dentista, cro, telefone_dentista, email_dentista, cep_dentista, especificacaoEndereco_dentista) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [
      nome_dentista,
      especializacao,
      cpf_dentista,
      cro,
      telefone_dentista,
      email_dentista,
      cep_dentista,
      especificacaoEndereco_dentista
    ],
    (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).json({ error: 'CPF já está cadastrado' });
        }
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({ message: 'Usuário registrado com sucesso', id: result.insertId });
    }
  );
});

// Rota POST - Buscar usuário por CPF (sem senha)
app.post('/buscar-usuario', (req, res) => {
  const { cpf_cliente } = req.body;

  if (!cpf_cliente) {
    return res.status(400).json({ error: 'CPF é obrigatório' });
  }

  const sql = 'SELECT * FROM cliente WHERE cpf_cliente like ?';
  db.query(sql, [cpf_cliente], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const user = results[0];
    res.json({
      message: 'Usuário encontrado',
      user: {
        cpf_cliente: user.cpf_cliente,
        nome_cliente: user.nome_cliente,
        dataNasc_cliente: user.dataNasc_cliente,
        cep_cliente: user.cep_cliente,
        especificacaoEndereco_cliente: user.especificacaoEndereco_cliente,
        telefone_cliente: user.telefone_cliente,
        email_cliente: user.email_cliente
      }
    });
  });
});

app.post('/buscar-dentista', (req, res) => {
  const { idDentista } = req.body;

  if (!idDentista) {
    return res.status(400).json({ error: 'ID é obrigatório' });
  }

  const sql = 'SELECT * FROM dentistas WHERE idDentista = ?';
  db.query(sql, [idDentista], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const user = results[0];
    res.json({
      message: 'Dentista encontrado',
      user: {
        idDentista: user.idDentista,
        nome_dentista: user.nome_dentista,
        especializacao: user.especializacao,
        cpf_dentista: user.cpf_dentista,
        cro: user.cro,
        telefone_dentista: user.telefone_dentista,
        email_dentista: user.email_dentista,
        cep_dentista: user.cep_dentista,
        especificacaoEndereco_dentista: user.especificacaoEndereco_dentista
      }
    });
  });
});

app.post('/excluir-usuario', (req, res) => {
  const { cpf_cliente } = req.body;

  if (!cpf_cliente) {
    return res.status(400).json({ error: 'ID é obrigatório' });
  }

  const sql = 'DELETE FROM cliente WHERE cpf_cliente = ?';
  db.query(sql, [cpf_cliente], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const user = results[0];
    res.json({
      message: 'Cliente excluido',
      user: {
      }
    });
  });
});

app.post('/excluir-dentista', (req, res) => {
  const { idDentista } = req.body;

  if (!idDentista) {
    return res.status(400).json({ error: 'ID é obrigatório' });
  }

  const sql = 'DELETE FROM dentistas WHERE idDentista = ?';
  db.query(sql, [idDentista], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const user = results[0];
    res.json({
      message: 'Dentista excluido',
      user: {
      }
    });
  });
});

app.post('/consulta', (req, res) => {
  const {
    cliente_cpfCliente,
    doutor_idDoutor,
    procedimento_agendamento,
    dataMarcado_agendado,
    horaMarcada_agendamento,
    valorTo_agendamentos
  } = req.body;

  // Verificar se todos os campos estão presentes
  if (!cliente_cpfCliente || !doutor_idDoutor || !procedimento_agendamento || !dataMarcado_agendado || !horaMarcada_agendamento || !valorTo_agendamentos) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  const sql = `INSERT INTO agendamentos 
    (cliente_cpfCliente, doutor_idDoutor, procedimento_agendamento, dataMarcado_agendado, horaMarcada_agendamento, valorTo_agendamentos) 
    VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(sql, [cliente_cpfCliente, doutor_idDoutor, procedimento_agendamento, dataMarcado_agendado, horaMarcada_agendamento, valorTo_agendamentos], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'CPF já está cadastrado' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Consulta registrada com sucesso', id: result.insertId });
  });
});

app.post('/excluir-consulta', (req, res) => {
  const { idConsulta } = req.body;

  if (!idConsulta) {
    return res.status(400).json({ error: 'ID é obrigatório' });
  }

  const sql = 'DELETE FROM agendamentos WHERE idConsulta = ?';
  db.query(sql, [idConsulta], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'consulta não encontrada' });
    }

    const user = results[0];
    res.json({
      message: 'Consulta desmarcada',
      user: {
      }
    });
  });
});

app.post('/cadastro-anamnese', (req, res) => {
  const {
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
  } = req.body;

  const sql = `INSERT INTO anamnese 
    (cliente_cpfCliente,
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
    doutor_idDoutor) 
    VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

  db.query(sql, [cliente_cpfCliente,
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
    doutor_idDoutor], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ error: 'CPF já está cadastrado' });
      }
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: 'Usuário registrado com sucesso', id: result.insertId });
  });
});


// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

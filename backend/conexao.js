const mysql = require('mysql2');

// 🔐 ATENÇÃO: Substitua 'SUA_SENHA_AQUI' pela senha do seu MySQL local.
const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SUA_SENHA_AQUI', // 👈 Insira sua senha aqui
  database: 'organizador_tarefas'
});

conexao.connect(erro => {
  if (erro) {
    console.error('Erro ao conectar ao banco de dados:', erro);
    return;
  }
  console.log('Conexão com banco de dados MySQL estabelecida com sucesso!');
});

module.exports = conexao;

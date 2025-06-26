const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ Rota simples para verificar o funcionamento da API
app.get('/', (req, res) => {
  res.send('API de Tarefas funcionando. BackEnd ok. Acesse o FrontEnd! :)');
});

// Caminho do arquivo JSON que guarda as tarefas
const tarefasFile = path.join(__dirname, 'tarefas.json');

// Utilitário: Lê o arquivo tarefas.json e retorna como array
function lerTarefas() {
  try {
    const data = fs.readFileSync(tarefasFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Erro ao ler tarefas:', err);
    return [];
  }
}

// Utilitário: Salva o array de tarefas no arquivo tarefas.json
function salvarTarefas(tarefas) {
  try {
    fs.writeFileSync(tarefasFile, JSON.stringify(tarefas, null, 2));
  } catch (err) {
    console.error('Erro ao salvar tarefas:', err);
  }
}

// Rota GET - Retorna todas as tarefas
app.get('/api/tarefas', (req, res) => {
  const tarefas = lerTarefas();
  res.json(tarefas);
});

// Rota POST - Adiciona nova tarefa
app.post('/api/tarefas', (req, res) => {
  const novaTarefa = { ...req.body, concluida: false };

  if (!novaTarefa.descricao || !novaTarefa.horario || novaTarefa.prioridade == null) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  const tarefas = lerTarefas();
  tarefas.push(novaTarefa);
  salvarTarefas(tarefas);

  res.status(201).json(novaTarefa);
});

// Rota DELETE - Exclui uma tarefa pelo índice
app.delete('/api/tarefas/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const tarefas = lerTarefas();

  if (index >= 0 && index < tarefas.length) {
    tarefas.splice(index, 1);
    salvarTarefas(tarefas);
    res.sendStatus(204);
  } else {
    res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
});

// Rota PATCH - Alterna status de conclusão da tarefa
app.patch('/api/tarefas/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const tarefas = lerTarefas();

  if (index >= 0 && index < tarefas.length) {
    tarefas[index].concluida = !tarefas[index].concluida;
    salvarTarefas(tarefas);
    res.json(tarefas[index]);
  } else {
    res.status(404).json({ erro: 'Tarefa não encontrada' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

<template>
  <div id="app" class="container mt-5">
    <header class="text-center mb-4">
      <h1>Organizador de Tarefas Diárias</h1>
      <p class="lead">Gerencie melhor seu tempo com uma lista de tarefas simples e prática</p>
    </header>

    <section>
      <FormularioTarefa @nova-tarefa="adicionarTarefa" />
    </section>

    <section class="mt-4">
      <ListaTarefas
        :tarefas="tarefas"
        @excluir-tarefa="excluirTarefa"
        @alternar-tarefa="alternarConclusao"
      />
    </section>

    <footer class="text-center mt-5">
      <img
        :src="require('@/assets/relogio.png')"
        alt="Relógio de bolso decorativo"
        class="img-fluid fade-in d-block mx-auto"
        style="max-width: 150px; opacity: 0.8;"
      />
    </footer>
  </div>
</template>

<script>
import FormularioTarefa from './components/FormularioTarefa.vue'
import ListaTarefas from './components/ListaTarefas.vue'

export default {
  name: 'App',
  components: {
    FormularioTarefa,
    ListaTarefas
  },
  data() {
    return {
      tarefas: []
    }
  },
  created() {
    this.carregarTarefas()
  },
  methods: {
    async carregarTarefas() {
      try {
        const resposta = await fetch('http://localhost:3000/api/tarefas')
        const dados = await resposta.json()
        this.tarefas = dados
      } catch (erro) {
        console.error('Erro ao carregar tarefas:', erro)
      }
    },

    async adicionarTarefa(tarefa) {
      try {
        const resposta = await fetch('http://localhost:3000/api/tarefas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(tarefa)
        })

        if (resposta.ok) {
          const nova = await resposta.json()
          this.tarefas.push(nova)
        }
      } catch (erro) {
        console.error('Erro ao adicionar tarefa:', erro)
      }
    },

    async excluirTarefa(index) {
      try {
        await fetch(`http://localhost:3000/api/tarefas/${index}`, {
          method: 'DELETE'
        })
        this.tarefas.splice(index, 1)
      } catch (erro) {
        console.error('Erro ao excluir tarefa:', erro)
      }
    },

    async alternarConclusao(index) {
      try {
        const resposta = await fetch(`http://localhost:3000/api/tarefas/${index}`, {
          method: 'PATCH'
        })
        const tarefaAtualizada = await resposta.json()
        this.tarefas[index].concluida = tarefaAtualizada.concluida
      } catch (erro) {
        console.error('Erro ao alternar tarefa:', erro)
      }
    }
  }
}
</script>

<style>
body {
  background-color: #121212;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

p.lead {
  font-size: 1.1rem;
  color: #cccccc;
}

button {
  width: 100%;
}

.fade-in {
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
  -moz-animation: fadeIn ease 2s;
  -o-animation: fadeIn ease 2s;
  -ms-animation: fadeIn ease 2s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

footer img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

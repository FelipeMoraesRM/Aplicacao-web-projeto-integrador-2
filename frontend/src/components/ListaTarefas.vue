<template>
  <div v-if="tarefas.length > 0">
    <h2 class="mb-3">Tarefas do Dia</h2>
    <ul class="list-group">
      <li
        v-for="(tarefa, index) in tarefasOrdenadas"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center bg-dark text-white"
      >
        <div>
          <strong :class="{ riscado: tarefa.concluida }">{{ tarefa.descricao }}</strong><br />
          <small :class="{ riscado: tarefa.concluida }">
            Horário: {{ tarefa.horario }} | Prioridade: {{ tarefa.prioridade }}
          </small>
        </div>
        <div class="btn-group">
          <button
            class="btn btn-sm btn-success"
            @click="$emit('alternar-tarefa', index)"
          >
            {{ tarefa.concluida ? 'Desfazer' : 'Concluir' }}
          </button>
          <button
            class="btn btn-sm btn-danger ms-2"
            @click="$emit('excluir-tarefa', index)"
          >
            Excluir
          </button>
        </div>
      </li>
    </ul>
  </div>
  <div v-else class="text-muted mt-4">
    Nenhuma tarefa adicionada ainda.
  </div>
</template>

<script>
export default {
  name: "ListaTarefas",
  props: {
    tarefas: {
      type: Array,
      required: true
    }
  },
  computed: {
    tarefasOrdenadas() {
      return this.tarefas.slice().sort((a, b) => a.prioridade - b.prioridade);
    }
  }
}
</script>

<style scoped>
.list-group-item {
  border: 1px solid #333;
}
.riscado {
  text-decoration: line-through;
  color: #aaa !important;
}
</style>


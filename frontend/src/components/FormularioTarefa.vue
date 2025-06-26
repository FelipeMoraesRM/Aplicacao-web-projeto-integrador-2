<template>
  <form @submit.prevent="enviarTarefa" class="bg-dark p-4 rounded">
    <div class="mb-3">
      <label for="descricao" class="form-label">Tarefa</label>
      <input
        type="text"
        id="descricao"
        v-model="descricao"
        class="form-control"
        placeholder="Descreva a tarefa"
        required
      />
    </div>

    <div class="mb-3">
      <label for="horario" class="form-label">Horário</label>
      <input
        type="time"
        id="horario"
        v-model="horario"
        class="form-control"
        required
      />
    </div>

    <div class="mb-3">
      <label for="prioridade" class="form-label">Prioridade (1 a 5)</label>
      <input
        type="number"
        id="prioridade"
        v-model.number="prioridade"
        class="form-control"
        min="1"
        max="5"
        required
      />
    </div>

    <button type="submit" class="btn btn-light">Adicionar Tarefa</button>
  </form>
</template>

<script>
export default {
  name: "FormularioTarefa",
  data() {
    return {
      descricao: "",
      horario: "",
      prioridade: 1
    }
  },
  methods: {
    enviarTarefa() {
      const novaTarefa = {
        descricao: this.descricao.trim(),
        horario: this.horario,
        prioridade: this.prioridade,
        concluida: false
      };

      this.$emit("nova-tarefa", novaTarefa);

      // Limpa os campos do formulário
      this.descricao = "";
      this.horario = "";
      this.prioridade = 1;
    }
  }
}
</script>

<style scoped>
form {
  background-color: #1e1e1e;
  color: #ffffff;
}
</style>

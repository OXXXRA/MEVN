<template>
  <div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="floatingInput" v-model="title">
      <label for="floatingInput">Произведение</label>
    </div>
    <div class="form-floating">
      <input type="text" class="form-control" id="floatingPassword" v-model="author">
      <label for="floatingPassword">Автор</label>
    </div>
  <div class="form-floating">
    <textarea class="form-control" placeholder="Обзор" id="floatingTextarea2" style="height: 100px" v-model="description"></textarea>
    <label for="floatingTextarea2">Обзор</label>
  </div>
    <div>
    </div>
    <button @click="addBook">Добавить</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "createItem",
  data(){
    return{
      title: '',
      author: '',
      description: ''
    }
  },
  methods: {
    async addBook(){
      const response = await axios.post('http://localhost:3000/book/', {title: this.title, authorBook: this.author, description: this.description})
      if (!response) alert('Проверьте правильность входных данных.')
          window.location.href = '/'
    }

  }
}
</script>

<style scoped>

</style>
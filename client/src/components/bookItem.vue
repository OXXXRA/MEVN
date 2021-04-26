<template>
<div>

  <div class="modal-dialog" role="document" v-if="selected">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message to @fat</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>


  <!-- -->
    <div class="px-4 pt-5 my-5 text-center border-bottom">
      <h1  class="display-4 fw-bold">{{bookItem.title}} {{bookItem.authorBook}}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{{bookItem.description}}</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3" @click="deleteBook">Удалить</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="selected = true">Редактировать</button>
        </div>
      </div>
      <div class="overflow-hidden" style="max-height: 30vh;">
        <div class="container px-5">
          <img src="bootstrap-docs.png" class="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" loading="lazy" width="700" height="500"/>
        </div>
      </div>
    </div>
</div>
</template>

<script>


import axios from "axios";
export default {
  name: "bookItem",
  data(){
    return {
      bookItem: [],
      selected: false,
      editedTitle: '',
      editedDescription: '',
      editedAuthor: ''
    }
},
async mounted(){
    const response = await axios.get('http://localhost:3000/book/' + this.$route.params.id)
  this.bookItem = response.data
},
  methods: {
    async deleteBook(){
      const response = await axios.delete('http://localhost:3000/book/' + this.$route.params.id)
      if (!response) alert('Не удалось удалить запись.')
      window.location.href = '/';
    }
  }



}
</script>

<style scoped>

</style>
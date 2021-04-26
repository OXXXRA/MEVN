<template>
  <main>

    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Album example</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <router-link to="create" class="btn btn-primary my-2" >Добавить запись</router-link>
            <router-link class="btn btn-secondary my-2">Посмотреть записи</router-link>
          </p>
        </div>
      </div>
    </section>

    <div v-for="book in bookList" class="card align-items-center mx-auto" style="width: 60%; max-height: 600px" :key="book._id">
      <router-link v-bind:to="book._id" style="text-decoration: none; color: black">
     <div class="card-body">
        <h5 class="card-title">{{book.title}}</h5>
        <p class="card-text">{{book.description.slice(0, 200)}}</p>
        <p class="card-text"><small class="text-muted">{{ book.date }}</small></p>
      </div>
      <img src="https://3dnews.ru/assets/external/illustrations/2021/03/30/1036151/01.jpg" class="card-img-bottom md-5 img-responsive"  alt="..." style="object-fit: cover; height: 500px">
      </router-link>
      <div class="divider" style="height:200px; background-color: white"><p>00g</p></div>
    </div>


  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'bookList',
  data(){
    return {
      bookList: [],
      test: 'oraora'

    }},
  async mounted(){
    const response = await axios.get('http://localhost:3000/book/')
    this.bookList = response.data
  }}
</script>
<template>
  <div>
  <div>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link to="/" class="nav-link px-2 link-secondary">Главная</router-link></li>
        <li><router-link to="/create" class="nav-link px-2 link-dark">Добавить запись</router-link></li>
        <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Ввойти</button>
        <button type="button" class="btn btn-primary">Зарегистрироваться</button>
      </div>
    </header>
  </div>
  </div>
</template>
<script>
export default {
name: 'Header',
  data(){
  return{}
  }
}
</script>

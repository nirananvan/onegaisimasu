<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
      books:[],
       message: '',
       name:'',
       users:[]
  };
},
  mounted() {
    axios.get('https://m3h-sasaki-0806.azurewebsites.net/api/SELECT?')
      .then(response => {
        this.books = response.data;
      })
      .catch(error => {
        console.error('データ取得に失敗しました:', error);
      });
  }
};
console.log(response.data.name)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

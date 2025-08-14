<template>
  <div id="app">
    <h1>在庫管理アプリ</h1>
    <router-link to="/list"> 在庫一覧</router-link> |
    <router-link to="/form"> 在庫登録</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

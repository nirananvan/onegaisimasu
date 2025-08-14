<template>
  <div>
    <h2>在庫一覧</h2>
    <ul>
      <li v-for="book in books" :key="book.ID">
        {{ book.ID }}｜{{ book.Name }}｜{{ book.Author }}｜{{ book.Category }}｜{{ book.Price }}円
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['books'])
  },
  created() {
    this.fetchBooks(); 
  },
  methods: {
    ...mapActions(['fetchBooks'])
  }
}
</script>



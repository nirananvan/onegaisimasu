<!-- views/BookList.vue -->
<template>
  <div>
    <SearchBar />
    <div class="book-list">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      books: [] // APIなどから取得した本の一覧
    }
  }
}
</script>

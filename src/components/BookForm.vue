<template>
  <div>
    <h3>在庫入力</h3>
    <textarea v-model="bookId" placeholder="ID"></textarea>
    <textarea v-model="bookName" placeholder="名前"></textarea>
    <textarea v-model="bookAuthor" placeholder="著者"></textarea>
    <textarea v-model="bookCategory" placeholder="カテゴリ"></textarea>
    <textarea v-model="bookPrice" placeholder="価格"></textarea>
    <button @click="submit">送信</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      bookId: '',
      bookName: '',
      bookAuthor: '',
      bookCategory: '',
      bookPrice: ''
    };
  },
  methods: {
    ...mapActions(['addBook']),
    submit() {
      const bookData = {
        ID: this.bookId,
        Name: this.bookName,
        Author: this.bookAuthor,
        Category: this.bookCategory,
        Price: this.bookPrice
      };
      this.addBook(bookData);
    }
  }
}
</script>

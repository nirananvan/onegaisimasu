import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    }
  },
  actions: {
    async fetchBooks({ commit }) {
      try {
        const response = await axios.get('https://m3h-sasaki-0806.azurewebsites.net/api/SELECT');
        commit('setBooks', response.data.List);
      } catch (error) {
        console.error('失敗:', error);
      }
    },
    async addBook({ dispatch }, bookData) {
      try {
        await axios.post('https://m3h-sasaki-0806.azurewebsites.net/api/INSERT', bookData);
        dispatch('fetchBooks'); 
            } catch (error) {
        console.error('失敗:', error);
      }
    }
  },
  getters: {
    books: state => state.books
  }
});

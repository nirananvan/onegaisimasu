import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import Vuetify from 'vuetify';

Vue.config.productionTip = false



new Vue({
  el: '#app', // Vueが管理する一番外側のDOM要素
  vuetify: new Vuetify(),
  router,
  store,
   render (h) {
    return h(App);
  },
  data: {
    // Vue内部で使いたい変数は全てこの中に定義する
    ID: '', //パラメーター「ID」格納変数
    Name: '', //パラメーター「Name」格納変数
    Author:'',
    Category:'',
    Price:'',
    dataList: [], // データ表示用配列
  },
  methods: {
    // DBにデータを追加する関数
    addData: async function() {

      //IDの入力チェック（空白か数字以外なら終了）
      if(!this.ID || isNaN(this.ID)){
        console.log("IDに数値が入力されていません");
        return;
      }
      
      //POSTメソッドで送るパラメーターを作成
      // const param = {
        // ID : this.ID,
        // Name : this.Name,
        // Author : this.Author,
        // Category : this.Category,
        // Price : this.Price
      // };

      
      //INSERT用のAPIを呼び出し
      // const response = await axios.get('https://m3h-sasaki-0806.azurewebsites.net/api/INSERT?',param);
       const response = await axios.get('https://m3h-sasaki-0806.azurewebsites.net/api/INSERT?ID=${this.ID}&Name=${this.Name}&Author=${this.Author}&Category=${this.Category}&Price=${this.Price}');

      //結果をコンソールに出力
      console.log(response.data);

    },
    // データベースからデータを取得する関数
    readData: async function() {
      //SELECT用のAPIを呼び出し      
      const response = await axios.get('https://m3h-sasaki-0806.azurewebsites.net/api/SELECT?');
      
      //結果をコンソールに出力
      console.log(response.data);
      
      //結果リストを表示用配列に代入
      this.dataList = response.data.List;
    },
  },
});
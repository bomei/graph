<template>
  <div class='duoxuan'>
    <ul>
      <li v-for='(value,index) of allDuoxuan' :key="index">
        <!-- <p>{{value}}</p> -->
        <qdq :question="value" :show-result="showResult"></qdq>
      </li>
    </ul>
    
  </div>
</template>

<script>
import Qdq from './duoxuan-q.vue'

export default {
  data() {
    return {
      hello: ''
    }
  },
  props: ['allDuoxuan', 'showResult'],
  components: {
    Qdq
  },
  methods: {
    collectAnswer: function(res) {
      console.log(res)
    },
    look: function() {
      console.log(this.allDanxuan)
    }
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 5px;
}
</style>

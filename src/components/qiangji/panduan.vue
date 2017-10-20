<template>
  <div class='panduan'>
    <ul>
      <li v-for='(value,index) of allPanduan' :key="index">
        <!-- <p>{{value}}</p> -->
        <qpq :question="value" :show-result="showResult"></qpq>
      </li>
    </ul>
    
  </div>
</template>

<script>
import Qpq from './panduan-q.vue'

export default {
  data() {
    return {
      hello: ''
    }
  },
  props: ['allPanduan', 'showResult'],
  components: {
    Qpq
  },
  methods: {
    collectAnswer: function(res) {
      console.log(res)
    },
    look: function() {
      console.log(this.allPanduan)
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
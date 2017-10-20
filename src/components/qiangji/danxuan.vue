<template>
  <div class='danxuan'>
    <ul>
      <li v-for='(value,index) of allDanxuan' :key="index">
        <!-- <p>{{value}}</p> -->
        <qsq :question="value" :show-result="showResult"></qsq>
      </li>
    </ul>
    
  </div>
</template>

<script>
import Qsq from './single-q.vue'

export default {
  data() {
    return {
      hello: ''
    }
  },
  props: ['allDanxuan', 'showResult'],
  components: {
    Qsq
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
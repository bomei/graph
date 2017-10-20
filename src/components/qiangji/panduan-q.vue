<template>
  <div class='qiangji-panduan-q'>
    <div :class="bgc">
      <div class='q'>
        {{tigan}}
      </div>
      <div class='xuanxiang'>
        <input type="radio" value="1" v-model="checkedNames" @click="isCorrect()">
        <label for="1">正确</label>
        <input type="radio" value="0" v-model="checkedNames" @click="isCorrect()">
        <label for="0">错误</label>
        <br>
      </div>
      <div ><span>{{showResult?correctAnswer:'&nbsp;'}}</span></div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'qpq',
  data() {
    return {
      checkedNames: [],
      result: ''
    }
  },
  computed: {
    correctAnswer: function() {
      let res = this.question['答案']
      return res === undefined ? '' : res
    },
    tigan: function() {
      let res = this.question['序号']
      return res === undefined ? '' : res + ' . ' + this.question['题干']
    },
    bgc: function() {
      if (!this.showResult) return ''
      return this.result === 'YES' ? '' : this.checkedNames.length > 0 ? 'yellow-bgc' : ''
    }
  },
  props: ['question', 'showResult'],
  watch: {
  },
  methods: {
    isCorrect: function() {
      let res = this.checkedNames.toString() === this.correctAnswer.toString()
      console.log(res)
      this.result = res ? 'YES' : 'NO'
      this.$emit('is-correct', JSON.stringify({ 'index': 1, 'isCorrect': (res ? '1' : '0') }))
    }
  }
}
</script>

<style scoped>
.qiangji-panduan-q {
  text-align: left;
}
.yellow-bgc {
  background-color: yellow;
}
</style>
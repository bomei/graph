<template>
  <div class='qiangji-duoxuan-q'>
    <div :class="bgc">
      <div class='q'>
        {{tigan}}
      </div>
      <div class='xuanxiang'>
        <ul>
          <li v-for="(v, k) of xuanxiang" :key="k">
            <input type="checkbox" :value="v" :id='"duoxuan"+question["序号"]+v' v-model="checkedNames" @click="isCorrect()">
            <label :for='"duoxuan"+question["序号"]+v'>{{v+' . '+question[v]}}</label>
          </li>
        </ul>
      </div>
      <div ><span>{{showResult?correctAnswer:'&nbsp;'}}</span></div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qdq',
  data() {
    return {
      checkedNames: [],
      result: ''
    }
  },
  computed: {
    correctAnswer: function() {
      let res = this.question['答案']
      return res === undefined ? '' : res.replace(/、/g, '').split('')
    },
    tigan: function() {
      let res = this.question['序号']
      return res === undefined ? '' : res + ' . ' + this.question['题干']
    },
    xuanxiang: function() {
      let res = this.question['xuanxiang']
      return res === undefined ? [] : res
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
      let res = this.checkedNames.sort().toString() === this.correctAnswer.sort().toString()
      console.log(res)
      this.result = res ? 'YES' : 'NO'
      this.$emit('is-correct', JSON.stringify({ 'index': 1, 'isCorrect': (res ? '1' : '0') }))
    }
  }
}
</script>

<style scoped>
.qiangji-duoxuan-q {
  text-align: left;
}
.yellow-bgc {
  background-color: yellow;
}
</style>
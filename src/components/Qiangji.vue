<template>
  <div class='qiangji'>
    <top-bar :subjects="subjects" :toggle-result="toggleResult" :show-result="showResult" :change="change" :load-json="reloadQuestions"></top-bar>
    <div class='container'>
      <div class='start-template'>
        <button @click='reloadQuestions' v-show="false">Update</button>
        <button @click="toggleResult" v-show="false">Show</button>
        <danxuan :all-danxuan="allDanxuan" class="lead" :show-result="showResult" v-show="danxuanShow"></danxuan>
        <duoxuan :all-duoxuan="allDuoxuan" class="lead" :show-result="showResult" v-show="duoxuanShow"></duoxuan>
        <panduan :all-panduan="allPanduan" class="lead" :show-result="showResult" v-show="panduanShow"></panduan>
      </div>
    </div>
  </div>
</template>

<script>
import Danxuan from './qiangji/danxuan.vue'
import axios from 'axios'
import Duoxuan from './qiangji/duoxuan.vue'
import Panduan from './qiangji/panduan.vue'
import TopBar from './common/TopBar.vue'

export default {
  data() {
    return {
      cs: ['A', 'B'],
      totalAnswer: [],
      allQuestions: '',
      showResult: false,
      danxuanShow: true,
      duoxuanShow: false,
      panduanShow: false,
      subjects: [
        {
          title: '单选',
          active: true
        },
        {
          title: '多选',
          active: false
        },
        {
          title: '判断',
          active: false
        }
      ]
    }
  },
  components: {
    Danxuan,
    Duoxuan,
    Panduan,
    TopBar
  },
  computed: {
    allDanxuan: function() {
      let res = this.allQuestions['单选']
      if (res !== undefined) {
        return res
      } else {
        return ''
      }
    },
    allDuoxuan: function() {
      let res = this.allQuestions['多选']
      if (res !== undefined) {
        return res
      } else {
        return ''
      }
    },
    allPanduan: function() {
      let res = this.allQuestions['判断']
      if (res !== undefined) {
        return res
      } else {
        return ''
      }
    }
  },
  methods: {
    collectAnswer: function(res) {
      console.log(res)
    },
    reloadQuestions: function() {
      axios.get('http://localhost:5000/qj').then((res) => {
        this.allQuestions = res['data']
        console.log('in axios')
      })
    },
    toggleResult: function() {
      this.showResult = !this.showResult
    },
    change: function(title) {
      this.duoxuanShow = false
      this.danxuanShow = false
      this.panduanShow = false
      if (title === '单选') this.danxuanShow = true
      else if (title === '多选') this.duoxuanShow = true
      else this.panduanShow = true
    }
  },
  mounted() {
    this.reloadQuestions()
  }
}
</script>

<style type="text/css">
    body {
        padding-top: 50px;
    }
    .starter-template {
        padding: 40px 15px;
        text-align: left;
    }
</style>
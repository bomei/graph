<template>
  <div class='index-row' @click="updateIndex">
    <ul v-for="each of articles" :key="each.index">
      <li>
        <single-article :title="each.title" :abstract="each.abstract"></single-article>
      </li>
    </ul>
  </div>
</template>

<script>
import SingleArticle from './singleArticle'
// import { BoMongo } from '../../js/boMongo'

export default {
  data() {
    return {
      articles: [{
        title: 'bo1',
        abstract: 'Here is the abstract!'
      }]
    }
  },
  components: {
    SingleArticle
  },
  methods: {
    updateIndex: function() {
      this.articles = [{
        title: 'bo1',
        abstract: 'Here is the abstract!'
      },
      {
        title: 'cc2',
        abstract: 'Here is the abstract!'
      }]
    }
  }
}
</script>

<style>
.index-row{
  text-align: left;
}

.index-row ul{
  -webkit-padding-start: 0;
}

.index-row ul li{
  background-color: aquamarine;
}
    
</style>

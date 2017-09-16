<template>
  <div class="md">
    <div id="raw-md">
      <textarea v-model="rawMD"></textarea>
    </div>
    <div id="gen-md" v-html="renderedMD"></div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'md',
  data () {
    return {
      rawMD: 'Write the markdown here...'
    }
  },
  computed: {
    renderedMD () {
      return marked(this.rawMD, { sanitize: true })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

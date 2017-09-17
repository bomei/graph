<template>
  <div id="editor-holder">
    <div id="editor">
      <textarea v-model="rawMD" placeholder="Write the markdown here..."></textarea>
      <div v-html="renderedMD"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'md',
  data() {
    return {
      rawMD: ''
    }
  },
  computed: {
    renderedMD() {
      return marked(this.rawMD, { sanitize: true })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body,
#editor{
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  text-align: left;
}

#editor div p {
  font-size: 14px;
}

#editor-holder {
  height: 400px;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea{
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>

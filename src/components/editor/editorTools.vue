<template>
  <div class='editor-tools'>
    <button @click="onSave()" id='saveArticle'>Save</button>
    <p style="display: None" v-html="rawArtical"></p>
  </div>
</template>

<script>
import {BoMongo} from '@/components/editor/editorTools'

function onSave() {
  let boMongo = BoMongo('md')
  
}

export default {
  name: 'editor-tools',
  data() {
    return {
      rawArtical: ''
    }
  },
  props: ['rawArtical']
}
</script>


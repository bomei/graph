<template>
  <div class="md-render" :style="{height: computedHeight}">
    <!-- <top-bar :subjects="subjects"></top-bar> -->
    <div id='md-index' :style="{width: leftWidth}">
      <index-row></index-row>
    </div>
    <div id="editor" :style="{width: rightWidth}">
      <div class='left-workspace'>
        <textarea v-model="rawMD" placeholder="Write the markdown here..."></textarea>
      </div>
      <div v-html="renderedMD" class='right-workspace'></div>
    </div>
    <bo-footer></bo-footer>
  </div>
</template>

<script>
import marked from 'marked'
import Hello from './Hello.vue'
import TopBar from './common/TopBar.vue'
import BoFooter from './common/footer.vue'
import IndexRow from './indexRow/indexRow.vue'

export default {
  // name: 'mdRender',
  data() {
    return {
      rawMD: '',
      subjects: [
        {
          title: 'bb',
          active: true
        },
        {
          title: 'dd',
          active: false
        },
        {
          title: 'cc',
          active: false
        }
      ],
      curScreenHeight: document.documentElement.clientHeight,
      curScreenWidth: document.documentElement.clientWidth
    }
  },
  // bind event handlers to the `handleResize` method (defined below)
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  computed: {
    renderedMD() {
      return marked(this.rawMD, { sanitize: true })
    },
    computedHeight() {
      return (this.curScreenHeight - 40).toString() + 'px'
    },
    leftWidth() {
      return ((this.curScreenWidth * 0.15) > 250 ? '' + (this.curScreenWidth * 0.15) + 'px' : '250px')
    },
    rightWidth() {
      return (this.curScreenWidth - 30 - parseInt(this.leftWidth) + 'px')
    }
  },
  methods: {
    handleWindowResize: function(event) {
      this.curScreenHeight = document.documentElement.clientHeight
      this.curScreenWidth = document.documentElement.clientWidth
      console.log(this.curScreenHeight)
      console.log(this.computedHeight)
    }
  },
  components: {
    Hello,
    TopBar,
    BoFooter,
    IndexRow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  text-align: left;
}

#editor div p {
  font-size: 14px;
}

#editor {
  display: inline-block;
  /* width: 86%; */
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 5px;
}

#md-index {
  display: inline-block;
  /* width: 12%; */
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 5px;
  /* min-width: 300px; */
}

.md-render {
  padding-top: 10px;
  height: 100vh;
  width: 100%;
}

textarea {
  display: inline-block;
  width: 100%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 5px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 5px;
}

.left-workspace {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 5px;
}

.right-workspace {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 5px;
  overflow: auto;
}

.bo-footer p{
  margin: 0;
}

</style>
<style>
code {
  color: #f66;
}
</style>

<template>
  <div class="top-bar">
    <div class="container">
      <div class="masthead">
        <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#container">小傻瓜</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li v-for="(item,index) of subjects" :key="item.title" :class="{active: item.active}" @click="onTopBarClick(item, index)">
                  <a href="#">{{item.title}}</a>
                </li>
              </ul>
            </div>
            <!--/.nav-collapse -->
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subjects: [
        {
          title: 't',
          active: true
        },
        {
          title: 'b',
          active: false
        },
        {
          title: 'd',
          active: false
        }
      ]
    }
  },
  props: ['subjects'],
  methods: {
    onTopBarClick: function(item, selected) {
      for (let index in this.subjects) {
        this.subjects[index].active = false
      }
      this.subjects[selected].active = true
    }
  }

}
</script>

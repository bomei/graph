<template>
  <div class="root">
    <div class="container">
      <div class="masthead">
        <h3 class="text-muted">Look for it!</h3>
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
                <li v-for="slice of subjects">
                  <a :class="{active: isActive}" href="#">{{slice}}</a>
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
  name: 'root',
  data() {
    return {
      subjects: ['self', 'title', 'hello']
    }
  },
  computed: {

    isActive: function() { return this.slice === this.subjects[0] }

  }

}
</script>

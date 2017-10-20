<template>
  <div class='single-article'>
    <h3 class="title">{{title}}</h3>
    <p class='abstract'>{{abstract}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      abstract: ''
    }
  },
  props: ['title', 'abstract']
}
</script>

<style>
.single-article {
  width: 100%
}
</style>


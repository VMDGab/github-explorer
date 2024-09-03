<template>
  <div class="home lightTheme">
    <Header theme="lightTheme"/>
  </div>
</template>
<style src="../css/home.css"></style>
<script>
// @ is an alias to /src
import Header from '@/components/header.vue'

export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>

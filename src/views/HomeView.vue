<template>
  <div ref="div" class="home lightTheme">
    <Header @theme-changed="themeChanged"/>
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
  },
  data(){
    return {
      currentTheme: "lightTheme"
  }
}, 
methods:{
  themeChanged(newTheme){
    this.currentTheme = newTheme
    this.$refs.div.classList.remove("lightTheme", "darkTheme");
    this.$refs.div.classList.add(this.currentTheme)
  }
}
}
</script>

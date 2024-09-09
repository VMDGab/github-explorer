<template>
  <div ref="div" class="home">
    <div class="itensContainer">
      <Header @theme-changed="themeChanged" go-back="false"/>
      <span class="title">
        Explore repositórios
        <br>
        no Github.
      </span>
      <Search @newRequest="newRepo"/>

      <div ref="repoContainer"> 
        <CardRepo 
        v-for="(repo, index) in repositorys" 
        :key="index"
        :img-url="repo.imgUrl" 
        :repo-title="repo.repoTitle"
        :repo-sub-title="repo.repoSubTitle"
        :repo="repo.repo"
        navigate="true"
        />
      </div>
    </div>
  </div>
</template>
<style src="../css/home.css"/>
<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import Search from '@/components/search.vue'
import CardRepo from '@/components/cardRepo.vue'

const repositorys = []
export default {
  name: 'HomeView',
  components: {
    Header,
    Search,
    CardRepo
  },
  data(){
    return {
      currentTheme: "lightTheme",
      repositorys: []
  }
}, 
created(){
  if(!localStorage.getItem("theme")){
    localStorage.setItem("theme", this.currentTheme)
  }
},
mounted(){
    this.setTheme()
},
methods:{
  setTheme(){
    const theme = localStorage.getItem("theme")
    if(theme){
      this.$refs.div.classList.remove("lightTheme", "darkTheme");
      this.$refs.div.classList.add(theme)
    }
  },
  themeChanged(newTheme){
    this.currentTheme = newTheme
    this.$refs.div.classList.remove("lightTheme", "darkTheme");
    this.$refs.div.classList.add(this.currentTheme)
    localStorage.setItem("theme", this.currentTheme)
  },

  newRepo(newRepo){
    console.log(newRepo)
    this.repositorys.push({
      imgUrl: newRepo.photo,
      repoTitle: newRepo.name,
      repoSubTitle: newRepo.desc,
      repo: newRepo.repo
    })

  }
}
}
</script>

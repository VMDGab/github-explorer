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
        v-for="(repo, index) in repositories" 
        :key="index"
        :img-url="repo.imgUrl" 
        :repo-title="repo.repoTitle"
        :repo-sub-title="repo.repoSubTitle"
        :repo="repo.repo"
        details="true"
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


const savedRepos = JSON.parse(localStorage.getItem("repos"))
console.log(savedRepos)
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
      repositories: savedRepos,
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
    console.log(this.repositories)
  },
  themeChanged(newTheme){
    this.currentTheme = newTheme
    this.$refs.div.classList.remove("lightTheme", "darkTheme");
    this.$refs.div.classList.add(this.currentTheme)
    localStorage.setItem("theme", this.currentTheme)
  },

  newRepo(newRepo){
    this.repositories.push({
      imgUrl: newRepo.photo,
      repoTitle: newRepo.name,
      repoSubTitle: newRepo.desc,
      repo: newRepo.repo
    })
    this.saverepositories()
  },
  saverepositories(){
    console.log(this.repositories)
    localStorage.setItem('repos', JSON.stringify(this.repositories))
  }
}
}
</script>

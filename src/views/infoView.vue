<template>
    <div ref="div" class="info">
      <div class="itensContainer">
        <Header @theme-changed="themeChanged" go-back="true"/>
        <CardRepo 
        v-for="(repo, index) in repositorys" 
        :key="index"
        :img-url="repo.imgUrl" 
        :repo-title="repo.repoTitle"
        :repo-sub-title="repo.repoSubTitle"
        scale="true"
        />
        <div class="infos">
          <InfoRepo 
          v-for="(repo, index) in repositorys" 
          :key="index"
          :stat="repo.stars"
          type-stat="Stars"
          />
          <InfoRepo 
          v-for="(repo, index) in repositorys" 
          :key="index"
          :stat="repo.forks"
          type-stat="Forks"
          />
          <InfoRepo 
          v-for="(repo, index) in repositorys" 
          :key="index"
          :stat="repo.issues"
          type-stat="Issues abertas"
          />
        </div>
        <div class="issues">
          <CardRepo 
          v-for="(repo, index) in issues" 
          :key="index"
          :repo-title="repo.issueTitle"
          :repo-sub-title="repo.author"
          issue="true"
          />
        </div>
        </div>
    </div>
</template>
<style src="../css/info.css"/>
<script>
// @ is an alias to /src
import Header from '@/components/header.vue'
import CardRepo from '@/components/cardRepo.vue'
import InfoRepo from '@/components/infoRepo.vue'
import axios from 'axios';
const theme = localStorage.getItem("theme")

export default {
  name: 'HomeView',
  components: {
    Header,
    CardRepo,
    InfoRepo
  },
  data(){
    return {
      repositorys : [],
      issues : [],
      currentTheme: theme,
  }
}, 
created(){
  const repoId = this.$route.params.id
  this.fetchParams(repoId)
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
  fetchParams(repoId){
    axios.get(`https://api.github.com/repos/${repoId}`).then(response => {
      this.repositorys.push({
      imgUrl: response.data.owner.avatar_url,
      repoTitle:response.data.full_name,
      repoSubTitle:response.data.description,
      forks: response.data.forks_count,
      issues: response.data.open_issues_count,
      stars: response.data.stargazers_count,
    })

    axios.get(`https://api.github.com/repos/${repoId}/issues`).then(response => {
        for(let i = 0; i < response.data.length; i++){
        this.issues.push({
        author: response.data[i].user.login,
        issueTitle:response.data[i].title,
        url:response.data[i].html_url,
        })
        console.log(this.issues[1])
      }
    })
    })
    .catch(error => console.error('Erro ao buscar dados do repositório:', error));
  },
  themeChanged(newTheme){
    this.currentTheme = newTheme
    this.$refs.div.classList.remove("lightTheme", "darkTheme");
    this.$refs.div.classList.add(this.currentTheme)
  },
}
}
</script>

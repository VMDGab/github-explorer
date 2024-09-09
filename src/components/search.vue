<template>
    <div class="errorContainer">
        <div class="searchContainer">
           <input ref="search" class="search" placeholder="Digite aqui"/>
           <button class="searchBtn" @click="toggleSearch">Pesquisar</button>
        </div>
        <span ref="msg" class="error">Erro ao buscar repositório</span>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name:"Search",
    methods:{
        toggleSearch(){
            const repoSearch = this.$refs.search.value
             axios.get(`https://api.github.com/repos/${repoSearch}`).then(response => {
                const newRepo = {
                    name: response.data.full_name,
                    desc: response.data.description,
                    photo: response.data.owner.avatar_url,
                    repo: `${repoSearch}`
                }
                this.$emit('newRequest', newRepo)
                this.$refs.search.style.border = "none" 
                this.$refs.msg.style.display = "none" 
            }).catch(erro => {
                console.log(erro)
                console.log(erro.status)
                if(erro.status == 404){
                    this.$refs.search.style.border = "2px solid var(--error)" 
                    this.$refs.msg.style.display = "block" 
                }
            })
        }
    }
    }
</script>

<style>
.searchContainer{
    width: 900px;
    height: 60px;
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 100px;    
    z-index: 1;
}

.search{
    width: 500px;
    height: 100%;
    border: none;
    outline: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 30px;
    color: var(--subtitleLight);
    font-family: var(--font);
    font-size: 16px;
}

.searchBtn{
    width: 200px;
    height: 100%;
    border: none;
    background-color: var(--searchBtn);
    color: var(--mainBg);
    font-family: var(--font);
    font-size: 16px;
    font-weight: 600;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.error{
    font-family: var(--font);
    font-weight: 600;
    font-size: 20px;
    color: var(--error);
    margin-top: -60px;
    display: none;
}
.errorContainer{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
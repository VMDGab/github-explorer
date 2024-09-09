<template>
    <div class="header">
        <img class="logo" ref="logo" :src="logoSrc"/>
        <button ref="btn" class="btn" @click="switchTheme">Mudar tema</button>
        <div ref="btnGoBack" class="btnGoBack" @click="goBackBtn">
            <img src="../assets/goBack.svg"/>
            Voltar
        </div>
        </div>
</template>

<script>
import darkLogo from "../assets/logo-dark.svg"
import lightLogo from "../assets/logo.svg"
const theme = localStorage.getItem("theme")
export default {
    name: 'Header',
    props:{
        goBack: String
    },
    data(){
      return{
        theme : theme,
        logoSrc: theme == "lightTheme" ? lightLogo : darkLogo,
    }  
    },
    mounted(){
        this.typeHeader()
    },
     methods:{
        switchTheme(){
            this.theme =  this.theme == "lightTheme" ? "darkTheme" : "lightTheme"
            this.$emit('theme-changed', this.theme);
            this.logoSrc = this.theme == "lightTheme" ? lightLogo : darkLogo
        },
        typeHeader(){
            this.goBack == "false" ? this.$refs.btnGoBack.style.display = "none" : this.$refs.btn.style.display = "none"
        },
        goBackBtn(){
            this.$router.push({ name: 'home'});
        }

    }
}
</script>

<style>
@import url("../css/global.css");
.header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 100px;
}
.logo{
    height: 40px;
}
.btn{
    width: 170px;
    height: 36px;
    border: none;
    border-radius: 8px;
    background-color: var(--searchBtn);
    font-family: var(--font);
    color:var(--mainBg);
    font-weight: 600;
    font-size: 16px;
    transition: all .4s ease-in-out;
    z-index: 1;
}
.btn:active{
transform: scale(.95);
}

.githubIcon{
    position: absolute;
    z-index: 0;
    margin: auto;
    right: 24%;
    top: 0;
}
.back{
    display: none
}

.btnGoBack{
    color: var(--subtitleLight);
    font-size: 20px;
}
</style>
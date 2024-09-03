<template>
    <div class="header">
        <img class="logo" ref="logo" :src="logoSrc"/>
        <button ref="btn" class="btn" @click="switchTheme"> Mudar tema</button>
    </div>
</template>

<script>
import darkLogo from "../assets/logo-dark.svg"
import lightLogo from "../assets/logo.svg"
export default {
    name: 'Header',
    data(){
      return{
        theme : "lightTheme",
        logoSrc: lightLogo
      }  
    },
     methods:{
        switchTheme(){
            this.theme =  this.theme == "lightTheme" ? "darkTheme" : "lightTheme"
            this.$emit('theme-changed', this.theme);
            this.logoSrc = this.theme == "lightTheme" ? lightLogo : darkLogo
        }
    }
}
</script>

<style>
@import url("../css/global.css");
.header{
    width: 960px;
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
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
}
.btn:active{
transform: scale(.95);
}

</style>
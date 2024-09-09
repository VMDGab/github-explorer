<template>
    <div ref="card" class="card" @click="details">
            <img ref="icon" :src="imgUrl" class="iconOwner"/>
            <div ref="textContainer" class="texts">
                <span ref="title" class="title titleCard">{{ repoTitle }}</span>
                <span ref="subtitle" class="subtitle">{{ repoSubTitle }}</span>
            </div>
    <img ref="arrow" src="../assets/Arrow.svg"/>
    </div>
</template>

<script>
export default{
    name: "CardRepo",
    props:{
        imgUrl: String,
        repoTitle: String,
        repoSubTitle: String,
        scale: String,
        issue: String,
        navigate: String,
        repo: String
    },
    mounted(){
        this.defaultCard()            
    },
    methods:{
        details(){
            if(this.navigate == "true"){
                const id = this.repo
                this.$router.push({ name: 'info', params: { id } });
            }
        },
        defaultCard(){
            this.scale == "true" ? this.bigCard() : this.issue == "true" ? this.cardIssue() : ""
        },

        bigCard(){
            this.$refs.card.style.backgroundColor = "transparent"
            this.$refs.card.style.width = "100%"
            this.$refs.arrow.style.display = "none"
            this.$refs.icon.style.height = "120px"
            this.$refs.icon.style.width = "120px"
            this.$refs.title.style.fontSize = "32px"
            this.$refs.subtitle.style.fontSize = "20px"
        },

        cardIssue(){
               this.$refs.icon.style.display = "none"
               this.$refs.card.style.width = "100%"
                this.$refs.subtitle.style.width = "100%"
        }

    }
}
</script>

<style>
    .card{
        width: 700px;
        display: flex;
        justify-content: space-between;
        padding: 16px;
        border-radius: 5px;
        margin-bottom: 16px;
        transition: all .5s ease-in-out;
        z-index: 1;

    }
    .iconOwner{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
  
    .texts{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left:24px;
        width: 100%;
    } 
    .subtitle{
        text-align: left;
        margin-top: 5px;
    }
 
</style>
<template>
    <div class="infoRepo">
        <span class="title">{{ stat }}</span>
        <span class="subtitle">{{ typeStat }}</span>
    </div>
</template>
<style>
.infoRepo{
    display: flex;
    flex-direction: column;
    width: 33%;
    margin-top: 30px;
}
</style>

<script>
export default{
    name: "InfoRepo",
    props:{
        stat: Number,
        typeStat: String
    }
}
</script>

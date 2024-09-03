<template>
    <div class="header">
        <img />
        <button id="btn" />
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        theme: String
    },
     methods(){
        this.theme == "lightTheme" ? btn.classList.add("light") : btn.classList.add("dark")
    }
}
</script>

<style>

.light{
    background-color: #c11;
}

.dark{
    background-color: #000;
}
</style>
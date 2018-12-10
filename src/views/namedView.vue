<template>
    <div>
        <router-view ></router-view>
        <div class="myContainer">
            <router-view name="left"></router-view>
            <router-view name="main"></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.myContainer{
    height:calc(100vh - 60px);
    position: relative;
}
</style>

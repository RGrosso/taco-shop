<template>
    <main class="container restaurant">
        <h1 class="header">Restaurants</h1>
        <AppRestaurantInfo />
    </main>
</template>

<script>
   import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue';
   
   export default {
       components: {
           AppRestaurantInfo
       },
   };
</script>

<style lang="scss" scoped>
.header {
    text-align: center;
    padding: 20px 0;
}
</style>
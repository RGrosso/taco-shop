<template>
  <div>
    <main class="container">
      <AppHeader/>
      <AppRestaurantInfo />
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue';

export default {
  components: {
    AppHeader,
    AppRestaurantInfo,
  },
};
</script>

<style>

</style>

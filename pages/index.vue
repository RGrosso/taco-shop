<template>
  <div>
    <main class="container">
      <AppHeader />
      <AppRestaurantInfo :datasource="fooddata" />
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppHeader,
    AppRestaurantInfo,
  },
  computed: {
    ...mapState(["fooddata"]),
  },
};
</script>

<style>
</style>

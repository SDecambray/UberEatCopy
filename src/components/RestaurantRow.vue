<template>
  <div class="restaurant--row">
    <h2 class="title">Nos restaurants</h2>
    <div class="restaurant--cards">
      <div class="wrapper--card">
        <router-link
          class="restaurat--wrapper"
          :to="{ name: 'Restaurant', params: { name: restaurant.name } }"
          v-for="(restaurant, index) in three_restaurant"
          :key="index"
        >
          <restaurant-card :info_restaurant="restaurant" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RestaurantCard from './RestaurantCard.vue';
export default {
  name: 'RestaurantRow',
  components: {
    RestaurantCard,
  },
  props: {
    three_restaurant: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.title {
  font-size: 2rem;
}
.wrapper--card {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
}
.restaurat--wrapper {
  width: 32%;
}
</style>

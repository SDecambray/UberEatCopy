<template>
  <RouterLink to="/">
    <div class="return">Retour a la home</div>
  </RouterLink>
  <p>{{ restaurant.name }}</p>
  <p>{{ restaurant.note }}</p>
  <p>{{ restaurant.drive_time }}</p>
  <img :src="restaurant.image" alt="" />
</template>

<script>
import BDD from '../BDD';
import { useRoute } from 'vue-router';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Restaurant',
  setup() {
    const route = useRoute();

    const restaurant = BDD.find(
      (restaurant) => restaurant.name === route.params.name
    );
    console.log(restaurant);
    return { restaurant };
  },
};
</script>

<style lang="scss" scoped>
.return {
  margin: 25px 40px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
}
</style>

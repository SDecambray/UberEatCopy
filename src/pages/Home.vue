<template>
  <div class="home">
    <div class="header">
      <img
        src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg"
        alt=""
        srcset=""
      />
      <div class="wrapper--input">
        <input
          type="text"
          placeholder="Rechercher un restaurant"
          v-model="user_search_restaurant"
        />
        <div class="search">
          <router-link
            class="container--link"
            v-for="(restaurant, i) in searchRestaurant"
            :key="i"
            :to="{ name: 'Restaurant', params: { name: restaurant.name } }"
          >
            <div class="container--restaurant">
              <div class="wrapper--img">
                <img :src="restaurant.image" alt="" />
              </div>
              <p>{{ restaurant.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="banner"></div>
    <restaurant-row
      v-for="(data, i) in data_restaurants"
      :key="i"
      :three_restaurant="data"
    />
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import BDD from '../BDD';
import RestaurantRow from '../components/RestaurantRow.vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    RestaurantRow,
  },
  setup() {
    class Restaurant {
      constructor(name, note, drive_time, image) {
        this.name = name;
        this.note = note;
        this.drive_time = drive_time;
        this.image = image;
      }
    }

    let data_restaurants = ref([]);
    let allRestaurants = [];

    const makeDataRestaurants = () => {
      let three_restaurants = [];

      for (const restaurant of BDD) {
        const newRestaurant = new Restaurant(
          restaurant.name,
          restaurant.note,
          restaurant.drive_time,
          restaurant.image
        );
        allRestaurants.push(newRestaurant);
        if (three_restaurants.length === 2) {
          three_restaurants.push(newRestaurant);
          data_restaurants.value.push(three_restaurants);
          three_restaurants = [];
        } else {
          three_restaurants.push(newRestaurant);
        }
      }
    };

    let user_search_restaurant = ref('');
    let searchRestaurant = ref([]);

    watch(user_search_restaurant, (newValue) => {
      let regex = RegExp(newValue.toLowerCase());

      let newSearchRestaurant = allRestaurants.filter((restaurant) =>
        regex.test(restaurant.name.toLowerCase())
      );
      console.log(newSearchRestaurant);
      newValue === ''
        ? ((searchRestaurant.value = []), console.log('caca'))
        : ((searchRestaurant.value = newSearchRestaurant),
          console.log(searchRestaurant.value));
    });

    onMounted(makeDataRestaurants);

    return {
      searchRestaurant,
      user_search_restaurant,
      data_restaurants,
    };
  },
};
</script>

<style lang="scss">
.home {
  .header {
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      max-width: 200px;
    }
    input {
      background-color: #f6f6f6;
      border: none;
      height: 60px;
      width: 400px;
      outline: none;
      padding-left: 20px;
    }
    .container--restaurant {
      display: flex;
      align-items: center;
      padding: 10px;
      .wrapper--img {
        width: 60px;
        height: 60px;
        margin-right: 25px;
        img {
          width: auto;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
        }
      }
      h2 {
        font-size: 1.5rem;
      }
    }
    .wrapper--input {
      position: relative;
    }
    .search {
      position: absolute;
      top: 100%;
      width: 100%;
      background-color: white;
    }
    .container--link {
      &:hover {
        background-color: #f6f6f6;
      }
    }
  }
  .banner {
    height: 200px;
    width: 100%;
    background-color: 'https://imgs.search.brave.com/t8Re3XT0u3P8uKlDcRU4c9S8BDrsHWRAxYJPV1UWEl8/rs:fit:1200:461:1/g:ce/aHR0cHM6Ly93aWZp/dXBsb2Fkcy5zMy5h/bWF6b25hd3MuY29t/L3VwbG9hZHMvbGlu/ZXMvcGljdHVyZS9p/bWFnZS81Mi91YmVy/ZWF0cy1iYW5uZXIu/anBn';
    background-size: cover;
    background-position: center;
  }
}
</style>

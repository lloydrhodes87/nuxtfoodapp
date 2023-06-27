<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">
          <AppLogo />
        </nuxt-link>
      </li>
      <li><nuxt-link to="/restaurants">Restaurants</nuxt-link></li>
    </ul>
    <div>
      <p class="smallnum" v-if="itemCount > 0">{{ itemCount }}</p>
      <nuxt-link to="/cart">Cart</nuxt-link>
    </div>
  </nav>
</template>

<script>
import AppLogo from "./AppLogo.vue";
import { mapGetters } from "vuex";

export default {
  components: { AppLogo },
  computed: {
    ...mapGetters(["itemCount"]),
  },
};
</script>

<style lang="scss" scoped></style>

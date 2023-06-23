<template>
  <div>
    <pre>{{ currentItem }}</pre>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["fooddata"]),
    currentItem() {
      //   const foundFoodItem = this.fooddata.reduce((acc, curr) => {
      //     const item = curr.menu.filter((item) => item.id === this.id);
      //     if (item.length > 0) {
      //       acc = item[0];
      //     }
      //     return acc;
      //   }, {});
      //   return foundFoodItem;
      //   return this.fooddata.filter((item) => item.id === this.id);
      let result;
      for (let i = 0; i < this.fooddata.length; i++) {
        for (let j = 0; j < this.fooddata[i].menu.length; j++) {
          if (this.fooddata[i].menu[j].id === this.id) {
            result = this.fooddata[i].menu[j];
            break;
          }
        }
      }
      console.log(result);

      return result;
    },
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped></style>

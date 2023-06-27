import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart: [],
});

export const getters = {
  totalPrice: (state) => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((acc, curr) => acc + +curr.combinedPrice, 0);
  },
  itemCount: (state) => {
    return state.cart.length;
  },
};

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
  addToCart: (state, formOutput) => {
    state.cart.push({ id: uuidv4(), ...formOutput });
  },
};

export const actions = {
  async getFoodData({ commit, state }) {
    if (state.fooddata.length) return;
    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "x-api-key": process.env.AWS_API_KEY,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          commit("updateFoodData", data);
        });
    } catch (error) {
      console.log(error);
    }
  },
};

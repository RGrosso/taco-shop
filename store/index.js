import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart: []
});

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4();
    state.cart.push(formOutput);
  }
};

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return;
    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          commit("updateFoodData", data);
        });
    } catch (error) {
      console.warn(error);
      console.warn(
        "Ensure you have .env file in the root directory with the API key."
      );
      // For demostration purposes the .env file should contain the following:
      // AWS_API_KEY=Ni9tok2QGz9xOSKsfBp6q87dnjS8zVmo5t45SGsp
    }
  }
};

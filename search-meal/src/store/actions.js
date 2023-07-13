import axiosClient from "../axiosCient";

export async function searchMeals({ commit }, keyword) {
  const response = await axiosClient.get(`search.php?s=${keyword}`);
  commit("setSearchedMeals", response.data.meals);
}

export async function searchMealsByLetter({ commit }, letter) {
  const response = await axiosClient.get(`search.php?f=${letter}`);
  commit("setMealsByletter", response.data.meals);
}

export async function searchMealsByIngredients({ commit }, ingredient) {
  const response = await axiosClient.get(`filter.php?i=${ingredient}`);
  commit("setMealsByIngredients", response.data.meals);
}

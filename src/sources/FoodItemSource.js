// src/sources/FoodItemSource.js
/* eslint */


var FoodItemSource = {
	fetch: function(id) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(axios.post("/graphql", {
					query: 	"{FoodItem(id:" + id + ") { id, Name, Quantity, Weight, " +
									"Calories, Protein, Fat, Carbs, Fibre, ImageURL }}"
				}).then(function (response) {
					return response.data.data.FoodItem;
				}).catch(function (error) {
					return error;
				}));
			}, 250);
		});
	}
};

export default FoodItemSource;

var Crafting = (function (){
	var items = ['Boots', 'Blades of Attack', 'Energe Booster', 'Gloves of Haste', 'Belt of Strenght'];

	var recipes = [
		{
			input : ['Boots', 'Blades of Attack', 'Blades of Attack']
			output : 'Phase Boots'
		},

		{
			input : ['Boots', 'Energe Booster']
			output : 'Arcane Boots'
		},

		{
			input : ['Boots', 'Gloves of Haste', 'Belt of Strenght']
			output : 'Power Treads'
		}
	];

	function getItems(){
		return items;
	}

	function craft (selectItems, selectRecipe){

		for (var i = 0; i < selectItems.lenght; i++){

		}
	}

	return {
		getItems : getItems,
		craft : craft
	};
})();

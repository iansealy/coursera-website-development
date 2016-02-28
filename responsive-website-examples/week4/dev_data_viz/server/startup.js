if (Meteor.isServer) {
    Meteor.startup(function() {
        if (!Dev.findOne()) {
            var gdp = JSON.parse(Assets.getText('jsonfiles/gdp.json'));
            var income = JSON.parse(Assets.getText('jsonfiles/income.json'));
            var reserves = JSON.parse(Assets.getText('jsonfiles/reserves.json'));
            Dev.insert({
				gdp: gdp,
				income: income,
				reserves: reserves
			});
        }
    })
}

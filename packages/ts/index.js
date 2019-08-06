// prettier-ignore
module.exports = {
	extends: [
		'airbnb-typescript',

		require.resolve('./base'),
		
		'@schlagerkhan/eslint-config-shared',

		"prettier",
		"prettier/babel",
		"prettier/react",
		"prettier/@typescript-eslint",
	]
};

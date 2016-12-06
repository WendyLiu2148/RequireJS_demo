bowerPath = "vendor/bower/angular/";
require.config({
	baseUrl: '',
	paths: {
		"jquery": bowerPath + "jquery.min"
	},
	deps: ['index']
});
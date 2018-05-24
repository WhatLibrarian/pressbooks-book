let mix = require( 'laravel-mix' );

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

const dist = 'dist';
const infusion = 'node_modules/infusion/src/framework';

mix
	.setPublicPath( 'dist' )
	.scripts(
		'node_modules/infusion/dist/infusion-uio-no-jquery.js',
		'dist/scripts/uio.js'
	)
	.scripts( 'node_modules/sharer.js/sharer.js', 'dist/scripts/sharer.js' )
	.js( 'assets/src/scripts/book.js', 'dist/scripts/book.js' )
	.js(
		'assets/src/scripts/collapse-sections.js',
		'dist/scripts/collapse-sections.js'
	)
	.sass( 'assets/src/styles/book.scss', 'dist/styles' )
	.sass( 'assets/legacy/styles/web-house-style.scss', 'dist/styles' )
	.copy( `${infusion}/core/css/fluid.css`, 'dist/styles' )
	.copy( `${infusion}/preferences/css/Enactors.css`, 'dist/styles' )
	.copy( `${infusion}/preferences/css/PrefsEditor.css`, 'dist/styles' )
	.copy(
		`${infusion}/preferences/css/SeparatedPanelPrefsEditor.css`,
		'dist/styles'
	)
	.copy( `${infusion}/preferences/fonts/PrefsFramework-Icons.ttf`, 'dist/fonts' )
	.copyDirectory(
		'node_modules/infusion/src/components/tableOfContents/html',
		'lib/uio/toc/html'
	)
	.copyDirectory( `${infusion}/preferences/html`, 'lib/uio/preferences/html' )
	.copyDirectory(
		`${infusion}/preferences/messages`,
		'lib/uio/preferences/messages'
	)
	.copyDirectory( 'node_modules/buckram/assets/styles', 'assets/book/styles' )
	.copyDirectory( 'node_modules/buckram/assets/images', 'assets/book/images' )
	.copyDirectory( 'assets/src/images', 'dist/images' )
	.version()
	.options( { processCssUrls: false } );

// BrowserSync
mix.browserSync( {
	host:  'localhost',
	proxy: 'https://pressbooks.test/standardtestbook',
	port:  3200,
	files: [ '*.php', '', `${dist}/**/*.css`, `${dist}/**/*.js` ],
} );

// Source maps when not in production.
if ( ! mix.inProduction() ) {
	mix.sourceMaps();
}

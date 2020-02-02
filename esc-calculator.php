<?php

/**
 * Plugin Name: Erosion and Sediment Control Calculator
 * Plugin URI: http://www.xsanisty.com/contact
 * Description: Erosion and Sediment Control Calculator
 * Version: 1.0.0
 * Author: Xsanisty
 * Author URI: http://www.xsanisty.com
 * License: Propietary
 * Changelog:
 *       1.0.0  Initial version
 */
$escPath   = plugin_dir_path(__FILE__);
$escUrl    = plugins_url() . '/esc-calculator/';
$mapApiKey = 'AIzaSyDrghmFkk775QglqoFvaLGqI-36oURYNqQ';

$registerAssets = function () use ($mapApiKey, $escUrl) {
    /** prepare javascript assets */
    $prepareJs = function ($file, $name, $version = '') use ($escUrl) {
        wp_register_script($name, $escUrl . 'assets/' . $file, [], $version, true);
    };

    /** prepare css assets */
    $prepareCss = function ($file, $name, $version = '') use ($escUrl) {
        wp_register_style($name, $escUrl . 'assets/' . $file, [], $version, false);
    };


    /** prepare calculator assets */
    $prepareJs('vendor/bootstrap/js/bootstrap.bundle.min.js', 'esc-bootstrap', '4.1.3');
    $prepareJs('vendor/jquery-easing/jquery.easing.min.js', 'esc-jquery-easing', '1.0.0');
    $prepareJs('js/jquery-calx/jquery-calx-2.2.7.min.js', 'esc-jquery-calx', '2.2.7');
    $prepareJs('js/jquery-calx/numeral.min.js', 'esc-numeral', '1.4.5');
    $prepareJs('js/esc-calculator.js', 'esc-calculator', '1.0.2');
    wp_register_script( 'esc-google-map', 'https://maps.googleapis.com/maps/api/js?key=' . $mapApiKey . '&callback=initMap', 'v3');

    $prepareCss('vendor/bootstrap/css/bootstrap.min.css', 'esc-css-bootstrap', '4.1.3');
    $prepareCss('css/app.css', 'esc-css-app', '1.0.2');
};


add_action('wp_head', function() use ($escUrl) {
    echo '<script>var escCalcDataUrl = "' . $escUrl . '/assets/js/esc_model.json?v=6";</script>';
});

add_shortcode(
    'esc_calculator',
    function ($options) use ($escUrl, $registerAssets) {
        $registerAssets();

        wp_enqueue_script('esc-bootstrap');
        wp_enqueue_script('esc-jquery-easing');
        wp_enqueue_script('esc-numeral');
        wp_enqueue_script('esc-jquery-calx');
        wp_enqueue_script('esc-calculator');
        wp_enqueue_script('esc-google-map');

        wp_enqueue_style('esc-css-bootstrap');
        wp_enqueue_style('esc-css-app');

        /** prepare view */
        ob_start();

        include 'templates/main.php';

        return ob_get_clean();
    }
);
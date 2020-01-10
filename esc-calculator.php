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

$registerAssets = function () use ($escPath, $escUrl) {
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
    $prepareJs('js/raphael.min.js', 'esc-raphael', '2.3.0');
    $prepareJs('js/mapael/jquery.mapael.min.js', 'esc-mapael', '1.0.0');
    $prepareJs('js/mapael/maps/new_zealand.js', 'esc-mapael-map-nz', '1.0.0');
    $prepareJs('js/stylish-portfolio.js', 'esc-portfolio', '1.0.0');
    $prepareJs('js/stylish-portfolio.js', 'esc-portfolio', '1.0.0');
    $prepareJs('js/defaults.js', 'esc-default', '1.0.0');
    $prepareJs('js/esc-calculator.js', 'esc-calculator', '1.0.0');

    $prepareCss('vendor/bootstrap/css/bootstrap.min.css', 'esc-css-bootstrap', '4.1.3');
    $prepareCss('css/app.css', 'esc-css-app', '1.0.0');
};


add_shortcode(
    'esc_calculator',
    function ($options) use ($registerAssets) {
        $registerAssets();

        wp_enqueue_script('esc-bootstrap');
        wp_enqueue_script('esc-jquery-easing');
        wp_enqueue_script('esc-raphael');
        wp_enqueue_script('esc-mapael');
        wp_enqueue_script('esc-mapael-map-nz');
        wp_enqueue_script('esc-portfolio');
        wp_enqueue_script('esc-default');
        wp_enqueue_script('esc-calculator');

        wp_enqueue_style('esc-css-bootstrap');
        wp_enqueue_style('esc-css-app');

        /** prepare view */
        ob_start();
        require 'templates/index.php';

        return ob_get_clean();
    }
);
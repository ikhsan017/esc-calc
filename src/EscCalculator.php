<?php

namespace Xsanisty;

use \Requirements;
use \SSViewer;
use \ArrayData;

class EscCalculator
{
    protected $mapApiKey = null;

    protected function prepareAssets()
    {
        Requirements::javascript(ESC_CALC_PATH . '/javascript/vendor/jquery/jquery.min.js');
        Requirements::javascript(ESC_CALC_PATH . '/javascript/vendor/jquery-easing/jquery.easing.min.js');
        Requirements::javascript(ESC_CALC_PATH . '/javascript/jquery-calx/numeral.min.js');
        Requirements::javascript(ESC_CALC_PATH . '/javascript/jquery-calx/jquery-calx-2.2.7.min.js');
        Requirements::javascript(ESC_CALC_PATH . '/javascript/jspdf.min.js');
        Requirements::javascript(ESC_CALC_PATH . '/javascript/esc-model.js');
        Requirements::javascript(ESC_CALC_PATH . '/javascript/esc-calculator.js');
        Requirements::javascript('https://maps.googleapis.com/maps/api/js?key=' . $this->mapApiKey . '&callback=initMap');

        Requirements::css(ESC_CALC_PATH . '/css/app.css');
    }

    public function render($arguments, $address, $parser, $shortcode)
    {
        $this->mapApiKey = isset($arguments['mapApiKey']) ? $arguments['mapApiKey'] : '';

        $this->prepareAssets();

        $view   = new SSViewer('main');
        $data   = new ArrayData([
            'ModulePath' => ESC_CALC_PATH
        ]);

        $template = $view->process($data);

        return $template;
    }

    public function __invoke($arguments, $address, $parser, $shortcode)
    {
        return $this->render($arguments, $address, $parser, $shortcode);
    }
}
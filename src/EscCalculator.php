<?php

namespace Xsanisty;

use SilverStripe\View\Requirements;
use SilverStripe\View\SSViewer;
use SilverStripe\View\ArrayData;
use SilverStripe\Core\Manifest\ModuleLoader;

class EscCalculator
{
    protected $mapApiKey = null;

    protected function prepareAssets()
    {
        Requirements::javascript('xsanisty/esc-calculator:assets/js/jquery/jquery.min.js');
        Requirements::javascript('xsanisty/esc-calculator:assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
        Requirements::javascript('xsanisty/esc-calculator:assets/vendor/jquery-easing/jquery.easing.min.js');
        Requirements::javascript('xsanisty/esc-calculator:assets/js/jquery-calx/numeral.min.js');
        Requirements::javascript('xsanisty/esc-calculator:assets/js/jquery-calx/jquery-calx-2.2.7.min.js');
        Requirements::javascript('xsanisty/esc-calculator:assets/js/jspdf.min.js');
        Requirements::javascript('xsanisty/esc-calculator:assets/js/esc-model.js');
        Requirements::javascript('xsanisty/esc-calculator:assets/js/esc-calculator.js');
        Requirements::javascript('https://maps.googleapis.com/maps/api/js?key=' . $this->mapApiKey . '&callback=initMap');


        Requirements::css('xsanisty/esc-calculator:assets/vendor/bootstrap/css/bootstrap.min.css');
        Requirements::css('xsanisty/esc-calculator:assets/vendor/fontawesome/css/solid.min.css');
        Requirements::css('xsanisty/esc-calculator:assets/css/app.css');
    }

    public function render($arguments, $address, $parser, $shortcode)
    {
        $this->mapApiKey = isset($arguments['mapApiKey']) ? $arguments['mapApiKey'] : '';

        $this->prepareAssets();

        SSViewer::setRewriteHashLinksDefault(false);
        $view   = new SSViewer('main');
        $data   = new ArrayData([
            'ModulePath' => ModuleLoader::getModule('xsanisty/esc-calculator')->getResource('assets')->getUrl()
        ]);

        $template = $view->process($data);

        return $template;
    }

    public function __invoke($arguments, $address, $parser, $shortcode)
    {
        return $this->render($arguments, $address, $parser, $shortcode);
    }
}
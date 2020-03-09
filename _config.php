<?php
use Xsanisty\EscCalculator;

define('ESC_CALC_PATH', basename(dirname(__FILE__)));

ShortcodeParser::get('default')->register('esc_calculator', new EscCalculator);

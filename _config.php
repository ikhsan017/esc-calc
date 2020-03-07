<?php
use SilverStripe\View\Parsers\ShortcodeParser;
use Xsanisty\EscCalculator;

ShortcodeParser::get('default')->register('esc_calculator', new EscCalculator);

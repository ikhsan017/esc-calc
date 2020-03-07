## Installation

add following line to your silverstripe's ```composer.json``` in ```repositories``` section

```
"repositories": [
    {
        "type" : "vcs",
        "url"  : "https://github.com/ikhsan017/esc-calc"
    }
]
```

and require the module

```
"require" : {
    "xsanisty/esc-calculator" : "dev-silverstripe"
}
```

then run composer update

## Implementation

You can add the calculator inside any page using the following shortcode

```
[esc_calculator mapApiKey='your_google_map_api_key']
```
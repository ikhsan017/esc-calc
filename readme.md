##Installation

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
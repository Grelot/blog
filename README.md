# blog

## init

Creates the directory structure used by Zola at the given directory.
```
zola init my_site
```

## build

This will build the whole site in the [public](public) directory after deleting it.
```
zola build
```

## serve

This will build and serve the site using a local server. You can also specify the interface/port combination to use if you want something different than the default (127.0.0.1:1111).

You can also specify different addresses for the interface and base_url using -u/--base-url, for example if you are running zola in a Docker container.

In the event you don't want zola to run a local webserver, you can use the --watch-only flag.

Before starting, it will delete the public directory to ensure it starts from a clean slate.

```
zola serve
zola serve --port 2000
zola serve --interface 0.0.0.0
zola serve --interface 0.0.0.0 --port 2000
zola serve --interface 0.0.0.0 --base-url 127.0.0.1
zola serve --interface 0.0.0.0 --port 2000 --output-dir www/public
zola serve --watch-only
```



## Pictures for macro git twitter etc

https://github.com/insipx/Ergo/blob/master/templates/macros.html
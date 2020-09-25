# Proxy Test

The repo contains a bunch of proxy tests using various Node.js HTTP client libraries. It uses a
Squid HTTP Proxy Docker image.

## Starting the proxy server

Self signed cert, no CA bundle.

	./run.sh

Self signed cert, CA bundle.

	./run-foobardev.sh

Add this to your `/etc/hosts`:

	127.0.0.1 foobardev.com

# Running the tests

	node client-<type>.js

Toggle between the http (port 3128) and https (port 3129) proxy settings and test the http and
https destination URLs.

## Create the Docker image

Not sure if you _need_ to do this.

```
docker create \
   --name squid \
   -e TZ=Europe/London \
   -e PROXY_UID=13 \
   -e PROXY_GID=13 \
   -v SomePath:/etc/squid \
   -v SomePath:/var/log/squid \
   -v SomePath:/var/spool/squid \
   -p 3128:3128 \
   -p 3129:3129 \
   distahl/squid
```

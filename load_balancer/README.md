# Load balancer for Lorem IP
[nginx](https://nginx.org/en) reverse proxy running in Docker.

nginx listens on port 80 on ipv4 and ipv6.

It expects a dns lookup of the domain `ipsum` to return a list of servers and then routes traffic to port 3000 on them using round robin.

Logging is done to stdout and stderr with the expectation that docker will save this to a file or logging server.

## Known issues
 * __SSL needs to be set up before launch__ Mozilla provides a good [SSL config generator](https://ssl-config.mozilla.org).

## How to run
Start it via the docker-compose using the file in the [parent directory](../docker-compose.yaml). See that [README](../README.md) for more details.

## License
[GPLv3](../LICENSE)

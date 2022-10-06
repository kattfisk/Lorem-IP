# Lorem IP
Serves lorem ipsum fast and reliably.

Uses docker-compose to run multiple instances of the [Ipsum web service](/ipsum) with an [nginx load balancer](/load_balancer).

## Requirements
 * Docker 20.10 or later
 * docker-compose (or version of Docker with compose command)

## How to run
```
docker-compose up --scale ipsum=5
```
This starts 5 instances of the Ipsum service, change this number according to your needs and resources.

The service is then reachable on [port 80](http://127.0.0.1:80) on the machine.

## Known issues
 * SSL is not configured and __needs__ to be set up in nginx before launch.
 * Ports and hostname are currently hard coded. They should be moved to environment variables.
 * The compose file binds to port 80 on __all interfaces__. __This is dangerous on a developers machine__ as it makes the service reachable over the network. While developing it should bind only to loopback (127.0.0.1 and [::1]).

## Improvements
 * Strongly consider moving to kubernetes instead of docker-compose for orchestration. Kubernetes is much more reliable and powerful.
 * Consider adding a cache for better performance.
 * Save docker logs to a log server or a file.

## Contributing
 * We welcome pull requests and issues.

## License
[GPLv3](LICENSE)

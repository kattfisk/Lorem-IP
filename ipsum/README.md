# Ipsum
Serves static HTML containing lorem ipsum using node.js and express.

## Requirements
node.js 18.10 (older versions very likely work)

## How to run
```
npm start
```
By default it will listen on port 3000, change this with the environment variable `IPSUM_PORT`.

## Security
Ipsum uses [helmet](https://www.npmjs.com/package/helmet) to set a variety of security-related headers. As the project grows in complexity these might need to be changed to enable functionality which is currently blocked. Keep in mind that these headers are there to help keep the app safe and all exist for a good reason. Make the smallest possible exceptions and ensure you understand the implications of your changes. When in doubt ask your friendly security team for help.

## Known issues
 * Has no tests
 * Has no logging

## License
[GPLv3](LICENSE)

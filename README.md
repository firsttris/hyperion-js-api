:collision: small JavaScript interface for [Hyperion](https://github.com/hyperion-project/hyperion)
###Install
[![npm version](https://badge.fury.io/js/hyperion-js-api.svg)](https://badge.fury.io/js/hyperion-js-api)
[![Dependency Status](https://david-dm.org/firsttris/hyperion-js-api.svg)](https://david-dm.org/firsttris/hyperion-js-api) 
```
npm install hyperion-js-api
```

Features:

- Control color and brightness of TV Blacklight.

- Switch ambilight on/off. (optional)

- Get current state

###Basic Usage

```
const hyperion = new (require('hyperion-js-api'))("20.1.0.142",19444);
hyperion.setOn();
hyperion.setColor(this.hyperion.COLORS.RED);
hyperion.setOff();
```
###Tests
Eind more examples in /test directory.

Enter you hyperion server connection in package.json, and run some tests!
```
  "hyperion": {
    "host": "20.1.0.138",
    "fakeHost": "20.1.0.139",
    "port": "19444"
  }
```

run a single test from commandline with:
```
mocha test/hyperion.spec.js -g "setOff should switch off"
```
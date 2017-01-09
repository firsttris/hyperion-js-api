:collision: lightweight JavaScript interface for [Hyperion](https://github.com/hyperion-project/hyperion)
###Install
[![npm version](https://badge.fury.io/js/hyperion-js-api.svg)](https://badge.fury.io/js/hyperion-js-api)
[![Dependency Status](https://david-dm.org/firsttris/hyperion-js-api.svg)](https://david-dm.org/firsttris/hyperion-js-api) 
```
npm install hyperion-js-api
```

Features:

- Control color and brightness of tv blacklight.

- Switch ambilight on/off. (optional)

- Get current state/color

###Basic Usage

```
const hyperion = new (require('hyperion-js-api'))("20.1.0.142",19444);
hyperion.setOn();
hyperion.getOn((error, response) => {
});
hyperion.setOff();
hyperion.setColor(hyperion.color.rgb(255, 0, 0));
hyperion.getColor((error, response) => {
});
hyperion.setBrightness(this.selectedColor.value());
hyperion.getBrightness((error, response) => {
});
hyperion.setHue(this.selectedColor.hue());
hyperion.getHue((error, response) => {
});
hyperion.setSaturation(this.selectedColor.saturationv());
hyperion.getSaturation((error, response) => {
});
```
###Tests
Find more examples in "test" directory.

Enter you hyperion server connection in package.json, and run some tests!
```
  "hyperion": {
    "host": "20.1.0.138",
    "port": "19444"
  }
```

run a single test from commandline with:
```
mocha test/hyperion.spec.js -g "setOff should switch off"
```
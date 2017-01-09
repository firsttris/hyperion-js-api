const assert = require('assert');
const Hyperion = require('./../index');
const path = require('path');
const fs = require('fs');
const packageJsonPath = path.join(__dirname, './../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

describe('Test Hyperion', function () {

    before(function () {
        this.hyperion = new Hyperion(packageJson.hyperion.host, packageJson.hyperion.port);
    });

    describe('Timeout Test', function () {
        before(function () {
            this.hyperion = new Hyperion(packageJson.hyperion.fakeHost, packageJson.hyperion.port);
        });

        it('getOn should return Backlight status', function (done) {
            this.hyperion.getOn((error, response) => {
                assert.equal(error, "timeout");
                assert.equal(response, false, "should return the current power status");
                console.log("Response: " + response);
                done();
            });
        });
    });

    it('setOn should switch on', function (done) {
        this.hyperion.setOn((error, response) => {
            assert.equal(error, null);
            assert.equal(response.success, true, "returns true for success");
            done();
        });
    });

    it('setOff should switch off', function (done) {
        this.hyperion.setOff((error, response) => {
            assert.equal(error, null);
            assert.equal(response.success, true, "returns true for success");
            done();
        });
    });

    it('getOn should return Backlight status', function (done) {
        this.hyperion.getOn((error, response) => {
            assert.equal(error, null);
            assert.equal(response, false, "should return the current power status");
            console.log("Response: " + response);
            done();
        });
    });

    it('setAmbiState should switch Ambilight on', function (done) {
        this.hyperion.setAmbiStateOn((error, response) => {
            assert.equal(error, null);
            assert.equal(response.success, true, "returns true for success");
            done();
        });
    });

    it('getAmbiState should return Amblight status', function (done) {
        this.hyperion.getAmbiState((error, response) => {
            assert.equal(error, null);
            assert.equal(response, true, "should return the current ambilight power status");
            done();
        });
    });

    it('setColor switch to red', function (done) {
        this.hyperion.setColor(this.hyperion.COLORS.RED, (error, response) => {
            assert.equal(error, null);
            assert.equal(response.success, true, "returns true for success");
            done();
        });
    });

    it('setColor switch to white', function (done) {
        this.hyperion.setColor(this.hyperion.COLORS.WHITE, (error, response) => {
            assert.equal(error, null);
            assert.equal(response.success, true, "returns true for success");
            done();
        });
    });

    it('setBrightness should set brightness', function (done) {
        const red = this.hyperion.color.rgb(255, 255, 255);
        this.hyperion.setBrightness(red.value(), (error, response) => {
            assert.equal(error, null);
            assert.equal(response.success, true, "returns true for success");
            done();
        });
    });

    it('getBrightness should get brightness', function (done) {
        this.hyperion.getBrightness((error, response) => {
            assert.equal(error, null);
            assert.equal(response, 100, "should return the current brightness");
            console.log("Response: " + response);
            done();
        });
    });

    it('setHue should set hue', function (done) {
        const red = this.hyperion.color.rgb(255, 255, 255);
        this.hyperion.setHue(red.hue(), (error, response) => {
            assert.equal(error, null);
            assert.equal(response.success, true, "returns true for success");
            done();
        });
    });

    it('getHue should get hue', function (done) {
        this.hyperion.getHue((error, response) => {
            assert.equal(error, null);
            assert.equal(response, 0, "should return the current hue");
            console.log("Response: " + response);
            done();
        });
    });

    it('setSaturation should set saturation', function (done) {
        const red = this.hyperion.color.rgb(255, 255, 255);
        this.hyperion.setSaturation(red.saturationv(), (error, response) => {
            assert.equal(error, null);
            assert.equal(response.success, true, "returns true for success");
            done();
        });
    });

    it('getSaturation should get saturation', function (done) {
        this.hyperion.getSaturation((error, response) => {
            assert.equal(error, null);
            assert.equal(response, 0, "should return the current saturation");
            console.log("Response: " + response);
            done();
        });
    });

});
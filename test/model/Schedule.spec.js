/**
 * Postman API
 * Postman API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PostmanApi);
  }
}(this, function(expect, PostmanApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PostmanApi.Schedule();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Schedule', function() {
    it('should create an instance of Schedule', function() {
      // uncomment below and update the code to test Schedule
      //var instane = new PostmanApi.Schedule();
      //expect(instance).to.be.a(PostmanApi.Schedule);
    });

    it('should have the property cron (base name: "cron")', function() {
      // uncomment below and update the code to test the property cron
      //var instane = new PostmanApi.Schedule();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new PostmanApi.Schedule();
      //expect(instance).to.be();
    });

    it('should have the property nextRun (base name: "nextRun")', function() {
      // uncomment below and update the code to test the property nextRun
      //var instane = new PostmanApi.Schedule();
      //expect(instance).to.be();
    });

  });

}));

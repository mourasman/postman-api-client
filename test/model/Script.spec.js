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
    instance = new PostmanApi.Script();
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

  describe('Script', function() {
    it('should create an instance of Script', function() {
      // uncomment below and update the code to test Script
      //var instane = new PostmanApi.Script();
      //expect(instance).to.be.a(PostmanApi.Script);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new PostmanApi.Script();
      //expect(instance).to.be();
    });

    it('should have the property exec (base name: "exec")', function() {
      // uncomment below and update the code to test the property exec
      //var instane = new PostmanApi.Script();
      //expect(instance).to.be();
    });

  });

}));

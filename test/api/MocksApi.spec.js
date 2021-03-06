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
    instance = new PostmanApi.MocksApi();
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

  describe('MocksApi', function() {
    describe('allMocks', function() {
      it('should call allMocks successfully', function(done) {
        //uncomment below and update the code to test allMocks
        //instance.allMocks(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createMock', function() {
      it('should call createMock successfully', function(done) {
        //uncomment below and update the code to test createMock
        //instance.createMock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteMock', function() {
      it('should call deleteMock successfully', function(done) {
        //uncomment below and update the code to test deleteMock
        //instance.deleteMock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publishMock', function() {
      it('should call publishMock successfully', function(done) {
        //uncomment below and update the code to test publishMock
        //instance.publishMock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('singleMock', function() {
      it('should call singleMock successfully', function(done) {
        //uncomment below and update the code to test singleMock
        //instance.singleMock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('unpublishMock', function() {
      it('should call unpublishMock successfully', function(done) {
        //uncomment below and update the code to test unpublishMock
        //instance.unpublishMock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMock', function() {
      it('should call updateMock successfully', function(done) {
        //uncomment below and update the code to test updateMock
        //instance.updateMock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

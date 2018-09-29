/**
 * Flashmoov
 * Flashmoov
 *
 * OpenAPI spec version: 2.0.0
 * Contact: tech@flashmoov.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Flashmoov);
  }
}(this, function(expect, Flashmoov) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Flashmoov.Trait();
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

  describe('Trait', function() {
    it('should create an instance of Trait', function() {
      // uncomment below and update the code to test Trait
      //var instane = new Flashmoov.Trait();
      //expect(instance).to.be.a(Flashmoov.Trait);
    });

    it('should have the property traitSuperclassOf (base name: "trait-superclass-of")', function() {
      // uncomment below and update the code to test the property traitSuperclassOf
      //var instane = new Flashmoov.Trait();
      //expect(instance).to.be();
    });

    it('should have the property trait (base name: "trait")', function() {
      // uncomment below and update the code to test the property trait
      //var instane = new Flashmoov.Trait();
      //expect(instance).to.be();
    });

  });

}));

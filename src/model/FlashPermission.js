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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DateTimeInterval', 'model/GeoJsonGeometryCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DateTimeInterval'), require('./GeoJsonGeometryCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.Flashmoov) {
      root.Flashmoov = {};
    }
    root.Flashmoov.FlashPermission = factory(root.Flashmoov.ApiClient, root.Flashmoov.DateTimeInterval, root.Flashmoov.GeoJsonGeometryCollection);
  }
}(this, function(ApiClient, DateTimeInterval, GeoJsonGeometryCollection) {
  'use strict';




  /**
   * The FlashPermission model module.
   * @module model/FlashPermission
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>FlashPermission</code>.
   * @alias module:model/FlashPermission
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FlashPermission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlashPermission} obj Optional instance to populate.
   * @return {module:model/FlashPermission} The populated <code>FlashPermission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interval')) {
        obj['interval'] = DateTimeInterval.constructFromObject(data['interval']);
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = GeoJsonGeometryCollection.constructFromObject(data['location']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DateTimeInterval} interval
   */
  exports.prototype['interval'] = undefined;
  /**
   * @member {module:model/GeoJsonGeometryCollection} location
   */
  exports.prototype['location'] = undefined;



  return exports;
}));



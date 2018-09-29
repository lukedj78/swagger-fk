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
    define(['ApiClient', 'model/SocialInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SocialInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Flashmoov) {
      root.Flashmoov = {};
    }
    root.Flashmoov.FlashInitBody = factory(root.Flashmoov.ApiClient, root.Flashmoov.SocialInfo);
  }
}(this, function(ApiClient, SocialInfo) {
  'use strict';




  /**
   * The FlashInitBody model module.
   * @module model/FlashInitBody
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>FlashInitBody</code>.
   * @alias module:model/FlashInitBody
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FlashInitBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlashInitBody} obj Optional instance to populate.
   * @return {module:model/FlashInitBody} The populated <code>FlashInitBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = SocialInfo.constructFromObject(data['owner']);
      }
    }
    return obj;
  }

  /**
   * @member {String} appId
   */
  exports.prototype['appId'] = undefined;
  /**
   * @member {module:model/SocialInfo} owner
   */
  exports.prototype['owner'] = undefined;



  return exports;
}));



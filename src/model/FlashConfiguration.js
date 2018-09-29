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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Flashmoov) {
      root.Flashmoov = {};
    }
    root.Flashmoov.FlashConfiguration = factory(root.Flashmoov.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FlashConfiguration model module.
   * @module model/FlashConfiguration
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>FlashConfiguration</code>.
   * @alias module:model/FlashConfiguration
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>FlashConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FlashConfiguration} obj Optional instance to populate.
   * @return {module:model/FlashConfiguration} The populated <code>FlashConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maxTitle')) {
        obj['maxTitle'] = ApiClient.convertToType(data['maxTitle'], 'Number');
      }
      if (data.hasOwnProperty('maxDescription')) {
        obj['maxDescription'] = ApiClient.convertToType(data['maxDescription'], 'Number');
      }
      if (data.hasOwnProperty('maxVideoContent')) {
        obj['maxVideoContent'] = ApiClient.convertToType(data['maxVideoContent'], 'Number');
      }
      if (data.hasOwnProperty('maxAudioContent')) {
        obj['maxAudioContent'] = ApiClient.convertToType(data['maxAudioContent'], 'Number');
      }
      if (data.hasOwnProperty('maxImageContent')) {
        obj['maxImageContent'] = ApiClient.convertToType(data['maxImageContent'], 'Number');
      }
      if (data.hasOwnProperty('maxTextContent')) {
        obj['maxTextContent'] = ApiClient.convertToType(data['maxTextContent'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} maxTitle
   * @default 256
   */
  exports.prototype['maxTitle'] = 256;
  /**
   * @member {Number} maxDescription
   * @default 256
   */
  exports.prototype['maxDescription'] = 256;
  /**
   * @member {Number} maxVideoContent
   * @default 256
   */
  exports.prototype['maxVideoContent'] = 256;
  /**
   * @member {Number} maxAudioContent
   * @default 256
   */
  exports.prototype['maxAudioContent'] = 256;
  /**
   * @member {Number} maxImageContent
   * @default 256
   */
  exports.prototype['maxImageContent'] = 256;
  /**
   * @member {Number} maxTextContent
   * @default 256
   */
  exports.prototype['maxTextContent'] = 256;



  return exports;
}));



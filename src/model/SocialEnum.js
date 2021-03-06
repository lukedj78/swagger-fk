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
    root.Flashmoov.SocialEnum = factory(root.Flashmoov.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class SocialEnum.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "facebook"
     * @const
     */
    "facebook": "facebook",
    /**
     * value: "instagram"
     * @const
     */
    "instagram": "instagram",
    /**
     * value: "twitter"
     * @const
     */
    "twitter": "twitter"  };

  /**
   * Returns a <code>SocialEnum</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/SocialEnum} The enum <code>SocialEnum</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));



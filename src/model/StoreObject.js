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
    define(['ApiClient', 'model/Meta', 'model/Trait'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Trait'));
  } else {
    // Browser globals (root is window)
    if (!root.Flashmoov) {
      root.Flashmoov = {};
    }
    root.Flashmoov.StoreObject = factory(root.Flashmoov.ApiClient, root.Flashmoov.Meta, root.Flashmoov.Trait);
  }
}(this, function(ApiClient, Meta, Trait) {
  'use strict';




  /**
   * The StoreObject model module.
   * @module model/StoreObject
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>StoreObject</code>.
   * @alias module:model/StoreObject
   * @class
   * @extends module:model/Trait
   * @param traitSuperclassOf {module:model/Trait.TraitSuperclassOfEnum} 
   */
  var exports = function(traitSuperclassOf) {
    var _this = this;
    Trait.call(_this, traitSuperclassOf);



  };

  /**
   * Constructs a <code>StoreObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreObject} obj Optional instance to populate.
   * @return {module:model/StoreObject} The populated <code>StoreObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Trait.constructFromObject(data, obj);
      if (data.hasOwnProperty('storeobject-superclass-of')) {
        obj['storeobject-superclass-of'] = ApiClient.convertToType(data['storeobject-superclass-of'], 'String');
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Meta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(Trait.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/StoreObject.StoreobjectSuperclassOfEnum} storeobject-superclass-of
   */
  exports.prototype['storeobject-superclass-of'] = undefined;
  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {module:model/Meta} meta
   */
  exports.prototype['meta'] = undefined;


  /**
   * Allowed values for the <code>storeobject-superclass-of</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StoreobjectSuperclassOfEnum = {
    /**
     * value: "Actor"
     * @const
     */
    "Actor": "Actor",
    /**
     * value: "Flash"
     * @const
     */
    "Flash": "Flash",
    /**
     * value: "CardInteraction"
     * @const
     */
    "CardInteraction": "CardInteraction",
    /**
     * value: "TemporarySocialLogin"
     * @const
     */
    "TemporarySocialLogin": "TemporarySocialLogin"  };


  return exports;
}));



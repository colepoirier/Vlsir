// source: circuit.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.circuit.Package');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.circuit.ExternalModule');
goog.require('proto.vlsir.circuit.Module');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vlsir.circuit.Package = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.circuit.Package.repeatedFields_, null);
};
goog.inherits(proto.vlsir.circuit.Package, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.circuit.Package.displayName = 'proto.vlsir.circuit.Package';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.circuit.Package.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vlsir.circuit.Package.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.circuit.Package.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.circuit.Package} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Package.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modulesList: jspb.Message.toObjectList(msg.getModulesList(),
    proto.vlsir.circuit.Module.toObject, includeInstance),
    extModulesList: jspb.Message.toObjectList(msg.getExtModulesList(),
    proto.vlsir.circuit.ExternalModule.toObject, includeInstance),
    desc: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vlsir.circuit.Package}
 */
proto.vlsir.circuit.Package.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.circuit.Package;
  return proto.vlsir.circuit.Package.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.circuit.Package} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.circuit.Package}
 */
proto.vlsir.circuit.Package.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = new proto.vlsir.circuit.Module;
      reader.readMessage(value,proto.vlsir.circuit.Module.deserializeBinaryFromReader);
      msg.addModules(value);
      break;
    case 3:
      var value = new proto.vlsir.circuit.ExternalModule;
      reader.readMessage(value,proto.vlsir.circuit.ExternalModule.deserializeBinaryFromReader);
      msg.addExtModules(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vlsir.circuit.Package.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.circuit.Package.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.circuit.Package} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Package.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vlsir.circuit.Module.serializeBinaryToWriter
    );
  }
  f = message.getExtModulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vlsir.circuit.ExternalModule.serializeBinaryToWriter
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.vlsir.circuit.Package.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.circuit.Package} returns this
 */
proto.vlsir.circuit.Package.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Module modules = 2;
 * @return {!Array<!proto.vlsir.circuit.Module>}
 */
proto.vlsir.circuit.Package.prototype.getModulesList = function() {
  return /** @type{!Array<!proto.vlsir.circuit.Module>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.circuit.Module, 2));
};


/**
 * @param {!Array<!proto.vlsir.circuit.Module>} value
 * @return {!proto.vlsir.circuit.Package} returns this
*/
proto.vlsir.circuit.Package.prototype.setModulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vlsir.circuit.Module=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.circuit.Module}
 */
proto.vlsir.circuit.Package.prototype.addModules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vlsir.circuit.Module, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.circuit.Package} returns this
 */
proto.vlsir.circuit.Package.prototype.clearModulesList = function() {
  return this.setModulesList([]);
};


/**
 * repeated ExternalModule ext_modules = 3;
 * @return {!Array<!proto.vlsir.circuit.ExternalModule>}
 */
proto.vlsir.circuit.Package.prototype.getExtModulesList = function() {
  return /** @type{!Array<!proto.vlsir.circuit.ExternalModule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.circuit.ExternalModule, 3));
};


/**
 * @param {!Array<!proto.vlsir.circuit.ExternalModule>} value
 * @return {!proto.vlsir.circuit.Package} returns this
*/
proto.vlsir.circuit.Package.prototype.setExtModulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vlsir.circuit.ExternalModule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.circuit.ExternalModule}
 */
proto.vlsir.circuit.Package.prototype.addExtModules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vlsir.circuit.ExternalModule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.circuit.Package} returns this
 */
proto.vlsir.circuit.Package.prototype.clearExtModulesList = function() {
  return this.setExtModulesList([]);
};


/**
 * optional string desc = 10;
 * @return {string}
 */
proto.vlsir.circuit.Package.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.circuit.Package} returns this
 */
proto.vlsir.circuit.Package.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



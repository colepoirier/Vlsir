// source: circuit.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.vlsir.circuit.Module');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.circuit.Instance');
goog.require('proto.vlsir.circuit.Parameter');
goog.require('proto.vlsir.circuit.Port');
goog.require('proto.vlsir.circuit.Signal');

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
proto.vlsir.circuit.Module = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.circuit.Module.repeatedFields_, null);
};
goog.inherits(proto.vlsir.circuit.Module, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.circuit.Module.displayName = 'proto.vlsir.circuit.Module';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.circuit.Module.repeatedFields_ = [2,3,4,5];



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
proto.vlsir.circuit.Module.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.circuit.Module.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.circuit.Module} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Module.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    portsList: jspb.Message.toObjectList(msg.getPortsList(),
    proto.vlsir.circuit.Port.toObject, includeInstance),
    signalsList: jspb.Message.toObjectList(msg.getSignalsList(),
    proto.vlsir.circuit.Signal.toObject, includeInstance),
    instancesList: jspb.Message.toObjectList(msg.getInstancesList(),
    proto.vlsir.circuit.Instance.toObject, includeInstance),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto.vlsir.circuit.Parameter.toObject, includeInstance)
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
 * @return {!proto.vlsir.circuit.Module}
 */
proto.vlsir.circuit.Module.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.circuit.Module;
  return proto.vlsir.circuit.Module.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.circuit.Module} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.circuit.Module}
 */
proto.vlsir.circuit.Module.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.vlsir.circuit.Port;
      reader.readMessage(value,proto.vlsir.circuit.Port.deserializeBinaryFromReader);
      msg.addPorts(value);
      break;
    case 3:
      var value = new proto.vlsir.circuit.Signal;
      reader.readMessage(value,proto.vlsir.circuit.Signal.deserializeBinaryFromReader);
      msg.addSignals(value);
      break;
    case 4:
      var value = new proto.vlsir.circuit.Instance;
      reader.readMessage(value,proto.vlsir.circuit.Instance.deserializeBinaryFromReader);
      msg.addInstances(value);
      break;
    case 5:
      var value = new proto.vlsir.circuit.Parameter;
      reader.readMessage(value,proto.vlsir.circuit.Parameter.deserializeBinaryFromReader);
      msg.addParameters(value);
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
proto.vlsir.circuit.Module.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.circuit.Module.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.circuit.Module} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Module.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPortsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vlsir.circuit.Port.serializeBinaryToWriter
    );
  }
  f = message.getSignalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vlsir.circuit.Signal.serializeBinaryToWriter
    );
  }
  f = message.getInstancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vlsir.circuit.Instance.serializeBinaryToWriter
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.vlsir.circuit.Parameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.vlsir.circuit.Module.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.circuit.Module} returns this
 */
proto.vlsir.circuit.Module.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Port ports = 2;
 * @return {!Array<!proto.vlsir.circuit.Port>}
 */
proto.vlsir.circuit.Module.prototype.getPortsList = function() {
  return /** @type{!Array<!proto.vlsir.circuit.Port>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.circuit.Port, 2));
};


/**
 * @param {!Array<!proto.vlsir.circuit.Port>} value
 * @return {!proto.vlsir.circuit.Module} returns this
*/
proto.vlsir.circuit.Module.prototype.setPortsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vlsir.circuit.Port=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.circuit.Port}
 */
proto.vlsir.circuit.Module.prototype.addPorts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vlsir.circuit.Port, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.circuit.Module} returns this
 */
proto.vlsir.circuit.Module.prototype.clearPortsList = function() {
  return this.setPortsList([]);
};


/**
 * repeated Signal signals = 3;
 * @return {!Array<!proto.vlsir.circuit.Signal>}
 */
proto.vlsir.circuit.Module.prototype.getSignalsList = function() {
  return /** @type{!Array<!proto.vlsir.circuit.Signal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.circuit.Signal, 3));
};


/**
 * @param {!Array<!proto.vlsir.circuit.Signal>} value
 * @return {!proto.vlsir.circuit.Module} returns this
*/
proto.vlsir.circuit.Module.prototype.setSignalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vlsir.circuit.Signal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.circuit.Signal}
 */
proto.vlsir.circuit.Module.prototype.addSignals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vlsir.circuit.Signal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.circuit.Module} returns this
 */
proto.vlsir.circuit.Module.prototype.clearSignalsList = function() {
  return this.setSignalsList([]);
};


/**
 * repeated Instance instances = 4;
 * @return {!Array<!proto.vlsir.circuit.Instance>}
 */
proto.vlsir.circuit.Module.prototype.getInstancesList = function() {
  return /** @type{!Array<!proto.vlsir.circuit.Instance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.circuit.Instance, 4));
};


/**
 * @param {!Array<!proto.vlsir.circuit.Instance>} value
 * @return {!proto.vlsir.circuit.Module} returns this
*/
proto.vlsir.circuit.Module.prototype.setInstancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vlsir.circuit.Instance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.circuit.Instance}
 */
proto.vlsir.circuit.Module.prototype.addInstances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vlsir.circuit.Instance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.circuit.Module} returns this
 */
proto.vlsir.circuit.Module.prototype.clearInstancesList = function() {
  return this.setInstancesList([]);
};


/**
 * repeated Parameter parameters = 5;
 * @return {!Array<!proto.vlsir.circuit.Parameter>}
 */
proto.vlsir.circuit.Module.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.vlsir.circuit.Parameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.circuit.Parameter, 5));
};


/**
 * @param {!Array<!proto.vlsir.circuit.Parameter>} value
 * @return {!proto.vlsir.circuit.Module} returns this
*/
proto.vlsir.circuit.Module.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.vlsir.circuit.Parameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.circuit.Parameter}
 */
proto.vlsir.circuit.Module.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.vlsir.circuit.Parameter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.circuit.Module} returns this
 */
proto.vlsir.circuit.Module.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


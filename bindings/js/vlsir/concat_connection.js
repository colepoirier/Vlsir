// source: circuit.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.circuit.Concat');
goog.provide('proto.vlsir.circuit.Connection');
goog.provide('proto.vlsir.circuit.Connection.StypeCase');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.circuit.Signal');
goog.require('proto.vlsir.circuit.Slice');

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
proto.vlsir.circuit.Concat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.circuit.Concat.repeatedFields_, null);
};
goog.inherits(proto.vlsir.circuit.Concat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.circuit.Concat.displayName = 'proto.vlsir.circuit.Concat';
}
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
proto.vlsir.circuit.Connection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vlsir.circuit.Connection.oneofGroups_);
};
goog.inherits(proto.vlsir.circuit.Connection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.circuit.Connection.displayName = 'proto.vlsir.circuit.Connection';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.circuit.Concat.repeatedFields_ = [1];



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
proto.vlsir.circuit.Concat.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.circuit.Concat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.circuit.Concat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Concat.toObject = function(includeInstance, msg) {
  var f, obj = {
    partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.vlsir.circuit.Connection.toObject, includeInstance)
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
 * @return {!proto.vlsir.circuit.Concat}
 */
proto.vlsir.circuit.Concat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.circuit.Concat;
  return proto.vlsir.circuit.Concat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.circuit.Concat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.circuit.Concat}
 */
proto.vlsir.circuit.Concat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vlsir.circuit.Connection;
      reader.readMessage(value,proto.vlsir.circuit.Connection.deserializeBinaryFromReader);
      msg.addParts(value);
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
proto.vlsir.circuit.Concat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.circuit.Concat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.circuit.Concat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Concat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vlsir.circuit.Connection.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Connection parts = 1;
 * @return {!Array<!proto.vlsir.circuit.Connection>}
 */
proto.vlsir.circuit.Concat.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.vlsir.circuit.Connection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.circuit.Connection, 1));
};


/**
 * @param {!Array<!proto.vlsir.circuit.Connection>} value
 * @return {!proto.vlsir.circuit.Concat} returns this
*/
proto.vlsir.circuit.Concat.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vlsir.circuit.Connection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.circuit.Connection}
 */
proto.vlsir.circuit.Concat.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vlsir.circuit.Connection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.circuit.Concat} returns this
 */
proto.vlsir.circuit.Concat.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vlsir.circuit.Connection.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.vlsir.circuit.Connection.StypeCase = {
  STYPE_NOT_SET: 0,
  SIG: 1,
  SLICE: 2,
  CONCAT: 3
};

/**
 * @return {proto.vlsir.circuit.Connection.StypeCase}
 */
proto.vlsir.circuit.Connection.prototype.getStypeCase = function() {
  return /** @type {proto.vlsir.circuit.Connection.StypeCase} */(jspb.Message.computeOneofCase(this, proto.vlsir.circuit.Connection.oneofGroups_[0]));
};



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
proto.vlsir.circuit.Connection.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.circuit.Connection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.circuit.Connection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Connection.toObject = function(includeInstance, msg) {
  var f, obj = {
    sig: (f = msg.getSig()) && proto.vlsir.circuit.Signal.toObject(includeInstance, f),
    slice: (f = msg.getSlice()) && proto.vlsir.circuit.Slice.toObject(includeInstance, f),
    concat: (f = msg.getConcat()) && proto.vlsir.circuit.Concat.toObject(includeInstance, f)
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
 * @return {!proto.vlsir.circuit.Connection}
 */
proto.vlsir.circuit.Connection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.circuit.Connection;
  return proto.vlsir.circuit.Connection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.circuit.Connection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.circuit.Connection}
 */
proto.vlsir.circuit.Connection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vlsir.circuit.Signal;
      reader.readMessage(value,proto.vlsir.circuit.Signal.deserializeBinaryFromReader);
      msg.setSig(value);
      break;
    case 2:
      var value = new proto.vlsir.circuit.Slice;
      reader.readMessage(value,proto.vlsir.circuit.Slice.deserializeBinaryFromReader);
      msg.setSlice(value);
      break;
    case 3:
      var value = new proto.vlsir.circuit.Concat;
      reader.readMessage(value,proto.vlsir.circuit.Concat.deserializeBinaryFromReader);
      msg.setConcat(value);
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
proto.vlsir.circuit.Connection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.circuit.Connection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.circuit.Connection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.circuit.Connection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vlsir.circuit.Signal.serializeBinaryToWriter
    );
  }
  f = message.getSlice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vlsir.circuit.Slice.serializeBinaryToWriter
    );
  }
  f = message.getConcat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vlsir.circuit.Concat.serializeBinaryToWriter
    );
  }
};


/**
 * optional Signal sig = 1;
 * @return {?proto.vlsir.circuit.Signal}
 */
proto.vlsir.circuit.Connection.prototype.getSig = function() {
  return /** @type{?proto.vlsir.circuit.Signal} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.circuit.Signal, 1));
};


/**
 * @param {?proto.vlsir.circuit.Signal|undefined} value
 * @return {!proto.vlsir.circuit.Connection} returns this
*/
proto.vlsir.circuit.Connection.prototype.setSig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.vlsir.circuit.Connection.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.circuit.Connection} returns this
 */
proto.vlsir.circuit.Connection.prototype.clearSig = function() {
  return this.setSig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.circuit.Connection.prototype.hasSig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Slice slice = 2;
 * @return {?proto.vlsir.circuit.Slice}
 */
proto.vlsir.circuit.Connection.prototype.getSlice = function() {
  return /** @type{?proto.vlsir.circuit.Slice} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.circuit.Slice, 2));
};


/**
 * @param {?proto.vlsir.circuit.Slice|undefined} value
 * @return {!proto.vlsir.circuit.Connection} returns this
*/
proto.vlsir.circuit.Connection.prototype.setSlice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.vlsir.circuit.Connection.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.circuit.Connection} returns this
 */
proto.vlsir.circuit.Connection.prototype.clearSlice = function() {
  return this.setSlice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.circuit.Connection.prototype.hasSlice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Concat concat = 3;
 * @return {?proto.vlsir.circuit.Concat}
 */
proto.vlsir.circuit.Connection.prototype.getConcat = function() {
  return /** @type{?proto.vlsir.circuit.Concat} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.circuit.Concat, 3));
};


/**
 * @param {?proto.vlsir.circuit.Concat|undefined} value
 * @return {!proto.vlsir.circuit.Connection} returns this
*/
proto.vlsir.circuit.Connection.prototype.setConcat = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.vlsir.circuit.Connection.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.circuit.Connection} returns this
 */
proto.vlsir.circuit.Connection.prototype.clearConcat = function() {
  return this.setConcat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.circuit.Connection.prototype.hasConcat = function() {
  return jspb.Message.getField(this, 3) != null;
};


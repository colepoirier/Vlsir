// source: tetris.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.tetris.Library');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.tetris.Cell');
goog.require('proto.vlsir.utils.AuthorMetadata');

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
proto.vlsir.tetris.Library = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.tetris.Library.repeatedFields_, null);
};
goog.inherits(proto.vlsir.tetris.Library, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.tetris.Library.displayName = 'proto.vlsir.tetris.Library';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.tetris.Library.repeatedFields_ = [10];



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
proto.vlsir.tetris.Library.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.tetris.Library.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.tetris.Library} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Library.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cellsList: jspb.Message.toObjectList(msg.getCellsList(),
    proto.vlsir.tetris.Cell.toObject, includeInstance),
    author: (f = msg.getAuthor()) && proto.vlsir.utils.AuthorMetadata.toObject(includeInstance, f)
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
 * @return {!proto.vlsir.tetris.Library}
 */
proto.vlsir.tetris.Library.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.tetris.Library;
  return proto.vlsir.tetris.Library.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.tetris.Library} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.tetris.Library}
 */
proto.vlsir.tetris.Library.deserializeBinaryFromReader = function(msg, reader) {
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
    case 10:
      var value = new proto.vlsir.tetris.Cell;
      reader.readMessage(value,proto.vlsir.tetris.Cell.deserializeBinaryFromReader);
      msg.addCells(value);
      break;
    case 20:
      var value = new proto.vlsir.utils.AuthorMetadata;
      reader.readMessage(value,proto.vlsir.utils.AuthorMetadata.deserializeBinaryFromReader);
      msg.setAuthor(value);
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
proto.vlsir.tetris.Library.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.tetris.Library.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.tetris.Library} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.tetris.Library.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCellsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.vlsir.tetris.Cell.serializeBinaryToWriter
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.vlsir.utils.AuthorMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.vlsir.tetris.Library.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.tetris.Library} returns this
 */
proto.vlsir.tetris.Library.prototype.setDomain = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Cell cells = 10;
 * @return {!Array<!proto.vlsir.tetris.Cell>}
 */
proto.vlsir.tetris.Library.prototype.getCellsList = function() {
  return /** @type{!Array<!proto.vlsir.tetris.Cell>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.tetris.Cell, 10));
};


/**
 * @param {!Array<!proto.vlsir.tetris.Cell>} value
 * @return {!proto.vlsir.tetris.Library} returns this
*/
proto.vlsir.tetris.Library.prototype.setCellsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.vlsir.tetris.Cell=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.tetris.Cell}
 */
proto.vlsir.tetris.Library.prototype.addCells = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.vlsir.tetris.Cell, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.tetris.Library} returns this
 */
proto.vlsir.tetris.Library.prototype.clearCellsList = function() {
  return this.setCellsList([]);
};


/**
 * optional vlsir.utils.AuthorMetadata author = 20;
 * @return {?proto.vlsir.utils.AuthorMetadata}
 */
proto.vlsir.tetris.Library.prototype.getAuthor = function() {
  return /** @type{?proto.vlsir.utils.AuthorMetadata} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.utils.AuthorMetadata, 20));
};


/**
 * @param {?proto.vlsir.utils.AuthorMetadata|undefined} value
 * @return {!proto.vlsir.tetris.Library} returns this
*/
proto.vlsir.tetris.Library.prototype.setAuthor = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.tetris.Library} returns this
 */
proto.vlsir.tetris.Library.prototype.clearAuthor = function() {
  return this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.tetris.Library.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 20) != null;
};


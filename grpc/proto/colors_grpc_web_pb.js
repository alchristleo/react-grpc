/**
 * @fileoverview gRPC-Web generated client stub for colors
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.colors = require('./colors_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.colors.ColorServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.colors.ColorServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.colors.ColorRequest,
 *   !proto.colors.ColorResponse>}
 */
const methodInfo_ColorService_color = new grpc.web.AbstractClientBase.MethodInfo(
  proto.colors.ColorResponse,
  /** @param {!proto.colors.ColorRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.colors.ColorResponse.deserializeBinary
);


/**
 * @param {!proto.colors.ColorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.colors.ColorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.colors.ColorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.colors.ColorServiceClient.prototype.color =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/colors.ColorService/color',
      request,
      metadata || {},
      methodInfo_ColorService_color,
      callback);
};


/**
 * @param {!proto.colors.ColorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.colors.ColorResponse>}
 *     A native promise that resolves to the response
 */
proto.colors.ColorServicePromiseClient.prototype.color =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/colors.ColorService/color',
      request,
      metadata || {},
      methodInfo_ColorService_color);
};


module.exports = proto.colors;


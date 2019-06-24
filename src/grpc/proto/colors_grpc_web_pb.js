/**
 * @fileoverview gRPC-Web generated client stub for colorgenerator
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.colorgenerator = require('./colors_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.colorgenerator.ColorServiceClient =
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
proto.colorgenerator.ColorServicePromiseClient =
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
 *   !proto.colorgenerator.Empty,
 *   !proto.colorgenerator.ColorResponse>}
 */
const methodInfo_ColorService_GenerateColor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.colorgenerator.ColorResponse,
  /** @param {!proto.colorgenerator.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.colorgenerator.ColorResponse.deserializeBinary
);


/**
 * @param {!proto.colorgenerator.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.colorgenerator.ColorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.colorgenerator.ColorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.colorgenerator.ColorServiceClient.prototype.generateColor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/colorgenerator.ColorService/GenerateColor',
      request,
      metadata || {},
      methodInfo_ColorService_GenerateColor,
      callback);
};


/**
 * @param {!proto.colorgenerator.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.colorgenerator.ColorResponse>}
 *     A native promise that resolves to the response
 */
proto.colorgenerator.ColorServicePromiseClient.prototype.generateColor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/colorgenerator.ColorService/GenerateColor',
      request,
      metadata || {},
      methodInfo_ColorService_GenerateColor);
};


module.exports = proto.colorgenerator;


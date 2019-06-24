var PROTO_PATH = __dirname + '/../grpc/proto/colors.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true   
    });
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var colorgenerator = protoDescriptor.colorgenerator;

var server = new grpc.Server();

server.addService(colorgenerator.ColorService.service, {
    generateColor: function(call, callback) {
        console.log("Request received");
        return callback(null, { rescolor: Math.floor(Math.random()*16777215).toString(16) });
    }
});

server.bind(
    '0.0.0.0:8080', 
    grpc.ServerCredentials.createInsecure()
);
console.log('listening at 8080');
server.start();

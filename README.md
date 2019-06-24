# React-gRPC

A demo create react app with grpc-web

## Getting Started

1. First you need to install [Docker](https://www.docker.com/).
2. Second you need to install [Protoc](https://github.com/protocolbuffers/protobuf). Can also be done by using homebrew:
    ```
    brew install protobuf
    ```
3. Clone this repo: 
    ```
    git clone https://github.com/alchristleo/react-grpc.git
    ```
4. Build the image with Docker: 
    ```
    yarn start:docker
    ```
5. Run the server: 
    ```
    yarn start:server
    ```
6. Install package & start client: 
    ```
    yarn install
    yarn start:client
    ```
7. Voila, now you can start the application!

About [gRPC](https://grpc.io/), [Create React App](https://github.com/facebook/create-react-app).

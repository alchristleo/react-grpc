import React from 'react';
import LogoSvg from './logo';
import './App.css';

const { ColorServiceClient } = require('../grpc/proto/colors_grpc_web_pb.js');
const { Empty } = require('../grpc/proto/colors_pb.js');

var client = new ColorServiceClient('http://localhost:9090');

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = { color: "#000000" };
    }
    generateColorFromGrpcCall = () => {
        const request = new Empty();
    
        client.generateColor(request, {}, (err, response) => {
            if (response == null) {
                console.log("Null response!", err);
            } else {
                console.log("New color: ", response.getRescolor());
                this.setState({ color: `#${response.getRescolor()}` || "#000000" });
            }
        });
    }

    render () {
        const { color } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <LogoSvg color={color} />
                    <button onClick={this.generateColorFromGrpcCall}>CHANGE COLOR</button>
                </header>
            </div>
        );
    }
}

export default App;

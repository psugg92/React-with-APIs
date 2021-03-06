import React, {Component} from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class Jumbotron extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid d-flex justify-content-center">
                    <img className="w-100 h-100" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="Studio Ghibli Logo"/>
                </div>
            </React.Fragment>
        )
    }
}

export default Jumbotron;
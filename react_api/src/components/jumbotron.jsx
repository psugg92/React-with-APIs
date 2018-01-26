import React, {Component} from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import '../img.css'

class Jumbotron extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid d-flex justify-content-center">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" alt="Studio Ghibli Logo"/>
                </div>
            </React.Fragment>
        )
    }
}

export default Jumbotron;
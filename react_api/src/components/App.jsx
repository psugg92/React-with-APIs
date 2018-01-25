import React, {Component} from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => console.log(obj));
    }
    render() {
        return <h1>Hello World!</h1>;
    }
}

export default App;
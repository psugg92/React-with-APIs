import React, {Component} from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    constructor(props) {
        super(props)

    
        this.state = {
            filmArray: [],
            buttonChecker: false
        }

    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => this.setState({filmArray: obj}));
    }

    handleBtnClick() {
        if (this.state.buttonChecker === false) {
            this.setState({buttonChecker: true});
        } else {
            this.setState({buttonChecker: false});
        }
    }

    render() {
        let movieCards = this.state.filmArray.map((film, id) => {
            if (this.state.buttonChecker === true) {
            return (
                <div className="card col-sm-5 m-1 p-3" key={id} style={{width: 18 + 'rem'}}>
                    <img className="card-img-top" src="https://ilikeswhatilikes.files.wordpress.com/2013/08/ghibli___finish_work_by_hyung86.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.filmArray[id].title}</h5>
                        <p className="card-text">{this.state.filmArray[id].description}</p>
                        <p className="card-text font-weight-bold">Release Date: {this.state.filmArray[id].release_date}</p>
                        <button href="#" className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            )}});
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid d-flex justify-content-center">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png"/>
                </div>
                <div className="container text-center">
                    <button className="btn btn-primary text-center m-1" onClick={() => {this.handleBtnClick()}} >Load Films</button>
                    <a className="btn btn-primary text-center m-1" href="https://www.youtube.com/watch?v=jAPRt-I0-m8">Play All Movies</a>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        {movieCards}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default App;
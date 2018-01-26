import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';
import Jumbotron from './jumbotron';
import Movies from './movies';
import Characters from './characters';
import movieDetail from "./moviedetail";
import characterDetail from "./characterdetail";

class App extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid d-flex justify-content-center">
                    <Jumbotron />
                </div>
                <Router>
                    <React.Fragment>
                    <div className="container d-flex justify-content-center">
                        <Link className="btn btn-primary text-center m-1" to="/movies">List Movies</Link>
                        <Link className="btn btn-primary text-center m-1" to="/characters">List Characters</Link>
                    </div>
                        <Switch>
                            <div className="container">
                                <div className="row d-flex justify-content-center">
                                    <Route exact path="/movies" component={Movies} />
                                    <Route exact path="/characters" component={Characters} />
                                    <Route exact path="/movies/:id" component={movieDetail} />
                                    <Route exact path="/characters/:id" component={characterDetail} />
                                </div>
                            </div>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}

export default App;

/*<div className="container text-center">
<button className="btn btn-primary text-center m-1" onClick={() => {this.handleMovieBtnClick()}} >Load Films</button>
<a className="btn btn-primary text-center m-1" href="https://www.youtube.com/watch?v=jAPRt-I0-m8">Play All Movies</a>
</div>
<div className="container">
<div className="row d-flex justify-content-between">
</div>
</div>

<Link to="/characters">List Characters</Link>*/
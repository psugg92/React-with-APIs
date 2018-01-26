import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';

class Movies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filmArray: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(obj => this.setState({filmArray: obj}))
    }
    
    render() {
        let movies = this.state.filmArray.map((film) => {
            return (
            <div className="card col-sm-5 m-1 p-3" key={film.id} style={{width: 18 + 'rem'}}>
                <img className="card-img-top" src="https://ilikeswhatilikes.files.wordpress.com/2013/08/ghibli___finish_work_by_hyung86.jpg" alt="Generic Anime Img" />
                <div className="card-body">
                    <h5 className="card-title">{film.title}</h5>
                    <p className="card-text font-weight-bold">Release Date: {film.release_date}</p>
                    
                    <Link className="btn btn-primary text-center m-1" to={`/movies/${film.id}`}>Movie Details</Link>
                        
                        
                </div>
            </div>
            )})
        return (movies)
        }
}

export default Movies;
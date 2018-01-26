import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';

class Characters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filmArray: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(obj => this.setState({filmArray: obj}))
    }
    
    render() {
        let characters = this.state.filmArray.map((character) => {
            return (
            <div className="card col-sm-5 m-1 p-3" key={character.id} style={{width: 18 + 'rem'}}>
                <img className="card-img-top" src="https://ilikeswhatilikes.files.wordpress.com/2013/08/ghibli___finish_work_by_hyung86.jpg" alt="Generic Anime Img" />
                <div className="card-body">
                    <h2 className="card-title font-weight-bold">{character.name}</h2>
                    <p className="card-text">Age: {character.age}</p>
                    <Link className="btn btn-primary text-center m-1" to={`/characters/${character.id}`}>Detail Character</Link>
                </div>
            </div>
            )})
        return (characters)
        }
}

export default Characters;
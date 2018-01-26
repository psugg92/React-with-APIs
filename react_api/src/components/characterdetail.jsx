import React, {Component} from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class characterDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            character: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(obj => this.setState({character: obj}))
    }
    
    render() {
        let characterDetail = this.state.character
            return (
            <div className="card col-sm-4 m-3 p-3 text-center" style={{width: 18 + 'rem'}}>
                <img className="card-img-top" src="https://ilikeswhatilikes.files.wordpress.com/2013/08/ghibli___finish_work_by_hyung86.jpg" alt="Generic Anime Img" />
                <div className="card-body">
                    <h2 className="card-title text-center">{characterDetail.name}</h2>
                    <p className="card-text">Age: {characterDetail.age}</p>
                    <p className="card-text">Gender: {characterDetail.gender}</p>
                    <p className="card-text">Eye Color: {characterDetail.eye_color}</p>
                    <p className="card-text">Hair Color: {characterDetail.hair_color}</p>
                </div>
            </div>
            )
        
        }
}

export default characterDetail;
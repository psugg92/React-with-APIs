import React, {Component} from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

class movieDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(obj => this.setState({film: obj}))
    }
    
    render() {
        let filmDetail = this.state.film
            return (
            <div className="card col-sm-12 m-3 p-3" style={{width: 18 + 'rem'}}>
                <img className="card-img-top" src="https://ilikeswhatilikes.files.wordpress.com/2013/08/ghibli___finish_work_by_hyung86.jpg" alt="Generic Anime Img"/>
                <div className="card-body">
                    <h5 className="card-title">{filmDetail.title}</h5>
                    <p className="card-text">{filmDetail.description}</p>
                    <p className="card-text font-weight-bold">Release Date: {filmDetail.release_date}</p>
                    <a className="btn btn-primary text-center m-1" href="https://www.youtube.com/watch?v=jAPRt-I0-m8">Play Movie</a>
                </div>
            </div>
            )
        
        }
}

export default movieDetail;
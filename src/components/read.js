import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component
{

    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({mymovies: response.data.mymovies})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mymovies: []            
    };

    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;
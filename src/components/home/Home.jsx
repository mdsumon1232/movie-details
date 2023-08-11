import React from 'react';
import './Home.css'
import Header from '../header/Header';
import MovieData from '../movieData/MovieData';

const Home = () => {
    return (
        <div>
            <Header></Header>
           <div className="container">
            <div className="left-site">
            <h2>Category</h2>
           <ul>
              
                <li><a>Action</a></li>
                <li><a>Comedy</a></li>
                <li><a>Drama</a></li>
                <li><a>Science Fiction</a></li>
                <li><a> Animation</a></li>
                <li><a> Thriller</a></li>
                <li><a> Romance</a></li>
                <li><a> Historical</a></li>
                <li><a> Horror</a></li>
                <li><a> Musical</a></li>
                <li><a> Mystery</a></li>
                <li><a> Documentary</a></li>
                <li><a> War</a></li>
                <li><a> Family</a></li>
               
           </ul>
            </div>
            <div className="right-site">
                <MovieData></MovieData>
            </div>
            </div> 
        </div>
    );
};

export default Home;
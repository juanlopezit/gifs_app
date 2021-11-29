import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Link, Route} from "wouter"

export default function App() {  
  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs</h1>
        <div className="links">
          <Link to="/gif/trending">Trending Gifs </Link>
          <Link to="/gif/music">Music Gifs </Link>
          <Link to="/gif/worst">Worst Gifs </Link>
          <Link to="/gif/funny">Funny Gifs </Link>
        </div>
        <Route 
        component= {ListOfGifs} 
        path="/gif/:keyword" />
      </section>
    </div>
  )
}

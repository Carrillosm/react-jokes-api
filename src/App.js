import './App.css';
import {useEffect, useState} from "react";
 
function App() {
 return(
  <div className="App">
    <RandomJokes></RandomJokes>
  </div>
 )
}
 
function RandomJokes() {
  const[randomjokes, setRandomjokes]= useState('')
   
  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
    .then ((resp) =>resp.json())
    .then((data)=> {
       setRandomjokes(data);
    })
  }
 
  useEffect(()=>{
    fetchJoke()
  },[]);
 
 
  const handleClick = () => {
    fetchJoke();
  }
 
  return(
    <div className="randomjokes">
   
      <div className="jokes">{randomjokes.value}</div>
      {
        <button onClick = {handleClick} id="button">Random Joke</button>
      }
    </div>
  )
}







export default App;

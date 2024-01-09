import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import IncrementBy from "./components/IncrementBy.jsx";
import Color from "./components/Color.jsx";
import Animal from "./components/Animal.jsx";
import { getAnimals } from "./components/async.js";

function App() {

  const dispatch = useDispatch();
  const score = useSelector((state) => state.score);
  const color = useSelector((state) => state.color);

  return (
    <>
      <h1 style={{color}}>Redux</h1>
      <br />
      <h2>{score}</h2>
      <br />
      <span>
        <button onClick={() => dispatch({type: "INCREMENT"})}>increment</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>decrement</button>
      </span>
      <br />
      <IncrementBy />
      <br />
      <Color />
      <br />
      <button onClick={() => dispatch(getAnimals)}>get animals</button>
      <Animal />
    </>
  )
}

export default App

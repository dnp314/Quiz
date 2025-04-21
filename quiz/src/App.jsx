import React, { useEffect, useReducer } from 'react'
import Header from './Header'
import "./App.css"

const initialState ={
  question:[],
  status: 'loading',
}

function reducer(state, action){

  switch (action.type){

    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default :
      throw new Error("Yo what going on");

  }

}

export default function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(function(){
    fetch("http://localhost:8000/questions")
    .then((res) => res.json())
    .then((data) => dispatch({type:"dataReceived", payload: data}))
    .catch((err) => dispatch({type:"dataFailed"}));
  },[]);
  
  return (
    <div className='app'>
    <Header />
    </div>
  )
}

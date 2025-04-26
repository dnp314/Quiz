import React from 'react'

function StartScreen({numQuestions, dispatch}) {
  return (
    <div className='start'>
      <h1>What is up</h1>
      <h3>{numQuestions} questions to test</h3>
      <button className='btn btn-ui' onClick={()=> dispatch({type:"start"})}>Let's get started</button>
    </div>
  )
}

export default StartScreen
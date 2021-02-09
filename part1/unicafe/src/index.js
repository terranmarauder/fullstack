import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/// consts ///

const Good = props => <div>good {props.good}</div>
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


/// MAIN APP ///
const App = () => {
  const [good, setgood] = useState(0)
  const setTogood = newgood => {
    setgood(newgood)
// the two other buttons in here... //
  
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setTogood(good + 1)} text="good" />
      <h2>Statistics</h2>
      <Good good={good} />
    </div>
  )
}

/// render in DOM ///

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
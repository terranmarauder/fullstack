import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/// consts ///
const Header = (props)=> {
  console.log(props)
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}



/// MAIN APP ///
const App = () => {
  const title = 'give feedback'
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={title} />  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)



/// render in DOM ///

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
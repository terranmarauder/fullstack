import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <>{props.part}</>
  )
}

const Total = (props) => {
  return (
    <> {props.num}</>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}  />
      <p>
        <Content part={part1}  />
        <Total num={exercises1}  />
      </p>
      <p>
        <Content part={part2}  /> 
        <Total num={exercises2}  />
      </p>
      <p>
        <Content part={part3}  /> 
        <Total num={exercises3}  />
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
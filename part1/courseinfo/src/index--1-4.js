import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </>
  )
}

const Part = (props) => { 
  return (
    <>
    <p>
      {props.parts.name} {props.parts.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Total number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}
 
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 
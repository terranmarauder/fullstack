import React from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  // const course = 'Half Stack application development'
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

 const allparts = parts.map (value => parts)
 let { name, exercises } = parts();
 
 
 console.log(allparts)

  //some kind of object destructuring???
 //let { name, exercises } = parts();



 //console.log(parts.name)


  return (
    <div>
        
       
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 
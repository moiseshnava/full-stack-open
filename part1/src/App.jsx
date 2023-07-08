const Header = ({ courseName }) => {
  return (
    <div>
      <h1>{courseName}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map((part, index) => (
          <p key={index}>{part.name} {part.exercises}</p>
        ))
      }
    </div>
  )
}

const Total = ({ parts }) => {
  
  const total = parts.reduce((res, part) => res + part.exercises, 0);

  return (
    <p>Number of exercises {total}</p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App

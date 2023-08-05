const Header = ({ course }) => {
  return (
    <header>
      <p>
        {course}
      </p>
    </header>
  )
}

const Content = ({ courseContent }) => courseContent.map((part, index) => <p key={index}>{part.name} {part.exercises}</p>)

const Total = ({ courseContent }) => {
  const total = courseContent.reduce((res, part) => res + part.exercises, 0);
  return (
    <p>Number of exercise {total}</p>
  )
}

// exercise 2
function App() {

  const course = {
    name: "Half Stack application development",
    courseContent: [
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
      <Header course={course.name} />
      <Content courseContent={course.courseContent} />
      <Total courseContent={course.courseContent} />
    </div>
  )
}

export default App

// Exercise 1.1
// function App() {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3} </p>
//     </div>
//   )
// }
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

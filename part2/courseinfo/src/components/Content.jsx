import React from 'react'

const Content = ({ courseContent }) => {
   const totalExercises = courseContent.map(
      course => course.exercises
   ).reduce(
      (total, exercises) => total + exercises
   );

   return (
      <div>
         <ul>
            {
               courseContent.map(
                  (part) => (
                     <li
                        key={part.id}
                        style={{ textAlign: "start" }}
                     >
                        {part.name} {part.exercises}
                     </li>
                  )
               )
            }
         </ul>
         <h4>{`Total of ${totalExercises} exercises`}</h4>
      </div>
   )
}

export default Content
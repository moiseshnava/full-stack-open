import React from 'react'

const averageStatistics = (good, neutral, bad) =>
   (((good * 3) + (neutral * 2) + (bad * 1)) / (good + neutral + bad)).toFixed(3);

const positiveVotes = (good, allVotes) => ((good / allVotes) * 100).toFixed(2)

const Statics = ({ good, neutral, bad }) => {
   if ((good || neutral || bad) > 0) {
      return (
         <div>
            <h2>statistics</h2>
            <div style={{ display: "flex", flexDirection: "column", padding: "0", margin: "0" }}>
               <table style={{ border: "1px solid", margin: "0px" }}>
                  <thead  >
                     <tr >
                        <th  >Type</th>
                        <th  >Result</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>good</td>
                        <td>{good}</td>
                     </tr>
                     <tr>
                        <td>neutral</td>
                        <td>{neutral}</td>
                     </tr>
                     <tr>
                        <td>bad</td>
                        <td>{bad}</td>
                     </tr>
                     <tr>
                        <td>all</td>
                        <td>{good + bad + neutral}</td>
                     </tr>
                     <tr>
                        <td>average</td>
                        <td>{averageStatistics(good, neutral, bad)}</td>
                     </tr>
                     <tr>
                        <td>positive</td>
                        <td>{positiveVotes(good, (good + neutral + bad))}%</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      )
   }
   return (
      <div>
         <p>No feedback given</p>
      </div>
   )
}

export default Statics;
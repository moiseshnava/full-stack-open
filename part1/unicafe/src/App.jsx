import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button';
import Statics from './components/Statics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleStatistics = (vote) => {
    if (vote === "good") setGood(good + 1);
    if (vote === "neutral") setNeutral(neutral + 1);
    if (vote === "bad") setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <Button name={"good"} handleClick={handleStatistics} label="good" />
        <Button name={"neutral"} handleClick={handleStatistics} label="neutral" />
        <Button name={"bad"} handleClick={handleStatistics} label="bad" />
      </div>
      <Statics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App

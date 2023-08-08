import { useState } from 'react'
import './App.css'
import AnecdoteCard from './components/AnecdoteCard';
import { useEffect } from 'react';

const anecdotes = [
  "The best way to get a project done faster is to start sooner",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Even the best planning is not so omniscient as to get it right the first time.",
  "How does a project get to be a year late?... One day at a time.",
  "The bearing of a child takes nine months, no matter how many women are assigned.Many software tasks have this characteristic because of the sequential nature of debugging.",
  "Plan to throw one(implementation) away; you will, anyhow.",
  "Every good work of software starts by scratching a developer's personal itch",
  "Perfection(in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away",
  "Any fool can write code that a computer can understand.Good programmers write code that humans can understand.",
]
const InitialPoints = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
}

function App() {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(InitialPoints);
  const [bestAnecdote, setBestAnecdote] = useState(null);

  useEffect(() => {
    const auxAnecdote = Object.values(points);
    let maxValue = Math.max.apply(0, auxAnecdote,);
    let indexValue = auxAnecdote.indexOf(maxValue);
    setBestAnecdote(anecdotes[indexValue]);
  }, [points]);

  const handleNextAnecdote = () => {
    selected < anecdotes.length - 1 ?
      setSelected(selected + 1)
      : setSelected(0);
  }

  const handleVote = () => {
    const newPoints = { ...points };
    newPoints[selected] += 1;
    setPoints(newPoints);
  }

  return (
    <>
      {
        <div>
          <h2>Anecdote of the day</h2>
          <AnecdoteCard paragraph={anecdotes[selected]} />
          <p>has vote: {points[selected]}</p>
          <button style={{ margin: "2px" }}
            onClick={() => handleVote()}
          >
            vote
          </button>
          <button style={{ margin: "2px" }}
            onClick={() => handleNextAnecdote()}
          >
            next anecdote
          </button>
          <h2>Anecdote with most votes</h2>
          <h4>{bestAnecdote}</h4>
        </div>
      }
    </>
  )
}

export default App

import React from "react";
import Card from "../UI/Card";
import ThoughtsList from "./ThoughtsList";
import NewThought from "../NewThought/NewThought";
import "./thoughts.css";
import { useState } from "react";


const DUMMY_Thoughts = [
  {
    id: 't1',
    thoughtContent: "Don't worry, at the moment you are untouchable.",
  },
  {
    id: 't2',
    thoughtContent: 'Only you can do it.',
  },
  {
    id: 't3',
    thoughtContent: 'Slay those weekly monsters, and be proud of yourself.',
  },
  {
    id: 't4',
    thoughtContent: 'Before you wonder what color your parachute could be, perhaps consider whether you even have one.',
  },
  {
    id: 't5',
    thoughtContent: "Something defining yourself means communicating what you won't allow and when you'll pack up and leave.",
  },
]

const Thoughts = () => {
  const [thoughts, setThoughts] = useState(DUMMY_Thoughts);
  const addThoughtHandler = (thought) =>{
    setThoughts((prevThoughts)=>{
      return [thought, ...prevThoughts];
    })
  }
  return (
    <section id="thoughts">
      <h5>About</h5>
      <h2>My thoughts</h2>
      <NewThought onAddThought={addThoughtHandler}/>
      <Card className="thoughts">
        <ThoughtsList items={thoughts}/>
      </Card>
    </section>
  );
};

export default Thoughts;

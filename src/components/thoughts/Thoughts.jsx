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
     const updateThoughts = [thought, ...prevThoughts];
      return updateThoughts;
    })
  }
  const deleteItemHandler = thoughtId =>{
    /* setThoughts(prevThoughts = {
      // const updateThoughts = [...prevThoughts];
      // updateThoughts : prevThoughts.filter(thought => thought.id !== thoughtId)
    });
    let content = (
      <p style={{textAlign:'center'}}>No thought founded. Maybe add one?</p>
    );
    if(thoughts.length >0){
      content = (
        <ThoughtsList items={thoughts} onDeleteItem ={deleteItemHandler}/>
      )
    } */
  }
  return (
    <section id="thoughts">
      <h5>About</h5>
      <h2>My thoughts</h2>
      <NewThought onAddThought={addThoughtHandler}/>
      <Card className="thoughts">
        {/* {content} */}
        <ThoughtsList items={thoughts} onDeleteItem ={deleteItemHandler}/>
      </Card>
    </section>
  );
};

export default Thoughts;

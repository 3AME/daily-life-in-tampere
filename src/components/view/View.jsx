import React from 'react'
import './view.css'
import viewList from './viewList'
import viewNotes from './viewNotes'

const View = () => {
  return (
    <section id='view'>
      <h5>Get to know</h5>
      <h2>Places can be visited</h2>

      <div className="container view__container">
        {/* <viewList />
        <viewNotes /> */}
      </div>
    </section>
  )
}

export default View
import React from 'react'
import './view.css';
import ViewList from './ViewList.js';
import originViewsData from './ViewData.js'

const View = () => {
  return (
    <section id='view'>
      <h5>Get to know</h5>
      <h2>Places can be visited</h2>

      <div className="container view__container">
      <ViewList items ={originViewsData}/>
      </div>
    </section>
  )
}

export default View
import React from 'react'
import './view.css';
import ViewList from './ViewList.js';
import originViewsData from './ViewData.js';
import Card from '../UI/Card.js'
import NewView from '../NewView/NewView';
import { useState } from 'react';
import ViewDataList from './ViewDataList/ViewDataList';

const View = () => {
  const [views, setViews] = useState(originViewsData);
  const addViewHandler = (view) =>{
    setViews((prevViews) =>{
      return [view, ...prevViews];
    })
  }
  return (
    <section id='view'>
      <h5>Get to know</h5>
      <h2>Places can be visited</h2>
      <ViewDataList />
      <NewView onAddView={addViewHandler}/>
      <Card className="container view__container">
      <ViewList items ={views}/>
      </Card>
    </section>
  )
}

export default View
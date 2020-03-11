import React, { useState } from 'react';
import './headline-list.css';
import Headline from '../headline/headline'

export default ({ headlines, deleteHeadline, deleteScraper }) => {
  return (
    <div className="list-container">
      {headlines.length === 0 &&
        <div className="no-content-container">
          <span className="no-content">No Headlines Yet!</span>
        </div>}

      {headlines.length > 0 &&
        <div id="list" className="list-container">

          {headlines.map((headline,index) => {
              return <Headline
                key={headline.id}
                headline={headline}
                deleteHeadline={deleteHeadline}
                deleteScraper={deleteScraper}
              />
          })}
        </div>}
    </div>
  )
}

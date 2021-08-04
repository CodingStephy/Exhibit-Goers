import React, { useState } from 'react';
import moment from "moment";


const Togo = (props) => {
    const { togos,filteredTogos,setFilteredTogos} = props;
    

    function filterTogos(condition) {
        if(condition ==='upcoming') {
           const filtered = togos.filter((item) => moment(item.startDate) >= Date.now());
           setFilteredTogos(filtered)
        } else if(condition === 'current') {
          const currentEx = togos.filter((item) => moment(item.endDate) >= Date.now() && moment(item.startDate) <= Date.now());
          setFilteredTogos(currentEx)
        } else if(condition = 'sorted') {
          //sorted by date
          const sorted = togos.sort(function (x, y) {
            let a = new Date(x.endDate),
              b = new Date(y.endDate);
      
            return a - b;
          });
    setFilteredTogos(sorted)
        } else {
          setFilteredTogos(togos);
        }
      }


    return (
        <div className="buttons">
        <button className="togo-btn btnn" onClick={() => filterTogos('revert')}>
            Remove Filters
          </button>
          <button className="togo-btn btnn" onClick={() => filterTogos('current')}>
            Current 
          </button>
          <button className="togo-btn btnn" onClick={() => filterTogos('upcoming')}>
            Upcoming
          </button>
          <button onClick={() => filterTogos('sorted')} className="togo-btn btnn">
            Sort by End Date
          </button>
        </div>
    )
}

export default Togo


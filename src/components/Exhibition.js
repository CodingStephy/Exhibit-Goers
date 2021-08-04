import React from 'react'
import { BsXSquareFill } from "react-icons/bs";
  

const Exhibition = (props) => {
    const loaded = () => {
    return (
        <div className="SelectedExhibition">
          <img src={props.selected.image} alt=""></img>
              <h1 className="name">{props.selected.title}</h1>
              <p className="date">{props.selected.startDate} - {props.selected.endDate}</p>
              <a href={props.selected.link}>Learn More</a>
             <button className="remove" onClick={()=>props.removeFromList()}
            ><BsXSquareFill/></button>
        </div>
    )
}

const loading = () => {
    return <h1 className='loading'>Items loading...</h1>
}

return props.selected ? loaded() : loading()
}
export default Exhibition
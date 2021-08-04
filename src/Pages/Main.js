import React from 'react'
import ExhibitionList from '../components/ExhibitionList'

const Main = (props) => {


    return (
        <div className="main">
           <h2>VISIT</h2>
           <hr/>
           <p>We're thrilled to welcome you to our galleries to experience firsthand the beauty and power of art. To help you plan your visit, Exhibit-Goer illustrates the museum's current and upcoming exhibitions. As you explore our wide-ranging exhibitions, feel free to add the exhibitions you want to visit to "My Favorites". </p>
          <ExhibitionList exhibit= {props.exhibit} handleClick = {props.addToList} label = 'Favorite'/>
        </div>
    )
}

export default Main

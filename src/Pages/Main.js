import React from 'react'
import ExhibitionList from '../components/ExhibitionList'
// import Exhibition from '../components/Exhibition'

const Main = (props) => {
    return (
        <div className="main">
           <p>We're thrilled to welcome you to our galleries to experience firsthand the beauty and power of art. To help you plan your visit, Exhibit-Goer illustrates the museum's current and upcoming exhibitions. As you explore our wide-ranging exhibitions, feel free to add the exhibitions you want to visit to "My Favorites". </p>
          <ExhibitionList exhibit={props.exhibit} addToList={props.addToList}/>
          {/* <Exhibition/>   */}
        </div>
    )
}

export default Main

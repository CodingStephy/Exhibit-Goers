
import React,{useState,useEffect} from 'react';
import Exhibition from '../components/Exhibition'
import Togo from'../components/Togo'

function MyList(props) {
    const [filteredTogos, setFilteredTogos] = useState(props.list);
    useEffect(()=>{setFilteredTogos(props.list)},[props.list.length])
    return <div>
        <Togo 
           togos={props.list} filteredTogos={filteredTogos} setFilteredTogos={setFilteredTogos}/>
          <div className="Favorites">
         {filteredTogos.map((item) =>{
           return <Exhibition selected={item} key={item.id} removeFromList={props.removeFromList} label= 'Remove' /> })}</div>
         </div>  
}    

export default MyList
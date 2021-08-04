import React,{useState} from 'react';
import Exhibition from '../components/Exhibition'
import Togo from'../components/Togo'

function MyList(props) {
    const [filteredTogos, setFilteredTogos] = useState(props.list);
    return <div>
        <Togo 
           togos={props.list} filteredTogos={filteredTogos} setFilteredTogos={setFilteredTogos}/>

         {filteredTogos.map((item) =>{
           return <Exhibition selected={item} key={item.id} removeFromList={props.removeFromList} label= 'Remove' /> })}
         </div>  
}    

export default MyList

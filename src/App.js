import {Route, Switch} from "react-router-dom"
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import MyList from './Pages/MyList'
import Main from './Pages/Main'
import {useState,useEffect} from 'react'


const App = () => {
  const [exhibit,setExhibit] = useState([])
  
  const getExhibit = async() =>{
    const response = await fetch ("https://cdn.contentful.com//spaces/nbe8tmkxy59u/environments/master/entries?access_token=ynfiaMt1N5Skp8U-uq7Z49Xc9OSl6g-je6-cEcapCqU&content_type=exhibition");
    const data = await response.json()

  const dataArr = data.items.map((item, index) => {
  return {
   image: data.includes.Asset[index].fields.file.url,
   title: item.fields.exhibition,
   startDate: item.fields.date,
   endDate: item.fields.endDate,
   link: item.fields.links,
  };
  });
  setExhibit(dataArr);
 }
 useEffect(()=> {getExhibit()},[]);


  return (
    <div className ="App">
      <Header/>
      <main>
        <Switch>
        <Route exact path="/">
          <Main exhibit ={exhibit}/>
          </Route>
        <Route path= "/mylist">
          <MyList/>
          </Route>
        </Switch>
      </main>
      <Footer/>
    </div>
  )
}

export default App


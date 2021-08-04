import React from 'react'
// import {
//     Card, CardImg, CardBody, CardLink,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';
  import { BsFillHeartFill } from "react-icons/bs";
  

const ExhibitionList = (props) => {
      return (
      <div className="container">
        {props.exhibit.map((exhibit, index) => {
          return (
              <div className="exhibit-card" key={index}>
             <img src={exhibit.image} alt=""></img>
              <h1 className="name">{exhibit.title}</h1>
              <p className="date">{exhibit.startDate} - {exhibit.endDate}</p>
              <a href={exhibit.link}>Learn More </a>
              {/* <div className="link">{exhibit.link}</div> */}
              <button className="like" onClick={()=>props.handleClick(props.exhibit)}
               ><BsFillHeartFill/></button>
            </div>
           );
          })}
        </div>
      );
        }
  // const loading = () => {
  //   return <h1>No List to Display</h1>;
  // };

  // return props ? loaded() : loading();
  // };

    //    <Card>
    //     <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
    //     <CardBody>
    //       <CardTitle tag="h5">CardTitle</CardTitle>
    //       <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
    //       <CardLink href="#">Card Link</CardLink>
    //       <Button><BsFillHeartFill/></Button>
    //     </CardBody>
    //   </Card>
    
    
export default ExhibitionList

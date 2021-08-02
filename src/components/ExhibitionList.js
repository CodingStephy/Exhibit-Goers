import React from 'react'
import {
    Card, CardImg, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { BsFillHeartFill } from "react-icons/bs";
  
const ExhibitionList = (props) => {
      return(
        // {props.exhibit.map((exhibit,index) => {
       <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">CardTitle</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardLink href="#">Card Link</CardLink>
          <Button><BsFillHeartFill/></Button>
        </CardBody>
      </Card>
      )}
    
export default ExhibitionList

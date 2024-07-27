import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './View.css'


function View() {

    const [employee,setEmployee]=useState({});
    const params=useParams();

    //api
const fetchEmp= async ()=>{
    const result= await axios.get('http://localhost:8000/getEmployee/'+params.id)
    setEmployee(result.data.message)
}
console.log(employee)
 
useEffect(()=>{
    fetchEmp()
},[])

  return (
    <div className='text-center container w-100' >
        <div className='body  w-100 d-flex  align-items-center justify-content-center ' >
    <Row  className='  body d-flex  align-items-center justify-content-center ' >
        <Col  lg={4} md={7} sm={7} className='d-flex  align-items-center  justify-content-center'>
    <img  className='rounded-circle' src="/12693195.jpg" alt="" />
        </Col>
        <Col lg={8} md={6} sm={12} className='d-flex  mb-3 align-items-center justify-content-center  ' > 
        <Card className='border-0 shadow-lg w-100 ' >
          {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
          <Card.Body>
            <Card.Title>Employee Name: {employee.name}</Card.Title>
         
          </Card.Body>
          <ListGroup className="list-group-flush text-start">
            <ListGroup.Item> Id: {employee.id}</ListGroup.Item>
            <ListGroup.Item>Designation: {employee.designation}</ListGroup.Item>
            <ListGroup.Item>Salary: {employee.salary}</ListGroup.Item>
          </ListGroup>
          <Card.Body className='text-end me-2'>
<Link to={'/'}><button className='btn btn-dark rounded-pill '>Back</button></Link>
          </Card.Body>
        </Card>
        </Col>
    </Row>
        </div>
    </div>
  )
}

export default View
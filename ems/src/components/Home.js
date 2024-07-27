import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


function Home() {

    const [employees, setEmployees] = useState([])

    const fetchEmployees = async () => {
        const result = await axios.get('http://localhost:8000/')
        setEmployees(result.data.message)
        console.log(employees)
    }

    useEffect(() => {
        fetchEmployees();
    }, [])

const deleteEmployee= async (id)=>{
    const result=await axios.delete('http://localhost:8000/deleteEmployee/'+id)
    alert('Are you sure to remove this Employee')
    fetchEmployees();

}

    return (
        <div >
            <div className='w-100 container p-4 my-5 border-0 shadow-lg text-center rounded'>
                <h1 className='my-4'>Employee Log  </h1>
                <div className='row'>
                    <div className='col-lg-5 col-md-4'>
                        <img style={{ width: '100%' }} src="/empPic.png" alt="" />
                    </div>

                    <div className='col-lg-7 col-md-8'>
                        <p>
                        Welcome! Our mission is to simplify your work life by providing a seamless way to track your details, log work hours, and collaborate with colleagues. Here you can keep a log if you’re a remote team member or part of an office-based workforce.
                        </p>
                        <Link to={'/add'}>
                            <button className='btn btn-danger rounded-pill shadow-lg'>
                                <i class="fa-solid fa-user-plus"></i> Add Employee
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='container-lg table my-5 p-3 rounded' style={{backgroundColor:"#E1F7F5"}} >
                <Table striped bordered hover variant="dark" responsive='md'>
                    <thead>
                        <tr className='text-warning'>
                            <th>#</th>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Experience in years</th>
                            <th>Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees?.map((employee, index) => (
                                <tr>
                                    <td>{index+1}</td>

                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.designation}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.experience}</td>
                                    <td>
                                        <div className='btn-group'>
                                            <a href={`/view/${employee.id}`} class="  btn "><li class="font fa fa-eye " style={{ color: 'white' }}></li></a>
                                            <a href={`/edit/${employee.id}`} class=" btn"><li class="font fa fa-pen" style={{ color: 'white' }}></li></a>
                                            <Button onClick={()=>deleteEmployee(employee.id)} className="  btn rounded-pill bg-dark  "><li class="font fa fa-trash-alt" style={{ color: 'white' }}></li></Button>
                                        </div>


                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Home
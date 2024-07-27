import React, { useEffect, useState } from 'react'
import './Edit.css'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import axios from 'axios'


function Add() {

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [desig, setDesig] = useState('')
    const [sal, setSal] = useState(0)
    const [exp, setExp] = useState(0)

    useEffect(() => {
        setId(uuid().slice(0, 3))
    }, [])


    const addEmployee = async (e) => {
        e.preventDefault()
        setId(uuid().slice(0, 3))
        const body = {
            id,
            name,
            designation: desig,
            salary: sal,
            experience: exp

        }
        const result = await axios.post('http://localhost:8000/addEmployee/',body)
        alert(result.data.message)
window.location.reload(false);
    }

    return (
        <div className='container d-flex align-items-center justify-content-center mt-5'>

            <div className=' box_div shadow-lg p-2 my-5 rounded-3 '>
                <form action="" className='.form m-3 p-3'>
                    <label htmlFor="name">Name </label>
                    <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" className="form-control border-1" />
                    <label htmlFor="designation">Designation</label>
                    <input onChange={(e) => setDesig(e.target.value)} type="text" id="designation" name="designation" className="form-control" />
                    <label htmlFor="salary">Salary</label>
                    <input onChange={(e) => setSal(e.target.value)} type="text" id="salary" name="sala ijh
                    ry" className="form-control" />
                    <label htmlFor="experience">Experience</label>
                    <input onChange={(e) => setExp(e.target.value)} type="text" id="experience" name="experience" className="form-control" />
                    <div className='d-flex justify-content-between'>
                        <div className='mt-4 text-end'> <Link to={'/'}><button className='btn ms-3  btn-dark  rounded-pill'>Back</button></Link></div>
                        <div className='mt-4 text-start'> <button onClick={(e) => addEmployee(e)} className='btn btn-success me-3 rounded-pill'>Add</button></div>
                    </div>


                </form>
            </div>


        </div>
    )
}

export default Add
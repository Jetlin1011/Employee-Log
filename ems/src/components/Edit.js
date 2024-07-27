import React, { useEffect, useState } from 'react'
import './Edit.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


// let location =useNavigate()////////////////////////////////////////////////////
// location('/')

function Edit() {
  let location = useNavigate()
  // const [employee, setEmployee] = useState([])

  const [name, setName] = useState('')
  const [desig, setDesig] = useState('')
  const [sal, setSal] = useState(0)
  const [exp, setExp] = useState(0)
const params = useParams();
  
  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getEmployee/' + params.id)
    setName(result.data.message.name)
    setDesig(result.data.message.designation)
    setSal(result.data.message.salary)
    setExp(result.data.message.experience)

  }

  useEffect(() => {
    fetchEmp()
  }, [])

  const editEmployee =async (e) => {
    e.preventDefault()
const body={
  id:params.id,
  name,
  designation:desig,
  salary:sal,
  experience:exp,
}
const result= await axios.post('http://localhost:8000/editEmployee',body)
fetchEmp()
alert(result.data.message)
  }



  return (
    <div className='container d-flex align-items-center justify-content-center mt-5'>

      <div className=' box_div shadow-lg p-2 my-5 rounded-3 '>
        <form action="" className='.form m-3 p-3'>
          <label htmlFor="name">Name </label>
          <input onChange={(e)=>setName(e.target.value)} value={name}  type="text" id="name" name="name" className="form-control border-1" />
          <label htmlFor="designation">Designation</label>
          <input onChange={(e)=>setDesig(e.target.value)} value={desig} type="text" id="designation" name="designation" className="form-control" />
          <label htmlFor="salary">Salary</label>
          <input onChange={(e)=>setSal(e.target.value)} value={sal} type="text" id="salary" name="salary" className="form-control" />
          <label htmlFor="experience">Experience</label>
          <input onChange={(e)=>setExp(e.target.value)} value={exp} type="text" id="experience" name="experience" className="form-control" />
          <div className='d-flex justify-content-between'>
            <div className='mt-4 text-end'> <button onClick={() => location('/')} className='btn ms-0  btn-dark  rounded-pill'>Back</button></div>
            <div className='mt-4 text-start'> <button onClick={(e) => editEmployee(e)} className='btn  btn-success me-0 rounded-pill'>Update</button></div>
          </div>
        </form>
      </div>


    </div>
  )
}

export default Edit
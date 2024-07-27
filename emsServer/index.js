const express= require('express')
const cors=require('cors')

const app= express()
app.use(cors({origin:'http://localhost:3000'}))

app.use(express.json())

const ds=require('./services/logic')


app.get('/',(req,res)=>{
    ds.getAllEmployees().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.get('/getEmployee/:id',(req,res)=>{
    ds.getEmployee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.delete('/deleteEmployee/:id', (req,res)=>{
    ds.removeEmployee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})


app.post('/addEmployee', (req,res)=>{
    ds.addNewEmployee(req.body.id,req.body.name,req.body.designation, req.body.salary, req.body.experience).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/editEmployee',(req,res)=>{
    ds.editEmployee(req.body.id,req.body.name,req.body.designation, req.body.salary, req.body.experience).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.listen(8000, ()=>{
    console.log("server running")
})
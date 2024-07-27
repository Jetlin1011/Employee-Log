  const db =require('./db');


  getAllEmployees=()=>{
    return db.Employee.find().then(users=>{
        // console.log(users)
        if(users){
            return{
                status:true,
                statusCode:200,
                message:users
            }
        }
        else{

            return{
                status:false, 
                statusCode:400,
                message:"No Employee added"
            }
        }
    })
  }

getEmployee=(id)=>{
    return db.Employee.findOne({id}).then(user=>{
        console.log(user)
        if(user){
            return{
                status:true,
                statusCode:200,
                message:user
            }
        }
        else{
            return{
                status:false,
                statusCode:400,
                message:'no employee present'
            }
        }
    })
}

removeEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then(data=>{
        if(data){
            return{
                status:true,
                statusCode:200,
                message:"Employee deleted"
            }
        }
        else{
           return{
            status:false,
            statusCode:400,
            message:'employee not delted'
           } 
        }
    })
}

addNewEmployee=(id,name,designation,salary,experience)=>{
    return db.Employee.findOne({id}).then(emp=>{
if(emp){
    return{
        status:false,
            statusCode:400,
            message:'employee already present' 
    }
}
else{
    newEmployee =new db.Employee({
        id,
        name:name,
        designation,
        salary,
        experience
    })
    newEmployee.save()
    return{
        status:true,
                statusCode:200,
                message:"Employee added"
    }
}
    })
}

editEmployee=(id,name,designation,salary,experience)=>{
    return db.Employee.findOne({id}).then(employee=>{
        if(employee){
            employee.name=name;
            employee.designation=designation;
            employee.salary=salary
            employee.experience=experience
            employee.save()
            return{
                status:true, 
                statusCode:200,
                message:"Employee updated"
            }
        }
        else{
            return{status:false,
            statusCode:400,
            message:'employee not present'}
        }
    })
}


  module.exports={
    getAllEmployees,
    getEmployee,
    removeEmployee,
    addNewEmployee,
    editEmployee
  }
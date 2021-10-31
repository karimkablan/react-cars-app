import React ,{useState} from "react";
import Employee from "../employee/employee";
import axios from "axios";



const Manger = ()=>{
    const [allEmployee, setAllEmployee] = useState([])
    const [carsData, setCarsData] = useState([])


 

    React.useEffect(() => {
        const request= axios.get(`https://617bd6c7d842cf001711c0f3.mockapi.io/cars`)
        .then((res)=>{
            setCarsData(res.data)
        })
        .catch((err) =>{
            console.log(err);
        })



        axios.get('https://617bd6c7d842cf001711c0f3.mockapi.io/employee')
            .then((res) => {
                setAllEmployee(res.data)
            })
            .catch((err) =>{
                console.log(err);
            })
            updatedCars()
    }, [])


    const updatedCars = ()=>{
        carsData.map((e) =>{
        allEmployee.map((element)=>{
            if(element.hasAcar && element.id === e.id){
                console.log(element.hasAcar);
                 e.rentDeails={
                   name : element.name,
                   id : element.id,
                   avatar : element.avatar
                 }
                  axios.put(`https://617bd6c7d842cf001711c0f3.mockapi.io/cars/${e.id}`
                 ,{rentDeails:{
                       name : element.name,
                       id : element.id,
                       avatar : element.avatar
                   }})
                 .then(() => { 
                 })
                 .catch((err) =>{
                     console.log(err);
                 })

                 }
            })  
        
        })
        
    }

  
    const deleteEmployee = async (id)=>{
        console.log("id ",id);
       const deletedMembers = await axios.delete(`https://617bd6c7d842cf001711c0f3.mockapi.io/employee/${id}/members/${id}`)
      const deletedEmployee = await axios.delete(`https://617bd6c7d842cf001711c0f3.mockapi.io/employee/${deletedMembers.data.employeeId}`)
       console.log(deletedMembers);
       if(deletedEmployee.status === 200){
         let updated = allEmployee.filter((employee) => {
             return employee.id !== id;
        })
         setAllEmployee(updated);
       }
    }




    return (
        <div>
            <ul> 
               
            {allEmployee.map((element) => {
                return   <Employee key={element.id} name={element.name} avatar={element.avatar} isActive={element.isActive} id={element.id} deleteEmployee={(e)=>{deleteEmployee(e.target.id)}}/>
            })}
            </ul>
            
        </div>
    )
}

export default Manger ;









// const updatedCars =  ()=>{
//     let tempEmployees = [...allEmployee] 
//    let tempCars = [...carsData].map((car) => {
//     tempEmployees = tempEmployees.map((Employee)=>{
//         if(car.isGold){
//             if(!Employee.hasAcar) {
//                 const request=  axios.get(`https://617bd6c7d842cf001711c0f3.mockapi.io/employee/${Employee.id}/members`)
//                 .then((res)=>{
//                     if(res.data.salary >= 20000){
//                     car.rentDeails={
//                         id:Employee.id,
//                         name : Employee.name,
//                         avatar : Employee.avatar
//                      }
//                      Employee.hasAcar = true
//                      return Employee
//                     } })
//                 .catch((err) =>{
//                     console.log(err);
//                 })
          
//             }
//         }
//         else{
//             if(!Employee.hasAcar) {
//                 const request=  axios.get(`https://617bd6c7d842cf001711c0f3.mockapi.io/employee/${Employee.id}/members`)
//                 .then((res)=>{
//                     if(res.data.salary < 20000){
//                     car.rentDeails={
//                         id:Employee.id,
//                         name : Employee.name,
//                         avatar : Employee.avatar
//                      }
//                      Employee.hasAcar = true
//                      return Employee
//                     } })
//                 .catch((err) =>{
//                     console.log(err);
//                 })

          
//             }
//         }
//             return Employee
//         })
//     })

//     console.log([...tempCars]);
    

// }
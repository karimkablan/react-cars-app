import React ,{useState} from "react";
import axios from "axios";


const Employee = ({name, avatar, isActive, id , deleteEmployee})=>{
    const [membersdata, setMembersdata] = useState([])
    const [showData, setShowData] = useState(false)
    const [employee, setEmployee] = useState({
        name : name,
        avatar :avatar,
        isActive :isActive,
        id : id
    })




    React.useEffect(async() => {
       const request= await axios.get(`https://617bd6c7d842cf001711c0f3.mockapi.io/employee/${id}/members`)
       setMembersdata({...request.data[0]})
    }, [])

    
    
    const showEmployeeData = ()=>{
        setShowData(!showData)
    }
   
    return (
        <div>
        
            <li>
                <p>id :{employee.id} ★★★ name :{employee.name} </p>
                <input type="button" onClick={showEmployeeData} value={showData?"🔼 Show Less":"🔽 Show More"}/>
                { showData ?  <div>
                         <img src={employee.avatar} style={{width:"200px",height:"200px"}}></img>
                         <p>salary :{membersdata.salary}</p>
                         <p>Departmen : {membersdata.Department}</p>
                 <input type="button" value="Delete" onClick={deleteEmployee} id={membersdata.id}/>        
                </div>: ""}
           </li>
           

        </div>
    )
}

export default Employee ;
import axios from "axios";
import React,{useState} from "react";



const Cars = ()=>{
 
    const [carsData, setCarsData] = useState([])

    React.useEffect(async() => {
        const request= await axios.get(`https://617bd6c7d842cf001711c0f3.mockapi.io/cars`)
        setCarsData(request.data)
     }, [])
    

    return (
        <div>
            {carsData.map((element) => {
              return <div key={element.id}>
                  <p>{element.name}</p>
                  <p> {element.rentDeails.name} </p>
                  <p> {element.rentDeails.id} </p>
                 <img src={element.rentDeails.avatar}/>
                  <img src={`https://source.unsplash.com/200x200/?cars,${element.name}`}style={{width:"200px",height:"200px"}}/>
              </div>
          })}
        </div>
    )
}

export default Cars ;
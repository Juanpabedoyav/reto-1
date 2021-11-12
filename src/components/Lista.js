import React,{useState, useEffect} from 'react'
import axios from 'axios';
export const Lista = () => {
const [carro, setCarro] = useState([]);


const url = 'https://reto-ya.herokuapp.com/registro'
useEffect(() => {
fetch(url)
.then(response=> {
   return response.json()
})
.then((data)=>{
    setCarro(data);
    console.log( setCarro(data));

})
.catch(()=>{
    console.log("No se establecio conexion");
});
    
}, [])


// const deleteData =(id)=>{
//      axios.delete(url +'/'+id)
//      .then(response=>{
//         setCarro(response);
//      })
// }
// console.log(deleteData());
    return (
        <div>
             <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre del vehiculo</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>Estado</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                        {
                        carro.map((pichirilo, i) => {
                           return(
                               <>
                            <tbody key={i}> 
                            <td>{pichirilo.nombre}</td>
                            <td>{pichirilo.marca}</td>
                            <td>{pichirilo.color}</td>
                            <td>{pichirilo.estado}</td>
                            <td>{pichirilo.imagen}</td>
                            <td>
                            <button  type="button">Eliminar</button>
                            </td>
                            </tbody>
                            </>
                            )
                        })
                      }
            </table>
        </div>
        </div>
    )
}


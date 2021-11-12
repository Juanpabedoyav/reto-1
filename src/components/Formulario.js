import React,{useState} from 'react'
import axios from 'axios'
export const Formulario = () => {
const [registro, setRegistro] = useState({
    nombre: '',
    marca: '',
    color: '',
    estado: '',
    imagen: ''
})
// obteniendo values de inputs, meto al estado inicial los nuevos valores
  const  handleChange=({target})=>{
    setRegistro({
        ...registro,
        [target.name]: target.value,
        [target.name]: target.value,
        [target.name]: target.value,
        [target.name]: target.value,
        [target.name]: target.value,
    });
}
const url='https://reto-ya.herokuapp.com/registro'

const postData = ()=>{
axios.post(url, registro)
.then(response=>{
    console.log(response);
})
}
//    fetch('url')
//     method: 'POST'
//     body: JSON.stringify(registro),
//     Header:{

// }
// console.log(postData());

// save();
// console.log(registro);

// console.log(handleChange)

    return (
           <form id="formulario">
           <h2>Registro de Estudiantes</h2>
           <hr/>
               <div>
                   <label>Nombre</label>
                   <input id="inputNombre" name="nombre" onChange={handleChange}/>
               </div>
               <div>
                   <label>Marca</label>
                   <input id="inputMarca" type="text" name="marca"onChange={handleChange}/>
               </div>    
               <div>
                   <label>Colo</label>
                   <input id="inputColor" type="text" name="color"onChange={handleChange}/>
               </div>
               <div>
                   <label>Estado del vehiculo</label>
                   <select id="selectEstado" name="estado" onChange={handleChange}>
                       <option name="Seleccionar" value="Seleccionar">Seleccionar</option>
                       <option name="usado" value="usado">Usado</option>
                       <option name="semiUsado" value="semiUsado">Semi-usado</option>
                       <option name="nuevo" value="nuevo">Nuevo</option>
                   </select>
               </div>  
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" onChange={handleChange}/>
                    
               </div>
               <div>
                   <button onSubmit={postData} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        
    )
}

import Articulos from "../components/Articulos"
import { useEffect, useState } from "react";
import supabase  from "../lib/supabase.js";
import {articulosd} from "../utils/data.js"
import productos from "../styles/productos.module.css";
export default function carniceria(){
  //aqui se conectara a la base de datos
  const [articulos, setarticulos] = useState([]);
  const [contador, setcontador]=useState(0);
  const [limite, setlimite]=useState(0);
  
  
  useEffect(() => {
    
    cargarArticulos();
  }, []);

  const cargarArticulos = async () => {
    
    try {
      
      const { data, error } = await supabase
        .from("articulo")
        .select("descripcion , precio").eq("id_departamento",1).range(0,3)
 
      if (error) throw error;
      setarticulos(data);
    } catch (error) {
      alert(error.message);
    } finally {
      
    }
    
  };
  
  
  const numerodeArticulos = async (id_departamento) =>{
     try{
      const { count, error } = await supabase
  .from('articulo')
  .select('*', { count: 'exact', head: true })
  .eq("id_departamento",id_departamento)
  if (error) throw error;
     setlimite(count);
  
     }catch (error) {
      alert(error.message);
    } 
  }

  return (
    <div className="">
        <div className="">
          
        </div>
        
         <Articulos data={articulos}/>
    </div>
     
  )
}
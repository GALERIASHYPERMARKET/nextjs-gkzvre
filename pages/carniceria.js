import Articulos from "../components/Articulos"
import { useEffect, useState } from "react";
import supabase  from "../lib/supabase.js";
import {articulosd} from "../utils/data.js"
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
    <div className=" p-6 mx-0 bg-charcuteria bg-cover h-screen w-screen flex flex-col items-center space-y-12">
        <div className="flex flex-col space-y-6 items-center">
          <h1 className="font-bold text-5xl text-white">Carniceria</h1>
          <h3 className="font-bold text-5xl text-white">Productos para ti</h3>
        </div>
        
         <Articulos data={articulos}/>
    </div>
     
  )
}
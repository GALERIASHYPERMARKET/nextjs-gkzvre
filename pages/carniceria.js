import Articulos from "../components/Articulos.jsx"
import { useEffect, useState } from "react";
import { supabase } from "../lib/initSupabase.js";
import articulosd from "../utils/data.js"
export default function carniceria(){
  //aqui se conectara a la base de datos
  const [articulos, setarticulos] = useState([]);
  const [contador, setcontador]=useState(0);
  const [limite, setlimite]=useState(0);
  
  
  useEffect(() => {
    cargarA();
  }, []);

  const cargarArticulos = async () => {
    
    try {
      
      const { data, error } = await supabase
        .from("ARTICULO")
        .select("descripcion, id_departamento, precio")
        ;
 
      if (error) throw error;
      setarticulos(data);
      console.log(data);
    } catch (error) {
      alert(error.message);
    } finally {
      
    }
  };
  const cargarA=()=>{
    setarticulos(articulosd);
  }
  
  const numerodeArticulos = async (id_departamento) =>{
     try{
      const { count, error } = await supabase
  .from('ARTICULOS')
  .select('*', { count: 'exact', head: true })
  .eq("id_departamento",id_departamento)
  if (error) throw error;
  setlimite(count);
   return count;
     }catch (error) {
      alert(error.message);
    } 
  }

  return (
    <>
      <Articulos data={articulos}/>
    </>
  )
}
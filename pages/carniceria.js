import Articulos from "../components/Articulos.jsx"
import { useEffect, useState } from "react";
export default function carniceria(){
  //aqui se conectara a la base de datos
  const [articulos, setarticulos] = useState([]);
  const [contador, setcontador]=useState(0);
  const [limite, setlimite]=useState(0);
  
  numerodeArticulos(1);
  useEffect(() => {
    const interval = setInterval(() => {
      
      cargarArticulos(1,contador);
     },60*1000);
  }, []);

  const cargarArticulos = async (id_departamento,limite) => {
    
    try {
      
      const { data, error } = await supabase
        .from("ARTICULO")
        .select("descripcion, id_departamento, precio")
        .eq("id_departamento", id_departamento).range(limite, limite+3);
 
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
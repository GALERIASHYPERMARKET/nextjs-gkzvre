const Articulos = ({ data }) => {
  return (
    <div >
      {data?.map((item) => (
        <div  >
          <p >
            {item.descripcion}
          </p>
          <p >
            {item.precio}
          </p>
          <p>Reps:{item.id_departamento}</p>
          
        </div>
      ))}
    </div>
  );
 };
 
 export default Articulos;
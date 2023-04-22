const Articulos = ({ data }) => {
  return (
    <div className={}>
      {data?.map((item) => (
        <div key={} className={}>
          <p className={}>
            {item.descripcion}
          </p>
          <p className={}>
            {item.precio}
          </p>
          <p className={}>Reps:{item.id_departamento}</p>
          
        </div>
      ))}
    </div>
  );
 };
 
 export default Articulos;
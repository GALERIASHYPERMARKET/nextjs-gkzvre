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
          <p></p>
          
        </div>
      ))}
    </div>
  );
 };
 
 export default Articulos;
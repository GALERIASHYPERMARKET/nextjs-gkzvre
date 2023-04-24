const Articulos = ({ data }) => {
  return (
    <div className="flex flex-col space-y-8 text-5xl text-white  w-3/5">
      {data?.map((item) => (
        <div  className=" flex flex-row pt-12 justify-between">
          <div className="font-bold  text-left ">
            {item.descripcion}
          </div>
          
          <div className="bg-green-500 font-bold rounded-full text-center ">
            {item.precio}
          </div>
         

        </div>
      ))}
    </div>
  );
 };
 
 export default Articulos;
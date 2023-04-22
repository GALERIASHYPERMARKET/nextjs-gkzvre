


export default function televisor(){
    
  return(
    <televisor>
       <div className={styles.televisores}>
      <Link href="/panaderia1">
      <Image className={styles.televisor}
      src={logo}
      alt="Picture of the author"
      width="50"
      height="50"
      />
      <p style={{color:"LimeGreen",fontFamily:"Verdana, Arial, Helvetica, sans-serif"}} class="descripcion">Televisor 1</p>
      </Link>
      
    </div>
    </televisor>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from '../styles/panaderia.module.css';
import logo from "../utils/television.png"
import bg from '../utils/BACKGROUND.png'
export default function panaderia(){
return(
  <div style={{backgroundImage:`url(${bg.src})`, 
  height: '100vh',
  margin: '0'}}>
    <div className="flex items-center justify-center " style={{color:'LimeGreen', fontFamily:"Verdana, Arial, Helvetica, sans-serif", fontSize:"20px"}}>
        PANADERIA
    </div>
    <section className="flex flex-row min-h-screen justify-center items-center">
    
    <div className="flex flex-row  space-x-20 w-500 h-500">
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
    </div>
    
    </section>
    
  </div>
)
}
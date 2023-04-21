
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/panaderia.module.css';
import logo from "../utils/television.png";
export default function panaderia(){
return(
  <div style={{f}}>
    <section className={styles.container}>
    <div className={styles.televisores}>
      <Link href="/panaderia1">
      <Image
      src={logo}
      alt="Picture of the author"
      width="50"
      height="50"
      />
      <p class="descripcion">Televisor1</p>
      </Link>
      
    </div>

    <div className={styles.televisores}>
      <Link href="/panaderia2">
      <Image
      src={logo}
      alt="Picture of the author"
      width="50"
      height="50"
      />
      <p class="descripcion">Televisor 2 </p>
      </Link>
      
    </div>

    <div className={styles.televisores}>
      <Link href="/panaderia3">
      <Image
      src={logo}
      width="50"
      height="50"
      objectFit='contain'
      />
      <p class="descripcion">Televisor 3</p>
      </Link>
      
    </div>

    
    
    </section>
    
  </div>
)
}

import Image from "image/next";
import Link from "link/next";
import styles from '../styles/panaderia.module.css';
import logo from "../utils/logoEmpresarial.png"
export default function panaderia(){
return(
  <div>
    <section className={styles.container}>
    <div className={styles.televisores}>
      <Link href="/panaderia1">
      <Image
      src={logo}
      alt="Picture of the author"
      layout='fill'
      objectFit='contain'
      />
      <p class="descripcion">Televisor1</p>
      </Link>
      
    </div>

    <div class="Televisores">
      <Link href="/panaderia2">
      <Image
      src={logo}
      alt="Picture of the author"
      layout='fill'
      objectFit='contain'
      />
      <p class="descripcion">Televisor 3</p>
      </Link>
      
    </div>

    <div class="Televisores">
      <Link href="/panaderia3">
      <Image
      src={logo}
      alt="Picture of the author"
      layout='fill'
      objectFit='contain'
      />
      <p class="descripcion">Televisor 3</p>
      </Link>
      
    </div>
    
    </section>
    
  </div>
)
}
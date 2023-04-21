import Link from "next/link";
import {navLinks} from "../utils/data"
import { useState } from 'react';
export default function Header() {

  const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };
  return (
    <header>
      
      <nav style={{ display: "flex", flexDirection: "row",backgroundColor:"Green", justifyContent: "space-between"  }}>
        {navLinks?.map((link, index) => {
          return (
            <ul style={{listStyleType: "none",paddingLeft:"5px" }}>
              <Link href={link.path}>
                <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)', fontFamily:"Verdana, Arial, Helvetica, sans-serif",color:"white",  }}  key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
      <img src="" alt=""/>
    </header>
  );
}
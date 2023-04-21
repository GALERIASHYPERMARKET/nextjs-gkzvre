import Link from "next/link";
import {navLinks} from "../utils/data"

export default function Header() {
  return (
    <header>
      
      <nav style={{ display: "flex", flexDirection: "row",backgroundColor:"Green"  }}>
        {navLinks?.map((link, index) => {
          return (
            <ul style={{listStyleType: "none" }}>
              <Link href={link.path}>
                <li style={{backgroundColor:"", fontFamily:"Verdana, Arial, Helvetica, sans-serif"}}  key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
      <img src="" alt=""/>
    </header>
  );
}
import Link from "next/link";
import {navLinks} from "../utils/data"

export default function Header() {
  return (
    <header>
      <div className="brand" >
        <h3>Example</h3>
      </div>
      <nav style="display:flex;flexDirection:column">
        {navLinks?.map((link, index) => {
          return (
            <ul>
              <Link href={link.path}>
                <li style="" key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
    </header>
  );
}
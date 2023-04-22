import Link from "next/link";
import {navLinks} from "../utils/data"
import { useState } from 'react';
export default function Header() {

 
  return (
    <header>
      
      <nav className ="flex items-center justify-between bg-lime-500">
        {navLinks?.map((link, index) => {
          return (
            <ul style={{listStyleType: "none",paddingLeft:"5px",  }}>
              <Link href={link.path}>
                <li className="hover:text-blue hover:bg-green-400 font-mono"  key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
      <img src="" alt=""/>
    </header>
  );
}
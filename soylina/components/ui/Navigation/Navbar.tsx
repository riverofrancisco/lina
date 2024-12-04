import Link from "next/link";
import './Navbar.css'

export default function Navbar (){
    return (
      <nav>
        <h1>SOY LINA</h1>
        <ul>
          <li>
            <Link href={"/home"}>Inicio</Link>
          </li>
          <li>
            <Link href={"/home/about"}>SoyLina</Link>
          </li>
          <li>
            <Link href={"/home/events"}>Fechas</Link>
          </li>
          <li>
            <Link href={"/home/gallery"}>Galeria</Link>
          </li>
          <li>
            <Link href={"/home/contact"}>Contacto</Link>
          </li>
          
        </ul>
      </nav>
    );
}
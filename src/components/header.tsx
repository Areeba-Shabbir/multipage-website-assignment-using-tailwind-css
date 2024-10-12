import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
            <ul className="header-buttons">
            <h1>Everday Reading</h1>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact us</Link>
          
        </li>
        <li>
          <Link href="/reviews">Reviews</Link>
          
        </li>
      </ul>
        </div>
    )
}
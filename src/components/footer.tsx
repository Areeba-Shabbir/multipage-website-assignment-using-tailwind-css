import Link from "next/link";

export default function Footer(){
    return(
        <div className="footer">
            <ul className="footer-buttons">
            {/* <h1>Everday Reading</h1> */}
        <li>
          <Link href="/help">Help</Link>
        </li>
        <li>
          <Link href="/feedback">Feedback</Link>
        </li>
        <li>
          <Link href="/privacy policy">Privacy Policy</Link>
          
        </li>
        <li>
          <Link href="/social media">Social Media</Link>
          
        </li>
      </ul>
        </div>
    )
}
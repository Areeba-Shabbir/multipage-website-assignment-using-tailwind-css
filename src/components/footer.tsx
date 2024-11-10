import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer bg-pink-300 text-black py-6 shadow-lg">
      <ul className="footer-buttons flex justify-center space-x-8">
        <li>
          <Link
            href="/help"
            className="text-lg hover:text-[#9f1972] transition-all duration-300 ease-in-out hover:shadow-md px-4 py-2 rounded-md"
          >
            Help
          </Link>
        </li>
        <li>
          <Link
            href="/feedback"
            className="text-lg hover:text-[#9f1972] transition-all duration-300 ease-in-out hover:shadow-md px-4 py-2 rounded-md"
          >
            Feedback
          </Link>
        </li>
        <li>
          <Link
            href="/privacy-policy"
            className="text-lg hover:text-[#9f1972] transition-all duration-300 ease-in-out hover:shadow-md px-4 py-2 rounded-md"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/social-media"
            className="text-lg hover:text-[#9f1972] transition-all duration-300 ease-in-out hover:shadow-md px-4 py-2 rounded-md"
          >
            Social Media
          </Link>
        </li>
      </ul>
    </div>
  );
}

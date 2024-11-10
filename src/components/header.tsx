import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-pink-200 py-2 px-5 border-2 border-black shadow-lg shadow-blue-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Branding */}
        <h1 className="text-5xl font-light text-[#9f1972] font-serif text-shadow-md">
          Everyday Reading
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="header-buttons flex space-x-24">
            <li>
              <Link
                href="/"
                className="text-lg text-black py-2 px-4 block hover:bg-[#c678ac] rounded-md transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-lg text-black py-2 px-4 block hover:bg-[#c678ac] rounded-md transition-all duration-300 ease-in-out"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-lg text-black py-2 px-4 block hover:bg-[#c678ac] rounded-md transition-all duration-300 ease-in-out"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="text-lg text-black py-2 px-4 block hover:bg-[#c678ac] rounded-md transition-all duration-300 ease-in-out"
              >
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

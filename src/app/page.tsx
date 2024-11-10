import Image from "next/image";
import Novels from "@/app/public/Novels.jpeg";
import Poetry from "@/app/public/Poetry.jpg";
import Children from "@/app/public/Children.jpg";
import Stories from "@/app/public/Stories.jpg";
import Skills from "@/app/public/Skills.jpg";
import Recipes from "@/app/public/Recipe.jpg";
import Link from "next/link"; // Import Link from Next.js

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="child-container p-4">
          <Image
            src={Novels}
            alt="Novel books"
            height={200}
            width={300}
            className="rounded-lg w-full"
          />
        </div>
        <h5 className="text-xl font-semibold text-center mt-4">Novels Books</h5>
        <div className="content flex justify-center mt-4">
          <Link href="/novels" passHref>
            <button className="bg-[#9f1972] text-white rounded-md px-4 py-2 hover:bg-[#c678ac] transition-all">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="child-container p-4">
          <Image
            src={Poetry}
            alt="Poetry books"
            height={200}
            width={300}
            className="rounded-lg w-full"
          />
        </div>
        <h5 className="text-xl font-semibold text-center mt-4">Poetry Books</h5>
        <div className="content flex justify-center mt-4">
          <Link href="/poetry" passHref>
            <button className="bg-[#9f1972] text-white rounded-md px-4 py-2 hover:bg-[#c678ac] transition-all">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="child-container p-4">
          <Image
            src={Children}
            alt="Children books"
            height={200}
            width={300}
            className="rounded-lg w-full"
          />
        </div>
        <h5 className="text-xl font-semibold text-center mt-4">Children Books</h5>
        <div className="content flex justify-center mt-4">
          <Link href="/children" passHref>
            <button className="bg-[#9f1972] text-white rounded-md px-4 py-2 hover:bg-[#c678ac] transition-all">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="child-container p-4">
          <Image
            src={Stories}
            alt="Story books"
            height={200}
            width={300}
            className="rounded-lg w-full"
          />
        </div>
        <h5 className="text-xl font-semibold text-center mt-4">Story Books</h5>
        <div className="content flex justify-center mt-4">
          <Link href="/stories" passHref>
            <button className="bg-[#9f1972] text-white rounded-md px-4 py-2 hover:bg-[#c678ac] transition-all">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="child-container p-4">
          <Image
            src={Skills}
            alt="Knowledge books"
            height={200}
            width={300}
            className="rounded-lg w-full"
          />
        </div>
        <h5 className="text-xl font-semibold text-center mt-4">Knowledge Books</h5>
        <div className="content flex justify-center mt-4">
          <Link href="/skills" passHref>
            <button className="bg-[#9f1972] text-white rounded-md px-4 py-2 hover:bg-[#c678ac] transition-all">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="child-container p-4">
          <Image
            src={Recipes}
            alt="Recipe books"
            height={200}
            width={300}
            className="rounded-lg w-full"
          />
        </div>
        <h5 className="text-xl font-semibold text-center mt-4">Recipe Books</h5>
        <div className="content flex justify-center mt-4">
          <Link href="/recipes" passHref>
            <button className="bg-[#9f1972] text-white rounded-md px-4 py-2 hover:bg-[#c678ac] transition-all">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

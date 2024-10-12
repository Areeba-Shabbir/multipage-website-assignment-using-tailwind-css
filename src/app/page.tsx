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
    <div>
      <div className="parent-container">
        <div className="child-container">
          <Image
            src={Novels}
            alt="Novel books"
            height={10}
            width={300}
            style={{ borderRadius: "10%" }}
          />
        </div>
        <h5>Novels Books</h5>
        <div className="content">
          <Link href="/novels" passHref>
            <button className="explore-more-button">Explore More</button>
          </Link>
        </div>
      </div>

      <div className="parent-container">
        <div className="child-container">
          <Image
            src={Poetry}
            alt="Poetry books"
            height={10}
            width={300}
            style={{ borderRadius: "10%" }}
          />
        </div>
        <h5>Poetry Books</h5>
        <div className="content">
          <Link href="/poetry" passHref>
            <button className="explore-more-button">Explore More</button>
          </Link>
        </div>
      </div>

      <div className="parent-container">
        <div className="child-container">
          <Image
            src={Children}
            alt="Children books"
            height={10}
            width={300}
            style={{ borderRadius: "10%" }}
          />
        </div>
        <h5>Children books</h5>
        <div className="content">
          <Link href="/children" passHref>
            <button className="explore-more-button">Explore More</button>
          </Link>
        </div>
      </div>

      <div className="parent-container">
        <div className="child-container">
          <Image
            src={Stories}
            alt="Story books"
            height={10}
            width={300}
            style={{ borderRadius: "10%" }}
          />
        </div>
        <h5>Story Books</h5>
        <div className="content">
          <Link href="/stories" passHref>
            <button className="explore-more-button">Explore More</button>
          </Link>
        </div>
      </div>

      <div className="parent-container">
        <div className="child-container">
          <Image
            src={Skills}
            alt="Skill books"
            height={10}
            width={300}
            style={{ borderRadius: "10%" }}
          />
        </div>
        <h5>Knowledge books</h5>
        <div className="content">
          <Link href="/skills" passHref>
            <button className="explore-more-button">Explore More</button>
          </Link>
        </div>
      </div>

      <div className="parent-container">
        <div className="child-container">
          <Image
            src={Recipes}
            alt="recipe books"
            height={10}
            width={300}
            style={{ borderRadius: "10%" }}
          />
        </div>
        <h5>Recipe Books</h5>
        <div className="content">
          <Link href="/recipes" passHref>
            <button className="explore-more-button">Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

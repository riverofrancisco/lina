import Link from "next/link";
import "./SocialMediaCard.css";

interface SocialMediaCardI {
  logo: string;
  title: string;
  link: string;
  user: string;
}

export function SocialMediaCard({ logo, link, title, user }: SocialMediaCardI) {
  return (
    <div className={`media-${logo}`}>
      <div className="flex sm:flex-col justify-between items-start mr-3 w-full">
        <h2 className="hidden sm:flex">{title}</h2>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <button className="follow">
            Follow<p>{user}</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

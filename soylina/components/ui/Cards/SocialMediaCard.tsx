import Link from "next/link";
import "./SocialMediaCard.css";
import { ReactElement } from "react";

interface SocialMediaCardI {
  logo: ReactElement;
  title: string;
  brand: string;
  link: string;
  user: string;
  
}

export function SocialMediaCard({ logo, link, title, user, brand }: SocialMediaCardI) {
  return (
    <div className={`media-${brand}`}>
      <div className="flex sm:flex-col justify-between items-start mr-3 w-full">
        <h2 className="hidden sm:flex">{title}</h2>
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <button className="follow">
            Follow<p>{user}</p>
          </button>
        </Link>
      </div>
      {logo}
    </div>
  );
}

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
        <div className={'media-header'}>
        <h2>{title}</h2>
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

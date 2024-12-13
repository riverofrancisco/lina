import Link from "next/link";
import "./LinaCard.css";
import { ReactElement } from "react";

interface LinaCardI {
  title: string;
  link: string;
  logo: ReactElement;
  color?: string;
}

export default function LinaCard({ title, link, logo, color }: LinaCardI) {
  let targetType: string = "";
  if (link[0] != "/") {
    targetType = "_blank";
  }

  return (
    <Link href={link} target={targetType} rel="noopener noreferrer">
      <div className="link-card">
        <h2>{title}</h2>
        {logo}
      </div>
    </Link>
  );
}

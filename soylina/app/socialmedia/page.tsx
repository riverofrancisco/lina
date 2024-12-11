import { SocialMediaCard } from "@/components/ui/Cards/SocialMediaCard";
import { LinaCard } from "@/components/ui/Cards/LinaCard";
import { ContactInfo } from "@/utils/interfaces";
import "./page.css";

export default function SocialMediaPage() {
  return (
    <main>
      <div className="social-media-grid">
        <SocialMediaCard
          link={`${ContactInfo.youtubeLink}`}
          title="Youtube"
          logo="youtube"
          user={`@${ContactInfo.mediaUser}`}
        />
        <SocialMediaCard
          link={`${ContactInfo.spotifyLink}`}
          title="Spotify"
          logo="spoty2"
          user="Lina Rivero"
        />
        <SocialMediaCard
          link={`${ContactInfo.instagramLink}`}
          title="Instagram"
          logo="insta"
          user={`@${ContactInfo.mediaUser}`}
        />
        <SocialMediaCard
          link={`${ContactInfo.tiktokLink}`}
          title="Tiktok"
          logo="tiktok"
          user={`${ContactInfo.mediaUser}`}
        />
      </div>
      <div className="nav">
        <LinaCard link="/" title="Volver" logo="back" />
        <LinaCard link="/home" title="Ver Más" logo="add" />
      </div>
    </main>
  );
}

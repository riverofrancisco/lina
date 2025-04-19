import { SocialMediaCard } from "@/components/ui/Cards/SocialMediaCard";
import LinaCard from "@/components/ui/Cards/LinaCard";
import { ContactInfo, Home } from "@/utils/keys/es.json";
import {
  IconBrandSpotify,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandTiktok,
  IconArrowBackUp,
  IconSquareRoundedPlusFilled,
} from "@tabler/icons-react";
import "./page.css";


export default function SocialMediaPage() {
  return (
    <div className="social-page-container">
      <div className="social-media-grid">
        <SocialMediaCard
          link={`${ContactInfo.youtubeLink}`}
          title="Youtube"
          brand="youtube"
          logo={<IconBrandYoutube stroke={1.25} size={65} />}
          user={`@${ContactInfo.mediaUser}`}
        />
        <SocialMediaCard
          link={`${ContactInfo.spotifyLink}`}
          logo={<IconBrandSpotify stroke={1.25} size={65} />}
          title="Spotify"
          brand="spoty2"
          user="Lina Rivero"
        />
        <SocialMediaCard
          link={`${ContactInfo.instagramLink}`}
          logo={<IconBrandInstagram stroke={1.25} size={65} />}
          title="Instagram"
          brand="insta"
          user={`@${ContactInfo.mediaUser}`}
        />
        <SocialMediaCard
          link={`${ContactInfo.tiktokLink}`}
          logo={<IconBrandTiktok stroke={1.25} size={65} />}
          title="Tiktok"
          brand="tiktok"
          user={`${ContactInfo.mediaUser}`}
        />
      </div>
      <div className="nav">
        <LinaCard
          link="/"
          title={Home.Back}
          logo={<IconArrowBackUp stroke={1.25} size={40} />}
        />
        <LinaCard
          link="/home"
          title={Home.Home}
          logo={<IconSquareRoundedPlusFilled stroke={1.25} size={40} />}
        />
      </div>
    </div>
  );
}

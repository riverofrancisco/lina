import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import VideoBackground from "@/components/ui/VideoBackground/videoback.component";
import LinaCard from "@/components/ui/Cards/LinaCard";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { IconMailFilled, IconMicrophone2, IconShare, IconSquareRoundedPlusFilled } from "@tabler/icons-react";
import { ContactInfo, Home } from '@/utils/keys/es.json'
import './page.css'

export default async function Index() {
  return (
    <>
      <main>
        <VideoBackground />
        <div className="capa"></div>
        <div className="welcome">
          <h1>
            <span className="text-gradient">Lina Rivero</span>
          </h1>

          <ul role="list" className="link-card-grid">
            <LinaCard
              link="/socialmedia"
              title={Home.Media}
              logo={<IconShare stroke={1.25} size={40} />}
            />
            <LinaCard
              link={ContactInfo.spotifyLink}
              title={Home.Spotify}
              logo={<IconMicrophone2 stroke={1.25} size={40} />}
            />
            <LinaCard
              link={ContactInfo.mailLink}
              title={Home.Contact}
              logo={<IconMailFilled stroke={1.25} size={40} />}
            />
            <LinaCard
              link="/home"
              title={Home.Home}
              logo={<IconSquareRoundedPlusFilled stroke={1.25} size={40} />}
              color="#ffd0bf"
            />
          </ul>
        </div>
      </main>
    </>
  );
}

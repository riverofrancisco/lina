import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import VideoBackground from "@/components/ui/VideoBackground/videoback.component";
import LinaCard from "@/components/ui/Cards/LinaCard";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { ContactInfo } from '@/utils/keys/es.json'
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
              title="Lina en Redes sociales"
              logo="share"
            />
            <LinaCard
              link={ContactInfo.spotifyLink}
              title="Escucha mis canciones"
              logo="sing"
            />
            <LinaCard
              link={ContactInfo.mailLink}
              title="Contratar Show"
              logo="mail"
            />
            <LinaCard link="/home" title="Ver Más" logo="add" color="#ffd0bf" />
          </ul>
        </div>
      </main>
    </>
  );
}

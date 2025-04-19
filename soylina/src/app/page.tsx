import React from 'react';
import VideoBackground from '@/components/ui/VideoBackground/videoback.component';
import {
  IconMailFilled,
  IconMicrophone2,
  IconShare,
  IconSquareRoundedPlusFilled,
} from '@tabler/icons-react';
import { ContactInfo, Home } from '@/utils/keys/es.json';
import LinaCard from '@/components/ui/Cards/LinaCard';
import './page.css';
import { myPalette } from '@/config/theme';

export default function Index() {
  return (
    <>
      <VideoBackground />
      <div className="capa"></div>
      <div className="welcome">
      <div className='welcome-title'>
          <img src='/pictures/logolight.png' alt=""/>
          <h1>Lina Rivero</h1>
        </div>
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
            color={myPalette.cream}
          />
        </ul>
      </div>
    </>
  );
}

// Footer.jsx
import React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import Image from 'next/image';
import styles from './Footer.module.css';
import { ContactInfo } from '@/utils/keys/es.json';

// Simula ContactInfo, reemplaza por tus datos reales o props

export default function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="xl" className={styles.footerContainer}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center" mb={2}>
              <Image
                src={'/pictures/logolight.png'}
                alt="logo"
                width={120}
                height={120}
                className={styles.logo}
                loading="lazy"
              />
              <Typography
                variant="h6"
                component="span"
                className={styles.brand}
              >
                Lina Rivero
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography className={styles.sectionTitle}>Calendario</Typography>
            <ul className={styles.linkList}>
              <li>
                <Link href="/home/events" className={styles.link}>
                  <CalendarMonthIcon fontSize="small" /> Fechas y eventos
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography className={styles.sectionTitle}>
              Lina en redes
            </Typography>
            <ul className={styles.linkList}>
              <li>
                <a
                  href={ContactInfo.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <InstagramIcon fontSize="small" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href={ContactInfo.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <AudiotrackIcon fontSize="small" /> Spotify
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography className={styles.sectionTitle}>Contacto</Typography>
            <ul className={styles.linkList}>
              <li>
                <a
                  href={ContactInfo.instagramMD}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <InstagramIcon fontSize="small" /> MD a Instagram
                </a>
              </li>
              <li>
                <a href={ContactInfo.mailLink} className={styles.link}>
                  <EmailIcon fontSize="small" /> {ContactInfo.mail}
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box className={styles.socialRow}>
          <IconButton
            component="a"
            href={ContactInfo.spotifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <AudiotrackIcon />
          </IconButton>
          <IconButton
            component="a"
            href={ContactInfo.tiktokLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <MusicNoteIcon />
          </IconButton>
          <IconButton
            component="a"
            href={ContactInfo.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href={ContactInfo.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <YouTubeIcon />
          </IconButton>
        </Box>
        <Typography className={styles.copyright}>
          <a
            href="https://frivero.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {' '}
            © 2025 FREDI{' '}
          </a>
          . All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

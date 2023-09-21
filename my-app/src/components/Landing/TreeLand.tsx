import React from "react";
import { Typography } from "@mui/material/";

import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";

import BGimage from "./Toma1.jpg";
import BGimage2 from "./Toma1v2.jpg";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Icon } from "@iconify/react";
import MP from "./mercadopagoLogoWhite.png"
import MailIcon from '@mui/icons-material/Mail';
import DefaultLoading from "../Loading/Loading";

const actions = [
  {
    icon: <InstagramIcon />,
    color: "#C13584",
    name: "_linarivero",

    linkto: "https://www.instagram.com/_linarivero/",
  },
  {
    icon: <YouTubeIcon />,
    color: "red",
    name: "@_linarivero",
    linkto: "https://www.youtube.com/@_linarivero",
  },
  {
    icon: <Icon icon="mdi:spotify" color="lightgrey" width={"24"}/>,
    color: "green",
    name: "Lina Rivero",
    linkto:
      "https://open.spotify.com/artist/3binED05LZgUfuz7ODLCMX?si=9yS8RHbTTEieMvOW7aygig",
  },
  {
    icon: <img src={MP} alt= "MP" width={"24"}/>,
    color: "lightBlue",
    name: "LinaRiveroMusica",
    linkto: "https://link.mercadopago.com.ar/linarivero",
  },
  {
    icon: <MailIcon />,
    color: "lightgrey",
    name: "info.linarivero@gmail.com",
    linkto: "mailto:info.linarivero@gmail.com",
  },
];

const TreeLanding: React.FC = () => {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.global.value);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  if (!BGimage || !BGimage2) {
    return <DefaultLoading />;
  }

  return (
    <Grid
      container
      direction="row"
      
      sx={{
        backgroundImage: { xs: `url(${BGimage2})`, sm: `url(${BGimage})` },
        weight: "100vh",
        backgroundSize: "cover",
      }}
    >
      <Grid item xs={12}  height="100vh">
        <Grid
          item
         
          xs={12}
          sm={6}
          md={7}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: { xs: "40vd", md: 0 } }}
        >
          <Box
            
            width="100%"
            display="flex"
            alignItems="center"
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              pt: { xs: 7, sm: 20 },
              justifyContent: { xs: "center" },
            }}
          >
<Typography
 variant="h4"
  noWrap
  component="a"
  href="/"
  sx={{
    display: { md: "flex" },
    fontFamily: "monospace",
    fontWeight: 1000,
    letterSpacing:  ".5rem",
    color: { xs: "inherit" },
    textDecoration: "none",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Ajusta los valores de sombra según tus preferencias
  }}
>
  LINA RIVERO
</Typography>
          </Box>
        </Grid>

        <Grid
         
          item
          xs={12}
          sm={6}
          md={7}
          display="flex"
          justifyContent="center"
        sx={{alignItems:{xs:"end", sm:"center"}}}
        >
          {" "}
          <Box
            
            display="flex"
            alignItems="center"
            sx={{
              width: { xs: "100%", md: "70%"},
              height: {xs: "100%"},
              py: { xs: 0, sm: 5 },
              mt:{xs: "35vh", sm: 0},
              flexDirection: { xs: "column" },
              justifyContent: { xs: "end", sm: "center" },
            }}
          >
            {actions.map((action) => (
              <Box
               
                borderRadius={2}
                key={action.linkto}
                sx={{
                    bgcolor: "black", opacity: "70%",
                  py: 1,
                  px:2,
                  color: `lightgrey`,
                  m: 1,
                  mr: 0,
                  fontSize: "h1",
                  width: "80%",
                  display: "flex",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                    transitionDelay: "0.01s",
                    cursor:"pointer",
            

                  },
                }}
                onClick={() => handleLink(action.linkto)}
              >
                {action.icon}
                <Typography>{action.name}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TreeLanding;

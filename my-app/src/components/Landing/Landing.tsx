import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material/";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import { Adder } from "../../redux/portfolio/actions";
import Button from "@mui/material/Button";
import BGimage from "./Toma1.jpg";
import BGimage2 from "./Toma1v2.jpg";

import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Icon } from "@iconify/react";

const actions = [
  {
    icon: <Icon icon="mdi:instagram" color="black" />,
    color: "#C13584",
    name: "_linarivero",

    linkto: "https://www.instagram.com/_linarivero/",
  },
  {
    icon: <Icon icon="carbon:logo-youtube" color="black" />,
    color: "red",
    name: "@_linarivero",
    linkto: "https://www.youtube.com/@_linarivero",
  },
  {
    icon: <Icon icon="mdi:spotify" color="black" />,
    color: "green",
    name: "Lina Rivero",
    linkto:
      "https://open.spotify.com/artist/3binED05LZgUfuz7ODLCMX?si=9yS8RHbTTEieMvOW7aygig",
  },
];

const LandingPage: React.FC = () => {
  const handleLink = (link: string) => {
    if (link) window.open(link, "_blank");
  };

  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.global.value);

  const handleClick = () => {
    dispatch(Adder(1));
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

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
      <Grid item xs={12} height="100vh">
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
                fontWeight: 700,
                letterSpacing: { md: ".3rem" },
                color: { xs: "inherit" },
                textDecoration: "none",
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
          alignItems="center"
          justifyContent="center"
        >
          {" "}
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              width: { xs: "80%", sm: "50%" },
              py: { xs: 10, sm: 5 },
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "end", sm: "center" },
            }}
          >
            {actions.map((action) => (
              <Box key={action.linkto}>
                <IconButton
                  onClick={() => handleLink(action.linkto)}
                  sx={{
                    color: `${action.color}`,
                    m: 1,
                    mr: 0,
                    fontSize: "3rem",
                  }}
                >
                  {action.icon}
                </IconButton>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

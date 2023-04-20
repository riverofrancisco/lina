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

const LandingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.global.value);

  const handleClick = () => {
    dispatch(Adder(1));
  };
  return (
    <Grid container direction="row" mt={3} bgcolor="#6DBAC6">
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          height={"55vh"}
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ py: { sx: 0, md: 20 } }}
        >
          <Box display="flex">
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Devs Learning
            </Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="overline">
              {`${status} Users Joined Us...`}
            </Typography>
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              endIcon={<KeyboardArrowRightRoundedIcon />}
              onClick={handleClick}
            >
              Add 1
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ py: { sx: 0, md: 2 } }}
        >
          <img
            src="https://cdn.dribbble.com/users/638428/screenshots/3641004/code2.gif"
            alt="gif"
            width="100%"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default LandingPage;

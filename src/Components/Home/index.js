import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import SearchIcon from "@mui/icons-material/Search";
import cover from "../../assets/cover.jpg";
import cardUI from "../../assets/cardUI.jpg";
import dataanalyst from "../../assets/dataanalyst.jpg";
import frontenddev from "../../assets/frontenddev.jpg";
import "./cover.css";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/system";
import { Search, SearchIconWrapper, Item, StyledInputBase } from "./Theme";
import { BulbIcon, LocationIcon, PeopleIcon } from "../icon";
import { Avatar } from "@material-ui/core";
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

const index = () => {
  return (
    <>
      <CssBaseline />

      <div className="cover">
        <div className="image-cover">
          <img src={cover} alt="Career path" />
        </div>
        <div className="text-cover">
          <h1>
            Grow Your Skill <br /> To Advance Your
            <br /> Career Path
          </h1>
          <div className="search-cover">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Find your career path..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </div>
      </div>
      <div className="content">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 1, md: 12 }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <Item xs={12} sm={4} md={4}>
                <Avatar>
                  <BulbIcon />
                </Avatar>
                <h3>Explore New Oppertunity</h3>
                <br />
                <br />
                <h4>
                  Upgrade and update not just yourself, but
                  <br /> your career using our recommendations
                </h4>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item xs={12} sm={4} md={4}>
                <Avatar>
                  <LocationIcon />
                </Avatar>
                <h3>Roadmap For Your Interest</h3>
                <br />
                <h4>
                  We provide you with the roadmap for your
                  <br />
                  career choice.Explore the career and get no
                  <br />
                  distracated with the path you follow
                </h4>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item xs={12} sm={4} md={4}>
                <Avatar>
                  <PeopleIcon />
                </Avatar>
                <h3>Industry Expert Opinion</h3>
                <br />
                <h4>
                  We provide you not just the roadmap
                  <br />
                  but also show you how different field
                  <br />
                  expert made it to top their dream career.
                </h4>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <div class="q-text">
          <h1>Which Career Do You Want To Explore?</h1>
          <h4>Choose the rigth career that interest you.</h4>
        </div>
        <div className="cards">
          <Card sx={{ maxWidth: 345, marginTop: 4 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={cardUI}
                alt="UI/UX Designer"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  UI/UX Designer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore What It Take To Be UI/UX Designer.....
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, marginTop: 4 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={dataanalyst}
                alt="data Analyst"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Data Analyst
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Data is the future currency! Dig deep on how to become a Data
                  Analyst.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345, marginTop: 4 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={frontenddev}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Front-End Developer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Now create Visual Interfaces with Bunch of code.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <footer>
        <div className="container"></div>
      </footer>
    </>
  );
};

export default index;

import React, { useState } from "react";
import { ProjectType } from "../file/project";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Fade,
  Slide,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  tags,
  image,
  description,
  source,
  liveVersion,
}: ProjectType) => {
  const [target, setTarget] = useState("");
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Card
        sx={{
          maxWidth: 375,
          height: { xs: 350, md: 400 },
          margin: "1rem",
          cursor: "pointer",
          position: "relative",
          scrollSnapAlign: "center",
        }}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <CardActionArea sx={{ height: 250 }}>
          <CardMedia
            component="img"
            src={image}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: show ? "blur(0.9px)" : " blur(0px)",
            }}
          />
        </CardActionArea>
        <Fade in={!show} timeout={1000}>
          <CardContent sx={{ height: { xs: "100%", md: "100px" } }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontSize: { xs: "1.2rem", md: "1.6rem" } }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}
            >
              {description}
            </Typography>
          </CardContent>
        </Fade>
        <Slide direction="up" in={show} unmountOnExit timeout={1000}>
          <CardActions
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              height: "150px",
              position: "absolute",
              bottom: 0,

              gap: 2,

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                mx: "auto",
              }}
            >
              <Link
                to={source}
                target={`${target}`}
                onClick={() => {
                  source ? setTarget("_blank") : setTarget("");
                }}
              >
                <Button
                  size="small"
                  style={{ backgroundColor: "rgba(0,199,255,255)" }}
                  variant="contained"
                >
                  Source Code
                </Button>
              </Link>
              <Link
                to={liveVersion}
                target={`${target}`}
                onClick={() => {
                  liveVersion ? setTarget("_blank") : setTarget("");
                }}
              >
                <Button
                  size="small"
                  style={{ backgroundColor: "rgba(0,199,255,255)" }}
                  variant="contained"
                >
                  Live Version
                </Button>
              </Link>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",

                alignItems: "center",
                p: 1,
                mb: 2,
              }}
            >
              {tags.map((t) => {
                return <Chip label={t} variant="outlined" key={t} />;
              })}
            </Box>
          </CardActions>
        </Slide>
      </Card>
    </Box>
  );
};
export default ProjectCard;

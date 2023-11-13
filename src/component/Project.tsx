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
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Project = ({
  title,
  tags,
  image,
  description,
  source,
  liveVersion,
}: ProjectType) => {
  const [target, setTarget] = useState("");
  return (
    <Box>
      <Card sx={{ maxWidth: 375, minHeight: 500, margin: "1rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            src={image}
            sx={{ width: "100%", maxHeight: 300, objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              mx: "auto",
              mb: 3,
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
              gap: "1rem",
              mb: 2,
            }}
          >
            {tags.map((t) => {
              return <Chip label={t} variant="outlined" key={t} />;
            })}
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};
export default Project;

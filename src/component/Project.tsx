import React from "react";
import { ProjectType } from "../file/project";
import Icon from "./Icon";
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
  styled,
} from "@mui/material";

const Project = ({ title, tags, image, description }: ProjectType) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 375, margin: "1rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            src={image}
            sx={{ width: "100%", minHeight: 300 }}
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
            <Button
              size="small"
              style={{ backgroundColor: "rgba(0,199,255,255)" }}
              variant="contained"
            >
              Source Code
            </Button>
            <Button
              size="small"
              style={{ backgroundColor: "rgba(0,199,255,255)" }}
              variant="contained"
            >
              Live Version
            </Button>
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

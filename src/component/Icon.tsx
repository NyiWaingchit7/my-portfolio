import React from "react";
import { IconType } from "../file/icon";
import { Box, Typography } from "@mui/material";
import StackIcon from "tech-stack-icons";

const Icon = ({ name, icon, bg }: IconType) => {
  return (
    <Box
      sx={{
        maxWidth: 90,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <StackIcon style={{ width: "60px" }} name={icon} />,
      <Typography
        variant="body1"
        sx={{
          color: "white",
          mt: 1,
          textAlign: "center",
          fontSize: { xs: "0.8rem", sm: "1rem" },
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Icon;

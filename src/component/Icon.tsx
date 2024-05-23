import React from "react";
import { IconType } from "../file/icon";
import { Box, Typography } from "@mui/material";

const Icon = ({ name, src, bg }: IconType) => {
  return (
    <Box
      sx={{
        maxWidth: 90,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={src}
        sx={{
          width: { xs: "60px", md: "80px" },
          borderRadius: "20px",
          height: 50,
          objectFit: "contain",
          bgcolor: bg && bg,
          ":hover": {
            transform: "scale(1.2)",
          },
          transition: "all ease-in 0.5s",
        }}
      />

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

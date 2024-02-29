import React from "react";
import { IconType } from "../file/icon";
import { Box, Typography } from "@mui/material";

const Icon = ({ name, src, bg }: IconType) => {
  return (
    <Box
      sx={{
        maxWidth: 90,
        mb: 1,
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={src}
        sx={{
          width: { xs: "50px", md: "80px" },
          borderRadius: "20px",
          height: 70,
          objectFit: "contain",
          bgcolor: bg && bg,
        }}
      />

      <Typography
        variant="body1"
        sx={{ color: "white", mt: 1, textAlign: "center" }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default Icon;

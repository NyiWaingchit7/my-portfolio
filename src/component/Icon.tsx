import React from "react";
import { IconType } from "../file/icon";
import { Box, Typography } from "@mui/material";

const Icon = ({ name, src }: IconType) => {
  return (
    <Box
      sx={{
        maxWidth: 70,
        mb: 3,
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={src}
        sx={{ width: "100%", borderRadius: "20px" }}
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

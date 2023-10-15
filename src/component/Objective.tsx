import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Objective = ({ object }: any) => {
  return (
    <Box sx={{ my: 3 }}>
      <Box
        sx={{
          backgroundColor: "#000F2E",
          padding: 3,
          border: "1px solid #00C7FF",
          borderRadius: "10px",
          maxWidth: "400px",

          mx: 3,
        }}
      >
        {" "}
        <Typography variant="body1" sx={{ color: "white", my: 2 }}>
          {object}
        </Typography>
      </Box>
    </Box>
  );
};
export default Objective;

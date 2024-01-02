import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography";

const Objective = ({ object }: any) => {
  return (
    <Box sx={{ my: 2 }}>
      <Box
        sx={{
          backgroundColor: "#000F2E",
          padding: 2,
          border: "1px solid #00C7FF",
          borderRadius: "10px",
          maxWidth: "400px",
          minHeight: "100px",
          mx: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Typography sx={{ color: "white", lineHeight: 1.5 }}>
          {object}
        </Typography>
      </Box>
    </Box>
  );
};
export default Objective;

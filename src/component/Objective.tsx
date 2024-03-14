import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { obj } from "../file/object";
interface prop {
  selected: string;
  setSelected: (d: string) => void;
}
const Objective = ({ selected, setSelected }: prop) => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #7B89A8",
        maxWidth: "1100px",

        mx: "auto",
        minHeight: "fit-content",
      }}
      id="objective"
      onMouseOver={() => setSelected("Objective")}
    >
      <Typography
        variant="h5"
        color="white"
        sx={{
          width: "100%",
          textAlign: "center",
          mt: 8,
          mb: 3,
          fontSize: { md: "2rem" },
        }}
      >
        Objectives
      </Typography>
      <Stack
        direction="row"
        sx={{
          overflow: "auto",
          cursor: "pointer",
          p: 2,
          flexWrap: { md: "wrap" },
          justifyContent: { md: "center" },
        }}
      >
        {obj.map((o) => {
          return (
            <Box sx={{ flexShrink: 0, m: 1 }} key={o}>
              <Box
                sx={{
                  backgroundColor: "#000F2E",

                  border: "2px solid #00C7FF",
                  borderRadius: "10px",
                  maxWidth: { xs: "300px", md: "400px" },
                  minHeight: "150px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2,
                  ":hover": {
                    borderColor: "#7B89A8",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    lineHeight: 1.7,
                    fontSize: { xs: "0.8rem", md: "1rem" },
                  }}
                >
                  {o}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};
export default Objective;

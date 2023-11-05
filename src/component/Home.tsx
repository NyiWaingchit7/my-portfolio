import { Box, Typography, styled } from "@mui/material";
import { obj } from "../file/object";
import Experience from "./Experience";
import Objective from "./Objective";
import img from "../pic/383784630_1052459922592359_848932231236809971_n.jpg";

const Home = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "1200px",
    mx: "auto",
    mt: 8,
    mb: 5,
    p: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  }));
  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  }));
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <CustomBox>
          <Box sx={{ maxWidth: "800px" }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", color: "white" }}
            >
              Hello, I'm Nyi Waing Chit, a{" "}
              <span style={{ color: "rgba(0,199,255,255)" }}>
                Web Developer
              </span>
            </Typography>
            <CustomTitle variant="h4">
              I'm excited to showcase my work. Discover the{" "}
              <span style={{ color: "rgba(0,199,255,255)" }}> Projects</span>{" "}
              I've done.
            </CustomTitle>
          </Box>

          <Box
            component="img"
            src={img}
            sx={{ width: "30%", borderRadius: "50%", mb: 3, bgcolor: "white" }}
          />
        </CustomBox>

        <Box
          sx={{ borderTop: "1px solid #7B89A8", maxWidth: "1100px", mt: 7 }}
          id="objective"
        >
          <Typography
            variant="h4"
            color="white"
            sx={{ width: "100%", textAlign: "center", mt: 8, mb: 3 }}
          >
            Objectives
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {obj.map((o) => {
              return <Objective object={o} key={o} />;
            })}
          </Box>
        </Box>
        <Box sx={{ borderTop: "1px solid #7B89A8" }} id="about">
          <Experience />
        </Box>
      </Box>
    </Box>
  );
};
export default Home;

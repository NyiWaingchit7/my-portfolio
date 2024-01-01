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

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
      <Box>
        <CustomBox>
          <Box sx={{ maxWidth: "800px" }}>
            <Typography
              sx={{
                textAlign: "center",
                color: "white",
                fontSize: { xs: "1rem", md: "1.5rem" },
                lineHeight: { xs: 1.5, md: 1.7 },
              }}
            >
              Hello there! I'm Nyi Waing Chit, a passionate and ambitious web
              developer. As you navigate through my portfolio, you'll discover
              the perfect blend of creativity, innovation, and technical
              prowess.
            </Typography>
          </Box>

          <Box
            component="img"
            src={img}
            sx={{ width: "30%", borderRadius: "50%", mb: 3, bgcolor: "white" }}
          />
        </CustomBox>

        <Box
          sx={{
            borderTop: "1px solid #7B89A8",
            maxWidth: "1100px",
            mt: 7,
            mx: "auto",
          }}
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

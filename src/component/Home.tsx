import { Box, Slide, Typography, Zoom, styled } from "@mui/material";
import img from "../pic/383784630_1052459922592359_848932231236809971_n.jpg";

const Home = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "1200px",
    mx: "auto",
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        minHeight: "fit-content",
      }}
    >
      <Box>
        <CustomBox>
          <Zoom in={true} appear={true} timeout={2000}>
            <Box sx={{ maxWidth: "800px" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "white",
                  fontSize: { xs: "1rem", sm: "1.5rem" },
                  lineHeight: { xs: 1.5, md: 1.7 },
                }}
              >
                Hello there! I'm{" "}
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                    fontWeight: "bold",
                    color: "#00C7FF",
                  }}
                >
                  Nyi Waing Chit
                </Typography>{" "}
                , a passionate{" "}
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                    fontWeight: "bold",
                    color: "#00C7FF",
                  }}
                >
                  Web Developer
                </Typography>{" "}
                . As you navigate through my portfolio, you'll discover the
                perfect blend of creativity, innovation, and technical prowess.
              </Typography>
            </Box>
          </Zoom>

          <Zoom in={true} appear={true} timeout={2000}>
            <Box
              component="img"
              src={img}
              sx={{
                width: { xs: "50%", sm: "30%", lg: "30%" },
                borderRadius: "50%",
                mb: 3,
                bgcolor: "white",
                boxShadow: 3,
                p: 0.2,
              }}
            />
          </Zoom>
        </CustomBox>
      </Box>
    </Box>
  );
};
export default Home;

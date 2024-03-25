import { Box, Slide, Typography, Zoom, styled } from "@mui/material";
import img from "../pic/383784630_1052459922592359_848932231236809971_n.jpg";
interface prop {
  selected: string;
  setSelected: (d: string) => void;
}
const Home = ({ selected, setSelected }: prop) => {
  const CustomBox = styled(Box)(({ theme }) => ({
    maxWidth: "1100px",
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
        cursor: "pointer",
        mb: 3,
      }}
      onMouseEnter={() => setSelected("Home")}
    >
      <Box>
        <CustomBox>
          <Box sx={{ maxWidth: "500px" }}>
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
                variantMapping={{ body1: "span" }}
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  fontWeight: "bold",
                  color: "#00C7FF",
                }}
              >
                Nyi Waing Chit
              </Typography>{" "}
              , a passionate{" "}
              <Typography
                variantMapping={{ body1: "span" }}
                sx={{
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
        </CustomBox>
      </Box>
    </Box>
  );
};
export default Home;

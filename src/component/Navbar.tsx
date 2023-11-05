import { AppBar, Box, Typography, styled } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-scroll";

const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  }));

  const CustomToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));
  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 2,
        px: 5,
        maxWidth: "1200px",
        mx: "auto",
        mb: 20,
      }}
      id="home"
    >
      <AppBar
        style={{
          backgroundColor: "rgba(0, 10, 31, 255)",
          boxShadow: "none",
          padding: "20px",
        }}
      >
        <CustomToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <CodeIcon
              sx={{
                maxHeight: "45px",
                maxWidth: "45px",
                objectFit: "cover",
                borderRadius: "50%",
                color: "white",
              }}
            />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Portfolio
            </Typography>
          </Box>

          <CustomBox>
            <Link
              to="home"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
              smooth
            >
              Home
            </Link>
            <Link
              to="objective"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
              smooth
            >
              Objectives
            </Link>
            <Link
              to="about"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
              smooth
            >
              About
            </Link>

            <Link
              to="project"
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
              smooth
            >
              Projects
            </Link>
          </CustomBox>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;

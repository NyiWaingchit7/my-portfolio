import { AppBar, Box, Link, Typography, styled } from "@mui/material";
import image from "../pic/275360659_700075764497445_8472877320523559701_n.jpg";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import CodeIcon from "@mui/icons-material/Code";

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
        mb: 5,
      }}
    >
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
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
            {/* <Box
              component="img"
              sx={{
                maxHeight: "45px",
                maxWidth: "45px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
              src={image}
            /> */}
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
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Objectives
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              About
            </Link>

            <Link
              style={{
                textDecoration: "none",
                color: "white",
                cursor: "pointer",
              }}
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

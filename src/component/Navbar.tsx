import { AppBar, Box, Typography, styled } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router-dom";

interface prop {
  selected?: string;
  setSelected: (d: string) => void;
}
const Navbar = ({ selected, setSelected }: prop) => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

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
        mb: 7,
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
            {navItems.map((d) => (
              <Link
                key={d.id}
                to={d.to}
                style={{
                  textDecoration: "none",
                  color: "white",
                  cursor: "pointer",
                  margin: "10px",
                }}
                onClick={() => setSelected(d.name)}
              >
                <Typography
                  sx={{ color: selected === d.name ? "#00C7FF" : "white" }}
                >
                  {d.name}
                </Typography>
              </Link>
            ))}
          </CustomBox>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;

export const navItems = [
  {
    id: 1,
    name: "Home",
    to: "/",
  },
  {
    id: 2,
    name: "Projects",
    to: "projects",
  },
];

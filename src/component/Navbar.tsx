import { AppBar, Box, Typography, styled } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { Link, NavLink } from "react-router-dom";

interface prop {
  selected?: string;
  setSelected: (d: string) => void;
}
const Navbar = ({ selected, setSelected }: prop) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        maxWidth: "1200px",
        mx: "auto",
      }}
      id="home"
    >
      <AppBar
        style={{
          backgroundColor: "rgba(0, 10, 31, 255)",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {navItems.map((d) => (
              <NavLink
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
              </NavLink>
            ))}
          </Box>
        </Box>
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
    to: "/projects",
  },
];

import { Box, Typography } from "@mui/material";
import { BrowserRouter, Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        mx: "auto",
        p: 3,
        borderTop: "1px solid #7B89A8",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PhoneIcon sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>09757573132</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <EmailIcon sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>nyiwaingchit5@gmail.com</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {footerIcon.map((d) => (
          <Link
            key={d.id}
            to={d.link}
            target="_blink"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            {d.icon}
          </Link>
        ))}
      </Box>
    </Box>
  );
};
export default Footer;
export const footerIcon = [
  {
    id: 1,
    icon: <GitHubIcon sx={{ color: "white" }} />,
    link: "https://github.com/NyiWaingchit7",
  },
  {
    id: 2,
    icon: <FacebookIcon sx={{ color: "white" }} />,
    link: "https://web.facebook.com/Chit.24007",
  },
  {
    id: 3,
    icon: <InstagramIcon sx={{ color: "white" }} />,
    link: "https://www.instagram.com/nyiwaingchit/",
  },
  {
    id: 4,
    icon: <LinkedInIcon sx={{ color: "white" }} />,
    link: "https://www.linkedin.com/in/nyi-waing-chit-a0492928a/",
  },
];

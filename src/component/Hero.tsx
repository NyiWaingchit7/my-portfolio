import { Box, Slide, Typography, Zoom, styled } from "@mui/material";
import img from "../pic/383784630_1052459922592359_848932231236809971_n.jpg";
import { useEffect, useRef, useState } from "react";
interface prop {
  selected?: string;
  setSelected: (d: string) => void;
}
const Hero = ({ selected, setSelected }: prop) => {
  const [isVisible, setIsVisible] = useState(false);

  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        minHeight: "fit-content",
        cursor: "pointer",
        mb: 2,
      }}
      ref={elementRef}
      onMouseEnter={() => setSelected("Home")}
      className={`hidden-content ${isVisible ? "visible" : ""}`}
    >
      <Box>
        <Box
          sx={{
            maxWidth: "1100px",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
        >
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
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;

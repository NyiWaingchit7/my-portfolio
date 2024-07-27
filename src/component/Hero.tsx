import { Box, Typography } from "@mui/material";
import img from "../pic/383784630_1052459922592359_848932231236809971_n.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  console.log(inView);

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
        mt: 2,
      }}
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
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 250 }}
            transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 } }}
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
          </motion.div>
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

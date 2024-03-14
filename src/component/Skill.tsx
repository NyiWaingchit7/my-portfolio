import { Box, Stack, Typography, styled } from "@mui/material";

import { icons } from "../file/icon";
import Icon from "./Icon";
interface prop {
  selected: string;
  setSelected: (d: string) => void;
}
const Skill = ({ selected, setSelected }: prop) => {
  const MainBox = styled(Box)(({ theme }) => ({
    maxWidth: "1200px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "3rem",
    },
  }));
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        my: 8,
        mx: "auto",
        borderTop: "1px solid #7B89A8",
        minHeight: "fit-content",
      }}
      id="about"
      onMouseOver={() => setSelected("About")}
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            color: "white",
            my: 5,
            fontSize: { md: "2rem" },
          }}
          variant="h5"
        >
          About
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
          I can help you with this following
          <span style={{ color: "rgba(0,199,255,255)" }}> skills</span> I've
          learned
        </Typography>
        <Box sx={{ justifyContent: "center", my: 2 }}>
          <MainBox>
            <Stack
              direction="row"
              sx={{
                overflow: "auto",
                cursor: "pointer",
                p: 1,
                flexWrap: { md: "wrap" },
                justifyContent: { md: "center" },
                gap: 2,
              }}
            >
              {icons.map((i) => {
                return (
                  <Icon
                    key={i.id}
                    id={i.id}
                    bg={i.bg}
                    name={i.name}
                    src={i.src}
                  />
                );
              })}
            </Stack>
          </MainBox>
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;

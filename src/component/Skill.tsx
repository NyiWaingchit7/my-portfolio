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

        minHeight: "fit-content",
      }}
      onMouseOver={() => setSelected("About")}
    >
      <Box>
        <Typography variant="h5" sx={{ textAlign: "center", color: "white" }}>
          Here are the
          <span style={{ color: "rgba(0,199,255,255)" }}> Tech Stack</span> I've
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

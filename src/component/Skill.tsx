import { Box, Stack, Typography, styled } from "@mui/material";

import { icons } from "../file/icon";
import Icon from "./Icon";
interface prop {
  selected?: string;
  setSelected: (d: string) => void;
}
const Skill = ({ selected, setSelected }: prop) => {
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        my: 3,
        mx: "auto",
        minHeight: "fit-content",
      }}
      onMouseOver={() => setSelected("About")}
    >
      <Box>
        {/* <Typography
          sx={{
            textAlign: "center",
            color: "white",
            fontSize: { xs: "1.1rem", sm: "1.5rem" },
          }}
        >
          Here are the
          <span style={{ color: "rgba(0,199,255,255)" }}> Tech Stack</span> I've
          learned
        </Typography> */}
        <Box sx={{ justifyContent: "center", my: 2 }}>
          <Box sx={{ maxWidth: "1200px" }}>
            <Stack
              direction="row"
              sx={{
                overflow: "auto",
                cursor: "pointer",
                p: 1,
                flexWrap: { md: "wrap" },
                justifyContent: { md: "center" },
                gap: 2,
                mx: 1,
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Skill;

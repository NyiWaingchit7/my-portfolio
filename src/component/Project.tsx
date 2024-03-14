import { Box, Typography } from "@mui/material";
import { projects } from "../file/project";
import ProjectCard from "./ProjectCard";
interface prop {
  selected: string;
  setSelected: (d: string) => void;
}
const Project = ({ selected, setSelected }: prop) => {
  return (
    <Box id="project" onMouseOver={() => setSelected("Projects")}>
      <Typography
        sx={{
          textAlign: "center",
          color: "white",
        }}
        variant="h4"
        id="text"
      >
        Projects
      </Typography>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", color: "white", mt: 5 }}
      >
        Let's take a look at what I have {""}
        <span style={{ color: "rgba(0,199,255,255)" }}>built</span> so far
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 5,
        }}
      >
        {projects.map((p) => {
          return (
            <ProjectCard
              key={p.id}
              title={p.title}
              tags={p.tags}
              description={p.description}
              image={p.image}
              source={p.source}
              liveVersion={p.liveVersion}
              id={p.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Project;

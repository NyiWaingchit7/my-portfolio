import { Box, Typography } from "@mui/material";
import { projects } from "../file/project";
import ProjectCard from "./ProjectCard";
interface prop {
  selected?: string;
  setSelected?: (d: string) => void;
}
const Project = ({ selected, setSelected }: prop) => {
  return (
    <Box
      id="project"
      // onMouseOver={() => setSelected("Projects")}
      sx={{
        maxWidth: "95vw",
        mx: "auto",
        minHeight: "fit-content",
      }}
    >
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

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
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

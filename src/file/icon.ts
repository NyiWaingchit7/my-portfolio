export interface IconType {
  id: number;
  name: string;
  icon: string;
  bg?: string;
}
export const icons: IconType[] = [
  {
    id: 2,
    name: "JavaScript",
    icon: "js",
  },
  {
    id: 5,
    name: "TypeScript",
    icon: "typescript",
  },
  {
    id: 4,
    name: "NodeJS",
    icon: "nodejs",
  },
  {
    id: 7,
    name: "PHP",
    icon: "php",
  },
  {
    id: 1,
    name: "NextJs",
    icon: "nextjs2",
    bg: "white",
  },

  {
    id: 6,
    name: "ReactJs",
    icon: "reactjs",
  },
  { id: 10, name: "Laravel", icon: "laravel" },
  {
    id: 8,
    name: "Tailwind",
    icon: "tailwindcss",
  },
  {
    id: 9,
    name: "Material UI",
    icon: "materialui",
  },
];

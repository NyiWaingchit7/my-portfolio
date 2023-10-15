import vue from "../pic/Vue.js_Logo_2.svg (1).png";
import laravel from "../pic/laravel.jpg";
import nextJs from "../pic/nextjs-logo-square.webp";
import node from "../pic/2560px-Node.js_logo.svg.png";
import php from "../pic/PHP-logo.svg.png";
export interface IconType {
  id: number;
  name: string;
  src: string;
}
export const icons: IconType[] = [
  {
    id: 0,
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 1,
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 3,
    name: "Vue",
    src: vue,
  },
  {
    id: 4,
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 6,
    name: "NodeJS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 7,
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 8,
    name: "Laravel",
    src: laravel,
  },
  {
    id: 9,
    name: "NextJs",
    src: nextJs,
  },
  {
    id: 10,
    name: "NodeJs",
    src: node,
  },
  {
    id: 11,
    name: "PHP",
    src: php,
  },
];

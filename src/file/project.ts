import Image from "../pic/website-template-preview-162728.jpg";
import News from "../pic/images.jpg";
import restApi from "../pic/retina_1708x683_cover-5-new-things-rest-specification-b6d2c20296631ee2e258adff7f9766ea.png";
import proverbs from "../pic/proverbs.png";
export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  liveVersion: string;
  id: number;
}

export const projects: ProjectType[] = [
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website, built with Laravel,MySql database & JQuery.",
    image: Image,
    tags: ["java script", "laravel", "bootsrap", "mySql"],
    source: "https://github.com/NyiWaingchit7/pos-project-with-laravel",
    liveVersion: "",
    id: 1,
  },
  {
    title: "News Media Project",
    description:
      "This web application is media web like BBCs news and built with Laravel,VueJs & MySql database",
    image: News,
    tags: ["Vuejs", "laravel", "bootsrap", "mySql"],
    source: "",
    liveVersion: "",
    id: 0,
  },
  {
    title: "REST BOOK API Project",
    description:
      "A fun challenge from Frontend Mentor using the REST BOOK API.",
    image: restApi,
    tags: ["ExpressJs", "Prisma", "PostgreSql"],
    source: "https://github.com/NyiWaingchit7/mini-rest-api-express.js",
    liveVersion: "",
    id: 2,
  },
  {
    title: "Myanmar Proverbs",
    description: "Collections of maynmar proverbs and explanation.",
    image: proverbs,
    tags: ["ReactJs", "Material UI(MUI)"],
    source: "https://github.com/NyiWaingchit7/myanmar-proverb-react.js",
    liveVersion: "",
    id: 3,
  },
];

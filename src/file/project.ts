import Image from "../pic/website-template-preview-162728.jpg";
import News from "../pic/images.jpg";
import restApi from "../pic/retina_1708x683_cover-5-new-things-rest-specification-b6d2c20296631ee2e258adff7f9766ea.png";
import proverbs from "../pic/proverbs.png";
import toDoList from "../pic/to-do-list-apps.png";
import miniCommerce from "../pic/miniCommerce.jpg";

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
    title: "Myanmar Proverbs",
    description: "Collections of maynmar proverbs and explanation.",
    image: proverbs,
    tags: ["ReactJs", "Material UI(MUI)"],
    source: "https://github.com/NyiWaingchit7/myanmar-proverb-react.js",
    liveVersion: "https://proverbs-gamma.vercel.app/",
    id: 1,
  },
  {
    title: "To-Do-List",
    description:
      "Simple to-do-list web app and easy to use.Connecting with vercel database server and using api call",
    image: toDoList,
    tags: ["NextJs", "Tailwind CSS", "PostgreSql"],
    source: "https://github.com/NyiWaingchit7/to-do-list-with-nextJs",
    liveVersion: "https://to-do-list-with-next-js-pink.vercel.app/",
    id: 2,
  },
  {
    title: "Mini E-commerce",
    description:
      "Mini E-commerce web and sample of ordering products . Using fake store api data , connecting with vercel server and backend CRUD operations and it is deployed on vercel.",
    image: miniCommerce,
    tags: ["NextJs", "PostgreSql", "Redux toolkit", "MaterialUi(MUI)"],
    source: "https://github.com/NyiWaingchit7/mini-commerce-next.js",
    liveVersion: "https://mini-commerce-next-js.vercel.app/",
    id: 3,
  },
  {
    title: "REST BOOK API Project",
    description:
      "A fun challenge from Frontend Mentor using the REST BOOK API.",
    image: restApi,
    tags: ["ExpressJs", "Prisma", "PostgreSql"],
    source: "https://github.com/NyiWaingchit7/mini-rest-api-express.js",
    liveVersion: "",
    id: 4,
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website, built with Laravel,MySql database & JQuery.",
    image: Image,
    tags: ["java script", "laravel", "bootsrap", "mySql"],
    source: "https://github.com/NyiWaingchit7/pos-project-with-laravel",
    liveVersion: "",
    id: 5,
  },
  {
    title: "News Media Project",
    description:
      "This web application is media web like BBCs news and built with Laravel,VueJs & MySql database",
    image: News,
    tags: ["Vuejs", "laravel", "bootsrap", "mySql"],
    source: "",
    liveVersion: "",
    id: 6,
  },
];

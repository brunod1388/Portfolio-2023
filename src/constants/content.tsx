import {
  ChatImage,
  ClimbingIcon,
  DecoIcon,
  DevIcon,
  DivingIcon,
  EventsIcon,
  MountainIcon,
  QualityIcon,
  RtImage,
  TransImage,
  WireframeImage,
  WorkIcon,
} from "@assets/index"
import About from "@components/About"
import Experiences from "@components/Experiences"
import Projects from "@components/Projects"
import Skills from "@components/Skills"

export const navlinks = [
  {
    id: "experiences",
    title: "Experiences",
    element: <Experiences />,
  },
  {
    id: "projects",
    title: "Projects",
    element: <Projects />,
  },
  {
    id: "skills",
    title: "Skills",
    element: <Skills />,
  },
  {
    id: "about",
    title: "About",
    element: <About />,
  },
]

type ExperienceType = {
  date: string
  title: string
  entreprise: string
  location: string
  description: string
  iconPath: string
}

export const experiences: ExperienceType[] = [
  {
    date: "May 2023 - present",
    title: "Full Stack Developer",
    entreprise: "Pelops SA",
    location: "Lausanne, Switzerland",
    description: "Mobile App Development on React Native and Strapi as backend",
    iconPath: DevIcon,
  },
  {
    date: "2014 - present",
    title: "Event Technician",
    entreprise: "Miss Camping",
    location: "Lausanne, Switzerland",
    description:
      "Event technician for Miss Camping Switzerland. Event set-up and dismantling, sound and light technician, etc. Barmaid and waiter.",
    iconPath: EventsIcon,
  },
  {
    date: "2013 - 2022",
    title: "Workforce and computer technician",
    entreprise: "Clement Facility Service",
    location: "Lausanne, Switzerland",
    description:
      "Different kind of jobs such as moving, building, rope access, cleaning, computer technician, etc.",
    iconPath: WorkIcon,
  },
  {
    date: "2019",
    title: "Office Worker and Quality manager",
    entreprise: "Air Turquoise",
    location: "Villeneuve, Switzerland",
    description:
      "In charge of the quality management system, paragliding harness certification, some tests, etc.",
    iconPath: QualityIcon,
  },
  {
    date: "2017-2018",
    title: "Scuba Diving Instructor",
    entreprise: "Gili Air Divers",
    location: "Gili Tralawangan, Indonesia",
    description:
      "Scuba diving instructor for PADI and SSI. I was in charge of the shop, the boat, the equipment, the students, etc.",
    iconPath: DivingIcon,
  },
  {
    date: "2015-2017",
    title: "Polydesigner 3D",
    entreprise: "Rino Factory",
    location: "Vevey, Switzerland",
    description:
      "Workshop chief, wood and metal working, lighting, stickers, events set-up and dismantling etc.",
    iconPath: DecoIcon,
  },
  {
    date: "2014-2015",
    title: "Rope Access Technician",
    entreprise: "Vertical Access and Vertige Concept",
    location: "Semsales and Yverdon-les-Bains, Switzerland",
    description: "Rope access technician for different kind of jobs.",
    iconPath: ClimbingIcon,
  },
  {
    date: "2013",
    title: "Hut keeper",
    entreprise: "Cabane de Sorniot",
    location: "Fully, Switzerland",
    description:
      "Hut keeper for the summer season. I was in charge of the hut, the food, the clients, etc.",
    iconPath: MountainIcon,
  },
]

type ProjectType = {
  title: string
  description: string
  imagePath: string
  link: string
}

export const projects: ProjectType[] = [
  {
    title: "Transcendance",
    description:
      "Project done in group for 42 School. Chat with a pong mini-game integrated. Full Stack Web Development with React, NodeJS, NestJs, Socket.io, Postgres and Docker.\nI was in charge of the frontend and the backend of the chat and implemented it all. My partners handled the authentification and the pong game.",
    imagePath: TransImage,
    link: "https://github.com/brunod1388/Transcendance",
  },
  {
    title: "Raytracer",
    description:
      "Raytracer in C from scratches.\n Implementation of the Phong model, shadows, reflections, refractions, UV map, normal map, multithreading, antialiasing etc...\nDone with a miniLibX which is a minimalistic graphic library.\nI implemented all the logic part of the raytracer while my partner handled the parsing.",
    imagePath: RtImage,
    link: "https://github.com/ricardoreves/42-minirt",
  },
  {
    title: "Wireframe",
    description:
      "Small program in C to draw wireframe from a file. Done with a miniLibX which is a minimalistic graphic library",
    imagePath: WireframeImage,
    link: "https://github.com/brunod1388/42-FDF",
  },
  {
    title: "Chat of Pelops",
    description: "Currently implementing a chat in a sport meeting app.",
    imagePath: ChatImage,
    link: "",
  },
]

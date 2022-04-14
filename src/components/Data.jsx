import { FaHome, FaUserAlt, FaRegClipboard, FaFile } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
export const navItems = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome color="white" size={20} className="cursor-pointer" />,
  },
  {
    id: 2,
    name: "About",
    icon: <FaUserAlt color="white" size={20} className="cursor-pointer" />,
  },
  {
    id: 3,
    name: "Resume",
    icon: <FaRegClipboard color="white" size={20} className="cursor-pointer" />,
  },
  {
    id: 4,
    name: "Portfolio",
    icon: <FaFile color="white" size={20} className="cursor-pointer" />,
  },
  // {
  //   id: 5,
  //   name: "Contact",
  //   icon: ,
  // },
];

export const personalInformation = {
  birthday: "28 August 1990",
  website: "www.kushtrimhysenicom",
  phone: "+386 (49) 605 405",
  city: "Prishtine",
  age: 30,
  degree: "Master",
  email: "kushtriimhyseni@gmail.com",
  freelance: "Available",
};

export const about = [
  {
    aboutme: `I am a talented,ambitious and hardworking individual,with broad skills
    and experience. Furthermore, I am able to handle multiple tasks on a
    daily basis. I have experience working as part of a team and
    individually. I work with the team to provide imaginative solutions for
    our customers, always coming up with innovative ideas. In the role, I
    identified a need for a new system and, with management backing, it has
    since been implemented. A key strength is communication; building strong
    relationships with people in order to deliver the best results.`,
    jobtitle: "Web Developer",
    shortdesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export const skills = [
  {
    id: 1,
    lang: "HTML",
    skill: 100,
    progress: <ProgressBar bgcolor="#149DDD" progress="100" height={10} />,
  },
  {
    id: 2,
    lang: "CSS",
    skill: 80,
    progress: <ProgressBar bgcolor="#149DDD" progress="80" height={10} />,
  },
  {
    id: 3,
    lang: "Javascript",
    skill: 70,
    progress: <ProgressBar bgcolor="#149DDD" progress="70" height={10} />,
  },
];

export const skillsright = [
  {
    id: 1,
    lang: "PHP",
    skill: 50,
    progress: <ProgressBar bgcolor="#149DDD" progress="50" height={10} />,
  },
  {
    id: 2,
    lang: "WORDPRES/CMS",
    skill: 80,
    progress: <ProgressBar bgcolor="#149DDD" progress="80" height={10} />,
  },
  {
    id: 3,
    lang: "Photoshop",
    skill: 20,
    progress: <ProgressBar bgcolor="#149DDD" progress="20" height={10} />,
  },
];

export const resume = {
  intro:
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
};

export const projects = [
  { id: 1, src: "/public/assets/images/prowoman.png" },
  { id: 2, src: "/public/assets/images/regalrentals.png" },
];

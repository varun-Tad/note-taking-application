import { AiFillHome } from "react-icons/ai";
import { MdOutlineLabel } from "react-icons/md";
import { BsArchive, BsFillTrashFill } from "react-icons/bs";

export let sideBarData = [
  {
    id: 1,
    title: "Home",
    icon: <AiFillHome />,
    link: "/Home",
  },
  {
    id: 2,
    title: "Labelled",
    icon: <MdOutlineLabel />,
    link: "/Label",
  },
  {
    id: 3,
    title: "Archive",
    icon: <BsArchive />,
    link: "/Archive",
  },
  {
    id: 4,
    title: "Trash",
    icon: <BsFillTrashFill />,
    link: "/Trash",
  },
];

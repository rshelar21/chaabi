import { BsGridFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";
import { FaTicketAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export const sidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    active: true,
    icons: <BsGridFill className="sidebar__icon" />,
  },
  {
    id: 2,
    title: "Trainings",
    active: false,
    icons: <IoGameController className="sidebar__icon" />,
  },
  {
    id: 3,
    title: "Users",
    active: false,
    icons: <FaTicketAlt className="sidebar__icon" />,
  },
  {
    id: 4,
    title: "Analytics",
    active: false,
    icons: <FaLocationDot className="sidebar__icon" />,
  },
  {
    id: 5,
    title: "My Account",
    active: false,
    icons: <FaLocationDot className="sidebar__icon" />,
  },
  {
    id: 6,
    title: "Support",
    active: false,
    icons: <FaLocationDot className="sidebar__icon" />,
  },
];
export const barChartTraining = {
  title: "daily training completions",
  days: "last 7 days",
  series: [35, 55, 45, 55, 45, 75, 45, 35, 50, 45],
  xaxis: ["S", "M", "T", "W", "T", "F", "S", "M", "T", "W"],
  stacked: true,
};
export const barChartWorkersTrain = {
  title: "last 14 days active workers in training",
  days: "last 14 days",
  series: [100, 120, 120, 220, 300, 200, 250, 100, 320, 350, 380, 400],
  xaxis: [
    "3 Jun",
    "4 Jun",
    "5 Jun",
    "6 Jun",
    "7 Jun",
    "8 Jun",
    "9 Jun",
    "10 Jun",
    "11 Jun",
    "12 Jun",
    "13 Jun",
    "14 Jun",
  ],
  stacked: false,
};
export const areaCharts = [
  {
    id: 1,
    profit: true,
    title: "In Training Workers",
    total: "3,354",
    growth: "234",
  },
  {
    id: 2,
    profit: false,
    title: "video watch-time (hrs)",
    total: "2,433",
    growth: "435",
  },
  {
    id: 3,
    profit: true,
    title: "% workers passing quiz",
    total: "95%",
    growth: "24%",
  },
  {
    id: 4,
    profit: true,
    title: "avg. days taken",
    total: "6",
    growth: "3",
  },
];
export const data = [
  {
    id: 1,
    title: "course a",
    desc: "23 workers took this course this week",
  },
  {
    id: 2,
    title: "course b",
    desc: "253 workers took this course this week",
  },
  {
    id: 3,
    title: "course c",
    desc: "253 workers took this course this week",
  },
  {
    id: 4,
    title: "course d",
    desc: "253 workers took this course this week",
  },
];
export const dotsData = [
  {
    id: 1,
    title: "finished training",
    color: "--primary",
  },
  {
    id: 2,
    title: "chapter b",
    color: "--purple",
  },
  {
    id: 3,
    title: "haven’t started yet",
    color: "--red",
  },
  {
    id: 4,
    title: "chapter A",
    color: "--grey_rgb",
  },
  {
    id: 5,
    title: "chapter c",
    color: "--green_dark",
  },
];

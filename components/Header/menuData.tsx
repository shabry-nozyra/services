import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
      {
    id: 2.4,
    title: "Marketplace",
    newTab: false,
    path: "/marketplace",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 3,
    title: "About",
    newTab: false,
    submenu: [
      // {
      //   id: 31,
      //   title: "Blog Grid",
      //   newTab: false,
      //   path: "/blog",
      // },
      // {
      //   id: 34,
      //   title: "Sign In",
      //   newTab: false,
      //   path: "/auth/signin",
      // },
      // {
      //   id: 35,
      //   title: "Sign Up",
      //   newTab: false,
      //   path: "/auth/signup",
      // },
      {
        id: 31,
        title: "Company & Culture",
        newTab: false,
        path: "/docs",
      },
      {
        id: 32,
        title: "Trust & Security",
        newTab: false,
        path: "/support",
      },
       {
        id: 33,
        title: "Contact Us",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support",
  },
];

export default menuData;

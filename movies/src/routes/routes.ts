import Home from "../components/pages/Home";
import Test from "../components/pages/Anilist";
import WantToWatch from "../components/pages/WantToWatch";
import Watched from "../components/pages/Watched";
import { wantToWatch, watched } from "../consts/consts";
import { Routes } from "../types/types";

export const routes: Routes[] = [
    {
        path: "/",
        exact: true,
        component: Home,
        index: 1,
    },
    {
        path: "/home",
        exact: true,
        component: Home,
        index: 2,
    },
    {
        path: `/${watched}`,
        exact: true,
        component: Watched,
        index: 3,
    },
    {
        path: `/${wantToWatch}`,
        exact: true,
        component: WantToWatch,
        index: 4,
    },
  ];
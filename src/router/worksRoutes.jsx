import WorksPage from "../components/pages/WorksPage";
import DetailPage from "../components/pages/DetailPage";
import Page404 from "../components/pages/Page404";

const worksRoutes = [
  {
    path: "/",
    exact: true,
    children: <WorksPage />,
  },
  {
    path: "/:slug",
    exact: false,
    children: <DetailPage />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];

export default worksRoutes;

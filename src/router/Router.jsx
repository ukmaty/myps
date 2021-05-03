import { memo } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import ContactPage from "../components/pages/ContactPage";
import Page404 from "../components/pages/Page404";
import worksRoutes from "../router/worksRoutes";

const Router = memo(() => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
      <Route
        path="/works"
        render={({ match: { url } }) => (
          <Switch>
            {worksRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});

export default Router;

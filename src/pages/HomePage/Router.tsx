import ModuleSelector from "pages/ModuleSelector";
import { FC, ReactElement } from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"
import HomePage from ".";

const Router: FC = (): ReactElement => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:index`} component={ModuleSelector} />
      <Route path={`${path}/`} component={HomePage} />
    </Switch>
  )
}

export default Router

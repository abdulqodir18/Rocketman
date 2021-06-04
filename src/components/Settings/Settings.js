import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'

function Settings() {
   let { path, url } = useRouteMatch();

   return(
      <div className="settings">
         <div>
            <NavLink to={url}>User</NavLink>
            <NavLink to={`${url}/driver`}>Driver</NavLink>
         </div>

         <Switch>
          <Route exact path={path}>
            <>User</>
          </Route>
          <Route path={`${path}/driver`}>
            <>Driver</>
          </Route>
        </Switch>
      </div>
   )
}

export default Settings

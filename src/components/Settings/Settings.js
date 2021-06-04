import './Settings.scss'
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import BotInfo from '../BotInfo/BotInfo'

function Settings() {
   let { path, url } = useRouteMatch();

   return(
      <div className="settings">
         <div className="nested-links">
            <NavLink className="nested-link" activeClassName="nested-link-active" exact to={url}>Users</NavLink>
            <NavLink className="nested-link" activeClassName="nested-link-active" to={`${url}/drivers`}>Drivers</NavLink>
            <NavLink className="nested-link" activeClassName="nested-link-active" to={`${url}/infos`}>Infos</NavLink>
         </div>

         <Switch>
          <Route exact path={path}>
            <>User</>
          </Route>
          <Route path={`${path}/drivers`}>
            <>Drivers</>
          </Route>
          <Route path={`${path}/Infos`}>
            <BotInfo />
          </Route>
        </Switch>
      </div>
   )
}

export default Settings

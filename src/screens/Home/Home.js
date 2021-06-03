import './Home.scss'
import { Switch } from 'react-router'
import Private from '../../routes/Private'
import Header from '../../components/Header/Header'
import Orders from '../../components/Orders/Orders'
import Clients from '../../components/Clients/Clients'
import Products from '../Products/Products'
import Settings from '../../components/Settings/Settings'

import ClientsInfo from '../../components/ClientsInfo/ClientsInfo'

function Home() {
   return (
      <div className="home">
         <Header />
         <div className="component-wrp">
            <Switch>
               <Private path="/" exact component={Orders} />
               <Private path="/clients" component={Clients} />
               <Private path="/products" component={Products} />
               <Private path="/settings" component={Settings} />
               <Private path="/info" component={ClientsInfo} />
            </Switch>
         </div>
      </div>
   )
}

export default Home

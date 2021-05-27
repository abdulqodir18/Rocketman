import './Home.scss'
import { Switch } from 'react-router'
import Private from '../../routes/Private'
import Public from '../../routes/Public'
import Header from '../../components/Header/Header'
import Orders from '../../components/Orders/Orders'
import Clients from '../../components/Clients/Clients'
import Products from '../../components/Products/Products'
import Settings from '../../components/Settings/Settings'
import Login from '../../components/Login/Login'

function Home() {
   return (
      <div className="home">
         <Header />
         <div>
            <Switch>
               <Private path="/" exact component={Orders} />
               <Private path="/clients" component={Clients} />
               <Private path="/products" component={Products} />
               <Private path="/settings" component={Settings} />
               <Public path="/login" component={Login} />
            </Switch>
         </div>
      </div>
   )
}

export default Home

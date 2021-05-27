import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../Lib/Svgs/Logo'
import OrdersIcon from '../Lib/Svgs/OrdersIcon'
import ClientsIcon from '../Lib/Svgs/ClientsIcon'
import ProductsIcon from '../Lib/Svgs/ProductsIcon'
import SettingsIcon from '../Lib/Svgs/SetingsIcon'

function Sidebar() {
   return (
      <div className="sidebar">
         <nav className="navbar">
            <div className="logo">
               <Link className="logo__link" to="/">
                  <Logo />
               </Link>
            </div>

            <ul className="navbar__list">
               <li className="navbar__item">
                  <NavLink className="navbar__link" activeClassName="navbar__link-active" to="/" exact>
                     <OrdersIcon />
                     <span>Buyurtmalar</span>
                  </NavLink>
               </li>
               <li className="navbar__item">
                  <NavLink className="navbar__link" activeClassName="navbar__link-active" to="/clients">
                     <ClientsIcon />
                     <span>Mijozlar</span>
                  </NavLink>
               </li>
               <li className="navbar__item">
                  <NavLink className="navbar__link" activeClassName="navbar__link-active" to="/products">
                     <ProductsIcon />
                     <span>Mahsulotlar</span>
                  </NavLink>
               </li>
            </ul>

            <NavLink className="navbar__link settings-link" activeClassName="navbar__link-active" to="/settings">
               <SettingsIcon />
               <span>Sozlamalar</span>
            </NavLink>
         </nav>
      </div>
   )
}

export default Sidebar

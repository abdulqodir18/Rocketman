import './Header.scss'
import { useRef } from 'react'
import useAuth from '../../hooks/useAuth'
import SearchIcon from '../Lib/Svgs/SearchIcon'
import UserIcon from '../Lib/Svgs/UserIcon'
import VectorIcon from '../Lib/Svgs/VectorIcon'
import LogOutIcon from '../Lib/Svgs/LogOutIcon'

function Header() {

   const logOut = useRef()
   const openHendler = () => {
      logOut.current.classList.toggle('display-flex')
   }

   const [auth, setAuth] = useAuth()
    function handleLogOut() {
        setAuth(false)
    }

   return (
      <header className="site-header header">
         <div className="input-wrapper">
            <input className="header__input" type="text" placeholder="Mijozni qidiring"></input>
            <button className="header__input-btn">
               <SearchIcon />
            </button>
         </div>
         <div className="profile" onClick={openHendler}>
            <span className="profile__img">
               <UserIcon />
            </span>
            <span className="profile__name">{auth && auth.admin.admin_login}</span>
            <VectorIcon />

            <button ref={logOut} className="logout" onClick={handleLogOut}>
               <LogOutIcon />
               <span>Log Out</span>
            </button>
         </div>
      </header>
   )
}

export default Header

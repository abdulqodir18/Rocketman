import './Login.scss'
import LoginLogo from '../Lib/Svgs/LoginLogo'
import UserItem from '../Lib/Svgs/UserItem'
import useAuth from '../../hooks/useAuth'
import Password from '../Lib/Svgs/Password'
import { useRef } from 'react'

function Login() {
   const [setAuth] = useAuth(true)

   const login = () => setAuth({token: 'token'})

   const userName = useRef()
   const password = useRef()
   return(
      <div className="login">
         <div className="login__svg">
            <LoginLogo />
         </div>

         <div className="login__inner">
            <h1 className="login__title">Kirish</h1>
            <form className="login__form" action="" method="post">
               <label className="login__label">
                  <UserItem/>
                  <input ref={userName} className="login__input" type="text" required placeholder="Login" />
               </label>
               <label className="login__label">
                  <Password/>
                  <input ref={password} className="login__input" type="password" required placeholder="Parol" />
               </label>

               <button className="login__btn" type="submit" onClick={()=> { if(userName.current.value && password.current.value) login()}}>
                  Kirish
               </button>
            </form>
         </div>
      </div>
   )
}

export default Login

import './Login.scss'
import useAuth from '../../hooks/useAuth'

function Login() {
   const [setAuth] = useAuth(true)

   const login = () => setAuth({token: 'token'})
   return(
      <div className="login">
         <button onClick={login}>Kirish</button>
      </div>
   )
}

export default Login

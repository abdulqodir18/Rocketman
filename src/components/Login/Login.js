import { useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import "./Login.scss";
import LoginLogo from "../Lib/Svgs/LoginLogo";
import UserItem from "../Lib/Svgs/UserItem";
import useAuth from "../../hooks/useAuth";
import Password from "../Lib/Svgs/Password";

const loginMut = gql`
  mutation LoginAdmin($fullname: String!, $password: String!) {
    loginAdmin(fullName: $fullname, password: $password) {
      admin {
        admin_id
        admin_login
      }
      token
    }
  }
`;

function Login() {

  const [loginAdmin] = useMutation(loginMut);
  const [setAuth] = useAuth(true);

  const userName = useRef()
  const password = useRef()

  function handleLogin(evt) {
    evt.preventDefault();

    loginAdmin({ variables: { fullname: userName.current.value, password: password.current.value } }).then(
      ({ data }) => {
        setAuth(data.loginAdmin);
      }
    ).catch(err => console.error(err, 'error'));
  }


  return (
    <div className="login">
      <div className="login__svg">
        <LoginLogo />
      </div>

      <div className="login__inner">
        <h1 className="login__title">Kirish</h1>
        <form
          className="login__form"
          method="post"
          onSubmit={handleLogin}
          autoComplete="off"
        >
          <label className="login__label">
            <UserItem />
            <input
              ref={userName}
              className="login__input"
              type="text"
              required
              placeholder="Login"
            />
          </label>
          <label className="login__label">
            <Password />
            <input
              ref={password}
              className="login__input"
              type="password"
              required
              placeholder="Parol"
              autoComplete="off"
            />
          </label>

          <button className="login__btn" onClick={handleLogin}>
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

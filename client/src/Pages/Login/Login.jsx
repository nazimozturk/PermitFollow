import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hooks/authContext";
import "./Login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    identifier: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login2">
      <div className="card2">
        <div className="left">
          <h1>Merhaba Dünya.</h1>
          <p>
            Bu sistem ile izinleriniz hakkında herşeyi çok basit bir şekilde
            takip ediyor olacaksınız. Bana dua etmeyi unutmayalım.
          </p>
          <span>Hesabınız yok mu?</span>
          <Link to="">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="identifier"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

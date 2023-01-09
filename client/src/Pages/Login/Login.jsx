import React from 'react';
import { useState } from 'react';
import FormInput from '../../Components/FormInput/FormInput';
import './Login.scss';

const Login = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'E-mail',
      errorMessage: '',
      label: 'E-mail',
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: 'Kullanıcı Adı veya Şifre Hatalı',
      label: 'Password',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    Login(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="login">
        <form className="loginForm" onSubmit={handleSubmit}>
          <div>
            <img
              className="logo"
              src="https://static.wixstatic.com/media/2f2da9_35392dad114442de8b66c2962d666ca8~mv2.png"
              alt=""
            />
          </div>
          <h1 className="loginH1">Giriş Yap</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={formData[input.name]}
              onChange={onChange}
            />
          ))}
          <button type="submit" className="loginButton">
            Giriş Yap
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

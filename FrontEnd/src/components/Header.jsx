import '../styles/header.css';
import { useAuth } from '../providers/AuthProvider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Header = () => {
  const { isUserLoggedIn } = useAuth();
  const [userInfo, setUserInfo] = useState({ username: "", contrasena: "" });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (userInfo.username && userInfo.contrasena) {
      navigate('/dashboard');
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Universidad Gringa de Estados Unidos</h1>
        <nav>
          <ul className="nav-links">
            {
              !isUserLoggedIn ? (
                <>
                  <label htmlFor="username">Usuario: </label>
                  <input
                    type="text"
                    id="username"
                    name='username'
                    className='loginInput'
                    value={userInfo.username}
                    onChange={handleChange}
                  />
                  <label htmlFor="password">Contraseña: </label>
                  <input
                    type="password"
                    id="password"
                    name='contrasena'
                    className='loginInput'
                    value={userInfo.contrasena}
                    onChange={handleChange}
                  />
                  <input
                    type="button"
                    className='btn1'
                    value="Acceder"
                    onClick={handleSubmit}
                  />
                </>
              ) : (
                <li>Hola usuario</li>
              )
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

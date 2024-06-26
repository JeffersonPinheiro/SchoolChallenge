import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https:/localhost:7287/api/Auth/login', {
                username,
                password
            });
            const { token } = response.data;
            setToken(token);
            localStorage.setItem('token', token);
            navigate('/home')
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="container">
          <div className="container-login">
            <div className="wrap-login">
            {error && <p style={{color: 'red'}}>{error}</p>}
              <form className="login-form" onSubmit={handleSubmit}>
                <span className="login-form-title">Bem Vindo!</span>
                <span className="login-form-title">
                  <img src="" alt=""></img>
                </span>
  
                <div className="wrap-input">
                  <input 
                    className={username !== "" ? 'has-val input' : 'input' }
                    type="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Username"></span>
                </div>
  
                <div className="wrap-input">
                  <input 
                    className={password !== "" ? 'has-val input' : 'input' }
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Password"></span>
                </div>
  
                <div className="container-login-form-btn">
                  <button type="submit" className="login-form-btn">Login</button>
                </div>
  
              </form>
            </div>
          </div>
        </div>
      );
    }
  
  export default Login;
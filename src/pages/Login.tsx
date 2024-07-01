import { useState } from "react";
import "../components/Style/Login.css"
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if(username === 'admin' && password === 'admin') {
            setUser({ role: 'admin'});
            navigate('/')
        } else if (username === 'user' && password === 'user') {
            setUser({ role: 'user'});
            navigate('/')
        } else {
            alert('Invalid Username or Password')
        }
    }

    return (
      <div className='login'>
            <div className='loginBox'>
                <div className='loginHeader'>
                    Login
                </div>
                <div className="inputs">
                    <input 
                        className="username" 
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        className="password" 
                        placeholder="Enter your password" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" className="button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
  };
  
  export default Login;
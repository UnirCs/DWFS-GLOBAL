import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useLogin();
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Determinar la ruta de redirección. Si viene de una ruta protegida, se usa "from"
    const from = location.state?.from || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loggedUser = await login(username, password);
            setUser(loggedUser);
            navigate(from, { replace: true });
        } catch (err) {
            // El error ya se gestiona en el hook (y se muestra en la vista)
            console.error("Error de login:", err);
        }
    };

    return (
        <div className="login">
            <h2 className="login__title">Iniciar Sesión</h2>
            <div className="login__film-container login__film-container--top">
                <div className="login__film"></div>
                <div className="login__film"></div>
            </div>
            <form onSubmit={handleSubmit} className="login__form">
                <div className="login__form-group">
                    <label htmlFor="username" className="login__label">Nombre de usuario</label>
                    <input
                        type="text"
                        id="username"
                        className="login__input"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        disabled={loading}
                        required
                    />
                </div>
                <div className="login__form-group">
                    <label htmlFor="password" className="login__label">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        className="login__input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        disabled={loading}
                        required
                    />
                </div>
                {error && <p className="login__error">{error}</p>}
                <button type="submit" className="login__button" disabled={loading}>
                    {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                </button>
            </form>
        </div>
    );
};

export default Login;

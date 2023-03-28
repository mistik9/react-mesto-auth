
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "./Header";

function Register(isOpen) {
    const [email, setEmail] = React.useState({});
    const [password, setPassword] = React.useState({});
    const navigate = useNavigate

    function handleSubmit(e) {
        e.preventDefault();
        
    };
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    return (
        <>
        <Header />
            <h2 className="login__title">Регистрация</h2>
                   <form className="login__content"  >
                <input type="text" id="email" placeholder="Email" className="login__input login__input_type_email" required
                    minLength="2" maxLength="40" value={email || ''} onChange={handleChangeEmail} />
                <span id="name-error" className="error"></span>
                <input type="password " id="password " placeholder="Пароль" className="login__input login__input_type_password" required
                    minLength="2" maxLength="200" value={password || ''} onChange={handleChangePassword} />
                <span id="about-error" className="error"></span>
                <button className="login__save" type="submit">Зарегистрироваться</button>
            </form>
            <p>Уже зарегистрированы? </p>
            <Link to="/register" className="">Войти</Link>
       </>

    )
}
export default Register;

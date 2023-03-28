
import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";


function Login({ isOpen, }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


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
        <div>
            <Header>
                <Link to="/sign-up" className="header__menu-item">
                    Регистрация
                </Link>
            </Header>
            <div className="login">
                <h2 className="login__title">Вход</h2>
                <form className="login__content" >
                    <input type="text" id="email" placeholder="Email" className="login__input login__input_type_email" required
                        minLength="2" maxLength="40" value={email || ''} onChange={handleChangeEmail} />
                    <span id="name-error" className="error"></span>
                    <input type="password " id="password " placeholder="Пароль" className="login__input login__input_type_password" required
                        minLength="2" maxLength="200" value={password || ''} onChange={handleChangePassword} />
                    <span id="about-error" className="error"></span>
                </form>
                <button className="login__save" type="submit">Войти</button>
            </div>
        </div >
    )
}
export default Login;

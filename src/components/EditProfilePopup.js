import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [about, setAbout] = React.useState(currentUser.about);
    const [value, setValue] = React.useState('');


    React.useEffect(() => {
        if (!isOpen)
            setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser, isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about,
        });
    }
    function handleChangeName(e) {
        setName(e.target.value);
       
    }
    function handleChangeAbout(e) {
        setAbout(e.target.value);
    }


    return (
        <PopupWithForm
            name='user-info'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input type="text" id="name" placeholder="Имя" className="popup__input popup__inputonChange={handleChangeName}_type_name" required
                minLength="2" maxLength="40" value={currentUser.name} onChange={handleChangeName} />
            <span id="name-error" class="error"></span>
            <input type="text" id="about" placeholder="Работа" className="popup__input popup__input_type_about" required
                minLength="2" maxLength="200" value={currentUser.about} onChange={handleChangeAbout} />
            <span id="about-error" class="error"></span>
        </PopupWithForm>
    )
}
export default EditProfilePopup;
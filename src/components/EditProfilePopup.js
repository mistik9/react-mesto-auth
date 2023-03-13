import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';



function EditProfilePopup(isOpen, onClose, onUpdateUser) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [description, setDescription] = React.useState(currentUser.about);


    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about:description,
        });
        
    }
   

    return (
        <PopupWithForm
            name={'user-info'}
            title={'Редактировать профиль'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input type="text" id="name" placeholder="Имя" className="popup__input popup__input_type_name" required
                minLength="2" maxLength="40" /> {name}
            <span id="name-error" class="error"></span>
            <input type="text" id="about" placeholder="Работа" className="popup__input popup__input_type_about" required
                minLength="2" maxLength="200" /> {description}
            <span id="about-error" class="error"></span>
        </PopupWithForm>
    )
}
export default EditProfilePopup;
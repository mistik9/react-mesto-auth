// class Auth {
//     constructor(options) {
//         this._baseUrl = options.baseUrl;

//     }

// register({ username, password, email }) {
//     return fetch(`${this._baseUrl}/auth/local/register/`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password, email })
//     })
//         .then(res => {
//             if (res.ok) {
//                 return res.json();
//             }
//             return Promise.reject(`Ошибка: ${res.status}`);
//         })
//         .then((res) => {
//             return res
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }

// authorize({ identifier, password }) {
//     return fetch(`${this._baseUrl}/auth/local/`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ identifier, password })
//     })
//         .then(res => {
//             return res.json();
//         })
//         .then((data) => {
//             if (data.user) {
//                 localStorage.setItem('jwt', data.jwt)
//                 return data;
//             } else {

//             }

//         })
//         .catch((err) => {
//             console.log(err);
//         })
// }
// checkToken (token) {
//     return fetch(`${this._baseUrl}/users/me/`, {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//         }
//     })
//         .then(res => res.json())
//         .then(data => data)
// }
// }
// const auth = new Auth({
//     baseUrl: 'https://auth.nomoreparties.co',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// });
// export default auth;
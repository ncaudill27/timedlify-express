require('dotenv').config();
// import GoTrue from 'gotrue-js';
// import handleLogin from './helpers/handleLogin.js';

// const isLocal = document.location.host.split(':').shift() === 'localhost';

// export const auth = new GoTrue({
//   APIUrl: 'https://timedlify.netlify.app/.netlify/identity',
//   setCookie: !isLocal
// })

// const loginForm = document.getElementById('login');
// loginForm.addEventListener('submit', handleLogin);
// console.log('mounted');
console.log(process.env.REDIRECT_URI);
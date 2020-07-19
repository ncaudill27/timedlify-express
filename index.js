import handleLogin from './helpers/handleLogin.js';

const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', handleLogin);
console.log('mounted');
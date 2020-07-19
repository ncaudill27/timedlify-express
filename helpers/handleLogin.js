import { auth } from '../index.js';

function handleLogin(e) {
  e.preventDefault();
  auth.login(this.email.value, this.password.value, true)
  .then(
    user => window.location.href = '/',
    error => console.error("Failed to log in: %o", error)
  );
}

export default handleLogin;
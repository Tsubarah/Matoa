const loginBtn = document.querySelector('.loginBtn');
const login = document.querySelector('.login');

loginBtn.addEventListener('click', () => {
  login.classList.toggle('hidden');
});
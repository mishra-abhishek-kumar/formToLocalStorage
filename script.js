const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const userList = document.getElementById('users');
const form = document.getElementById('form');
const msg = document.querySelector('.msg');

form.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    if (inputName.value === '' || inputEmail.value === '' || inputPhone.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        console.log(1);

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${inputName.value} - ${inputEmail.value} - ${inputPhone.value}`));
        userList.appendChild(li);

        const userData = {
            userName: `${inputName.value}`,
            userEmail: `${inputEmail.value}`,
            userPhone: `${inputPhone.value}`
        }

        localStorage.setItem(inputEmail.value, JSON.stringify(userData));

        inputName.value = '';
        inputEmail.value = '';
        inputPhone.value = '';

    }
}



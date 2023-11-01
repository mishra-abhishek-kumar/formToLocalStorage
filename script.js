const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const userList = document.getElementById('users');
const form = document.getElementById('form');
const msg = document.querySelector('.msg');

form.addEventListener('submit', submitForm);
userList.addEventListener('click', removeUser);

function submitForm(e) {
    e.preventDefault();

    if (inputName.value === '' || inputEmail.value === '' || inputPhone.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        console.log(1);

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');

        const delBtn = document.createElement('button');
        delBtn.className = 'del float-right';
        delBtn.appendChild(document.createTextNode("DELETE"));

        li.appendChild(document.createTextNode(`${inputName.value} - ${inputEmail.value} - ${inputPhone.value}`));
        li.appendChild(delBtn);

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

function removeUser(e) {
    if(e.target.classList.contains('del')) {
        partsString = e.target.parentElement.innerText.split('-');
        email_add = partsString[1].trim();
        userList.removeChild(e.target.parentElement);
        localStorage.removeItem(email_add);
    }
}
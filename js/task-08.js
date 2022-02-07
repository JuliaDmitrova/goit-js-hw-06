const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onformSubmit);

function onformSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены!');
    }
    event.currentTarget.reset();
    }
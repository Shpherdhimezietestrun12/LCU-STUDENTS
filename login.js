// login.js
const loginButton = document.querySelector('.but-one');
const emailInput = document.querySelector('.int-one');
const passwordInput = document.querySelector('.int-two');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    // Fetch existing data from localStorage
    const existingData = localStorage.getItem('userData');

    if (existingData) {
        const dataArray = existingData.split('\n');
        let emailExists = false;
        let passwordExists = false;

        dataArray.forEach((data) => {
            if (data) {
                const [existingEmail, existingPassword] = data.split(' | ');
                if (existingEmail === email) {
                    emailExists = true;
                }
                if (existingPassword === password) {
                    passwordExists = true;
                }
            }
        });
        if (emailExists) {
            alert('Email already exists!');
        } else if (passwordExists) {
            alert('Password already exists!');
        } else {
            const newData = existingData + `${email} | ${password}\n`;
            const blob = new Blob([newData], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'database.txt';
            link.click();
            localStorage.setItem('userData', newData);
        }
    } else {
        const data = `${email} | ${password}\n`;
        const blob = new Blob([data], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'database.txt';
        link.click();
        localStorage.setItem('userData', data);
    }
});
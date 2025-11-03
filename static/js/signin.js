
const password = document.getElementById('password');
const username = document.getElementById('username');
const sign_in_button = document.getElementById('sign-in-button');

sign_in_button.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:8080/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password.value,
                username: username.value,
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Success:', data);

    } catch (error) {
        console.error('Error:', error);
    }
});
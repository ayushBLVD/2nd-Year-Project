const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let messages = []

    if (name.value === '' || name.value == null) {
        messages.push('Name is required');
    }

    if (password.value === '' || password.value == null) {
        messages.push('Password is required');
    } else {
        if (password.value.length <= 6) {
            messages.push('Password must be longer than 6 characters');
        }

        if (password.value.length >= 20) {
            messages.push('Password must be less than 20 characters');
        }

        if (password.value === 'password') {
            messages.push('Password cannot be "password"');
        }
    }

    if (messages.length > 0) {
        errorElement.innerText = messages.join(', ');
        return false;
    }

    return true;
  }
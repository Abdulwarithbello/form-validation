const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
 const email = document.getElementById('email')
 const userName = document.getElementById('uname')
const password = document.getElementById('psw')
 const confirmPassword = document.getElementById('psw-confirm')
const form = document.getElementById('signupForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let message = ''

    // Validate first name
    if (firstName.value.trim() === '') {
        message += 'First name is required.<br>'
    }
    
    // Validate last name
    if (lastName.value.trim() === '') {
        message += 'Last name is required.<br>'
    }
    
    // Validate email
    if (email.value.trim() === '') {
        message += 'Email is required.<br>'
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        message += 'Invalid email address.<br>'
    }
    
    // Validate username
    if (userName.value.trim() === '') {
        message += 'Username is required.<br>'
    } else if (userName.value.length < 6) {
        message += 'Username must be at least 6 characters long.<br>'
    }
    
    // Validate password
    if (password.value.trim() === '') {
        message += 'Password is required.<br>'
    } else if (password.value.length < 8) {
        message += 'Password must be at least 8 characters long.<br>'
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.value)) {
        message += 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.<br>'
    }
    
    // Validate confirm password
    if (confirmPassword.value.trim() === '') {
        message += 'Confirm password is required.<br>'
    } else if (confirmPassword.value!== password.value) {
        message += 'Passwords do not match.<br>'
    }
    
    if (message !== '') {
        errorElement.innerHTML = message
        return
    }
    
    // Form submission successful
    alert('Registration successful!')
})
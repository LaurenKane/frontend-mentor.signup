const firstName = document.getElementById('first-name');
const secondName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('myForm');
const errorElement = document.getElementsByClassName('error');
const emailRegex = /\S+@\S+\.\S+/;

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const firstNameValue = firstName.value.trim();
	const secondNameValue = secondName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(firstNameValue === '') {
		setErrorFor(firstName, 'First Name cannot be blank');
	} else {
		setSuccessFor(firstName);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Looks like this is not an email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(secondNameValue === '') {
		setErrorFor(secondName, 'Last name cannot be blank');
	} 
	else{
		setSuccessFor(secondName);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}







/* form.addEventListener('submit', (e) => {
    let messages = [];
    if (firstName.value === '' || firstName === null) {
        messages.push('First Name cannot be empty')
    }
    if (secondName === '' || secondName === null) {
        messages.push('Last Name cannot be empty')
    }
    if (emailRegex.test(email.value) === false) {
        messages.push('Looks like this is not an email')
    }
    if (password === '' || password === null) {
        messages.push('Password cannot be empty')
    }
    if (messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
})

*/
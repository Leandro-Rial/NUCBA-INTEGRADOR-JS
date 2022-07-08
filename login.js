// show a message with a type of the input
function showMessage(input, message, type) {
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#signup");
let email = form.elements["exampleInputEmail1"]
let pass = form.elements["exampleInputPassword1"]
let username = form.elements["username"]
let rmCheck = form.elements["exampleCheck1"]

const FIELD_REQUIRED = "Please complete the field.";
const EMAIL_INVALID = "Please enter a correct email address format";

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    email.value = localStorage.username;
} else {
    rmCheck.removeAttribute("checked");
    email.value = "";
}
    
function lsRememberMe() {
    if (rmCheck.checked && email.value !== "") {
        localStorage.username = email.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.username = "";
        localStorage.checkbox = "";
    }
}

form.addEventListener("submit", function (event) {
	event.preventDefault();
	
	try {
		let usernameValid = hasValue(username, FIELD_REQUIRED);
		let emailValid = validateEmail(email, FIELD_REQUIRED, EMAIL_INVALID);
		let passValid = hasValue(pass, FIELD_REQUIRED);
		
		if (passValid && emailValid && usernameValid) {
			const userData = {
				email: email.value,
				user: username.value
			}
			localStorage.setItem('login', JSON.stringify(userData))
	
			lsRememberMe()
		}
		
		window.location.href = "/home.html"
	} catch (error) {
		console.error("Error")
	}
});
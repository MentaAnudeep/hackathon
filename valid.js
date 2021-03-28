	//Validtion Code For Inputs

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

var users = [{
	id: 1,
	emailid: 'user1@gmail.com',
	password: 'abcd1234',
	type: 'user'
  }, {
	id: 2,
	emailid: 'user2@gmail.com',
	password: 'abc123',
	type: 'user'
  }, {
	id: 3,
	emailid: 'user3@gmail.com',
	password: 'dcba4321',
	type: 'user'
  }];

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

var user_list = [];


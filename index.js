//index.js  
function sendEmail() {
    console.log("sendEmail() called.");
	Email.send({
    SecureToken : "79F4D770-12CE-41DD-99A2-CD2B4FEAB9D9",
	To : 'numaanzaheerahmed@yahoo.com',
	From : "ctrlcjunkmail@yandex.com",
	Subject : "Test1",
	Body : "Test Successful",
	}).then(
		message => alert("mail sent successfully")
	);
}
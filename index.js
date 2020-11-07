//index.js  
function sendEmail() {
    console.log("sendEmail() called.");
	Email.send({
	Host: "smtp.yandex.ru",
	Username : "ctrlcjunkmail@yandex.com",
	Password : "ctrlcjunkmail@gmail.com",
	To : 'numaanzaheerahmed@yahoo.com',
	From : "ctrlcjunkmail@yandex.com",
	Subject : "Test1",
	Body : "Test Successful",
	}).then(
		message => alert("mail sent successfully")
	);
}
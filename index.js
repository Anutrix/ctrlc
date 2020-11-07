//index.js  
function sendEmail() {
    console.log("sendEmail() called.");
	Email.send({
    SecureToken : "8b37de97-f9f7-468f-8220-3218c77267b0",
    To : 'numaanzaheerahmed@yahoo.com',
    From : "ctrlcjunkmail@gmail.com",
    Subject : "Test1",
    Body : "Test worked"
    }).then(
        message => alert(message)
    );
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "parishkchauhan@gmail.com",
        Password : "foji@1234",
        To : 'jade89584@gmail.com',
        From :document.getElementById("email").value,
        Subject : "New Portfolio Website Query",
        Body : "Name : " + document.getElementById("name").value 
        + "<br> E-mail: " + document.getElementById("email").value
        + "<br> Message : " + document.getElementById("message").value
    }).then(
    message => alert("Mesage Sent Succesfully")
    );
}
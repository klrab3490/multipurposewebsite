function validate() {
    var name1 = document.getElementById("name").value;
    var phone1 = document.getElementById("phone").value;
    var email1 = document.getElementById("email").value;
    var message1 = document.getElementById("message").value;
    if (name1.length < 5) {
        text = "Please enter your full name";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone1) || phone1.length != 10) {
        text = "Please enter a valid phone number";
        error_message.innerHTML = text;
        return false;
    }
    if (email1.indexOf("@") == -1 || email1.length < 6 || email1.indexOf(".") == -1) {
        text = "Please enter a valid email";
        error_message.innerHTML = text;
        return false;
    }

    if (message1.length > 100) {
        x = message1.length - 100
        text = "you are exceeding length by" + x + "please enter less than 100 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully");
    return true;
}

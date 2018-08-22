function validateForm() {
    var fname = document.forms['my-form']['fname'].value;
    var email = document.forms['my-form']['email'].value;

    if(fname == null || fname == '') {
        alert('Error: fname cannot be null!');
        return false;
    }

    var atpos = email.indexOf('@');
    var dopos = email.lastIndexOf('.');
    if(atpos < 1 || dopos < atpos+2 || dopos+2 >= email.length) {
        alert('Error: the email is not valid!');
        return false;
    }

    return true;
}

document.getElementById('Form1').onsubmit = validateForm;
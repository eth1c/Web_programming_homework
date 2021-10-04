error_msg = "";
valid = true;

function validate() {
    var email_address = document.getElementById("email");
    var phone_number = document.getElementById("phone");
    var txt0 = document.getElementById("subject-txt").value;
    var txt1 = document.getElementById("body-txt").value;

    if (!email_validation(email)) {
        error_msg += "И-мэйл хаяг буруу байна. Зөв хаяг оруулна уу!\n\n";
        valid = false;
    }
    if (!phone_num_validation(phone_number)) {
        error_msg += "Утасны дугаар буруу байна." + 
        "\n(976)-######## эсвэл ######## форматтай тоон утга оруулна уу!\n\n";
        valid = false;
    }
    if (txt0 == "" || txt0 == null) {
        error_msg += "Subject textbox хоосон байна.!!!\n\n";
        valid = false;
    }
    if (txt1 == "" || txt1 == null) {
        error_msg += "Body textArea хоосон байна!!!\n";
        valid = false;
    }

    if (valid) {
        console.log("Email: " + email);
        console.log("Phone: " + phone_number);
        console.log("Subject: " + txt0);
        console.log("Email: " + txt1);
    } else {
        alert(error_msg);
    }
}

function email_validation(input) {
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value.match(mail_format)) {
    //alert("Valid email address!");
    return true;
    }
    return false;
}

function phone_num_validation(input) {
    var phone_num_format = /^\(([9][7][6])\)[-]\d{8}$/;
    var phone_num_format_short = /^(\d{8})$/;
    if(input.value.match(phone_num_format) || input.value.match(phone_num_format_short)) {
        //alert("Valid phone number!")
        return true;
    }
    return false;   
}



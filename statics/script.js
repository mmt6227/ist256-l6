var shoppers = [];

function validate(obj) {
    var value = obj.value.trim();
    var msg = "";

    if (value === "") {
        msg = "This field is required.";
    } else if (obj.id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        msg = "Please enter a valid email (example: joe@test.com).";
    } else if (obj.id === "confirmPassword" && obj.value !== document.getElementById("password").value) {
        msg = "Passwords do not match.";
    }

    var error = document.getElementById(obj.id + "Error");

    if (msg !== "") {
        obj.style.color = "#FF0000";
        obj.style.borderColor = "#FF0000";
        error.innerText = msg;
        return false;
    }

    obj.style.color = "";
    obj.style.borderColor = "";
    error.innerText = "";
    return true;
}

function validateForm() {
    var fields = ["username", "email", "password", "confirmPassword"];
    var valid = true;

    for (var i = 0; i < fields.length; i++) {
        if (!validate(document.getElementById(fields[i]))) {
            valid = false;
        }
    }

    if (valid) {
        var shopper = {
            "username": document.getElementById("username").value,
            "email": document.getElementById("email").value,
            "password": document.getElementById("password").value,
            "confirmPassword": document.getElementById("confirmPassword").value
        };

        shoppers.push(shopper);

        document.getElementById("jsonOutput").innerText = JSON.stringify(shoppers, null, 2);
    }

    return false;
}
